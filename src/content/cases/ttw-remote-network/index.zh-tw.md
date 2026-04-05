---
type: case
slug: cases/ttw-remote-network
title: |
  TTW：以遠端代管與 DNS / VPN 身分治理支撐 NGO 辦公室資安
description: |
  行雲資訊為 TTW 建立標準化的遠端網路代管流程，結合 AdGuard Home 過濾、RADIUS 驗證與 VLAN 切分，讓 NGO 客戶得以放心舉辦開放活動並阻絕未授權連線。
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
## 客戶背景與合作情境

- 2021Q1，TTW 為 NGO / NPO 組織，透過友人介紹與行雲資訊合作，採用全自管的 UniFi + Mikrotik + Cisco 混合架構。
- 客戶內部有 MIS 同仁處理日常作業，但缺乏整體網路與資安規畫能力。
- 近期搬遷至 co-working space，我們需與空間管理團隊協調，讓 TTW 能在共享電信機房中維持獨立網路與原有管理流程。
- 專案期間建立的信任也讓 TTW 在 Jamf / MDM 導入時直接邀請行雲資訊出席原廠建置會議並擔任技術窗口（另有專篇說明）。

## 主要挑戰

1. **共享場域的權限控管**：在 co-working 空間中仍要維持獨立路由與 VLAN，避免其他租戶或離職員工接入。
2. **資源有限的 NGO**：需要可自助維運的系統，避免全部依賴外部顧問。
3. **多層服務協調**：DNS 過濾、VPN、LDAP／RADIUS、Jamf MDM 等服務需整合在同一套流程中。

## 行雲資訊的作法

1. **遠端代管與基準維護**

    - 初期架構為 1 台 UniFi Router、1 台 Mikrotik Router、7 顆 UniFi AP、2 台 UniFi Switch 與 3 台 Cisco PoE Switch。
    - 搬遷至 co-working space 後，保留 2 台 Router 與 1 台 Cisco PoE Switch，並新增 1 台 Cisco Switch 置於共享電信機房作為跳線設備，確保 TTW 自己的 VLAN 與對外連線仍可控。
    - 行雲資訊內部仍以 SNMP、Syslog 回收設備指標，但僅用於顧問端掌握健康度，不提供客戶端查詢；客戶只需在出現異常時通報，我們再從內部監控資料比對並提出建議。

2. **AdGuard Home 過濾**

    - 部署專用主機運行 AdGuard Home，掛載我們驗證過的公開 filter 清單。
    - DNS 日誌可回填告警系統，用於稽核及釣魚事件追蹤。
    - 每週由 CI/CD 自動執行 ACME 流程，為 AdGuard Home 與 RADIUS 更新 SSL 憑證並套用至客戶環境，確保外部憑證鏈隨時受信任。

3. **雙主機 VPN 與 RADIUS / LDAP 身分治理**

    - 兩台 VPN 主機分別對應一般使用者與情資 / 研究人員，帳號群組由 LDAP + RADIUS 控管。
    - 任何登入會寫入內部稽核紀錄（IP、地區、AS Number、時間），必要時可追溯。
    - 提供自助管理介面讓客戶在員工入離職前後自行啟用 / 停用帳號、重設密碼。

4. **VLAN 與共享空間協作**

    - 將 TTW 的研究主機、辦公室無線網路與來賓 Wi-Fi 分成獨立 VLAN，必要時以 ACL 控制路由。
    - 透過與 co-working 管理方約定好的布線與標籤機制，內部 MIS 只需通知我們需求、核對告警，即可維持隔離。

## 執行亮點

- **真遠端代管**：常規巡檢透過指標與告警完成，無須頻繁到場即可掌握狀態。
- **自助與自動化並行**：密碼重設與帳號啟停全交由客戶操作，我們僅在群組設定錯誤或密碼遺失時支援。
- **審計備援**：VPN 登入稽核、DNS 過濾記錄與 VLAN 政策皆存入共享報告，確保 NGO 即使預算有限也能保有稽核能力。

## 實際成效

- 搬進 co-working space 仍能維持獨立網路，訪客或其他租戶無法接觸 TTW 的核心系統。
- DNS 過濾成功阻擋釣魚站點，減少非營利組織常見的社工攻擊風險。
- 客戶 MIS 透過自助介面管理帳號，行雲資訊僅需處理少量例外事件，達成「自助 + 遠端顧問」的協作模式。
- 系統穩定到讓客戶幾乎忘記其背後仍在遠端維運；憑證更新與稽核記錄都由行雲資訊靜默完成，確保必要控管不被忽略。
- 客戶與行雲資訊僅在出現異常或要新增需求時才互動，平時維持零干擾運作，反映雙方對基礎設施與維運流程的高度信任。
