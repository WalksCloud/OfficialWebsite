---
type: tech
slug: tech/controlled-ap-dual-path
title: |
  Change Workflow for Managed AP Environments with Dual Network Paths
description: |
  A controlled change workflow for managed AP environments that keeps policy behavior consistent across primary and backup network paths.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why this is needed

- In dual-path office networks, connectivity failover without policy alignment often creates access drift: users connect successfully but receive incorrect authorization behavior.
- Managed AP environments require consistency across controller policy, switching, and gateway layers; otherwise switchover events can trigger auth failures, guest-isolation gaps, or unintended routing bypass.
- This workflow treats dual-path change as a policy-governance operation, not just a connectivity operation.

## Pre-change technical baseline

1. **Topology and path mapping**: define AP, SSID, VLAN, uplink switch, gateway, and primary/backup route relationships.
2. **Policy consistency inventory**: compare ACL, RADIUS, DNS, NTP, guest isolation, and internal-access controls across both paths.
3. **Version compatibility checks**: confirm controller, AP firmware, and network-device versions remain stable during switchover.
4. **Rollback baseline**: preserve AP and controller snapshots for deterministic recovery and diff validation.

## Change workflow

1. **Low-impact pilot first**: validate authentication, roaming, guest isolation, and internal-access behavior in lower-risk zones.
2. **Backup path first, primary path second**: stabilize backup behavior before applying equivalent policy to primary route.
3. **Staged rollout with metrics**: deploy in AP groups and monitor connection rate, disconnect rate, and auth-failure rate per batch.
4. **Primary/backup switchover drills**: test DNS, RADIUS, and business-critical service continuity after route switch.
5. **Policy convergence and freeze**: after stability is confirmed, converge ACL and routing definitions and archive the applied version.

## Common issues and triage order

1. **Authentication failure after switchover**: verify RADIUS reachability and shared secret first, then inspect backup-path ACL scope.
2. **Roaming quality degradation**: compare power, channel, minimum RSSI, and roaming-related parameters across paths.
3. **Guest connects but cannot reach internet**: inspect DNS, NAT, and guest-VLAN egress controls.
4. **Time-window disconnect spikes**: check PoE stability and AP firmware anomalies at affected sites.

## Technical validation checklist

1. Primary and backup policy behavior (ACL, RADIUS, DNS) is consistent and test-verified.
2. Each rollout batch has rollback baseline, change record, and ownership trace.
3. Critical services and authentication flows remain available after switchover.
4. Observation window shows no sustained increase in disconnect or auth-failure metrics.
5. Controller and AP version set is validated for long-run stability.

## References

- UniFi WiFi Best Practices  
  https://help.ui.com/hc/en-us/articles/221029967
- RFC 5216 (EAP-TLS)  
  https://www.rfc-editor.org/rfc/rfc5216
