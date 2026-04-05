---
type: tech
slug: tech/app-ownership-transfer-process
title: |
  App 所有權與開發者帳戶移轉流程
description: |
  行雲資訊整理 iOS、Android、macOS 的 App 所有權移轉步驟，涵蓋簽章資產、帳戶權限、審核文件與交接驗證，避免移轉後無法更新或回滾。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為何需要

- 客戶希望 App 從技術委外轉回自有帳戶，或將品牌交接給新的營運單位。
- 不同平台（Apple/Google）對所有權轉移有不同流程，稍有疏忽就需重新上架。

## 前置技術盤點

1. **應用資產總表**：盤點 App 名稱、Bundle ID、Package Name、簽章憑證、推播金鑰與後端 callback 設定。
2. **商店與財務狀態**：確認付款帳戶、訂閱、內購與未結清款項狀態，避免移轉中斷。
3. **第三方依賴盤點**：列出推播、分析、授權、地圖、登入等第三方服務帳戶，確認是否需同步轉移或重綁。
4. **版本凍結窗口**：在移轉期間凍結非必要版本更新，避免新舊帳戶同時變更造成不可回溯狀態。

## 所有權移轉流程

1. **準備平台必要條件**：依平台要求準備 D-U-N-S (Data Universal Numbering System, 資料環球編碼系統) 號碼、權限授權、聯絡人與帳戶驗證資訊。
2. **建立還原基準點**：保留移轉前版本、簽章資訊與關鍵後端設定，確保發生問題可快速回復。
3. **提交移轉申請**：依 Apple/Google 流程提交轉移，並以固定欄位追蹤審核狀態與補件內容。
4. **切換憑證與金鑰**：移轉完成後替換 API key、Webhook secret、推播憑證與服務帳戶權限。
5. **功能回歸測試**：驗證登入、推播、訂閱/內購、VPN 或關鍵業務流程在新帳戶下可正常運作。

## 常見風險與排除順序

1. **移轉成功但商店更新失敗**：先檢查簽章與憑證是否仍綁定舊帳戶，再檢查版本號策略。
2. **推播功能異常**：比對新帳戶憑證、Topic/Package 與伺服器端 token 驗證設定。
3. **訂閱狀態異常**：先查商店後台合約與財務狀態，再檢查伺服器端訂閱驗證邏輯。
4. **第三方服務無法呼叫**：確認 callback 白名單、API key 權限與來源網域是否已同步更新。

## 技術檢核清單

1. 所有應用識別碼與簽章資產已完整盤點。
2. 移轉窗口內版本凍結與還原基準點已建立。
3. 移轉後關鍵功能（登入、推播、訂閱）皆可重現通過。
4. 舊帳戶高權限金鑰已撤除，新帳戶權限已最小化。
5. 審核補件與變更紀錄可追溯至單一事件時間軸。

## 參考資料

- Apple App Transfer Documentation  
  https://developer.apple.com/help/app-store-connect/transfer-an-app/
- Google Play App Transfer Help  
  https://support.google.com/googleplay/android-developer/answer/6230247
