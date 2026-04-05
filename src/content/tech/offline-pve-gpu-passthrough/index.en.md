---
type: tech
slug: tech/offline-pve-gpu-passthrough
title: |
  PVE GPU Passthrough Troubleshooting in Offline Environments
description: |
  WalksCloud applies an offline-first troubleshooting workflow for PVE GPU passthrough incidents, using local evidence capture and controlled rollback checkpoints to keep diagnosis reproducible.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Challenge

- The site has no internet connectivity, so live documentation lookup and online log upload are unavailable.
- Triage must quickly determine whether failure is caused by driver compatibility, `vfio` binding, or BIOS configuration.

## Pre-troubleshooting technical baseline

1. **Offline toolkit**: prepare local command scripts, version mapping tables, and troubleshooting checklist on portable storage. In restricted facilities, write evidence first to approved controlled temporary media and then replicate into controlled internal environment.
2. **Version map**: record PVE version, kernel version, GPU model, and expected driver set before action.
3. **Rollback checkpoints**: back up `/etc/default/grub`, `/etc/modules`, `/etc/modprobe.d/*`, and VM configuration files.
4. **Evidence retention rules**: standardize log naming, timestamps, and photo framing for reproducible replay.

## Execution method

1. **Collect baseline evidence**: export `dmesg`, `journalctl`, `lspci`, and `/etc/modprobe.d` artifacts to policy-compliant temporary media (general sites can use USB; restricted sites must use approved controlled temporary media), and record PVE/kernel state.
2. **Validate BIOS and firmware settings**: verify VT-d/IOMMU and device-mapping-related options (for example, Above 4G Decoding), with photo evidence where required.
3. **Check `vfio` and driver state**: verify `vfio-pci` binding, `/etc/modules`, and `/etc/modprobe.d` consistency to ensure GPU is not claimed by conflicting drivers.
4. **Controlled rollback attempts**: restore known-good local settings from backups and retest VM startup.
5. **Offline validation loop**: test GPU attach, VM boot, and driver load state step-by-step.

## Common issues and triage order

1. **GPU visible but cannot attach**: inspect IOMMU groups and `vfio` binding first, then VM PCI flags.
2. **Guest driver fails after boot**: verify host/guest driver compatibility and inspect Code 43-type signals.
3. **Settings lost after reboot**: confirm GRUB parameter persistence and `initramfs` rebuild completion.
4. **Multi-GPU interference**: isolate device groups and validate one card at a time.

## Technical validation checklist

1. Required system evidence can be collected completely under offline conditions.
2. Host-to-VM GPU mapping is explicit and verifiable.
3. Every change has rollback checkpoints.
4. Post-fix boot and GPU attach behavior is repeatable.
5. Critical workloads are validated before site exit.

## References

- Proxmox PCI Passthrough Documentation  
  https://pve.proxmox.com/wiki/PCI_Passthrough
- NVIDIA Linux Driver Documentation  
  https://docs.nvidia.com/
