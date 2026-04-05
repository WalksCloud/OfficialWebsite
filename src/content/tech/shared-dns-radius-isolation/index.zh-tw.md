---
type: tech
slug: tech/shared-dns-radius-isolation
title: |
  共享場域 DNS/RADIUS 隔離部署守則
description: |
  行雲資訊以 VLAN、RADIUS 與 AdGuard Home 組合實作租戶隔離，兼顧查詢可追溯性、遠端維運與最小權限原則。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 共用場域的典型痛點

- 多個租戶共用同一套弱密碼 SSID，常見風險是帳密外流後無法快速定位來源，且橫向掃描容易互相影響。
- 若 DNS 過濾只放在單一出口設備，告警常只看到「某個來源 IP」，卻無法直接對應到哪個部門、哪位使用者或哪台裝置。
- 共享辦公場地通常只提供「可上網」等級的基礎服務，不會為單一租戶維護細緻 ACL、RADIUS policy 或事件追蹤規範。
- 當租戶搬遷、部門改組或設備汰換時，若網路沒有標準化，IT 團隊很容易落入「每次都重拉一次」的高成本循環。

## 行雲資訊的設計原則

1. **VLAN 先切乾淨**：先完成 L2/L3 分段再談政策，不把隔離責任壓在單一防火牆規則上。
2. **RADIUS 決定授權邏輯**：身分驗證、群組映射與 VLAN 指派統一在 RADIUS 層控管，避免 AP、Switch、VPN 各自維護一份權限清單。
3. **DNS 過濾要可追溯**：AdGuard Home 除了阻擋惡意網域，還要能回查查詢來源（VLAN/Client/IP）與時間，才能支撐稽核與事件應對。
4. **主備路徑一致**：無論使用者從辦公室 Wi-Fi、有線埠或遠端 VPN 進入，都應落到相同授權模型，避免「入口不同、權限不同」。

## 前置規畫

1. **VLAN 配置**：至少定義 Management、Office、Guest、Server 四類；若是多租戶空間，再為租戶獨立 VLAN。
2. **IP 規畫**：每段網段保留固定比例給靜態設備（AP、印表機、NAS、伺服器），避免後續 DHCP 與固定 IP 互撞。
3. **ACL 基準**：先寫「預設拒絕，按需放行」，明確列出可跨網段存取的必要服務（DNS、NTP、特定應用埠）。
4. **身份來源**：確認 LDAP/IdP 欄位可提供群組資訊，並約定停權時效（例如離職帳號 15 分鐘內失效）。
5. **日誌策略**：RADIUS、DNS、VPN、Firewall 的時間來源要先同步（NTP），否則事故時很難對齊事件時間軸。

## 部署步驟

1. **盤點交換層能力**：先確認現場 Switch 是否支援 802.1Q trunk、RADIUS attributes、port isolation；若不支援，先替換邊界設備再上政策。
2. **建立核心服務**：部署 FreeRADIUS、LDAP（或既有 IdP 連接）、AdGuard Home，並先完成 TLS 憑證與備份排程。
3. **定義 RADIUS policy**：按部門或租戶建立群組，配置對應 VLAN ID 與 ACL profile，確保同一群組在 Wi-Fi/有線/VPN 都套用同規則。
4. **佈署 AP/Switch 設定**：啟用 WPA2/WPA3-Enterprise 或有線 802.1X，設定 RADIUS server、shared secret、fallback policy，避免 RADIUS 暫時不可用時全網斷線。
5. **套用 DNS 分流策略**：依 VLAN 或 client tag 套用不同 DNS policy，將高風險分類（phishing/malware/newly-registered domains）先以監看模式上線，再分階段改成阻擋。
6. **導入 VPN 一致授權**：若有遠端存取需求，讓 VPN 帳號走同一套 RADIUS/LDAP 群組，避免遠端路徑繞過辦公室政策。
7. **完成配置基準文件**：整理 VLAN 表、RADIUS 群組對照、DNS policy、設備設定備份與異常處理 SOP，作為後續維運基準。

## 技術驗證清單

1. **隔離驗證**：不同租戶 VLAN 互相不可直連，僅允許經授權的共享服務可達。
2. **授權驗證**：同一帳號在不同群組登入時，獲得的 VLAN 與資源權限必須隨群組改變。
3. **DNS 驗證**：惡意網域測試樣本可被攔截，且日誌可追溯到來源網段、時間與查詢主機。
4. **容錯驗證**：模擬 RADIUS 或 DNS 單點故障，確認備援節點接手後服務不中斷或可在可接受時間內恢復。
5. **回復驗證**：可於維護窗口內從備份還原 RADIUS 與 DNS 設定，不需重新手工建置。

## 常見故障與排除順序

1. **使用者可連 Wi-Fi 但拿不到正確網段**：優先檢查 RADIUS 回傳屬性（`Tunnel-Type`, `Tunnel-Medium-Type`, `Tunnel-Private-Group-ID`）與 AP/Switch 是否正確套用。
2. **DNS policy 看似啟用但未生效**：先確認用戶端 DNS 是否被強制導向 AdGuard Home，再檢查是否存在 DoH/DoT 旁路。
3. **某租戶突然無法上網**：先看該 VLAN 的 gateway/ACL，再比對 RADIUS 近期 policy 變更紀錄與證書有效期。
4. **VPN 帳號權限異常放大**：通常是 VPN profile 綁錯群組或本地帳號未停用，需立即對齊回中央身份來源。

## 維運守則

- **每日**：檢查高風險 DNS 告警與異常認證失敗來源，先處理可疑外連與暴力嘗試。
- **每週**：審視群組異動與停權同步，確認離職/角色變更已反映在 RADIUS 與 VPN。
- **每月**：執行一次抽樣復原演練，驗證 RADIUS、DNS 與網路設備設定備份可用。
- **每季**：檢查 VLAN/IP 使用率、policy 膨脹與 ACL 例外，清除過期規則，避免維運負擔累積。

## 參考資料

- FreeRADIUS Documentation  
  https://www.freeradius.org/documentation/
- IEEE 802.1X Overview  
  https://1.ieee802.org/security/802-1x/
- AdGuard Home Documentation  
  https://adguard-dns.io/kb/adguard-home/
- RFC 2865: Remote Authentication Dial In User Service (RADIUS)  
  https://www.rfc-editor.org/rfc/rfc2865
