---
type: case
slug: cases/lgl-csa-vpn
title: |
  LGL-CSA：客製 Zero Trust VPN App 上架挑戰
description: |
  行雲資訊依照 LGL-CSA 的品牌需求調整 OpenZiti VPN App，協助完成 Android 上架與所有權移轉，但也面臨 Apple 在開發者帳號與審核政策上的限制。
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
## 背景與合作起點

- 2025Q2，LGL-CSA 採用 OpenZiti 建立 Zero Trust 環境，希望將 Android / iOS / macOS VPN App 以自有品牌呈現。
- 單位敏感，不願以官方名義申請 Apple 開發者帳號，原本想走 in-house App 發佈，最後被迫改採公開上架。
- 行雲資訊接手的範圍僅限 UI / 品牌調整與上架流程支援；核心程式與 OpenZiti SDK 由客戶自管。

## 挑戰

1. **品牌一致性但權限有限**：我們只能依客戶提供的 icon、色票與字體在三個平台套用統一的外觀，無法動到核心程式。
2. **上架受限**：Google Play 相對寬鬆；Apple 的 iOS / macOS 審核極嚴格，加上無法以單位名義申請開發者帳號，導致多次遭拒。
3. **技術政策衝突**：使用特定 API 時，Apple 不允許 App 所有權轉移，與客戶想要「完成開發後整包轉給自己」的需求相衝突。

## 行雲資訊的作法

1. **UI / 品牌化調整**

    - 套用客戶提供的 logo、primary color、字體、啟動畫面，並在三個平台維持一致性。
    - 與 OpenZiti SDK 保持介面溝通，確保 UI 變動不影響連線流程。

2. **Android 上架協助**

    - 撰寫並上傳 Google Play metadata（介紹文字、截圖、隱私政策）與版本規畫。
    - 操作內部測試 → 正式上架流程，審核進度以訊息通知客戶。
    - 上架成功後，依約完成 App 所有權與原始碼移交。

3. **Apple 審核溝通**

    - 協助準備 TestFlight 測試、App Store metadata 與必要的合規聲明。
    - 連續遭 iOS 審核駁回、macOS 僅初版通過後續更新被拒；我們只能書面整理拒絕理由並透過訊息轉述給客戶。
    - 說明 Apple 在某些 API 下禁止 App 所有權轉移，客戶最終接受無法上架的結果。

## 成果與限制

- **Android 版本**：成功上架並完成所有權 / 原始碼移交，客戶得以自行維護。
- **Apple 版本**：因開發者帳號與審核政策限制，客戶決定停止嘗試，將 Android 作為唯一對外管道。
- **政策限制提醒**：若無法以單位名義申請 Apple 開發者帳號，又希望日後轉移 App 所有權，須事先評估政策風險，避免投入後仍被迫停止。
