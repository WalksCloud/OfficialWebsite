---
type: case
slug: cases/lgl-awe-pve-vgpu-jamf
title: |
  LGL-AWE: PVE vGPU Cluster Build and Jamf MDM Audit Support
description: |
  A two-phase engagement covering NVIDIA vGPU rollout on PVE and follow-up Jamf-based MDM audit readiness for a supply-chain compliance context.
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
## Background

- The vGPU program started in 2025Q1: the same end customer served by LGL-AWE requested a new PVE plus vGPU cluster.
- MDM audit work began in 2026Q1: the same customer needed stronger MDM audit capability to satisfy upstream supply-chain security requirements.

## Phase 1: PVE 8.x plus NVIDIA vGPU cluster

### Challenges

1. **Legacy environment was hard to scale**: prior operations relied on self-assembled rack servers and fragmented VM management.
2. **vGPU licensing and profile setup had to be stable**: NVIDIA vGPU needed to run on PVE 8.x with maintainable configuration.
3. **Internal operations continuity was required**: the customer expected to handle day-to-day maintenance after rollout.

### WalksCloud execution in phase 1

- **Hardware and cluster planning**: designed a two-node Dell rack-server layout with two NVIDIA vGPU cards per node (about 3 to 4 VMs per card, fewer than 10 VMs in total).
- **Driver and licensing integration**: implemented vGPU driver loading, license binding, and profile configuration.
- **VM migration and validation**: migrated legacy VMs in batches to new PVE nodes with per-VM service validation.
- **SOP and training delivery**: provided build, upgrade, daily-operations, and basic troubleshooting procedures to reduce handover risk.

## Phase 2: Jamf MDM plus audit support

### Context and needs

- As a supply-chain participant, the customer had to meet stricter upstream security and audit requirements.
- The objective was to establish an MDM governance flow that could respond to audits quickly and consistently.

### WalksCloud execution in phase 2

- **Solution evaluation**: compared Jamf Pro, Jamf Protect, and related combinations against governance and cost requirements.
- **Procurement and implementation**: coordinated with authorized channel partners, then completed installation, integration, and baseline policy setup.
- **Managed operations**: took over policy maintenance, application rollout, audit-evidence preparation, and requested adjustments so the customer team could focus on core delivery.

## Outcomes

- **vGPU platform**: legacy VMs were successfully migrated to the Dell plus PVE 8.x environment, with stronger internal maintenance continuity.
- **MDM audit readiness**: after Jamf managed operations were established, upstream audit response became faster and evidence output became more consistent.
