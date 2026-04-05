---
type: case
slug: cases/lgl-awe-pve-vgpu-jamf
title: |
  LGL-AWE：PVE vGPU 叢集與 Jamf MDM 稽核支援
description: |
  行雲資訊協助 LGL-AWE 的同一終端客戶完成兩階段需求：先建置 PVE 8.x + NVIDIA vGPU 的全新環境並將既有 VM 轉移，接著因上游資安要求導入 Jamf MDM 及代管服務。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.6
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 背景

- vGPU 專案於 2025Q1 啟動：LGL-AWE 服務的同一終端客戶先提出需求，希望建置全新的 PVE + vGPU 叢集。
- MDM 稽核於 2026Q1 展開：同一客戶因供應鏈資安要求需補齊 MDM 稽核能力，因此啟動 Jamf 導入與代管規畫。

## 第一階段：PVE 8.x + NVIDIA vGPU 叢集

### 挑戰

1. **既有環境難以擴充**：原本採自組 Rack Server 與分散 VM 管理方式，擴充效率低。
2. **vGPU 授權與 profile 需穩定落地**：需在 PVE 8.x 上完成可維運的 NVIDIA vGPU 設定。
3. **需建立可延續的內部維運能力**：客戶希望後續可自行處理日常維護與基本異常。

### 行雲資訊於第一階段的作法

- **硬體與叢集規畫**：建議改用 Dell Rack Server，規劃兩台主機、每台兩張 NVIDIA vGPU 卡（每卡約 3 到 4 台 VM，整體少於 10 台 VM）。
- **驅動與授權整合**：協助完成 vGPU 驅動載入、授權綁定與 profile 設定。
- **VM 轉移與驗證**：將舊環境 VM 分批遷移到新 PVE 節點，逐台驗證啟動與服務可用性。
- **SOP 與教育訓練**：提供建置、升級、日常維運與基本排障流程，降低後續交接落差。

## 第二階段：Jamf MDM + 稽核支援

### 背景與需求

- 客戶為供應鏈成員，需符合更嚴格的上游資安與稽核要求。
- 目標是建立一套可快速回應稽核要求的 MDM 管理與證據整理流程。

### 行雲資訊於第二階段的作法

- **方案評估**：協助比較 Jamf Pro、Jamf Protect 等組合與導入成本。
- **採購與建置**：協助與授權經銷體系協調採購，完成初始安裝、整合與政策基準設定。
- **後續代管**：接手政策維護、應用部署、稽核資料整理與指定需求調整，讓客戶團隊可專注核心專案。

## 成果

- **GPU 叢集**：既有 VM 成功轉移至 Dell + PVE 8.x 環境，並建立可延續的內部維運能力。
- **MDM 稽核**：Jamf 代管建立後，客戶可更快回應上游稽核要求，且稽核證據輸出一致性提升。
