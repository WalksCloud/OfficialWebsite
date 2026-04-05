---
type: case
slug: cases/tgw-zero-trust-monitoring
title: |
  TGW：以 Jamf Trust 守住暴露外網的監視器
description: |
  行雲資訊協助 TGW 將原本直接曝露在外網的 16 支監視器收回零信任通道，透過 Mikrotik Gateway 與 Jamf Security Cloud 限縮僅有執行長可透過 Jamf Trust App 存取。
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

- 2025Q4，TGW 由保全公司買斷 16 支監視器，採 PPPoE 固定 IP 直接連上網際網路，未經任何內網隔離或 VPN。
- 場域僅有大小教室各一顆雜牌 AP，沒有整體網路管理設備。
- 執行長在審視資安風險時，發現監視器管理介面全然暴露於外網，因此尋求行雲資訊評估改善方案。

## 主要痛點

1. **直接暴露的管理介面**：保全系統使用固定 IP，任何人只要知道位址即可登入。
2. **缺乏權限控管**：管理帳號僅以預設密碼保護，沒有整體身分驗證流程。
3. **共享場地限制**：TGW 在外部場地需要監看設備，但不希望整個場域網路升級成專屬機房。

## 行雲資訊的解法

1. **Mikrotik PoE Router + Jamf Security Cloud Gateway**

    - 在監視器主機前部署 Mikrotik PoE Router，建立 IPSec 通道連回 Jamf Security Cloud（僅支援 IPSec 連線）。
    - 將監視器主機 IP 固定，並設定所有指向該 IP 的流量必須經由 Gateway 轉送。

2. **Jamf Trust Zero Trust VPN**

    - 依 Jamf 公開政策建立監視器專用 policy，僅允許已註冊 Jamf Trust App 的裝置連線。
    - 執行長為唯一授權使用者，透過 Jamf Trust App 啟動 VPN 後才能開啟監視器 App。未啟用 Jamf Trust 時，即使在教室 Wi-Fi 也無法觀看。

3. **交叉驗證與稽核**

    - 驗證流程：先在教室內網（未啟用 Jamf Trust App）確認可直接觀看，以確保原有 Wi-Fi 權限正常；再啟動 Jamf Trust App 測試遠端／非教室環境的 VPN 連線是否生效。
    - 所有連線紀錄與告警均保存在 Jamf Security Cloud，可供執行長隨時調閱。

## 成果

- 監視器管理介面已不再暴露於固定 IP，必須走零信任通道才能連線。
- 執行長可透過 Jamf Trust App 隨時監看場地，但其他人即使知道 IP 也無法連線。
- 無需全面改造場域網路，只以 Mikrotik Gateway + Jamf Security Cloud 建立可追溯的安全管道。
