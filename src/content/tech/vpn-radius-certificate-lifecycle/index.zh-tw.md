---
type: tech
slug: tech/vpn-radius-certificate-lifecycle
title: |
  VPN/RADIUS 憑證與帳號生命週期管理
description: |
  行雲資訊以 ACME、自動化腳本與受控派送流程管理多站點 VPN/RADIUS 與 802.1X 憑證及帳號生命週期，完整保留啟用、輪替、停用與稽核軌跡。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為什麼需要流程化

- 共享設備同時服務 VPN 與 802.1X，若憑證與帳號缺乏版本控管，常在到期或人員流動時發生連線中斷。
- 客戶往往沒有專職管理員，需要我們幫忙建立「誰建立、誰停用、何時到期」的可追溯紀錄。
- 在多租戶或跨站點場景，單一失效憑證可能同時影響 RADIUS、VPN 與內部 API，若缺少一致規格，排障會被迫逐台手工檢查。
- 憑證、帳號與群組權限其實是同一條存取鏈，任何一環不同步都會造成「可登入但不可用」或「未授權卻可連線」。

## 憑證管理

1. **ACME 自動簽發**：RADIUS、VPN 與 DNS 服務統一走 ACME 流程，優先使用 DNS-01，避免額外開放 HTTP 驗證入口。
2. **用途分離**：VPN Server、RADIUS、內部 API 不共用同一把私鑰，降低單點洩露風險。
3. **鏈結完整性**：部署時同時校驗 leaf/intermediate chain，避免客戶端因鏈結不完整出現間歇性握手失敗。
4. **輪替窗口控制**：把簽發、派送、reload 拆成可回滾步驟，先在次要節點套用再推核心節點。
5. **剩餘天數策略**：每週檢查有效期與 OCSP/CRL 可達性，僅在逼近門檻或鏈結異常時觸發更新，避免不必要輪替。

## PKI 與密鑰邊界

1. **私鑰儲存**：私鑰檔案權限最小化（例如僅服務帳號可讀），避免備份或同步流程外洩。
2. **節點派送**：使用受控通道分發憑證，可採 SSH 推送（含主機指紋校驗）或由受控管線觸發節點 agent 拉取；兩種模式都應避免聊天工具或臨時檔案分享。
3. **版本標記**：每次部署記錄 fingerprint、起訖時間與服務版本，便於比對是否已套用正確憑證。
4. **撤銷策略**：若偵測密鑰外洩，能快速替換並更新信任鏈，避免舊憑證持續被接受。

## 帳號生命週期

1. **集中來源**：所有 VPN/RADIUS 帳號與群組以 LDAP（或同等目錄服務）為主來源，避免多處維護造成權限分岔。
2. **狀態機管理**：帳號狀態分為 `pending -> active -> suspended -> disabled -> archived`，每個狀態都定義可用資源與存續時間。
3. **啟用流程**：建立帳號時同時設定到期日、群組與 MFA 條件，避免先開通再補安全條件。
4. **停用流程**：停用時同步撤銷 VPN profile、RADIUS 群組與可能留存的本機例外帳號，確保不留旁路入口。
5. **定期比對**：每月比對帳號清單、登入紀錄、到期日與人員名單，先清除幽靈帳號再調整權限。

## RADIUS/VPN 一致性規則

1. **群組對照表**：同一群組在 VPN 與 802.1X 需對應一致 ACL/VLAN，避免入口不同導致權限落差。
2. **屬性標準化**：RADIUS reply attributes（如 `Filter-Id`、`Tunnel-Private-Group-ID`）需固定命名與版本註記。
3. **例外時效**：臨時放寬權限必須帶到期條件，到期自動回復預設策略。
4. **多站點同步**：若有多 RADIUS 節點，變更必須具備同步順序與一致性檢查，避免部分節點仍使用舊規則。

## 常見故障與排除順序

1. **憑證有效但仍無法握手**：先檢查中繼憑證鏈與 SNI/主機名對應，再看客戶端信任庫是否過舊。
2. **VPN 可連但 802.1X 失敗**：比對群組映射與 RADIUS 回傳屬性，確認是否只有單一路徑套用新策略。
3. **帳號顯示 active 但登入被拒**：檢查帳號到期欄位、密碼 hash 同步狀態、MFA 條件與來源 IP 限制。
4. **輪替後間歇性掉線**：先看節點是否全部 reload 新憑證，再檢查 session cache 與連線重協商行為。

## 通知與文件控管

- 憑證輪替、帳號狀態變更與高風險登入事件需有時間戳、變更者、影響範圍與結果摘要。
- 文件僅保留必要技術資訊：帳號清單、群組映射、憑證版本、策略差異與異常紀錄，不保存多餘敏感資料。
- 對外輸出前先做資料最小化，確保不包含私鑰、明文密碼或不必要的個資欄位。

## 參考資料

- RFC 2865: Remote Authentication Dial In User Service (RADIUS)  
  https://www.rfc-editor.org/rfc/rfc2865
- RFC 5216: EAP-TLS Authentication Protocol  
  https://www.rfc-editor.org/rfc/rfc5216
- FreeRADIUS Documentation  
  https://www.freeradius.org/documentation/
- Let’s Encrypt / ACME (RFC 8555)  
  https://www.rfc-editor.org/rfc/rfc8555
