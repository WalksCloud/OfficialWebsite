---
type: tech
slug: tech/closed-hypervisor-migration-validation
title: |
  封閉 hypervisor 遷移驗證手冊
description: |
  當原平台無法直接導出 VM 時，行雲資訊以備份取得、中繼驗證與 PVE 匯入三段流程評估可行性，並保留每階段回復路徑。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 什麼時候需要這份手冊

- 客戶擁有封閉或老舊的虛擬化平台，無法直接匯出標準映像檔，卻需要評估是否能轉換到 PVE (Proxmox VE, Proxmox Virtual Environment)。
- 原始廠商可能已停止維護或拒絕提供支援，因此需要第三方協助確認遷移可行性。
- 原平台常見限制包含：只能透過備份工具導出、映像格式私有化、控制面無法安裝 agent、授權鎖定特定硬體。

## 前置盤點與風險界定

1. **資產盤點**：先列出 VM 數量、OS 版本、磁碟大小、分割區格式、網卡型別與關鍵服務依賴（DB、LDAP、授權服務）。
2. **備份型態確認**：辨識可取得的是整機映像、檔案層備份還是快照鏈；不同型態對還原與轉換路徑影響很大。
3. **一致性要求定義**：先決定遷移後需維持哪些一致性目標，例如 MAC 維持、IP 維持、服務埠維持、開機時間窗。
4. **風險清單建立**：提前標記高風險項（舊版 kernel、私有磁碟驅動、軟體授權綁硬體、UEFI/Legacy 差異），避免正式轉換才發現阻塞。

## 轉換驗證流程（可重複執行）

1. **取得可操作備份集**：在不破壞來源環境的前提下匯出最小可重建資料集，並附 checksum（SHA256）確保搬運過程未損毀。
2. **中繼還原**：先在通用中繼環境還原並嘗試開機，確認檔案系統可掛載、主要服務可啟動、系統時間與網路堆疊正常。
3. **格式轉換**：以 `qemu-img` 或等效工具轉成 PVE 友善格式（常見為 `qcow2`/`raw`），同時記錄 block size、cache mode、sparse 行為。
4. **PVE 匯入**：將映像掛到測試 VM，先用保守硬體配置（CPU `host` 或相容型號、`virtio-scsi`、對應網卡驅動）啟動；若為舊版 Windows，需預先規劃 Legacy 啟動與控制器相容性。
5. **開機與服務檢核**：依序檢查開機日誌、磁碟掛載、網路服務、應用程序依賴，確認與中繼環境觀測結果一致。
6. **資料一致性比對**：抽樣比對關鍵資料夾、資料庫 checksum、應用層健康檢查 endpoint，確認非僅「可開機」而是「可運行」。

## 常見技術問題與排除順序

1. **可開機但網路失效**：先查 udev 舊網卡規則、介面命名變更（`eth0` -> `ens*`）與驅動匹配，再修正 netplan/network scripts。
2. **磁碟掛載錯誤**：比對 `fstab` UUID 與新磁碟 UUID 是否一致，必要時進 rescue mode 修正掛載參數。
3. **系統卡在 initramfs**：通常與儲存控制器驅動或 rootfs UUID 不符有關，先重建 initramfs 再驗證。
4. **應用啟動但授權失敗**：檢查是否綁定來源硬體指紋（MAC/UUID/CPU ID），必要時先規劃授權轉綁窗口。
5. **效能低於來源平台**：先看磁碟快取模式與 IO scheduler，再比對 vCPU 拓樸、NUMA 綁定與記憶體 balloon 設定。

## Windows Legacy 開機磁碟注意事項（IDE）

1. **先判斷來源系統世代**：若來源 Windows VM 來自舊版 hypervisor 或 P2V，常只內建 IDE/SATA 啟動路徑，直接改成 VirtIO 可能無法開機。
2. **首輪驗證保留 IDE 開機碟**：在 PVE 測試 VM 先保留一顆 IDE 系統碟，機器型號可先用 `i440fx`，確認可進入系統後再做控制器調整。
3. **資料碟與系統碟分開驗證**：系統碟先求可開機，資料碟可分階段掛入 `virtio-scsi` 測速，避免一次改完導致無法判斷失敗點。
4. **驅動補齊後再切換控制器**：完成 Windows 端驅動安裝與重開測試後，才把系統碟由 IDE 轉到 VirtIO，並重新確認 boot order。
5. **保留回退點**：每次切換控制器前先做完整備份並確認可還原；若開機失敗，應以備份還原整機（含設定與資料）退回上一版，避免部分 OS 因硬體變更記錄或自動修復導致即使把設定改回去也無法復原。

## 技術檢核清單

1. 來源與轉換映像 checksum 一致，檔案完整性可驗證。
2. 中繼環境與 PVE 測試環境的服務檢核結果一致。
3. 關鍵應用可在 PVE 上正常啟動並完成最小業務流程。
4. 故障回復步驟可重現：至少一次從備份集重做到可開機。
5. 性能基準已記錄：CPU、記憶體、磁碟 IO、網路延遲有可比較數據。

## 參考資料

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- `qemu-img` Manual  
  https://www.qemu.org/docs/master/tools/qemu-img.html
- QCOW2 Image Format  
  https://qemu.readthedocs.io/en/latest/interop/qcow2.html
