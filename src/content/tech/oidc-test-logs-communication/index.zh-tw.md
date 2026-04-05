---
type: tech
slug: tech/oidc-test-logs-communication
title: |
  OIDC 整合測試 Log 蒐集與溝通流程
description: |
  行雲資訊整理 OIDC 整合時的雙邊 Log、request/response 與會議記錄蒐集法，協助供應商快速重現與釐清責任邊界。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為什麼要蒐集完整 log

- 不同廠商對 OIDC 規格的詮釋不同，若缺乏請求／回應細節，很難釐清是哪一端的設定問題。
- 只提供錯誤訊息往往不足以讓供應商支援，因此需要整理階段性結果與測試步驟。

## 前置技術基準

1. **測試矩陣固定化**：先固定測試組合（帳號、`scope`、`redirect URI`、`grant_type`），避免每輪條件不同。
2. **時間戳對齊**：同步用戶端、IdP 與代理層時鐘，確保 log 可跨系統對照。
3. **欄位命名規範**：統一事件編號、回應碼、錯誤類型與重現步驟欄位，減少溝通歧義。
4. **敏感資訊遮罩**：在分享 log 前先遮蔽 token、secret 與個資欄位，保留可排障必要資訊。

## 必備資料

1. **用戶端 log**：Jamf Connect 需透過其內建偵錯模式輸出 log（或使用 Jamf 支援提供的 profile），通常無法以一般 web 工具取代；其餘工具可使用 curl / Postman 取得詳細輸出。
2. **伺服器端 log**：請 OIDC 供應商或自建 IdP 提供相同時段的 log，標示 `client_id`、`grant_type`、`scope` 等資訊。
3. **封包或追蹤記錄**：必要時使用官方建議的抓包方式或 Jamf 提供的收集腳本，確保可重現。
4. **測試矩陣**：記錄每次測試使用的設定（`redirect URI`、授權流程、帳號），並標註結果。

## 溝通與定位流程

1. **一次提供完整資訊**：把用戶端 log、伺服器 log、測試矩陣與時間軸放在同一份資料，避免供應商反覆索取。
2. **明確指出規格落差**：引用官方文件或 RFC 段落，說明預期行為與實測差異。
3. **單變因重測**：每次只改一個參數並重跑同一路徑，快速判斷問題是否與該參數有關。
4. **會議後固定回填**：每次會議後回填「結論、待補證據、下一步」，避免下一輪又回到原點。

## 常見問題與排除順序

1. **授權頁正常但 token 交換失敗**：先檢查 `client secret`、`redirect URI` 與 `grant_type`。
2. **回傳 token 但登入仍失敗**：比對 `claim` 對應與本地帳號映射規則。
3. **同設定有時成功有時失敗**：先查時間同步與憑證鏈，再查代理層轉發規則。
4. **供應商無法重現問題**：提供帶事件編號的完整時間軸與 request/response 對照，降低重現門檻。

## 技術檢核清單

1. 同一事件可在用戶端與伺服器端 log 對齊。
2. 測試矩陣具可重現步驟與結果標記。
3. 敏感資訊已遮罩但不影響排障判讀。
4. 每輪變更均採單變因測試並可比較差異。
5. 問題定位可明確區分用戶端、IdP 或代理層。

## 參考資料

- OpenID Connect Core 1.0  
  https://openid.net/specs/openid-connect-core-1_0.html
- OAuth 2.0 Framework (RFC 6749)  
  https://www.rfc-editor.org/rfc/rfc6749
