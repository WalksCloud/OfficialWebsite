---
type: case
slug: cases/cay-dns-filter
title: |
  AdGuard Home 與 zone view：CAY DNS 威脅過濾演進
description: |
  參照行雲資訊創辦人之一在前一份工作累積的 dnsmasq CaaS 經驗，先於 homelab 驗證後再導入 AdGuard Home 與 bind zone view，在內網 VM 建立惡意網域過濾與內外部回應分流，避免核心服務被掃描。
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

- 2018Q3，CAY 為行雲資訊創辦團隊過往任職的公司，機房與網路雖已完成重整，但 DNS 僅提供一般轉發，無法過濾惡意網域。
- 內部系統（如管理介面、研發平台）只能在辦公室內存取，卻缺乏 zone view 區分，容易讓外來查詢看到真實 IP。
- 目標是建立一套維護量低的 DNS 過濾與 zone view 服務，先在 homelab 驗證後再同步到 CAY 的內網。

## 原始情境與痛點

1. **釣魚與惡意網域頻繁**：員工偶爾會點到釣魚信件的連結，DNS 無法先期攔截。
2. **內外部網域未分流**：外部查詢與內部查詢回應相同，存在暴露內部服務的風險。
3. **維運人力有限**：IT 只能依賴訂閱式黑名單與自動化流程，無法手動維護大量清單。

## 面臨的挑戰

- 必須在內網 VM 上部署，不影響既有 router 與 Wi-Fi 架構。
- 需要 `bind` 提供 zone view，根據來源 IP 決定回應內容。

## 解法與執行

### 1. Pi-hole + `bind` zone view（初版）

- 行雲資訊創辦人之一早在前一份工作即使用 dnsmasq 進行 CaaS 管控，並在個人 homelab 建立 GitLab CI/CD + 專案 runner（綁定 DNS 主機）；確認在測試環境穩定後，再把流程搬進 CAY。
- 在內網 VM 上安裝 Pi-hole，router 統一指向 Pi-hole 作為預設 DNS。
- 使用 `bind` 設定 zone view：
  - 內部 IP 查詢時回應真實 IP。
  - 外部或未知 IP 查詢時回應 dummy IP 或直接 `NXDOMAIN`，避免暴露內部服務。
- Pi-hole 訂閱公開維護的惡意網域清單，並定期在 homelab 驗證清單是否會誤殺重要網域。

### 2. AdGuard Home + CICD（後期）

- 待 CICD 管線與版本控管完善後，改用 AdGuard Home 取代 Pi-hole，將設定轉為 YAML/JSON 版本化。
- 仍維持「先在 homelab 測試 → 再同步到 CAY」的流程，避免一發布就影響使用者。
- 系統保持獨立，維護僅需定期檢查清單與軟體更新。

## 執行成果

- **惡意網域被即時攔截**：雖未留完整統計，但有阻擋紀錄，員工回報的釣魚事件顯著減少。
- **內外 zone view 分流**：外部查詢永遠拿不到內部服務的真實 IP，降低暴露風險。
- **維運負擔低**：透過訂閱式清單與 homelab 驗證流程，IT 只需關注例外與更新即可。
