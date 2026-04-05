---
type: case
slug: cases/cay-dns-filter
title: |
  CAY DNS Filtering Evolution with AdGuard Home and Zone Views
description: |
  How CAY evolved from basic DNS controls to segmented filtering and audit-friendly responses using homelab-validated pipelines and low-maintenance operations.
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

- In 2018Q3, CAY had already completed server-room and network restructuring, but DNS still acted as simple forwarding with no malicious-domain controls.
- Internal services (management portals, development systems) were office-only, yet no zone-view split existed to hide internal real IP answers from external queries.
- Goal: deliver low-maintenance DNS filtering and split-horizon responses, validated in homelab before production rollout.

## Initial situation and pain points

1. **Frequent phishing and malicious-domain exposure**: users occasionally clicked phishing links and DNS had no preemptive block layer.
2. **No internal/external response split**: identical answers increased internal service exposure risk.
3. **Limited operations capacity**: IT needed subscription-based lists and automation rather than heavy manual curation.

## Core challenges

- Deploy on internal VMs without redesigning existing router and Wi-Fi architecture.
- Use `bind` zone view logic to vary responses by source network.

## WalksCloud solution and execution

### 1. First phase: Pi-hole plus `bind` zone view

- Built the method from prior dnsmasq/CaaS operational experience, then verified CI/CD and runner workflows in homelab before production.
- Deployed Pi-hole on internal VM and pointed router DNS forwarding to Pi-hole as default resolver.
- Implemented `bind` zone views:
  - internal-source queries return real internal addresses;
  - external or unknown-source queries return dummy IP or `NXDOMAIN`.
- Subscribed to public malicious-domain feeds and pre-validated list quality in homelab to reduce false positives.

### 2. Later phase: AdGuard Home plus CI/CD policy control

- After pipeline maturity, replaced Pi-hole with AdGuard Home and converted policy to version-controlled YAML/JSON config.
- Kept "homelab test first, production sync second" release discipline.
- Maintained standalone operations with lightweight periodic list and software update checks.

## Outcomes

- **Malicious domains were blocked at DNS layer**: precise totals were not retained, but block logs and field reports showed clear reduction in phishing incidents.
- **Split-horizon resolution reduced exposure**: external queries no longer received internal real IP responses.
- **Low operations overhead**: subscription feeds plus staged validation allowed IT to focus on exceptions instead of routine list maintenance.
