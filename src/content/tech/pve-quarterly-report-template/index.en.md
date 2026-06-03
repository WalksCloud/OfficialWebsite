---
type: tech
slug: tech/pve-quarterly-report-template
title: |
  PVE/PBS Quarterly Report Template and Key Metrics
description: |
  A structured reporting template for PVE/PBS update status, backup outcomes, datastore capacity trends, and anomaly handling across quarters.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Applicable scenarios

- Long-term managed environments running PVE (Proxmox Virtual Environment) and/or PBS (Proxmox Backup Server) where quarterly evidence is required.
- Multi-stakeholder operations that need traceable update, backup, and capacity records.
- Multi-node or multi-datastore estates where day-to-day observations are insufficient for trend analysis.

## Technical sections in the report

1. **Updates Data**: group updatable packages by `Origin` and list `Package / current / new / Description`. The `new` field is the final target version for that update cycle.
2. **Backup Summary Data (30-day window)**: `Fail / Warning / Success` counts across Backups, Prunes, Garbage Collections, Syncs, Verify, Tape Backup, and Tape Restore.
3. **Backup Usage Data (datastore state)**: usage percentage, estimated full date, CT/Host/VM group and snapshot counts, and last-GC deduplication factor.
4. **Backup Snapshots List Data**: time-ordered snapshot entries with protection tags for sampling and traceability.
5. **Environment notes**: PVE/PBS shared and PBS-only sections are explicitly distinguished to avoid false expectations in PVE-only environments.

## Metric definitions (to keep quarters comparable)

1. **Package-version rule**: `current -> new` represents the update delta for that cycle; quarterly reports use actual target versions, not inferred forecasts.
2. **Task-result rule**: `status` containing `ok` counts as Success, containing `warning` counts as Warning, and all others count as Fail, using the same rolling 30-day window.
3. **Task-type rule**: classify by backup job type only: backup/prune/garbage/sync/verify/tape backup/tape restore.
4. **Capacity rule**: usage and estimated-full values come directly from PBS; backup-count dimensions remain fixed at CT/Host/VM.
5. **Snapshot rule**: snapshot list keeps backup type, backup id, timestamp, and protection tag for manual investigation index.

## Production workflow

1. **Run the report script only from the controlled UI boundary**: the `Make Update Report` button appears only when a managed connector domain and internal userscript are both present, so execution stays inside an approved domain+userscript boundary. This preserves base PVE/PBS installations and prevents accidental use in unauthorized contexts.  
   - PVE example: ![PVE Make Update Report button example](./make-update-report-button-pve.png)
     <!-- media-description:for ./make-update-report-button-pve.png -->
     This PVE example shows the controlled `Make Update Report` button placed beside the normal documentation and VM/CT operation buttons. The placement makes the report action visible to operators while keeping it limited to the approved connector domain and userscript boundary.
     <!-- media-description:end -->
   - PBS example: ![PBS Make Update Report button example](./make-update-report-button-pbs.png)
     <!-- media-description:for ./make-update-report-button-pbs.png -->
     This PBS example shows the same controlled report button in the backup-server interface. The consistent placement helps generate quarterly evidence with the same operation pattern across PVE and PBS without modifying the base installation.
     <!-- media-description:end -->
2. **Generate updates and report output in one operation**: the same controlled action performs package updates and structured report generation. This reduces manual transcription errors and keeps quarter-to-quarter fields comparable.
3. **Hibernate eligible VMs before host updates**: stop related QEMU processes first so resumed VM state loads against updated binaries. This lowers the chance that in-progress compute or file-write tasks are interrupted by the update cycle.
4. **Reboot PVE/PBS hosts to apply runtime changes**: reboot activates updated kernels and package runtime state. Then proceed to post-update service checks.
5. **Handle LXC workloads with reboot-recovery flow**: LXC does not support hibernation and will stop during host reboot. After host return, restart containers in the defined sequence and verify service health.

## Exception interpretation and improvement approach

1. **Only include exception section when error/fail logs exist**: do not mix normal operations into incident narrative.
2. **Fix-first internal handling**: repairable issues are handled in maintenance windows before escalation unless agreement requires immediate notice.
3. **Human review cadence (1-2 weeks)**: default practice is periodic manual log review rather than daily push-notification monitoring.
4. **No proactive push by default**: if contract does not require event push, quarterly cadence remains the baseline.
5. **Action-oriented recommendations**: each exception maps to an executable change (schedule, capacity, retention, or version correction).

## References

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
