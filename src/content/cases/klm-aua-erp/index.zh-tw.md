---
type: case
slug: cases/klm-aua-erp
title: |
  KLM-AUA：PVE + PBS ERP 維運與每季報告
description: |
  KLM 對行雲資訊發包維護 KLM-AUA 的 PVE + PBS ERP 環境。我們僅負責虛擬化與備份層，透過每日兩次備份與每季報告，確保 ERP 廠商在 VM 內的作業不受影響。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 客戶背景

- 2024Q3，行雲資訊創辦人早期曾在 KLM 任職；KLM 對我們發包，協助維護其終端客戶 KLM-AUA 的 ERP 環境。
- 硬體由 KLM 提供並放在 KLM/KLM-AUA 承租的 IDC。ERP 廠商只需負責 VM 內的 Windows 與應用程式，VM 外的 PVE/PBS 層由行雲資訊控制。
- KLM 希望有穩定的虛擬化平台、備份機制與季度報告，方便向 KLM-AUA 交付稽核資料。

## 需求與挑戰

1. **每日兩次備份**：無論成功與否都需要通知，以追蹤長期趨勢。
2. **明確的維護報告**：每季需列出 PVE/PBS 更新與備份情況，並備查儲存容量。
3. **責任切分**：VM 內作業屬 ERP 廠商，我們僅能確保虛擬化與備份層正常。

## 行雲資訊的作法

### 1. PVE + PBS 設定與更新

- 安裝 PVE 與 Proxmox Backup Server（PBS），維持虛擬化層與備份層的套件更新。
- 每次更新後留下 from→to 的版本記錄，並列入季度報告。

### 2. 每日備份排程

- 在 PVE 內設定 `4,20:30` 排程，讓 ERP VM 每日備份兩次。
- 無論備份成功或失敗，PBS 都會寄出通知信；若出現連續失敗，我們會出異常排除報告並協助處理。

### 3. 每季報告

- 報告內容包含：
  - PVE / PBS 更新版本與描述
  - 每日備份成敗統計
  - PBS 儲存容量、各 VM 備份清冊
- 報告完成後交給 KLM，做為向 KLM-AUA 說明環境狀態的依據。

## 成果

- ERP VM 維持可追溯的更新與備份紀錄，KLM 在季度檢查時能清楚掌握環境狀態。
- PBS 備份保持穩定，遇到異常即可依通知迅速排除，避免 ERP 廠商在 VM 內作業受影響。
- 行雲資訊以低介入方式協助 KLM，讓虛擬化與備份層得以長期維持。
