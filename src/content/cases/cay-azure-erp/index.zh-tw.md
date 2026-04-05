---
type: case
slug: cases/cay-azure-erp
title: |
  CAY：有限預算下的 Azure ERP VM 維運
description: |
  CAY 在內部擴編期間僅能以最低預算在 Azure 建置 ERP VM；行雲資訊支援 VM 外層與網路防護，透過防火牆限制來源，但因預算不足未配置備份，仍存在雲端未納入備份與完整防護的風險。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 背景

- 2020Q3，CAY 需要在短時間內準備 ERP 測試 / 正式環境。
- 客戶僅能負擔 Azure VM 與基本防火牆費用，無額外預算建置備份或異地備援。
- 行雲資訊維護 VM 外層（虛擬網路、存取控管），VM 內部的 ERP 安裝由客戶指派的 ERP 廠商負責。

## 原始情境與痛點

1. **未納入備份與完整防護**：Azure 無額外備份、快照或備援儲存，發生故障只能仰賴 ERP 廠商是否有自備備份。
2. **僅能做最小控管**：只能透過 Azure Firewall / NSG 嚴格限制來源 IP（僅允許 CAY 辦公室固定 IP）降低暴露面。
3. **維運責任切分困難**：VM 內部故障或 ERP 資料毀損，內部 IT 無介面可檢查；只能確保 VM 層與網路層可用。

## 行雲資訊的作法

1. **最小化攻擊面**

    - 於 Azure 設定 NSG / Firewall，只允許 CAY 辦公室固定 IP、少數 VPN 節點存取 ERP VM。
    - 將 ERP VM 放在獨立 Subnet，並以 Azure Policy 監控網路安全組態是否被更改。

2. **VM 外層維運**

    - 監看 Azure VM 的基本健康狀態（CPU/RAM、磁碟 I/O），若異常則通知 ERP 廠商。
    - 定期檢查 OS Update 與代理程式運作，確保 VM 能被遠端操作。

3. **風險揭露**

    - 向客戶管理層清楚註記「無備份、無還原點」的現況，提醒若資料遺失只能重灌。
    - 建議最少規畫 Azure Backup / Recovery Services，但因預算未核准而持續未納入備份與完整防護。

## 成果與限制

- VM 層面維持穩定運作，ERP 廠商得以在 Azure 上交付系統。
- 透過嚴格的來源限制，未曾出現未授權連線事件。
- 然而缺乏任何備份與還原機制，仍是高風險狀態；後續若 ERP 要求更高可用性，必須重啟預算審查。
