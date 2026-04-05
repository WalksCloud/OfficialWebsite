---
type: case
slug: cases/lgl-tax-pve-io-wait
title: |
  LGL-TAX: From PVE IO Wait Bottlenecks to Actionable Health Findings
description: |
  A focused troubleshooting case that traced recurring VM instability to storage-tier decisions and missing handover controls, resulting in a practical remediation report.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.5
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Background

- In 2025Q1, the LGL-TAX customer ran a PVE cluster for database and website workloads.
- Original design recommendations called for SSD-based storage and structured handover, but cost pressure led to HDD substitution and weak transition controls.

## Incident

- Oracle DB internal backup jobs overlapped with VM-layer backup scheduling, causing IO wait spikes.
- Several VMs failed writeback operations; some data loss and boot failures occurred.
- The customer temporarily restored part of the estate from older backup artifacts.
- After service interruption, WalksCloud was engaged through referral and delivered remote-plus-onsite assessment with report output in under one week.

## WalksCloud assessment approach

1. **Storage bottleneck analysis**: verified that replacing SSD with HDD introduced an order-of-magnitude performance gap under backup contention.
2. **PVE plan and handover review**: identified divergence from original architecture recommendations and insufficient handover records, which prevented earlier risk detection.
3. **Health report delivery**: consolidated IO findings, hardware recommendations, and backup/handover process improvements into a structured remediation report.

## Outcome

- LGL-TAX received actionable findings and a clear improvement path.
- Engagement closed after report delivery, and WalksCloud did not track downstream adoption decisions in this phase.
