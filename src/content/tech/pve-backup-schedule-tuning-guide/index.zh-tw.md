---
type: tech
slug: tech/pve-backup-schedule-tuning-guide
title: |
  PVE 備份排程調整與 IO 管控
description: |
  行雲資訊以排程分流、併發控制與指標回看調整 PVE 備份，降低 IO wait 尖峰並維持線上服務延遲穩定。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 典型問題

- 備份時間重疊，導致 PBS 或儲存系統 IO 飆升。
- 同時備份太多大型 VM，造成其他服務延遲或斷線。
- 備份本身成功，但業務尖峰時段 latency 異常，反而變成應用層告警來源。
- 單一儲存池長期被高併發備份壓住，GC/Prune 與備份互相競爭 IO。

## 前置盤點

1. **VM 分層**：依資料變動率與業務重要度把 VM 分為高頻、一般、低頻三層。
2. **儲存特性**：確認儲存媒體（HDD/SSD/NVMe）、RAID 型態、可用 IOPS、平均延遲與峰值吞吐。
3. **時間窗界定**：標記業務尖峰、報表批次、DB 維護時段，避免備份與重負載工作重疊。
4. **現況基準**：先記錄每個 job 的耗時、傳輸量、失敗率、IO wait，避免調整後無法比較成效。

## 核心策略調整

1. **盤點備份矩陣**：列出所有 VM 的大小、優先度與目前排程，找出重疊區域。
2. **分散排程**：將大型 VM 排到夜間或假日，較小或高頻備份留在白天；不同層級採不同週期避免齊發。
3. **切割任務**：依業務別、儲存池、變動率拆分 job，避免單一 job 佔滿整段窗口。
4. **控制併發**：限制同時快照/備份的 VM 數量，優先保護線上服務延遲。
5. **錯峰維護**：將 Prune、GC、Verify 排在備份低谷時段，降低與備份主作業競爭。
6. **重試策略**：失敗重試要有延遲與上限，不要在同時段立刻連續重跑。否則第一批失敗後又馬上觸發第二批、第三批重試，會和原排程互相堆疊，導致 IO 與網路更滿、失敗數量繼續放大。

## IO 壓力診斷順序

1. **先看節點層**：`iostat`、`vmstat`、load average、await，判斷瓶頸在磁碟、CPU 還是記憶體回收。
2. **再看備份層**：PVE task log 與 PBS task log 對齊時間軸，定位是哪個 job 拉高延遲。
3. **再看儲存層**：比對池內其他工作（scrub、resilver、replication）是否同時進行。
4. **最後看網路層**：若是遠端 PBS，檢查備份時段封包重傳與 RTT 是否明顯上升。

## 常見故障與處理

1. **備份成功但業務延遲升高**：優先下調併發與錯開大型 VM，必要時把大型資料節點改專屬窗口。
2. **備份頻繁逾時**：檢查儲存延遲與節點負載，若為容量邊界壓力，先擴容或分流到其他 datastore。
3. **失敗集中在單一 VM**：先看該 VM 快照耗時與檔案系統狀態，再判斷是否需改用不同備份模式。
4. **GC 後容量回收不如預期**：比對保留策略與實際備份頻率，確認是否因保留規則過寬導致可刪塊不足。

## 技術檢核清單

1. 備份成功率與失敗率有明確改善（至少跨 1-2 個週期可比較）。
2. 業務尖峰時段延遲未因備份惡化。
3. Prune/GC 與備份不再互相衝突。
4. 重試機制可避免「失敗後立刻大量重跑」的惡性循環（前一批失敗、下一批立刻擠進來、再失敗）。
5. 調整參數與版本已記錄，下一次可直接復用。

## 參考資料

- Proxmox VE `vzdump` Manual  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
- Linux `iostat` Documentation  
  https://man7.org/linux/man-pages/man1/iostat.1.html
