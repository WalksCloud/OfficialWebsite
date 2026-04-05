---
type: case
slug: cases/cpa-jjp-network-audit
title: |
  CPA-JJP：無文件交接下的 HPE 網路健檢與重設紀錄
description: |
  CPA 主管透過我們母公司 IT/MIS/SRE 部門尋求協助，行雲資訊受託盤點純 HPE 的伺服器與網路設備，重設無密碼的 Instant-On Switch、確認 Fibre Channel Storage 與隱藏 AP，並整理交接文件交給客戶。
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
## 客戶背景

- 2022Q4，CPA 的主管透過 CPA 母公司的 IT/MIS/SRE 部門尋求協助，並由行雲資訊執行 CPA-JJP 的網路健檢。
- 客戶的原廠交接完全沒有文件，連設備密碼與設定資訊都未留下。
- 環境為純 HPE 設備：多台 Rack Server、一台 Fibre Channel Storage、三台 Instant-On Switch，以及少於 10 台的隱藏 AP。

## 原始情境與痛點

1. **交接缺少任何設定資訊**：無法確定現有設定是否正確，也無法追蹤變更紀錄。
2. **網路設備無密碼**：Instant-On Switch 完全開放，需要重設並重新建立管理權限。
3. **隱藏設備難以盤點**：AP 被藏在天花板或地毯下，部分位置難以觸及。

## 行雲資訊的作法

### 1. 設備盤點與重設

- 逐一確認 HPE Instant-On Switch 的版本與連線狀態，因無密碼即進行重設並設定新的管理權限。
- 確認網段僅需基本配置，無 VLAN 需求，方便快速完成重設。
- 對 HPE Rack Server 與 Fibre Channel Storage 進行健康檢查，確認運作狀態與是否有異常告警。
- 旁路的 Fortigate 僅登入確認權限，因客戶已掌握其管理權限而無須額外調整。

### 2. 無文件環境的盤點流程

- 建立現場設備清單，記錄每一台伺服器、儲存、Switch 與 AP 的位置與序號。
- 對於隱藏 AP，能觸及的逐一確認供電與連線；無法觸及的則在圖面上標記位置，提醒客戶日後整理。
- 以簡潔的方式呈現設備拓樸與管理帳號，作為後續交接基礎。

### 3. 交付交接文件

- 彙整重設後的管理帳號與密碼管理方式，交由客戶簽收。
- 針對每一類設備提供設定概要（例如 Switch 的管理 IP、伺服器與儲存的使用狀況），避免再度出現「無文件交接」的情況。
- 提醒客戶後續任何新增設備都應同步更新文件，維持透明。

## 成果

- 整個 HPE 環境重新獲得可管理狀態，Instant-On Switch 與 AP 的管理權限回到客戶手上。
- Fibre Channel Storage 與伺服器的健康狀態得到檢查並確認無異常。
- 客戶取得完整交接文件，後續若有維護人員變動，也能快速掌握環境。
