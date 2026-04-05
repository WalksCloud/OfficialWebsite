---
type: case
slug: cases/ttw-mdm
title: |
  TTW：以 Jamf MDM 自助流程補齊全 Mac 團隊的資安治理
description: |
  行雲資訊在 TTW 的 Jamf 環境中建出自助式權限與應用管理流程，搭配 Jamf Protect 告警，讓非資安背景的 NGO 仍能維持 Apple 裝置安全。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.62
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 客戶背景

- 2022Q3，TTW 為全 Mac 辦公環境（<30 台 Mac），由友人介紹與行雲資訊合作。
- Jamf 原廠完成初始建置，但內部對 Apple 生態與 MDM 維運經驗不足。
- 在信任遠端代管合作的基礎上，TTW 臨時邀請行雲資訊出席 Jamf 原廠的導入 / 建置會議並擔任技術窗口，協助長期維運。
- TTW 需要維持 NGO 的安全流程並在有限 IT 人力下管理裝置。

## 主要需求 / 挑戰

1. **自助化權限與應用部署**：使用者預設無管理權限，需在可控條件下自行取得暫時權限與安裝工具。
2. **惡意威脅處理**：TTW 需依靠 Jamf Protect 告警與外部顧問提供指引。

## 行雲資訊的介入方式

1. **自動化腳本與應用部署**

    - 建置 VPP / EPP 的安裝流程，確保防護軟體與必要應用可自動布署。
    - 透過 Homebrew 腳本安裝常用工具；需要手動安裝的應用也透過 MDM 推播。
    - 建立「Make Me an Admin」自助稽核：使用者需在介面確認用途後才獲得暫時管理權限，系統自動紀錄。

2. **Jamf Protect 告警處理**

    - TTW 部署 Jamf Protect，由行雲資訊持續監看告警並主動聯繫窗口。
    - 案例：某使用者下載疑似竊取電子錢包的軟體，雖未被 Jamf Protect 判定為惡意，客戶仍主動通報；我們要求立刻封存裝置、複製資料並檢查殘存風險後再交還。

## 成果

- 非資安背景的 NGO 仍能自助處理 Mac 權限與應用需求，只需在例外情況尋求顧問。
- Jamf Protect 告警流程具備封存與追蹤標準，減少惡意程式殘留風險。
