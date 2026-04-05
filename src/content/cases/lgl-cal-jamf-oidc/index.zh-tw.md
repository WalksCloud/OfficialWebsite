---
type: case
slug: cases/lgl-cal-jamf-oidc
title: |
  Jamf MDM + Connect 對接國內 OIDC：規格落差與實驗室對照驗證
description: |
  綠能產業客戶希望讓 Mac 端沿用既有 TOTP/MFA 供應商。行雲資訊依 Jamf Connect 要求完成整合驗證，並以 ZITADEL 對照實驗室釐清 OIDC 相容性差異，協助客戶完成決策。
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
## 客戶背景

- 2025Q1，終端客戶屬綠能產業，約 90% 為 Windows 環境，剩餘 Mac 端希望沿用同一套 MFA 流程。
- 身分解決方案採用國內既有 TOTP/MFA 供應商，並以 OIDC 作為裝置登入入口。
- LGL-CAL 作為轉介顧問，邀請行雲資訊協助 Jamf Connect 與該 OIDC 的整合驗證。

## 原始情境與痛點

1. **Windows 端已定案，Mac 端卡關**：若無法完成 OIDC 串接，Mac 端無法沿用既有帳密與驗證流程。
2. **供應商 OIDC 不支援 password grant**：Jamf Connect 文件要求 `grant_type=password` 才能完成密碼同步，但供應商將規範中的安全性提醒解讀為不建議支援。
3. **跨團隊溝通成本高**：多輪會議後仍難以對齊問題定位，且供應商端對照 log 長期不完整，造成排查效率偏低。

## 行雲資訊面臨的挑戰

- 在無法存取供應商程式碼的前提下，提供可驗證的定位證據。
- 建立可重複、可對照的測試流程，讓客戶看見同一設定在不同 OIDC 實作下的差異。
- 在供應商維持既有立場時，協助客戶評估是否繼續投入。

## 解法與執行流程

### 1. 依 Jamf Connect 官方要求建立標準設定

- 依文件建立 OIDC application、`client_secret` 與 callback 參數。
- 在 Jamf Connect 設定檔啟用必需的 `grant_type=password`，並由 MDM 派送到測試 Mac。
- 測試期間保留完整 request/response log，確認參數與官方範例一致。

### 2. 驗證供應商 OIDC 端點行為

- 在供應商端點執行多輪登入測試，密碼同步持續失敗。
- 持續對照 Jamf 端與供應商端證據，並說明規範中的安全性提醒不等同於協定淘汰。
- 即使提供完整對照資料，供應商仍未提出可落地的修正路徑。

### 3. 建立 ZITADEL OIDC 實驗室作為對照組

- 在自建 ZITADEL 實驗室使用與 Jamf Connect 相同的 application 與設定檔。
- 同一台測試 Mac 可順利登入、同步密碼並建立 session，證實 Jamf Connect 端流程可行。
- 以 request/response、HTTP 狀態碼與錯誤訊息逐項對照，確認差異集中在供應商端實作。

### 4. 向客戶提供決策建議

- 出具測試報告，列出供應商端不支援 `grant_type=password` 的證據與可行替代路徑（更換供應商或改採其他身分橋接方案）。
- 說明若供應商立場不變，Mac 端將無法達成與 Windows 端一致的 MFA 體驗。

## 結果與後續

- 供應商維持不支援 `grant_type=password` 的立場，未提供可執行替代方案。
- 終端客戶與 LGL-CAL 最終決定暫停專案，未進入後續開發。
- 行雲資訊保留完整測試紀錄，作為後續第三方 OIDC 相容性評估範例。

## 本案重點

- **導入前需先驗證 OIDC 相容性**：供應商規模與品牌不等於跨平台整合可行性。
- **對照實驗室可快速釐清責任邊界**：同一套設定在中立環境可用時，可明確排除客戶端設定因素。
- **需提前定義替代與中止條件**：避免在供應商無法配合時持續投入而延長不確定性。
