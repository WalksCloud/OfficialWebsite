---
type: case
slug: cases/lgl-nax-gpu-passthrough
title: |
  LGL-NAX：更新後 GPU Passthrough 異常的快速排查記錄
description: |
  LGL-NAX 在更新 PVE 作業系統與套件後，Passthrough 裝置無法再掛載，致使虛擬機開機即失敗。行雲資訊與 LGL 同步排查 dmesg、vfio 與 BIOS 設定，雖無法於受限環境中立即恢復，仍釐清問題根源並交付完整判斷。
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

- 2025Q1，竹科科技公司由 LGL 建置 PVE 搭配 NVIDIA 消費級 GPU 的 Passthrough 架構，平時由客戶自行維運。
- 更新後出現異常時，LGL 轉請行雲資訊進場協助釐清並追蹤可能的排除方式。

## 事件與限制

- 客戶更新 OS 套件與作業系統後，Passthrough 裝置無法掛載，導致關鍵虛擬機啟動即失敗。
- 現場網路隔離，無法連網下載驅動或同步套件，只能在既有環境中排查。
- 支援時程緊湊，需即時向 LGL 通報判斷結果好安排下一步。

## 行雲資訊的排查流程

1. **檢視系統日誌**

    - 透過 `dmesg` 比對更新前後訊息，確認 PVE 仍可偵測到 GPU，但 Passthrough 初始化時出現中斷。

2. **核對 `vfio` 與 BIOS 設定**

    - 逐一確認 IOMMU 群組與裝置綁定狀態、重新套用 `vfio-pci` 設定。
    - 比對 BIOS 內顯示卡、PCIe 相關參數與安全啟動設定，排除被重設的可能。

3. **嘗試回復既有設定**

    - 套用更新前備份的設定檔與黑名單規則。
    - 重新部署虛擬機後仍無法順利開機。

## 與 LGL 的協作方式

- 行雲資訊在 LGL-NAX 現場與客戶、LGL 同步所有排查過程，確保資訊一致。
- 將每一步的發現（例如 `dmesg` 訊息、`vfio` 綁定結果）即時告知 LGL，方便其後續追蹤。
- 當無法在受限環境內進一步驗證時，直接與 LGL 說明推測為驅動版本不相容，提供後續建議方向。

## 結果與提醒

- 在無法連網的條件下，無法立即安裝新驅動或重建環境驗證。
- 行雲資訊交付完整排查報告與推論，協助 LGL 接手後續評估。
- 案例提醒：遇到封閉環境時，仍需建立「可再現的排查紀錄」，讓夥伴或客戶能沿著同一脈絡繼續驗證，避免反覆重工。
