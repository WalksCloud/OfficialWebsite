---
type: case
slug: cases/tgw-zero-trust-monitoring
title: |
  TGW: Securing Internet-Exposed Camera Access with Jamf Trust
description: |
  WalksCloud re-scoped camera access through zero-trust controls and managed gateway design so only authorized users could reach surveillance systems through encrypted trust channels.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.62
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2025Q4, TGW had 16 surveillance cameras acquired through a security vendor, exposed directly to the internet over fixed-IP PPPoE without VPN isolation.
- The site had only minimal unmanaged AP coverage and no unified network-governance layer.
- Risk review by executive leadership identified full external exposure of camera management interfaces.

## Primary pain points

1. **Directly exposed management interfaces**: anyone with address knowledge could attempt access.
2. **Weak identity governance**: account protection relied on basic credentials without full access policy enforcement.
3. **Shared-space constraint**: TGW needed secure monitoring without rebuilding the entire site into dedicated infrastructure.

## WalksCloud solution

1. **Mikrotik PoE router plus Jamf Security Cloud gateway**

    - Deployed a Mikrotik PoE router in front of the camera host and established IPSec connectivity to Jamf Security Cloud.
    - Fixed camera-host addressing and enforced gateway-mediated routing for all target traffic.

2. **Jamf Trust zero-trust access channel**

    - Built camera-specific access policy under Jamf public-policy model and allowed only registered Jamf Trust app clients.
    - Restricted active camera access to the authorized executive account; camera app usage required Jamf Trust VPN activation.

3. **Cross-validation and audit evidence**

    - Verified baseline local connectivity behavior, then tested remote and non-classroom access with Jamf Trust activated.
    - Preserved connection logs and alerts in Jamf Security Cloud for ongoing review.

## Outcomes

- Camera management endpoints were removed from direct fixed-IP exposure.
- Authorized leadership could monitor securely through Jamf Trust, while unauthorized users could not connect even with known addresses.
- Security posture improved without full network reconstruction, using gateway plus trust-channel controls.
