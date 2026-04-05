---
type: case
slug: cases/tgw-remote-network
title: |
  TGW：延續 TTW 成功經驗的遠端代管與 Time Machine 備援
description: |
  行雲資訊由 TTW 的合作口碑轉介，複製 AdGuard Home、LDAP/RADIUS 與受控式遠端代管流程，同時讓 TGW 以 Jamf Trust + Time Machine 安全回存到辦公室 NAS，維持備份軌跡與資安稽核。
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

- 2022Q3，TGW 的 IT 窗口原本任職於 TTW，離職後加入 TGW 並延續對行雲資訊代管流程的信任；後續雖多次輪替窗口，但合作默契未受影響。
- 現場主要由三顆 Aruba 受控型 AP 與一台 Mikrotik Router 組成，另外還有教室網段（已於監視器案例描述）。
- 新需求是讓 Mac 的 Time Machine 備份可以回存辦公室 NAS 作資安存證。

## 挑戰

1. **縮短導入時間**：我們建議沿用 TTW 的 AdGuard Home、LDAP/RADIUS、遠端巡檢等作法，TGW 同意採納。
2. **不需要額外 VPN，但要支援 Time Machine**：TGW 無 OpenVPN 需求，我們改以 Jamf Security Cloud / Jamf Trust 作為專用 VPN，僅用於 Time Machine 備份。
3. **備份要能成為資安存證**：Time Machine 回到 NAS 後，需保留可追蹤的備份軌跡，以便未來調查。

## 行雲資訊的作法

1. **遠端代管與 DNS／LDAP／RADIUS 方案**

    - 沿用 TTW 成功經驗：AdGuard Home 過濾（公開 filter + homelab 驗證）、LDAP/RADIUS 自助介面、GitLab CI/CD 自動更新、SNMP/Syslog 只由行雲資訊管理（客戶端無存取）。
    - 依 TGW 的 Aruba 受控型 AP + Mikrotik Router 規畫辦公／訪客網段（教室因地理位置獨立且無訪客需求，維持原狀）。

2. **Jamf Trust + Time Machine 備援**

    - 使用 Jamf Security Cloud / Jamf Trust 作為唯一通道，僅接受從 Jamf Trust App 建立的加密連線。
    - 我們規畫 Time Machine 備份流程：Mac 端於 Jamf 自助服務啟用備份，透過 Jamf Trust 連回辦公室 NAS，依使用者身份寫入專屬資料夾。
    - 備份紀錄與 NAS 日誌可在資安事件時回溯，成為存證依據。

3. **長期維運與自動化**

    - DNS／RADIUS 憑證同樣每週透過 CI/CD 執行 ACME 更新。
    - 使用者帳號、群組與 Jamf 自動化腳本與 TTW 共享，可快速套用補丁或更新。

## 成果

- TGW 在新辦公室也能延續 TTW 的穩定代管體驗，無需重新摸索。
- Jamf Trust + Time Machine 備份提供可追蹤的備援軌跡，遇到資安事件時能迅速還原資訊。
- DNS 過濾、LDAP/RADIUS、自助巡檢等作法讓行雲資訊僅在例外情況下介入，維持低干擾的遠端協作模式。
