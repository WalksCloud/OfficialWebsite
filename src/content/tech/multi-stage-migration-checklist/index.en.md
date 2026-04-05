---
type: tech
slug: tech/multi-stage-migration-checklist
title: |
  Validation and Rollback Script for Multi-Stage Virtualization Migration
description: |
  A multi-stage migration method for cross-platform virtualization moves, with explicit verification checkpoints and rollback scripts per stage.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Applicable scenarios

- Migrating from closed or legacy virtualization stacks into PVE (Proxmox Virtual Environment) usually requires multiple export/convert/import hops.
- Format, driver, and virtual-hardware compatibility risks make staged execution with recoverable checkpoints mandatory.

## Pre-migration technical baseline

1. **Source-environment freeze**: block major source changes during migration window to avoid state drift.
2. **Asset mapping table**: maintain VM mapping for name, OS, disks, NICs, and critical services so each VM has an explicit path.
3. **Rollback checkpoints**: preserve source backups, conversion-command versions, and intermediate-node configuration.
4. **Validation scope definition**: define success as systems boot, users can sign in, network connectivity works, and application services are available.

## Multi-stage migration workflow (example)

1. **Extract backups**: obtain VM artifacts via source-platform backup tools and preserve originals unchanged.
2. **Intermediate-platform validation**: restore into readable intermediate environment (for example standard KVM/open toolchain) and verify boot/network/storage driver behavior.
3. **Format conversion**: export to common target formats (`OVF`, `QCOW2`, etc.) and record conversion commands.
4. **Target import**: import converted artifacts into PVE and adjust virtual hardware parameters as required.
5. **Final validation**: verify service startup, network behavior, storage integrity, licensing state, and run one backup test.

## Required evidence per stage

- Tool/command versions and conversion parameters.
- Verification outcomes (pass/fail) and tested checkpoints.
- On failure, capture error message and rollback action (for example re-export or return to prior stage).

## Common issues and triage order

1. **Cannot boot after conversion**: compare disk-controller type and boot mode (UEFI/legacy), then check missing drivers.
2. **Boots but network fails**: compare NIC model, MAC bindings, and retained `udev`/`netplan` assumptions.
3. **Application startup fails**: verify licensing binding and system time first, then service dependencies and data paths.
4. **Severe performance regression**: inspect storage format, cache policy, and vCPU topology alignment.

## Technical validation checklist

1. Every VM has complete source-target mapping and conversion record.
2. Source backups and conversion outputs map to rollback checkpoints.
3. Final environment passes boot/connectivity/service validation.
4. At least one restore test succeeds on target platform.
5. Post-migration performance and stability remain within acceptable bounds.

## References

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- QEMU `qemu-img` Manual  
  https://www.qemu.org/docs/master/tools/qemu-img.html
