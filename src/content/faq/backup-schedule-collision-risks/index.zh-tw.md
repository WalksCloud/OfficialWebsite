---
type: faq
slug: faq/backup-schedule-collision-risks
title: |
  備份撞排程會帶來哪些風險？如何調整？
description: |
  參考[《PVE 備份排程調整與 IO 管控》](/tech/pve-backup-schedule-tuning-guide)，可先用 IO wait 與備份時間軸找出衝突區段，再透過分流、切段與錯峰排程降低 VM 回寫失敗風險。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
