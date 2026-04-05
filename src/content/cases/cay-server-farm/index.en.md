---
type: case
slug: cases/cay-server-farm
title: |
  CAY Server Farm Rebuild with Budget-Conscious Architecture
description: |
  A practical server-farm restructuring that balanced cost constraints with reliability goals, including topology cleanup, equipment strategy, and staged operational hardening.
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
## Client background

- In 2020Q2, CAY needed to establish core IT/MIS foundations for later initiatives including LDAP, UPS design, and Azure ERP support.
- The initial server-farm environment had about 13 rack servers (primarily Dell R710/R720/R720xd), chained through Mikrotik switch/router units with a QNAP 10G RJ45 switch used as backbone. During expansion, the environment grew to 33 hosts.
- Server hardware quality was acceptable, but power architecture depended on 220V desktop UPS units, each carrying three to four hosts. A single UPS failure could shut down multiple hosts, with no true dual-path power model or testable maintenance routine.

## Initial situation and pain points

1. **Backbone instability caused vCenter heartbeat failures**: the QNAP 10G switch frequently showed link-up but packet-stall behavior, preventing reliable failover.
2. **Cross-VLAN throughput bottlenecks**: two Mikrotik routers carried all inter-VLAN traffic, and the chained topology amplified congestion.
3. **Power and UPS posture was not auditable**: desktop UPS layout prevented proper battery checks and safe dual-path switching.
4. **Monitoring showed persistent contention**: Smokeping packet loss spiked at peak hours; SNMP flow maps showed heavy concentration on a few 10G ports.
5. **Procurement constraints were severe**: despite budget pressure, management required a formal evaluation of new Cisco core-router options before accepting refurbished procurement strategy.

## Core challenges

- Build a layered Core/Backbone/TOR architecture under a sub-million TWD budget envelope.
- Handle fragmented refurbished supply where only one to two qualified units were available at a time.
- Complete all migration work within a single, tightly bounded maintenance window.
- Align management expectations on cost-benefit and reliability trade-offs of refurbished strategy.

## WalksCloud solution and execution

### 1. Define target architecture clearly

- Set **Cisco C6504** as the core switching plane for unified 10G optical backbone and management control.
- Deployed **Cisco Nexus 3000 (N3K)** per rack as 10G backbone uplinks.
- Added **Cisco 2950 1G TOR** at rack edge and used parallel uplink paths back to core to eliminate chain bottlenecks.
- Installed dual 6KVA UPS units in lower rack sections to provide independent left/right power paths and stabilize host-plus-network cabinet layout.

### 2. Execute a staged procurement strategy over six months

- Built side-by-side pricing evidence: new enterprise-grade core options versus validated refurbished architecture at much lower total cost.
- Created a whitelist for all required modules (C6504 slots, N3K 10G SFP modules, 2950 uplinks) and sourced units batch by batch through auction and certified refurbished channels.
- Performed burn-in checks per batch (fan state, SFP, backplane health) before reserve storage.
- Proceeded only after management accepted pricing and risk evidence.

### 3. Perform one-window off-peak cutover

- Scheduled the only viable weekend maintenance window (no office users, no external service dependency) and pre-labeled patching and weathermap plans.
- Onsite sequence:
  1. power on and validate new Core/Backbone/TOR base links;
  2. rewire rack-by-rack to remove chain topology;
  3. retire old Mikrotik backbone links in final stage to avoid network islands.
- Completed migration in one controlled outage window, minimizing total downtime and operational risk.

## Outcomes (monitoring-based)

- **Smokeping**: peak-hour packet-loss spikes returned to zero and remained stable.
- **SNMP traffic profile**: formerly concentrated 10G flows were redistributed across backbone and TOR layers, removing sustained hotspot saturation.
- **Weathermap visibility**: per-link utilization became observable and anomaly localization improved substantially.
- **vCenter and service stability**: heartbeat interruptions caused by false switch stalls were resolved; failover behavior recovered, and cabinet hosting stability improved for downstream workloads including LDAP/RADIUS and Azure ERP.
