---
type: tech
slug: tech/pve-vgpu-rollout-training
title: |
  PVE vGPU 叢集導入與維運訓練計畫
description: |
  行雲資訊以分階段課程覆蓋主機設定、授權啟用、客體掛載與驗證流程，協助團隊建立可複製的 vGPU 維運能力。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 導入背景

- 本文整理 PVE + NVIDIA vGPU 導入實作，將流程拆成可重複執行的技術步驟。
- 目標情境是 PVE 8.x 上部署 NVIDIA vGPU，建立可切分 profile 的 GPU 資源池，並把 Host、授權、Guest 端流程一次定義清楚。
- 相比「能開機即可」的做法，本文更聚焦在版本對齊、步驟標準化與技術檢核，降低後續維運落差。

## 0. 驅動版本與授權資源準備

1. 先以 NVIDIA vGPU 官方文件確認目標 GPU 型號「最後支援」的 vGPU 版本。  
2. 依該版本到 NVIDIA Licensing 下載對應的 **Linux KVM Host Driver** 與 **Guest Driver**。  
  ![NVIDIA Driver Downloads 參考畫面](./vgpu-guide-driver-download.png)
3. 下載同版本對應的 **NLS/DLS License Server for Linux KVM** 映像。  
  ![NVIDIA NLS License Server Downloads 參考畫面](./vgpu-guide-nls-download.png)
4. 在執行前，將 Host/Guest/License Server 三個版本一併登錄到同一張已核准變更單，避免中途混版。

## 1. PVE Host 環境設定（IOMMU / vfio / 套件）

- 更新至穩定的 PVE 版本後，先在 `grub` 補上 IOMMU 相關參數，並啟用 `vfio` 模組。
- 安裝導入必要套件：`dkms`、`proxmox-default-headers`、`mdevctl`、`build-essential` 等。
- 完成後執行 `update-grub`、`update-initramfs`，再重開機。

```bash
# block Open Source version of NVIDIA driver
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf

# vfio module enable
echo -e "vfio\nvfio_iommu_type1\nvfio_pci\nvfio_virqfd" >> /etc/modules

# install passthrough needed packages
apt update
apt install --no-install-recommends -y \
  dkms libc6-dev proxmox-default-headers git build-essential mdevctl

update-grub
update-initramfs -u -k all
```

## 2. vGPU unlock 與 SR-IOV 服務配置

- 可使用 `vgpu_unlock-rs` 與 systemd drop-in 設定 `LD_PRELOAD`。
- 再建立 `nvidia-sriov.service`，由開機階段自動觸發 `sriov-manage -e ALL`。
- 這一步建議在測試節點先驗證，確認不影響其他 GPU 工作負載再進 production。

```bash
systemctl daemon-reload
systemctl enable --now nvidia-sriov.service
systemctl status nvidia-sriov.service
```

## 3. Host Driver 安裝與 `mdev` 驗證

- 重開機後先以 `lspci -d 10de:` 確認 GPU 裝置數量與型號。
- 安裝下載好的 Host Driver（例如 `--dkms` 模式）。
- 重新開機後以 `mdevctl types` 確認可用 profile 已出現，這是 Host 端完成的關鍵檢查點。

```bash
lspci -d 10de:
chmod +x NVIDIA-Linux-*.run
./NVIDIA-Linux-*.run --dkms
mdevctl types
```

## 4. 部署 NVIDIA DLS License Server VM

- 建立 Linux VM（可先 `Do not use any media`，再匯入 `.qcow2`）。
- 將 `nls-*.qcow2` 上傳到 PVE，例如 `/var/lib/vz/template/iso`。
- 使用 `qm importdisk` 匯入並掛載為 `virtio0`，再依需求擴容磁碟。
- 開機後透過 HTTPS 進入 DLS 頁面，匯入 instance token，並上傳從 NVIDIA 下載的授權檔案。

```bash
qm importdisk 999 /var/lib/vz/template/iso/nls-3.4.0-bios.qcow2 Data
qm disk resize 999 virtio0 20G
```

## 5. Windows Guest 建置與授權綁定

- 建立 Windows VM（`Machine: q35`、`BIOS: OVMF`、`CPU: host`），並加入 VirtIO 驅動 ISO。
- 在 Hardware 增加 PCI Device，選擇對應 NVIDIA Raw Device 與 MDev Type（例如 `GRID P4-2Q`）。
- 安裝 Windows 後先補齊 VirtIO / Guest Agent，再安裝 NVIDIA Guest Driver。
- 從 DLS 下載 Client Config Token，放到指定位置後重啟 `NVIDIA Display Container LS` 服務。

## 6. 技術檢核清單

1. **功能檢核**：`mdevctl types`、Guest 端驅動、授權狀態、GPU 工作負載（如 `nvidia-smi`）皆正常。  
2. **穩定性檢核**：連續壓測與重啟後仍能正確掛載 MDev。  
3. **還原檢核**：抽樣 VM 進行備份/還原，確認還原後授權與 MDev 維持可用。  
4. **操作一致性檢核**：由不同維運成員依 SOP 重做一次新 VM 導入流程，確認步驟可重現。  

## 實務建議

- 若是混合型 GPU 環境，建議先在單節點完成導入與壓測，再擴展到多節點。
- 版本升級採「Host Driver -> DLS -> Guest Driver」順序並做回滾計畫，避免一次升級全部元件。
- 把導入步驟、檢核結果、故障案例回填到內部知識庫，後續擴容時可直接複用。

## 參考資料

- Proxmox VE Wiki: NVIDIA vGPU on Proxmox VE  
  https://pve.proxmox.com/wiki/NVIDIA_vGPU_on_Proxmox_VE
- Proxmox VE Wiki: PCI Passthrough  
  https://pve.proxmox.com/wiki/PCI_Passthrough
- Proxmox VE `vzdump` 文件（備份與保留策略）  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
- Proxmox Backup Server 文件（Prune / Verification）  
  https://pbs.proxmox.com/docs/
- NVIDIA vGPU Client Licensing User Guide  
  https://docs.nvidia.com/vgpu/latest/grid-licensing-user-guide/
