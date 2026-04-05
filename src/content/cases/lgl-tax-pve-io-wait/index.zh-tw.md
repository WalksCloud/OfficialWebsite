---
type: case
slug: cases/lgl-tax-pve-io-wait
title: |
  LGL-TAX：從 IO wait 瓶頸到健檢報告的 PVE 案例
description: |
  LGL-TAX 的客戶將原本建議的 SSD 架構換成 HDD，導致資料庫備份期間 IO wait 暴增、VM 回寫失敗。行雲資訊受託釐清原因並出具健檢報告，提供硬體與流程的改善建議。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.5
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 背景

- 2025Q1，LGL-TAX 的客戶採用 PVE 叢集，由原建置廠商規畫 SSD 與交接流程，但為降低成本改用 HDD、且內部交接並未落實。
- PVE 的 VM 數量雖不多，但承載資料庫與網站服務；規畫混亂造成風險被忽略。

## 事件

- Oracle DB 在進行內部備份時，與 VM 層的備份排程撞在一起，IO wait 暴增。
- 部分 VM 回寫失敗、資料遺失且無法開機。
- 客戶後來以較早的備份檔先行還原部分主機。
- 網站服務停擺後透過原建置廠商轉介找上行雲資訊，我們在不到一週內完成遠端 / 現勘並出具報告；客戶在收到報告數天後才恢復運作。

## 行雲資訊的評估作法

1. **釐清硬體瓶頸**：分析 IO wait 與磁碟效能，指出 HDD 取代 SSD 使效能差一個量級。
2. **檢視 PVE 規畫與交接**：發現未按原建議規畫，也沒有落實交接紀錄，導致風險無法提前發現。
3. **出具健檢報告**：整理 IO 分析、硬體建議、交接與備援流程，供客戶參考。

## 結果

- 檢測完成後，LGL-TAX 收到健檢報告，了解事故與可行改善方案。
- 專案在此結案，我們也未追蹤後續是否採納建議。
