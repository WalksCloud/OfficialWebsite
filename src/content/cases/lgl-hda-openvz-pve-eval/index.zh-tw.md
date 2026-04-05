---
type: case
slug: cases/lgl-hda-openvz-pve-eval
title: |
  LGL-HDA：從封閉 OpenVZ 環境評估轉往 PVE
description: |
  LGL-HDA 的客戶長期使用 Comboware Virtuozzo / OpenVZ，在高度封閉的環境中無法直接抽取 VM；他們希望行雲資訊以其內部工程師的身份出面評估，但我們僅以技術顧問身分驗證「備份→ESXi→PVE」的可行性，最後提供多次轉換的建議。
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

- 2025Q2，LGL-HDA 為 SI 廠商，其客戶採用 Comboware Virtuozzo / OpenVZ（俗稱 OpenVZ）的虛擬化平台；LGL-HDA 並未實際維運該平台，而是希望我們以其技術員工身份出面協助轉換評估。
- 環境極度封閉：無法直接下載 VM 影像，只能在虛擬機器內安裝備份軟體並產出備份檔，Hypervisor 層沒有任何備份出口。
- LGL-HDA 希望行雲資訊以「他們的技術員工」身分進場，但我們僅接受技術評估工作，維持顧問角色。

## 面臨的挑戰

1. **資料無法直接匯出**：只能靠 VM 內安裝的備份軟體產生備份檔，沒有 OVF/OVA 等標準格式。
2. **合作方式不透明**：LGL-HDA 要求我們以其內部人員身份出面，增加溝通風險。
3. **多次轉換成本**：OpenVZ 與 PVE 不具直接相容性，需要額外中繼步驟。

## 行雲資訊的評估作法

1. **備份→ESXi**

    - 使用「由 VM 內安裝的備份軟體」產出的備份檔與對應還原工具，在 ESXi 上還原 VM。
    - 驗證還原後的 VM 能正常開機與運作。

2. **ESXi→PVE**

    - 透過 ESXi 內建的匯出工具將 VM 轉成標準格式，再匯入 PVE。
    - 一樣檢查 VM 在 PVE 上可啟動與登入，確認服務不受影響。

3. **回報結果**

    - 我們僅能透過訊息回報 LGL-HDA：此路徑可行，但必須「OpenVZ → ESXi → PVE」多次轉換，無法一次完成。
    - 由於無法直接接觸終端客戶，也不掌握後續決策，評估至此告一段落。

## 結果

- 驗證成功：透過多段轉換可以把 OpenVZ VM 搬到 PVE。
- LGL-HDA 取得可行性結果後暫未啟動後續專案，評估至此告一段落。
- 行雲資訊僅完成技術驗證並提供建議。
