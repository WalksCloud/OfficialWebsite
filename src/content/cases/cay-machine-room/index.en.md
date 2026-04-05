---
type: case
slug: cases/cay-machine-room
title: |
  CAY: Weekend Migration from Legacy Server Room to Compliant Facility
description: |
  CAY completed a one-weekend server-room relocation with structured cabling, dual-path UPS redesign, and environmental monitoring under tight space and budget constraints.
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

- In 2019Q4, CAY expanded office operations and needed to move into a new site.
- The old room was an improvised rack area with tangled wiring and desktop UPS units, with daytime temperature around 43C and nighttime around 35C.
- Before migration, WalksCloud had already stabilized server-farm and network baselines; this phase focused on room, power, and environmental compliance.

## Initial situation and pain points

1. **Harsh thermal conditions**: poor airflow and no hot/cold aisle design exposed equipment to sustained high temperature.
2. **Disordered power design**: desktop UPS sprawl, no dual-path feed model, and no bypass switch for safe maintenance.
3. **Budget and space compression**: the COO reduced the new room footprint and downgraded cooling specification, forcing redesign under constraints.

## Core challenges

- Complete migration in one weekend shutdown without delaying Monday operations.
- Fit one network/patch cabinet, three connected server cabinets, and one loose mixed cabinet into reduced space.
- Deliver dual-path UPS with bypass capability and leave room for growth.
- Keep temperature within safe operation range despite constrained HVAC.

## WalksCloud solution and execution

### 1. Weekend move with color-coded cabling

- Shut down Friday night, moved stacked legacy equipment into the new room, and reracked by function and load plan.
- Used pre-labeled three-color cabling from the facility vendor: green for office network, red for research internal network (allowlist), and gray for SIP.
- Because server-farm structure had been pre-stabilized, the new room activation focused on rack placement and reconnection, not full reconfiguration.

### 2. UPS and environment controls

- Implemented dual 6KVA UPS per server cabinet with bypass switches through professional power contractors, and split dual PSU feeds across separate UPS paths for maintenance continuity.
- Even without approval for a larger room or higher-spec HVAC, kept UPS expansion margin and ensured the power-circuit plan remained compliant.
- Activated existing environmental probes and IoT telemetry for immediate post-move monitoring of temperature, humidity, and power state.

## Outcomes

- **Downtime limited to one working day**: migration completed over weekend and operations resumed Monday.
- **Temperature improvement**: room temperature stayed below 30C after migration.
- **Power stability improved**: dual-path UPS plus bypass model reduced maintenance interruption risk, with power and environment indicators monitored through IoT plus Grafana.
- **Scalable under constraints**: despite reduced footprint, three-color cabling and UPS reservation kept future expansion viable.
