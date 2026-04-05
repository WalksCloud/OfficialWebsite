---
type: case
slug: cases/tgw-mdm
title: |
  TGW：多元 VPP 自助安裝與 iPhone 公務機控管
description: |
  行雲資訊在 TGW 專屬的 Jamf 環境中擴充 VPP 自助服務與 iPhone 公務機限制，讓 NGO 團隊在有限資源下仍能維持 Apple 裝置治理。
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
## 客戶背景

- 2022Q3，TGW 與 TTW 由 Jamf 原廠分別建置兩套 Jamf Pro / Jamf Connect，行雲資訊以相同的維運團隊提供腳本與自動化方案給兩位客戶。
- TGW 需要比 TTW 更大量的 VPP 應用，且新增了約 20 支 iPhone 作為公務機。
- 內部 IT 人力有限，希望在行雲資訊的共享腳本基礎上擴充自助服務內容與行動裝置管控。

## 主要挑戰

1. **自助服務規模擴張**：需在 Jamf 自助服務區提供更多 VPP 軟體，包含設計工具、會議系統與研討活動 App。
2. **iPhone 公務機限制**：必須禁止使用者自行下載 App Store 軟體，所有應用只能透過 VPP 指派。
3. **維護既有自動化**：Make Me an Admin、Homebrew、自動化腳本皆與 TTW 共用，需要確保在 TGW 擴張後仍穩定。

## 行雲資訊的作法

1. **沿用自動化基準**

    - 利用行雲資訊提供的共用腳本（VPP/EPP 安裝、Homebrew 套件、Make Me an Admin 稽核），確保 Mac 端流程一致。
    - 將 TGW 的需求新增到自助服務區，讓使用者可自行安裝被核准的 VPP 應用。

2. **VPP + iPhone 控管**

    - 針對 iPhone 公務機建立「僅允許 VPP 派送」策略，所有應用必須從 VPP 白名單安裝或由管理員指定自動安裝。
    - 禁止 App Store 自行安裝，避免非核准軟體進入公務機。

3. **自助服務流程**

    - 在 Jamf Self Service 中將 VPP 應用分門別類：一般 Mac 工具、研討活動 App、iPhone 專用軟體等。
    - 使用者如需額外 App，須向窗口提出需求，由我們評估後再新增至自助服務或自動安裝清單。

## 成果

- TGW 與 TTW 共用同一套自動化基準，但 TGW 得以透過更大量的 VPP 自助服務滿足多樣需求。
- iPhone 公務機僅能安裝被核准的應用程式，降低公務機被濫用的風險。
- 內部 IT 透明掌握使用者請求，只需專注在新增 / 下架 VPP 應用，其他流程由 Jamf 自動化完成。
