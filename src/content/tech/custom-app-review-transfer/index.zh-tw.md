---
type: tech
slug: tech/custom-app-review-transfer
title: |
  客製化 App 品牌化、上架與所有權移轉實務
description: |
  行雲資訊整理客製 App 在多平台的品牌化、商店審核與所有權移轉流程，協助團隊降低審核反覆與帳戶交接風險。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 工作內容

- 依需求調整 UI、字串與品牌元素，並維持各平台一致的版本標識。
- 準備上架所需的描述、隱私政策、測試帳號與審核說明。
- 管理原始碼分支、建置參數與簽章資產，確保可重現建置流程。

## 前置技術基準

1. **版本與分支策略**：建立 `main/release/hotfix` 的版本路徑，並固定 tag 規則（例如 `ios-v1.2.3`、`android-v1.2.3`），避免跨平台版本混淆。
2. **簽章資產盤點**：先確認 iOS 憑證、Provisioning Profile、Android Keystore、推播金鑰與 API key 的所有權與到期日。
3. **建置環境一致性**：固定 Xcode、Android Gradle Plugin、SDK 與依賴版本，降低「本機可編譯、CI 不可編譯」的環境落差。
4. **權限最小化**：在送審前逐項檢查 App 權限（位置、通知、VPN、背景執行），避免過度申請造成審核風險。

## 審核重點

1. **Google Play**：確認資料安全聲明、權限用途、VPN 使用說明與可重現的測試流程，確保審核可完整走完主要功能路徑。
2. **Apple 平台**：依 Apple Developer Program 規範準備測試帳號與功能說明，特別是 VPN、登入與遠端服務相關功能的審核備註。
3. **審核可重現性**：將所有測試步驟寫成固定順序（登入、連線、主要功能、登出），避免審核人員因路徑不清造成誤判。

## 所有權移轉與環境切換流程

1. **移轉前凍結變更**：在移轉窗口前凍結新功能合併，只保留必要修補，避免移轉期間版本漂移。
2. **識別碼與權限映射**：盤點 App ID、Bundle ID、套件名稱、推播 topic、Webhook endpoint，確保移轉後對應不變。
3. **平台移轉申請**：依平台流程提交所有權移轉，並持續追蹤審核狀態與補件需求。
4. **憑證與金鑰輪替**：移轉完成後立即替換 API key、Webhook secret、服務帳號金鑰，阻斷舊權限殘留風險。
5. **功能回歸檢查**：重新驗證登入、推播、VPN 連線、訂閱/授權檢查等關鍵流程，確認環境切換後功能正常。

## 常見風險與排除順序

1. **簽章不一致導致無法更新**：先檢查憑證鏈與簽章指紋，再確認商店後台是否仍綁定舊憑證。
2. **推播失效**：比對新舊憑證、Topic/Bundle ID 與伺服器推播權杖，排除環境切換後的權限殘留。
3. **審核反覆退件**：把審核回饋轉成固定欄位（問題點、重現步驟、修正版本），避免重複補件卻無法定位問題。
4. **移轉後回報異常**：優先檢查 API key、Webhook secret、第三方回呼白名單是否已全部更新。

## 技術檢核清單

1. 版本標識在 iOS/Android/macOS 一致且可追溯。
2. 簽章資產與憑證到期日已盤點並記錄輪替窗口。
3. 移轉前後的核心功能（登入、推播、VPN）皆可重現通過。
4. 舊權限已撤除，新權限最小化原則已落地。
5. 審核補件歷程已結構化，後續可沿用同一流程。

## 參考資料

- Apple Developer Program Documentation  
  https://developer.apple.com/programs/
- Google Play Console Help  
  https://support.google.com/googleplay/android-developer/
