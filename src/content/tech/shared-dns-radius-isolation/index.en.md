---
type: tech
slug: tech/shared-dns-radius-isolation
title: |
  DNS/RADIUS Isolation Deployment Standards for Shared Environments
description: |
  A practical pattern for shared or multi-tenant environments, combining VLAN segmentation, RADIUS identity control, and AdGuard Home filtering with traceable operations.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Typical pain points in shared environments

- Multiple tenants use weak shared-credential SSIDs, making source attribution and lateral-risk containment difficult.
- DNS filtering at one egress point often shows only source IP and not clear user/department/device identity context.
- Shared-office providers usually offer internet connectivity only, not tenant-specific ACL, RADIUS policy, or event-governance depth.
- During tenant moves or organization changes, non-standardized networks create repeated rebuild effort.

## WalksCloud design principles

1. **Segment VLAN first**: complete L2/L3 separation before policy tuning; do not rely on one firewall rule as isolation strategy.
2. **Use RADIUS as authorization authority**: centralize identity, group mapping, and VLAN assignment in RADIUS instead of fragmented AP/switch/VPN lists.
3. **Keep DNS filtering traceable**: AdGuard Home should provide source-correlated query visibility (VLAN/client/IP/time), not only domain blocking.
4. **Keep primary and fallback paths consistent**: office Wi-Fi, wired, and remote VPN entries should converge to the same authorization model.

## Pre-deployment planning

1. **VLAN design**: define at least Management, Office, Guest, and Server segments; add per-tenant VLAN where required.
2. **IP planning**: reserve static ranges for AP, printers, NAS, and servers to avoid DHCP collisions.
3. **ACL baseline**: enforce default-deny with explicit allow rules for necessary cross-segment services (DNS, NTP, application ports).
4. **Identity-source alignment**: confirm LDAP/IdP group fields and deprovisioning SLA (for example, account disabled within 15 minutes of offboarding).
5. **Log-time consistency**: synchronize RADIUS, DNS, VPN, and firewall clocks via NTP before operations.

## Deployment steps

1. **Assess switch-layer capability**: verify support for 802.1Q trunk, RADIUS attributes, and port isolation; replace edge hardware first if unsupported.
2. **Build core services**: deploy FreeRADIUS, LDAP/IdP integration, and AdGuard Home with TLS and backup baseline.
3. **Define RADIUS policy**: create group-to-VLAN/ACL mapping so Wi-Fi, wired, and VPN use identical authorization logic.
4. **Apply AP/switch controls**: enable WPA2/WPA3-Enterprise or wired 802.1X, configure and rotate the RADIUS shared secret on AP/switch devices, and define fallback policy for temporary RADIUS unavailability.
5. **Apply DNS policy segmentation**: assign DNS policy by VLAN or client tags; begin with monitor mode for high-risk categories, then move to blocking.
6. **Align VPN authorization**: route VPN account policy through same RADIUS/LDAP group source.
7. **Finalize baseline documentation**: publish VLAN table, RADIUS mapping, DNS policy, configuration backups, and incident SOP.

## Technical validation checklist

1. Cross-tenant VLAN direct access is blocked except for explicitly authorized shared services.
2. Group-based login yields expected VLAN and resource access profile changes.
3. Malicious-domain samples are blocked and logs are traceable by source segment, host, and timestamp.
4. Simulated RADIUS or DNS node failure triggers acceptable failover behavior.
5. RADIUS and DNS configurations are restorable from backup within maintenance windows.

## Common failures and triage order

1. **Wi-Fi connects but wrong network segment assigned**: verify RADIUS return attributes (`Tunnel-Type`, `Tunnel-Medium-Type`, `Tunnel-Private-Group-ID`) and AP/switch application behavior.
2. **DNS policy appears enabled but not effective**: confirm endpoint DNS is forced to AdGuard Home and check for DoH/DoT bypass.
3. **Tenant suddenly loses internet access**: inspect VLAN gateway/ACL path, then review recent RADIUS policy changes and certificate validity.
4. **VPN privilege unexpectedly broadens**: usually caused by wrong group binding or unmanaged local accounts; realign to central identity source immediately.

## Operations guidance

- **Daily**: review high-risk DNS alerts and abnormal authentication failures.
- **Weekly**: verify group-change and deprovision sync for role and offboarding changes.
- **Monthly**: run sampled recovery drill for RADIUS, DNS, and network-device backups.
- **Quarterly**: review VLAN/IP utilization, ACL exception growth, and remove expired rules.

## References

- FreeRADIUS Documentation  
  https://www.freeradius.org/documentation/
- IEEE 802.1X Overview  
  https://1.ieee802.org/security/802-1x/
- AdGuard Home Documentation  
  https://adguard-dns.io/kb/adguard-home/
- RFC 2865: RADIUS  
  https://www.rfc-editor.org/rfc/rfc2865
