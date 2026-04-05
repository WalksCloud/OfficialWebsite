---
type: case
slug: cases/cay-server-farm
title: |
  二手機也能建骨幹：CAY Server Farm 零預算重構記錄
description: |
  CAY 與行雲資訊長期協作，這次以數十萬元二手設備重構 Server Farm 核心，將串聯的 Mikrotik/QNAP 架構升級為 Cisco C6504 + N3K + 2950 的分層骨幹，並透過離峰一次切換讓 smokeping 掉包率歸零、SNMP 流量分散與 vCenter 穩定度回復。
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

- 2020Q2，CAY 需從零建立 IT/MIS 制度與後續的 LDAP、UPS、Azure ERP 等骨幹。
- 初始 Server Farm 約 13 台 Rack Server（主力為 Dell R710/R720/R720xd），搭配數台 Mikrotik Switch/Router 串聯與一台 QNAP 10G RJ45 Switch 充當骨幹；後續擴編階段累積至 33 台主機。
- 雖然伺服器硬體本身規格不差，但電力僅依賴 220V 桌上型 UPS 串接 3~4 台主機，一旦任意 UPS 失效就會同時斷好幾台主機，缺乏雙路供電與可測試的維護機制。

## 原始情境與痛點

1. **骨幹不穩導致 vCenter heartbeat 失敗**：QNAP 10G Switch 經常出現「link 還在但封包停擺」，failover 無法觸發。
2. **跨 VLAN 流量瓶頸**：只靠兩台 Mikrotik Router 承擔所有跨 VLAN 流量，串聯拓樸讓沿路設備動輒塞滿。
3. **電力與 UPS 無法稽核**：每台桌上型 UPS 同時掛載 3~4 台主機，拔掉就會直接斷電，無法進行電池巡檢或雙路切換。
4. **監控指標顯示大量雍塞**：smokeping 在特定時段掉包率飆高，SNMP 流量圖也顯示多個服務卡在少數 10G port。
5. **採購限制嚴苛**：行雲資訊提出以二手機節省預算，但客戶仍要求先評估能支撐 HA 架構的全新 Cisco Core Router 組合；原廠規格動輒上看百萬，遠超實際核准預算，使得專案只能靠自行開發的二手機採購流程落地。

## 面臨的挑戰

- 如何在數十萬元的總預算下，建出具有 Core / Backbone / TOR 分層的架構。
- 二手設備來源分散、一次僅能找到 1~2 台符合規格的貨品，意味著升級需分批囤料。
- 雖然維護窗可以停機，但時間非常有限，只允許在一次 maintenance window 內完成所有切換。
- 需說服管理層接受二手機方案並理解成本/效益差異。

## 解法與執行流程

### 1. 明確定義目標架構

- 以 **Cisco C6504** 作為 Core Switch，統一 10G 光纖骨幹與管理平面。
- 各機櫃配置 **Cisco Nexus 3000 (N3K)** 作 10G Backbone，提供高速 uplink。
- 每櫃再佈署 **Cisco 2950 1G TOR**，採並聯回 Core，避免舊有串聯造成的逐段瓶頸。
- 機櫃下半部加裝雙 6KVA UPS，提供左右路徑各自獨立供電，3 櫃主機 + 1 櫃網路/跳線的佈局也因此固定化。

### 2. 半年囤料的採購策略

- 先提出以二手機節省預算的解決方案，但為了消弭「二手等於次級品」的疑慮，仍照指示蒐集能達到 HA 規格的全新 Cisco Core Router 報價，讓管理層親眼看到原廠組合上看百萬與我們以二手機建出同規格僅需數十萬之間的落差。
- 按照白名單列出所有必要模組（C6504 插槽、N3K 10G SFP、2950 uplink）後，以拍賣與二手機商管道逐批購得，每批貨都先在測試環境 burn-in 確認風扇、SFP、背板無異常再封存。
- 等新品/二手報價差異被接受後，才正式獲准以二手機方案執行，並持續向主管回報採購進度與驗證結果。

### 3. 離峰維護窗的集中切換

- 待所有設備與光纖模組就位後，安排唯一可用的週末 maintenance window（辦公室無員工、無對外服務需求），提前備妥標籤好的跳線與 weathermap 規畫。
- 現場流程：
  1. 先將新 Core / Backbone / TOR 上電並驗證基本連線。
  2. 依櫃逐一重新拉線，確保不再出現串聯鏈路。
  3. 在最後階段才將 Mikrotik 舊骨幹下線，避免產生孤島。
- 透過在合理維護窗內一次完成切換，服務雖短暫停機但整體停機時間與風險都被控制在最低。

## 執行成果（文字描述監控指標）

- **smokeping**：原本在上班尖峰時段飆高的掉包率完全回到 0，未再出現假死曲線。
- **SNMP 流量圖**：過去幾乎所有 10G 流量都卡在少數 port，升級後則清楚呈現分散至各 Backbone/TOR，沒有長時間滿載。
- **weathermap**：即時圖可掌握每條鏈路的使用率，任何異常流量都能迅速定位，網路治理可控性大幅提升。
- **vCenter 與服務容量**：heartbeat 不再因 Switch 假死而中斷，Failover 機制恢復，單櫃可穩定容納約 12 台主機，為後續 LDAP/RADIUS、Azure ERP 等計畫打好基礎。
