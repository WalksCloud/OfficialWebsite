---
type: tech
slug: tech/pve-io-wait-diagnostics-workflow
title: |
  PVE/VM 故障排查：從 IO 指標到硬體調整
description: |
  行雲資訊透過 iostat、Grafana 與備份時間軸比對，定位 IO wait 真因，並提出儲存層與排程層的可落地修正。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 常見症狀

- VM 回寫速度變慢、frequent flush 或備份失敗。
- Grafana / Zabbix / LibreNMS 呈現 IO wait 長時間高於 10%。
- 同時段可能伴隨應用逾時、資料庫 checkpoint 拉長或 API 響應抖動。

## 前置量測基準

1. **時間窗對齊**：先對齊 PVE 節點、VM、監控系統時區與時間戳，避免跨系統比對誤判。
2. **負載分層**：區分業務高峰、備份窗口、維護窗口的 IO 型態，避免把短期尖峰誤當長期瓶頸。
3. **儲存路徑辨識**：確認問題 VM 對應的 datastore、RAID/控制器與底層媒體類型，建立故障定位路徑。

## 分析流程

1. **蒐集指標**：從 `iostat`, `pveperf`, PBS log 以及 Grafana 圖板取得 IO wait、讀寫 IOPS、延遲。
2. **排程檢查**：確認備份、GC、Prune、掃描任務是否撞在尖峰時段，必要時錯峰或拆分時程。
3. **硬體檢查**：確認磁碟健康度、控制器快取模式、寫入策略與韌體版本，排除底層裝置退化。
4. **VM 層面檢查**：檢查 VM 是否有大量同步寫入、IO 排程不當或檔案系統碎片問題。
5. **關聯比對**：把 IO wait 峰值與業務事件、備份事件、告警事件對齊，確認是否為同一根因。
6. **改善方案落地**：依根因調整備份排程、優化 VM 寫入模式、升級儲存媒體或校正控制器參數。

## 常見根因與處理順序

1. **排程碰撞型瓶頸**：先拆分與錯峰任務，再觀察 IO wait 是否回落。
2. **媒體性能不足**：若長期高延遲且 IOPS 觸頂，優先評估 SSD/NVMe 或儲存分流。
3. **控制器設定不當**：校正快取策略與寫入模式後，再比對回寫延遲與 flush 行為。
4. **VM 寫入模式不匹配**：對高同步寫入服務優化 guest FS 與應用寫入策略，降低尖峰阻塞。

## 技術檢核清單

1. IO wait 與延遲峰值可對應到具體事件時間窗。
2. 排程碰撞已被拆分或錯峰，且觀測到改善趨勢。
3. 儲存媒體與控制器健康狀態已完成檢查並有紀錄。
4. VM 層寫入行為與儲存策略已完成對應調整。
5. 改善後至少跨一個完整業務週期仍維持穩定。

## 參考資料

- Linux `iostat` Manual  
  https://man7.org/linux/man-pages/man1/iostat.1.html
- Proxmox VE Performance Tips  
  https://pve.proxmox.com/wiki/Performance_Tweaks
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
