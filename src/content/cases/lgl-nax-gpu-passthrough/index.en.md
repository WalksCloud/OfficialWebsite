---
type: case
slug: cases/lgl-nax-gpu-passthrough
title: |
  LGL-NAX: Rapid Triage for Post-Update GPU Passthrough Failure
description: |
  After system updates broke GPU passthrough startup, WalksCloud and LGL performed constrained-environment triage across dmesg, vfio, and BIOS paths to isolate likely root causes.
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

- In 2025Q1, a technology company in Hsinchu Science Park used a PVE setup with NVIDIA consumer GPU passthrough delivered by LGL and operated it internally.
- After update-related failure, LGL engaged WalksCloud for rapid joint triage and evidence-driven diagnosis.

## Incident and constraints

- After OS and package updates, passthrough devices could no longer attach and critical VMs failed at boot.
- The site was network-isolated, so no online driver download or package synchronization was possible.
- Timeline pressure required immediate findings for next-step planning.

## WalksCloud triage workflow

1. **System log analysis**

    - Compared pre/post-update `dmesg` behavior and confirmed GPU enumeration remained visible while passthrough initialization failed.

2. **`vfio` and BIOS verification**

    - Revalidated IOMMU grouping, device binding states, and `vfio-pci` policy application.
    - Cross-checked GPU and PCIe BIOS settings, including secure-boot-related controls, to rule out accidental reset.

3. **Rollback-state replay**

    - Reapplied known-good configuration and blacklist policies from prior backups.
    - VM boot still failed, confirming issue persistence beyond simple config rollback.

## Collaboration model with LGL

- WalksCloud synchronized every triage step in real time with both LGL and the customer.
- Diagnostic evidence (`dmesg` traces, `vfio` binding outcomes, and environment constraints) was shared continuously for downstream ownership.
- When further validation became impossible offline, we documented likely driver-version incompatibility and provided a structured continuation path.

## Outcome and practical note

- In a fully isolated environment, immediate remediation could not be completed because new driver validation was not available.
- WalksCloud delivered a full triage package and decision-ready hypotheses so LGL could continue with controlled follow-up validation.
- Key lesson: in closed environments, reproducible troubleshooting records are essential to avoid repeated investigative rework.
