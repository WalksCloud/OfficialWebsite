---
type: case
slug: cases/cay-azure-erp
title: |
  CAY: Operating Azure ERP VMs Under Tight Budget Constraints
description: |
  CAY launched ERP workloads on Azure with strict budget limits. WalksCloud maintained VM-layer and network security controls while documenting unresolved backup and recovery risks.
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
## Background

- In 2020Q3, CAY needed to prepare ERP test and production environments on short notice.
- Budget covered only Azure VMs and basic firewall controls; no approved budget was available for backup or disaster recovery.
- WalksCloud managed VM-external controls (virtual network and access governance), while ERP software inside the VM remained under the designated ERP vendor.

## Initial situation and pain points

1. **No backup or full resilience controls**: without additional backup, snapshot, or offsite recovery storage, failure recovery depended on vendor-side practices.
2. **Only minimal exposure control was possible**: access reduction relied on strict source-IP filtering (primarily fixed office IP ranges).
3. **Operational accountability was split**: if internal ERP data or OS state failed, the client had limited internal visibility; only VM and network layers were in WalksCloud scope.

## WalksCloud approach

1. **Minimize attack surface**

    - Applied Azure NSG and firewall rules to allow only approved office fixed IP and limited VPN-node access.
    - Isolated ERP VM into dedicated subnet and monitored security-group posture drift with Azure policy controls.

2. **Stabilize VM-external operations**

    - Monitored VM health indicators (CPU, RAM, disk I/O) and escalated anomalies to ERP vendor contacts.
    - Performed periodic checks on OS update status and remote-management agent readiness.

3. **Explicit risk disclosure**

    - Documented the active "no backup, no restore point" risk for management.
    - Recommended minimum Azure Backup/Recovery Services planning, but budget remained unapproved.

## Outcomes and limitations

- VM-layer operations stayed stable, allowing ERP vendor delivery to continue.
- Strict source restrictions prevented known unauthorized connection events.
- However, absence of backup and restore remained a high-risk condition and should be addressed before any higher-availability target.
