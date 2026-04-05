---
type: case
slug: cases/klm-aua-erp
title: |
  KLM-AUA: PVE/PBS ERP Operations and Quarterly Reporting
description: |
  WalksCloud maintained the virtualization and backup layer for ERP workloads with twice-daily backup jobs and quarterly reporting for audit visibility.
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
## Client background

- In 2024Q3, KLM engaged WalksCloud to maintain the ERP infrastructure used by its end customer KLM-AUA.
- Hardware was provided by KLM and hosted in leased IDC space. ERP vendor responsibility was limited to OS and applications inside VMs; PVE/PBS layers were managed by WalksCloud.
- KLM required stable virtualization, backup continuity, and quarterly reporting suitable for customer audit communication.

## Needs and challenges

1. **Twice-daily backups**: notifications were required for both success and failure to support trend tracking.
2. **Clear maintenance reporting**: quarterly documentation of PVE/PBS update status and backup posture was required.
3. **Boundary control**: VM-internal issues remained ERP-vendor scope, while WalksCloud guaranteed virtualization and backup-layer operations.

## WalksCloud approach

### 1. PVE and PBS lifecycle management

- Maintained package updates for both Proxmox VE and Proxmox Backup Server.
- Recorded each update with from-to version evidence and included it in quarterly reports.

### 2. Daily backup schedule

- Configured PVE backup at `04:30` and `20:30` each day for ERP VMs.
- PBS notification remained enabled for both success and failure outcomes.
- For repeated failures, WalksCloud produced anomaly analysis and mitigation recommendations.

### 3. Quarterly reporting package

- Delivered report sections including:
  - PVE/PBS update versions and change descriptions;
  - backup success/failure summaries;
  - PBS capacity status and per-VM backup inventory.
- Reports were delivered to KLM for downstream communication with KLM-AUA.

## Outcomes

- ERP VMs retained traceable update and backup history suitable for quarterly review.
- Backup operations stayed stable, and exception handling could be triggered quickly from alert notifications.
- WalksCloud maintained low-touch but consistent infrastructure governance over virtualization and backup layers.
