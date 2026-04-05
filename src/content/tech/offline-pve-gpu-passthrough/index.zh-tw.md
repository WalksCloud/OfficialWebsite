---
type: tech
slug: tech/offline-pve-gpu-passthrough
title: |
  無外網環境下的 PVE GPU Passthrough 排障紀錄
description: |
  在無法連網的場域，行雲資訊以本地化證據蒐集與回復腳本，逐步定位 PVE GPU Passthrough 問題並建立可重現紀錄。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 挑戰

- 現場無法連網，無法即時查詢文件或上傳 log，排障資源有限。
- 需在短時間內確認是否為驅動、`vfio` 綁定或 BIOS 設定造成的掛載失敗。

## 前置技術基準

1. **離線工具包**：先準備離線工具包（常用指令腳本、驅動版本表、對照清單）與可攜式儲存媒體；若為特殊管控場域，現場先寫入核准的受控暫存媒體，再帶回內部受控環境複製留存。
2. **版本對照表**：記錄 PVE 版本、kernel 版本、GPU 型號與對應驅動版本，避免現場憑記憶判斷。
3. **還原基準點**：在變更前先備份 `/etc/default/grub`、`/etc/modules`、`/etc/modprobe.d/*` 與 VM 設定檔。
4. **證據留存規則**：統一 log 命名、時間戳與拍照角度，確保後續可回放現場狀態。

## 實作方式

1. **收集基本資訊**：透過 `dmesg`, `journalctl`, `lspci`, `/etc/modprobe.d` 等指令先匯出到符合場域規範的暫存媒體（一般場域可用 USB；特殊管控場域使用核准受控暫存媒體），並記錄 PVE 版本與 kernel。
2. **檢查 BIOS/firmware**：逐項確認 VT-d 或 IOMMU 相關設定，以及主機板上與資源對應相關的選項（例如允許裝置使用較大的記憶體對應空間），必要時拍照備查。
3. **`vfio` / 驅動確認**：檢查 `vfio-pci` 綁定狀態、`/etc/modules`、`/etc/modprobe.d`，確保 GPU 沒被其他驅動佔用。
4. **測試回復**：若驅動或設定異常，先在本地備份原設定，再嘗試還原至已知可用版本，觀察 VM 是否可啟動。
5. **離線驗證**：逐步測試 VM 掛載 GPU、開機與驅動載入狀態，確認問題是否已排除。

## 常見問題與排除順序

1. **GPU 裝置看得到但無法掛載**：先查 IOMMU group 與 `vfio` 綁定，再查 VM 設定中的 PCI flags。
2. **VM 開機後驅動載入失敗**：確認 guest 驅動版本是否與 host 端相容，並檢查 code 43 類錯誤訊號。
3. **重開機後設定失效**：檢查 grub 參數是否寫入成功、`initramfs` 是否已重建。
4. **多 GPU 環境互相干擾**：先分離裝置群組，再逐卡驗證，避免一次變更多個變因。

## 技術檢核清單

1. 現場離線狀態下可完整蒐集必要系統證據。
2. 主機與 VM 的 GPU 對應關係可明確驗證。
3. 每次設定變更都有還原基準點可回退。
4. 排除後可重複開機並穩定掛載 GPU。
5. 離場前已確認關鍵工作負載可正常運作。

## 參考資料

- Proxmox PCI Passthrough Documentation  
  https://pve.proxmox.com/wiki/PCI_Passthrough
- NVIDIA Linux Driver Documentation  
  https://docs.nvidia.com/
