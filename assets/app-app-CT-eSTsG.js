import{t as e}from"./rolldown-runtime-lhHHWwHU.js";import{C as t,Dt as n,Et as r,F as i,H as a,K as o,L as s,Q as c,S as l,St as u,T as d,W as f,b as p,c as m,h,mt as g,nt as _,p as v,w as y,wt as b,x as ee,y as x,z as te}from"./vendor-floating-ui-vue-DDgSBP2d.js";import{f as ne,g as re,h as ie}from"./vendor-nuxt-ui-BJ-FvrZs.js";import{n as S,r as C}from"./vendor-pinia-DI3_YICT.js";import{n as ae}from"./vendor-vue-i18n-BzyDMz7x.js";import{t as w}from"./vendor-yaml-DvEU08dI.js";var T={brandName:`WalksCloud 行雲資訊`,companyNameEn:`Walks Cloud Inc.`,companyNameZh:`行雲資訊有限公司`,baseUrl:`https://walks.cloud`,canonicalHost:`walks.cloud`,defaultLocale:`zh-tw`,locales:[`zh-tw`,`en`],localeFallbacks:{zh:[`zh-tw`,`en`],en:[]},robots:{policy:`index,follow`},socialImage:`/og_image.webp`,social:{fbAppId:`2122887114805377`,fbPages:`106051241536627`},og:{imageType:`image/webp`,imageWidth:420,imageHeight:420,siteName:`Walks Cloud Inc. 行雲資訊有限公司`,localeMap:{"zh-tw":`zh_TW`,en:`en_US`}},org:{url:`https://walks.cloud`,logo:`/logo-gradual.svg`,sameAs:[`https://www.facebook.com/WalksCloud`,`https://www.linkedin.com/company/walkscloud/`],contactPoint:[{telephone:``,contactType:`customer support`}]}},E=[{pageKey:`home`,type:`home`,slugs:{"zh-tw":``,en:``},titles:{"zh-tw":`行雲資訊有限公司 - 提供您最完善的 MIS 服務`,en:`WalksCloud - Get Everything Works Great`},descriptions:{"zh-tw":`行雲資訊有限公司提供您最完善的 MIS 服務，滿足軟硬體和網路維運需求，您專注公司發展，資訊管理及營運交給我們。`,en:`WalksCloud delivers comprehensive MIS services across hardware, software, and network operations so you can focus on growing your business.`},og:{type:`website`,image:`/og_image.webp`},index:!0,sitemap:{priority:1,changefreq:`daily`,lastmod:`build`},jsonld:{kind:`WebPage`}},{pageKey:`not-found`,type:`not-found`,slugs:{"zh-tw":404,en:404},titles:{"zh-tw":`找不到頁面`,en:`Page Not Found`},descriptions:{"zh-tw":`您要找的頁面不存在，請返回首頁。`,en:`The page you are looking for does not exist. Please return to the homepage.`},og:{type:`website`},index:!1,sitemap:{priority:0,changefreq:`yearly`,lastmod:`build`},jsonld:{kind:`WebPage`}},{pageKey:`cases-index`,type:`article-index`,slugs:{"zh-tw":`cases`,en:`cases`},titles:{"zh-tw":`案例分享`,en:`Case Studies`},descriptions:{"zh-tw":`完整收錄行雲資訊的案例文章。`,en:`Browse every published WalksCloud case study.`},articleIndex:{baseSlug:`/cases`,titleKey:`about-section.case-section-title`,descriptionKey:`article.index.cases-description`},sitemap:{priority:.7,changefreq:`weekly`,lastmod:`build`}},{pageKey:`tech-index`,type:`article-index`,slugs:{"zh-tw":`tech`,en:`tech`},titles:{"zh-tw":`技術文章`,en:`Tech Articles`},descriptions:{"zh-tw":`完整收錄行雲資訊的技術筆記與排障分享。`,en:`Explore WalksCloud’s full archive of technical notes.`},articleIndex:{baseSlug:`/tech`,titleKey:`about-section.tech-section-title`,descriptionKey:`article.index.tech-description`},sitemap:{priority:.7,changefreq:`weekly`,lastmod:`build`}}],D=e({default:()=>O}),O=`---
type: service
slug: services/8021x
title: 802.1X Authentication Deployment and Maintenance
description: WalksCloud combines RADIUS, certificate management, and network policy design to turn 802.1X into a reliable network gatekeeper, ensuring every wired or wireless session is verified, logged, and aligned with zero trust requirements.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.72
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Network Access Control
---

## Case Insight: Temporary Devices Flood the Network

A project team needed to onboard temporary testers and devices during a product qualification cycle. Although the switches supported 802.1X, the lack of centralized identity and certificate workflows forced the team to fall back to shared passwords, which led to:

- Accounts for temporary members lingering long after they left, leaving the network perimeter porous.
- Fragmented certificate and VLAN settings that made it impossible to trace device ownership.
- Compliance reviews that stalled because connection logs were scattered across devices.

## Limitations of DIY Experiments

- **Heavy labor drain**: Internal IT spent weeks tweaking FreeRADIUS, OpenLDAP, and PKI yet still lacked a stable enrollment and certificate issuance flow, delaying the entire project schedule.
- **Audit standstill**: Without a full connection history, responding to customer security questionnaires became impossible and major deals were put on hold.
- **Avoidable outages**: Emergency VLAN changes without a staging environment caused building-wide network outages, disrupting R&D work.

## How WalksCloud Solves It

1. **Rapid discovery and tabletop testing**: Workshops map user personas, VLAN segmentation, and failure scenarios, then simulate attacks to confirm current blind spots.
2. **Standardized building blocks**: We deploy FreeRADIUS or Cisco ISE tied to AD/IdP sources, layer in PKI, and establish enrollment plus device profiling workflows.
3. **Policy and audit operations**: Role-based policies, log retention, and report templates are codified, and we transfer operations guides, training, and maintenance agreements so certificate renewals and policy tuning never stall again.

With this approach, organizations retain existing network investments while gaining an expandable 802.1X perimeter. Partnering with WalksCloud ensures the first meter of your zero trust journey is dependable rather than a one-off project.
`,oe=e({default:()=>k}),k=`---
type: service
slug: services/8021x
title: 802.1X 驗證系統建置維護
description: 行雲資訊透過 RADIUS、憑證管理與網路策略設計打造 802.1X 網路門禁，確保有線與無線連線皆經驗證、記錄並符合零信任政策。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.72
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Network Access Control
---

## 案例洞察：臨時裝置大量接入的團隊協作

某專案團隊在產品測試期間需要臨時成員與各種測試設備接入網路，雖然設備支援 802.1X，卻因缺少統一管理而被迫改用共用密碼，結果導致以下狀況：

- 臨時成員離場後帳號仍存在，網路邊界形同虛設。
- 憑證與 VLAN 設定分散，IT 團隊無法追蹤裝置屬主。
- 稽核要求登入紀錄時，只能提供零散日誌，無法證明誰連上哪條網路。

## 內部摸索所付出的成本

- **大量人力耗損**：IT 花了好幾週摸索 FreeRADIUS / OpenLDAP 與 PKI，仍無法建立穩定的申請與簽發流程，專案時程被迫延後。
- **稽核停擺**：沒有完整的連線記錄，難以回應客戶的安全審查，合作案被迫暫停。
- **意外停機**：臨時調整 VLAN 時因缺乏測試環境造成整棟辦公室斷網，研發節奏被打亂。

## 行雲資訊如何拆解問題

我們的目標是打造「身分即邊界」的網路體驗，具體步驟如下：

1. **快速盤點與演練**：以工作坊釐清使用者類型、VLAN 分流與異常情境，並製作模擬攻擊腳本驗證現況缺口。
2. **導入標準化元件**：部署 FreeRADIUS / OpenLDAP 或 Cisco ISE，結合 AD/IdP 與 PKI，建立註冊與裝置識別流程。
3. **政策與稽核落地**：制定角色對應的網路策略、日誌保留、報表範本，並交付維運手冊、教育訓練與維護合約，確保憑證更新與策略調整不會再次成為瓶頸。

透過這套方法，企業能同時保有既有網路投資與治理能力，將 802.1X 轉化為可擴充的防線，而非單次專案。欠缺這一層門禁的風險巨大，因此選擇行雲資訊協作是維持營運安全的必要投資。
`,se=e({default:()=>A}),A=`---
type: service
slug: services/backup-security
title: Enterprise Backup and Security Solutions
description: WalksCloud combines Proxmox Backup Server, Mail Gateway, immutable storage, and layered security controls to create verifiable data resilience that keeps ransomware and user mistakes from derailing the business.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.74
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Backup & Security
---

## Case Insight: Resilience Gap Before Peak Season

One organization gearing up for a major campaign relied on a single NAS plus default cloud email filtering. A phishing attack triggered ransomware right before launch, revealing that:

- Backups lived on the same network segment and were encrypted along with production hosts.
- No immutable copies or recovery drills existed, so the integrity of data could not be proven.
- Customer notifications demanded email evidence, yet centralized logs were missing.

## Hidden Costs of DIY Approaches

- **Lost time and revenue**: IT spent days trying to restore data and the entire seasonal campaign was cancelled, wasting months of preparation.
- **Burned-out staff**: The team had to contain ransomware, stop spam blasts, and prepare audit reports simultaneously, leading to marathon incident shifts.
- **Compliance jeopardy**: When customers requested proof of failover readiness, the company lacked recovery records and nearly triggered contract termination.

## How WalksCloud Closes the Gaps

1. **Layered backup strategy**: We classify workloads, deploy Proxmox Backup Server with immutable storage and offline copies, and define RPO/RTO targets.
2. **Hardened mail ingress**: Mail Gateway plus DMARC/SPF/DKIM enforcement, detonation sandboxes, and URL rewriting shrink the phishing surface.
3. **Exercises and evidence**: Restoration guides, monitoring dashboards, and evidence collection workflows support recurring reports for audits.

By sharing resilience KPIs—recoverable backups, traceable email events, defensible incident reports—WalksCloud lets organizations focus on revenue while we guarantee the backup and security stack delivers when it matters.
`,j=e({default:()=>M}),M=`---
type: service
slug: services/backup-security
title: 企業備份與安全方案
description: 行雲資訊以 Proxmox Backup Server、不可變儲存與多層資安控管，打造可驗證的資料韌性，避免勒索與人為操作造成停擺。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.74
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Backup & Security
---

## 案例洞察：旺季前夕的備援缺口

一間正準備重大行銷檔期的企業使用單一 NAS 備份，且郵件閘道僅靠雲端服務預設規則。在活動前夕遭釣魚郵件入侵導致勒索軟體加密主機，才發現：

- 備份資料與主機同網段，被同步加密。
- 沒有不可變儲存與還原演練，無從驗證資料完整性。
- 客訴通知需要郵件紀錄，卻因為缺少集中日誌無法提供。

## 內部摸索的隱憂

- **時間與營收流失**：IT 花了好幾天還原資料仍失敗，整個旺季活動被迫取消，所有準備投入付諸流水。
- **人力疲乏**：團隊需要同時處理勒索與郵件濫發，還要準備稽核報告，造成長時間加班。
- **合規風險**：客戶投訴後要求提出備援佐證，卻拿不出還原紀錄，差點面臨合約終止。

## 行雲資訊如何逐點解決

1. **層級化備份策略**：盤點系統優先級，規劃 Proxmox Backup Server + 不可變儲存 + 離線複本，並制定 RPO/RTO（Recovery Point/Time Objective，資料可接受的恢復點與恢復時間目標）。
2. **演練與可視化**：建立還原演練手冊、監控儀表板與證據蒐集流程，定期輸出報告讓稽核可驗證。

行雲資訊與企業共享同一組韌性指標：備份可還原、郵件可追蹤、事件可回報。交由我們維護這套架構，能避免重複投入硬體卻得不到結果，也凸顯備份/資安是不可缺少的底線。
`,ce=e({default:()=>N}),N=`---
type: service
slug: services/container-devops
title: Containerization and DevOps
description: WalksCloud helps enterprises evolve delivery from Kubernetes foundations through CI/CD, GitOps, observability, and security so developers and IT speak the same operational language.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Container & DevOps
---

## Case Insight: Multi-version Releases Without Guardrails

A fast-scaling engineering group rushed to launch multiple regional versions and hastily stood up Kubernetes plus GitLab CI. Without governance they hit:

- Divergent YAML across dev/test/prod, forcing manual rollback steps.
- No image scanning or secret management, so security reviews stalled.
- Prometheus, Grafana, and logging stacks operating in silos, hiding root causes.

## Internal Assembly-Line Costs

- **Delayed launches**: Core engineers lost weeks babysitting clusters, pushing product timelines back by multiple quarters.
- **Operational fragility**: No IaC and sparse documentation meant any departure left the platform unowned, and a single upgrade took the stack offline for hours.
- **Security blockers**: Customers demanded supply-chain scans and key management; the team scrambled to bolt on tools and burned budget.

## How WalksCloud Lands It

1. **Architecture reset with IaC**: Using Terraform, we inventory and organize resources, then rebuild clusters, networks, storage, and quotas into more consistent environment templates.
2. **CI/CD plus GitOps**: We design GitHub Actions, GitLab CI, or other pipelines with container scanning and dynamic tests, then enforce deployment consistency through Argo CD or Flux.
3. **Observability and governance**: Prometheus, Grafana, Loki, and Wazuh are unified with SLO/SLA definitions, alert flows, RBAC, secret management, and audit reporting tied to zero-trust expectations.

WalksCloud co-defines delivery KPIs with clients: we own the platform and guardrails while product teams focus on features. The result is dependable velocity and compliance-ready automation instead of ad-hoc scripts.
`,P=e({default:()=>F}),F=`---
type: service
slug: services/container-devops
title: 容器化技術與 DevOps
description: 行雲資訊協助企業從 Kubernetes、CI/CD、GitOps 到觀測與安全建立可複製且可稽核的交付鏈，讓研發與 IT 有共同語言。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Container & DevOps
---

## 案例洞察：多版本同步上線的部署瓶頸

一個成長快速的研發團隊在短時間內要上線多個版本，於是匆促導入 Kubernetes 與 GitLab CI，但因缺乏治理而出現：

- 開發、測試、正式環境 YAML 不一致，回滾流程只能靠人工。
- 沒有 Image 掃描與密鑰管理，資安審查過不了。
- Prometheus、Grafana、Logging 各自為政，事件無法快速定位。

## 內部拼裝的隱藏成本

- **交付延宕**：為了處理叢集問題，核心團隊大量時間被拉走，產品功能延遲多個季度。
- **營運風險**：沒有 IaC（Infrastructure as Code，基礎設施程式化）與文件，工程師離職後沒有人了解叢集脈絡，導致一次升級就讓服務停擺數小時。
- **資安阻塞**：客戶要求補齊供應鏈掃描與密鑰管理，團隊只能臨時補洞，花費更多成本。

## 行雲資訊如何逐點落地

1. **架構重整與 IaC（Infrastructure as Code，基礎設施程式化）**：以 Terraform 盤點與整理資源，重建叢集、網路、儲存與配額，建立較一致的環境模板。
2. **CI/CD + GitOps**：針對 GitHub Actions、GitLab CI 等工具設計多階段管線，導入容器掃描、動態測試，再以 Argo CD/Flux 強化部署一致性。
3. **觀測與安全治理**：整合 Prometheus、Grafana、Loki、Wazuh，定義 SLO/SLA（Service Level Objective/Agreement，服務層級目標與協議）與告警流程，搭配 RBAC、密鑰管理、審核報告，確保符合客戶與內控需求。

我們與客戶共同設定交付指標，行雲資訊負責平台與治理，團隊專注在產品，形成速度與可靠度兼具的雙贏局面，也證明容器與 DevOps 必須一次整套設計，才能真正解決問題。
`,le=e({default:()=>I}),I=`---
type: service
slug: services/custom-dev
title: Custom System Development
description: WalksCloud brings a product mindset to bespoke system work, owning discovery through operations so the platform truly reflects how your teams get things done.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Custom Development
---

## Case Insight: Synchronizing Multiple Internal Systems

One cross-functional organization needed to unite operations, storage, and customer service, but commercial SaaS could not satisfy local compliance and reporting. The fallout:

- Staff duplicated data across multiple apps with frequent mistakes.
- KPIs arrived days late because every department relied on separate spreadsheets.
- Customers lost confidence when real-time tracking was unavailable.

## Internal Build Constraints

- **Talent and time**: Recruiting and onboarding an internal dev team would take half a year, freezing the initiative and inflating opportunity costs.
- **Operational overload**: Without CI/CD or documentation, internal tools quickly became tech debt, pulling IT away from strategic work.
- **Data inconsistency**: No unified model meant analytics stayed unreliable and decisions lagged.

## WalksCloud’s Delivery Tracks

1. **Co-create requirements**: Workshops with stakeholders map end-to-end flows, key metrics, and risk controls.
2. **Design and development**: Using modern stacks (Vue, Go, Rust, etc.) we build APIs, workflow engines, and interfaces for web, mobile, or internal use cases.
3. **Operate and educate**: CI/CD, observability, security checks, documentation, and training enable co-managed or fully managed operations.

Clients focus on business know-how while WalksCloud handles engineering and governance, ensuring every investment closes a real process gap.
`,L=e({default:()=>R}),R=`---
type: service
slug: services/custom-dev
title: 客製化系統開發
description: 行雲資訊以產品思維協助企業打造貼合流程的系統，從需求訪談、設計、開發到維運皆由專業團隊承接，確保系統能隨業務成長。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Custom Development
---

## 案例洞察：多系統協作的瓶頸

某跨部門組織需要同時整合營運、倉儲與客服系統，市面解決方案無法符合在地稽核與報表要求，造成：

- 員工在三套系統重複輸入貨物資料，錯誤率高。
- 各部門 Excel 版本不一，營運指標延遲三天才彙整。
- 客戶要求的即時追蹤無法提供，續約率下滑。

## 內部開發的隱性成本

- **人才與時間**：自行招募開發團隊需要耗費大半年的準備期，期間專案停滯，機會成本難以估算。
- **維運負擔**：缺乏 CI/CD 與文件，系統一旦上線就被需求淹沒，IT 無暇處理核心專案。
- **數據品質**：沒有統一資料模型，導致報表數據不一致，決策延遲。

## 行雲資訊的交付方式

1. **需求與流程共創**：與利害關係人進行工作坊，繪製端到端流程、定義關鍵指標與風險。
2. **系統設計與開發**：採用現代化框架（例如 Vue、Rust、Go 等），結合 API、流程引擎與資料整合，開發支援 web/mobile/內部作業的模組。
3. **營運與教育**：導入 CI/CD、觀測、資安檢查與文件，並提供使用訓練與共維模式，讓內部團隊可以持續迭代。

我們讓企業專注在流程 know-how，行雲資訊負責技術實作與治理，確保每一筆投資都回到解決真實需求，凸顯客製化系統的必要性。
`,z=e({default:()=>B}),B=`---
type: service
slug: services/hosting-operations
title: Website and Server Hosting Operations
description: WalksCloud operates application stacks end-to-end, combining infrastructure hardening, automation, observability, and incident response so cloud, colocation, or on-prem workloads stay resilient.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.72
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Hosting Operations
---

## Case Insight: Cross-cloud Operations Without Guardrails

A company managing multiple brands split workloads between cloud and colocation with no unified operating documentation. Within six months they experienced:

- Certificates expiring and breaking payment flows for extended windows.
- Discovering too late that databases lacked failover, so emergency scaling created even more latency.
- Security audits failing because change and incident records were incomplete.

## Hidden Costs of Internal Ops

- **Pager fatigue**: Developers cycled through on-call rotations, slowing product delivery.
- **Runaway spend**: Without capacity planning, cloud bills climbed while performance flatlined.
- **Audit setbacks**: Missing operations documentation and reports caused customer security reviews to be rejected, delaying revenue.

## WalksCloud’s Managed Approach

1. **Health assessment**: Review architecture, capacity, deployment pipelines, and security posture to prioritize fixes.
2. **Operational rigor**: Implement monitoring, alerting, patching, backups, and rehearsed incident workflows with documented change control.
3. **Continuous improvement**: Monthly SLA reports tie performance, cost, and roadmap insights to recommendations spanning cloud governance, CDN, or security enhancements.

WalksCloud shares dashboards and incident workflows so clients retain strategic control while we handle execution, keeping digital services aligned with business goals without burning out internal teams.
`,V=e({default:()=>H}),H=`---
type: service
slug: services/hosting-operations
title: 網站與伺服器代管營運
description: 行雲資訊負責網站、API、ERP 與客製應用的營運，整合架構調校、資安補強、監控告警與 24/7 值班，確保系統穩定與透明。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.72
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Hosting Operations
---

## 案例洞察：多品牌服務的跨雲環境

某企業同時營運多個品牌，網站部署在雲端與機房混合架構，後端系統則在公司機房。由於缺乏統一維運流程，半年內發生：

- 憑證過期導致交易流程長時間不可用。
- 高峰前才發現資料庫無備援，緊急擴容結果反而造成延遲。
- 資安稽核時拿不出變更紀錄與事件處理證據。

## 內部代管的隱形成本

- **值班壓力**：研發人員輪流待命，導致專案進度延宕，產品推進速度慢。
- **資源浪費**：因缺乏容量規畫，雲端支出月月增加卻未真正提升效能。
- **無法通過稽核**：缺乏報告與維運文件，客戶安全審查被退件，商機延後。

## 行雲資訊的代管方法

1. **現況健檢**：檢視架構、容量、程式部署與資安設定，列出風險與優先順序。
2. **營運制度化**：導入監控、告警、Patch Management、備份與演練，建立變更管理、值班流程與報告模板。
3. **持續優化**：定期回顧效能、成本與需求，提出調校、雲端治理或 CDN/安全加值方案，並提供透明 SLA（Service Level Agreement，服務水準協議）與月報。

我們與客戶共享儀表板與事件流程，企業掌握策略，行雲資訊負責執行。這種分工讓團隊能專注在商業計畫，同時確保網站與伺服器營運這項必要任務不會中斷。
`,U=e({default:()=>W}),W=`---
type: service
slug: services/iam-zitadel
title: Identity and Access Management with ZITADEL
description: WalksCloud uses ZITADEL to build centralized IAM so multi-tenant services and third-party teams share a single SSO/MFA, authorization, and audit process without the burden of maintaining a bespoke platform.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.74
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Identity & Access Management
---

## Case Insight: Multi-tenant Service, Fragmented Accounts

An organization serving multiple customer tenants had to manage service staff, partners, and third-party access in parallel. Manual AD accounts caused:

- Suppliers keeping access long after their contracts ended, with no clear audit trail.
- Developers reinventing OAuth/MFA inside each product, creating security debt.
- Login events fragmented across systems, turning investigations into multi-day efforts.

## Limits of Internal IAM Builds

- **Engineering drain**: Senior developers spent large portions of each month patching homegrown IAM components.
- **Risk exposure**: Lacking MFA and conditional access raised customer concerns and blocked deals.
- **Audit stress**: Every review required manually compiling reports, forcing legal and IT to work overnight.

## WalksCloud’s ZITADEL Delivery Approach

1. **Identity strategy design**: Workshops define tenant layers, roles, delegation, and approval flows.
2. **Deployment and integration**: We implement ZITADEL in your preferred environment, federate with AD/LDAP, SAML, or SCIM sources, and wire SSO/MFA into apps and APIs.
3. **Operations and governance**: Account activation/deactivation flows, approval workflows, reporting templates, operations guides, and training keep IAM growing with the business.

With WalksCloud managing the platform, clients focus on business logic while we guarantee consistent identity, access, and compliance outcomes—without the hidden cost of rolling their own IAM.
`,G=e({default:()=>K}),K=`---
type: service
slug: services/iam-zitadel
title: ZITADEL 身分與存取管理服務
description: 行雲資訊以 ZITADEL 建立集中式身分平台，將多租戶與第三方帳號納入同一套 SSO/MFA、權限與稽核流程，減輕自建 IAM 維護與合規壓力。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.74
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Identity & Access Management
---

## 案例洞察：多租戶服務的合規挑戰

某提供多租戶平台的企業需要同時管控客服、合作夥伴與第三方系統。過去依賴 AD 與手動帳號管理，產生：

- 供應商離場後帳號未停用，客戶審查發現存取紀錄無法追蹤。
- 開發團隊需自行實作 OAuth/MFA，造成大量技術債。
- 登入事件散落在多個系統，調查需花數天。

## 內部開發的限制

- **人日耗損**：多位資深工程師得長期維護自研 IAM，每個月都有大量時間被修補工作消耗。
- **風險提升**：MFA 與條件式存取支援不足，被客戶質疑安全性，影響合作案。
- **稽核壓力**：每次審查都要匯整多份報表，法務與 MIS 需通宵趕件。

## 行雲資訊導入流程

1. **身分策略設計**：以工作坊定義租戶層級、角色、授權矩陣與委派流程，建立「誰能看什麼」的底稿。
2. **ZITADEL 部署整合**：依需求選擇雲端或自建節點，與 AD/LDAP、SAML、SCIM、API Gateway 串接，導入 SSO 與 MFA 體驗。
3. **治理與營運**：建立帳號開通/停用流程、審批流程與稽核報告模板，並提供操作手冊、訓練與代管選項，確保平台隨需求成長。

透過行雲資訊，企業可專注在業務應用，IAM 由我們維護，雙方共同達成「身份一致、稽核合規」的必要目標，避免自建的高昂成本與風險。
`,q=e({default:()=>J}),J=`---
type: service
slug: services/idc-deployment
title: IDC Data Center Deployment and Maintenance
description: WalksCloud guides enterprises through every step of an IDC rollout—from design and cabling to vendor coordination and remote operations—so power, cooling, networking, security, and compliance are all on track.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.75
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Data Center Networking
---

## Case Insight: Building a DR Site Without Experience

An organization needed a colo-based DR environment but lacked data center expertise. They ran into:

- Rack power oversubscription that forced expensive rework before handoff.
- Vendor coordination delays with carriers and low-voltage teams, pushing timelines back by months.
- No remote-hands process or documentation, so engineers had to travel onsite for any change.

## Risks of Handling It Alone

- **Rework expenses**: Failure to meet cabling or power standards led to repeated installs and out-of-band testing.
- **Operational fragility**: Missing firewall redundancy or BGP design made regulatory DR drills impossible.
- **Staff drain**: Internal IT spent excessive time on logistics, asset tracking, and paperwork instead of product work.

## WalksCloud’s End-to-end Delivery

1. **Planning and coordination**: Assess capacity, redundancy, circuit needs, and compliance, then produce power/cooling/cabling plans while aligning carriers, integrators, and low-voltage vendors.
2. **Build and acceptance**: Deploy core/aggregation switches, firewalls, load balancers, and out-of-band consoles with standardized labeling and asset tracking, and support acceptance tests.
3. **Remote operations**: Provide remote-hands support, change records, documentation updates, and routine inspections to keep SLA and audit requirements satisfied.

IDC footprints exist to guarantee continuity. Partnering with WalksCloud transfers the build and run risk to an experienced team so your colocation environment delivers the resilience it was meant to provide.
`,ue=e({default:()=>Y}),Y=`---
type: service
slug: services/idc-deployment
title: IDC 機房建置與維運
description: 行雲資訊協助企業完成機房進駐、設備布署與遠端代維，確保電力、冷卻、網路、資安與合規一次到位。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.75
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Data Center Networking
---

## 案例洞察：擴建備援環境的挑戰

某企業需要在電信機房部署備援環境，但缺乏經驗，結果形成：

- 機櫃電力超載，需重新佈線才能驗收。
- 與機房、弱電廠商溝通耗時，時程延遲數個月。
- 沒有遠端協助與文件，工程師每次變更都得親自跑機房。

## 內部協調的風險

- **工程重工**：因未能一次符合線路/電力規範，被迫追加施工與停電測試，成本暴增。
- **營運風險**：缺少防火牆與 BGP 設定冗餘，法定演練無法完成，導致 DR 計畫失去意義。
- **人力負擔**：IT 團隊需花大量時間在行政協調與盤點，無法專注產品。

## 行雲資訊的整體交付

1. **規劃與協調**：評估容量、備援、線路、合規要求，製作用電/散熱/佈線計畫並協調營運商、系統整合商與弱電單位。
2. **建置與驗收**：設計核心/匯聚交換器、防火牆、負載平衡與 KVM/Console，建立標準化配線標籤與資產盤點，並陪同驗收與測試。
3. **遠端代維**：提供 Remote Hands、變更記錄、文件更新與例行巡檢，確保 SLA（Service Level Agreement，服務水準協議）與稽核需求可被滿足。

IDC 投資目的在於確保營運不中斷。與行雲資訊合作可將風險交由具經驗的團隊管理，減少試錯，並保證建置成果能長期維持，這是企業不得不完成的必要工程。
`,de=e({default:()=>fe}),fe=`---
type: service
slug: services
title: Services
description: |
  WalksCloud guides organizations through the PACE method—Plan, Assemble, Control, Enhance—to tackle IT and security work: we start by clarifying strategy, assemble the right technologies, run day-to-day control loops, and continuously enhance the stack so infrastructure, workplace networks, security governance, asset management, and custom apps progress alongside the business.
ogType: website
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: WebPage
---

## Common Scenarios

- A business is growing quickly, but the IT/MIS team is too lean to cover networking, monitoring, and security at the same time.
- A traditional industry team is moving through digital transformation, yet legacy systems cannot be integrated cleanly and audit requirements block progress.
- Overseas customers or enterprise reviews require stronger backup, identity management, and zero trust controls.

## Hidden Costs of DIY

- **Tools without integration**: Different departments buy separate products, leaving IT to spend excessive time coordinating and stitching them together.
- **No one maintains the stack**: After delivery, updates, patches, and documentation are neglected until the project is abandoned.
- **Compliance becomes a bottleneck**: Outages or data exposure erode customer trust when teams cannot meet audit expectations.

## WalksCloud Service Scope and Solution Areas

1. **Operational resilience**: Backup security, IDC deployment, virtualization, and hosting operations help organizations build verifiable resilience, recovery readiness, and service continuity.
2. **Delivery efficiency**: Container DevOps, custom development, and IT monitoring give engineering, IT, and operations teams a more consistent delivery model and stronger observability.
3. **Security governance**: 802.1X, VPN, zero trust, Wazuh SIEM, and IAM with ZITADEL reduce risk across network access, identity governance, and security visibility.
4. **Assets and networks**: Office networking, MDM, and IT outsourcing keep endpoints, accounts, and workplace environments healthy on a daily basis.

We define success metrics together with clients, then match a single service or a broader solution set to the actual need. Documentation, training, and reporting make sure each investment solves a real operational problem. If you already know which category is causing the most friction, start with the related service page below to find the most relevant direction faster.

---

<ServicesGrid />
`,pe=e({default:()=>me}),me=`---
type: service
slug: services
title: 服務項目
description: 行雲資訊以 PACE（Plan、Assemble、Control、Enhance）方法協助企業處理 IT 與資安課題：從 Plan 明確策略起步，接著 Assemble 組合與建置所需技術，進入 Control 持續監控與治理，最後以 Enhance 精進優化，帶領基礎架構、辦公網路、資安治理、資產管理與客製開發穩步向前、緊貼營運節奏。
ogType: website
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: WebPage
---

## 常見情境

- 企業快速成長，IT/MIS 人力不足，需要同時完成網路、監控與資安。
- 傳統產業進行數位轉型，但既有系統無法整合，流程與稽核卡關。
- 海外或客戶審查要求補齊備援、身份管理、零信任策略。

## DIY 的隱藏成本

- **工具堆疊卻無整合**，每個部門買不同方案，IT 需花大量時間協調。
- **沒有人維運**，導致專案交付後缺乏更新、補丁與文件，最後被棄用。
- **合規與稽核難以通過**，停機或資訊外洩造成客戶信任下滑。

## 行雲資訊的服務範圍與對應方案

1. **營運韌性**：備份安全、IDC 機房建置、虛擬化與網站代管，協助企業建立可驗證的備援、託管與持續營運能力。
2. **交付效率**：容器 DevOps、客製開發、IT 監控，讓研發、IT 與營運團隊有更一致的交付流程與可觀測性。
3. **資安治理**：802.1X、VPN、零信任、Wazuh SIEM、ZITADEL IAM，從網路存取、身份治理到日誌分析逐步降低風險。
4. **資產與網路**：辦公室網路、MDM、IT 外包與技術支援，維持端點、帳號與辦公環境的日常健康。

我們與客戶共同定義成功指標，依需求選擇單一服務或整體方案，並提供文件、教育與報告，確保每一項投資都能解決實際問題。若你已經知道目前卡在哪一類問題，也可以直接從下方對應服務頁開始閱讀，快速找到較接近現況的方案方向。

---

<ServicesGrid />
`,he=e({default:()=>ge}),ge=`---
type: service
slug: services/it-monitoring
title: IT Monitoring and Management Systems
description: WalksCloud architects monitoring platforms that merge metrics, logs, alerts, and operational process documentation across servers, networks, and applications so teams gain actionable insight.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Monitoring
---

## Case Insight: Distributed Ops with Fragmented Visibility

A multi-site organization staffed by a lean IT crew mixed and matched monitoring tools, leading to:

- Devices tracked only via SNMP while others emitted raw syslog, creating blind spots.
- Alerts scattered across email and chat threads, leaving on-call staff without context.
- Missing capacity trends, so peak-season campaigns repeatedly hit resource ceilings.

## Internal Build Challenges

- **Platform debt**: Maintaining a patchwork of tools felt like running a separate mission-critical system.
- **Slow remediation**: Without unified handling documentation, on-call engineers toggled between consoles for hours before restoring service.
- **Audit friction**: SLA evidence was inconsistent, frustrating customers and regulators.

## WalksCloud’s Implementation Steps

1. **Inventory and KPI design**: Catalog servers, networks, SaaS, and containers, then define KPI/SLO targets plus alert thresholds.
2. **Platform deployment and integration**: Roll out Zabbix/LibreNMS for infrastructure, Grafana for visualization, Graylog/Wazuh for logs, Arkime or akvorado for packet and flow analysis, and Gatus for API and service availability, then integrate notifications with collaboration tools and ticket flows.
3. **Operationalization**: Establish alert tiers, rotations, handling guides, and reporting templates, and provide training or managed services so the stack stays healthy.

With WalksCloud managing the observability backbone, organizations can focus on improving customer experience instead of wiring tools together.
`,_e=e({default:()=>ve}),ve=`---
type: service
slug: services/it-monitoring
title: IT 監控與管理系統
description: 行雲資訊以 Zabbix、LibreNMS、Grafana、Graylog、Wazuh、Arkime (Moloch)、akvorado、Gatus 等工具打造統一監控平台，提供指標、日誌、告警與處理流程文件，協助企業建立可行動的可觀測性。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Monitoring
---

## 案例洞察：多據點營運的監控混亂

某家在多個區域營運的企業僅由小型 IT 團隊支撐。由於各據點採用不同監控方案，導致：

- 有些設備僅靠 SNMP 監控，有些只記錄 syslog，資料不齊。
- 告警透過 email 與聊天工具混雜，值班無法追蹤進度。
- 沒有容量趨勢，季節性促銷常出現效能瓶頸。

## 內部建置的挑戰

- **平台養不起**：維護多個監控工具等於再養一套系統，還需自行補丁與升級。
- **事件延誤**：缺乏統一處理流程文件，值班人員需要一一查詢，平均修復時間往往得耗上數小時。
- **無法稽核**：當客戶要求 SLA（Service Level Agreement，服務水準協議）報告時，無法提出整合數據。

## 行雲資訊的實作步驟

1. **盤點與指標定義**：釐清伺服器、網路、SaaS、容器等資產，建立 KPI/SLO（Service Level Objective，服務層級目標）與告警閾值矩陣。
2. **平台部署與整合**：導入 Zabbix/LibreNMS 監控設備、Grafana 資料視覺化、Graylog/Wazuh 收集日誌、Arkime (Moloch)/akvorado 進行封包與流量分析、Gatus 監測 API 與關鍵服務可用性，並串接通訊軟體建立告警通知與工單流程。
3. **營運流程化**：建立告警分級、值班輪值、處理手冊與報告模板，並提供教育訓練與代管服務，確保監控平台本身也被監控。

有了行雲資訊協作，企業不再需要花時間整合工具，而能專注在改善服務品質。監控系統是必要防線，及早交給專業團隊能避免停機與商機損失。
`,ye=e({default:()=>be}),be=`---
type: service
slug: services/it-outsourcing
title: IT/MIS Outsourcing and Technical Support
description: WalksCloud provides managed IT operations, Help Desk, asset, and account workflows so companies without a full MIS team still enjoy measurable service levels.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Outsourcing
---

## Case Insight: Rapid Growth, No IT Bench

A product-focused company leaned on a single engineer for IT. During office moves and hiring spikes they faced:

- Manual onboarding taking two days per employee to prepare accounts and devices.
- No support channel, forcing staff to interrupt the lone engineer for every issue.
- Inaccurate asset and license records, leading to overspend and security gaps.

## Burden of Stretching Internal Staff

- **Opportunity cost**: Engineering talent spent time fixing Wi-Fi and printers instead of shipping features.
- **Governance gaps**: Without defined patching or configuration baselines, audits repeatedly raised concerns.
- **Poor employee experience**: Long wait times for help desk responses left new hires frustrated.

## WalksCloud’s Managed Flow

1. **Service activation**: We inventory assets, accounts, and policies; define SLAs and escalation matrices; and configure help desk tooling plus knowledge bases.
2. **Daily operations**: Remote and onsite support, patch and backup checks, capacity planning, asset and license management, and structured onboarding/offboarding workflows keep environments consistent.
3. **Governance and reporting**: Monthly summaries cover incidents, improvements, and forward-looking budgets, with training or co-management options for gradual insourcing.

WalksCloud keeps accountability for IT execution while clients retain strategic control, ensuring essential services run smoothly without building an internal department overnight.
`,xe=e({default:()=>Se}),Se=`---
type: service
slug: services/it-outsourcing
title: IT / MIS 外包與技術支援
description: 行雲資訊以代管方式提供 IT 維運、Help Desk、資產與帳號管理，讓企業在未建立完整 MIS 團隊前仍能享有可度量的服務。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Outsourcing
---

## 案例洞察：快速擴編時的 IT 真空

一間專注研發的企業只由單一工程師兼任 IT。結果辦公室搬遷與大量新進員工期間出現：

- 到職流程需手動準備帳號與裝置，平均耗時兩天。
- 使用者遇到事件沒有窗口，只能打擾工程師，工單堆積。
- 裝置與授權盤點失準，造成軟體超買與資安風險。

## 內部撐起 MIS 的負荷

- **機會成本**：研發資源被迫處理印表機與 Wi-Fi 問題，產品時程拖延。
- **治理缺口**：沒有修補與設定標準，內控與客戶稽核屢遭質疑。
- **員工體驗不佳**：支援等待時間過長，新人報到就留下壞印象。

## 行雲資訊的代管流程

1. **服務啟動**：盤點資產、帳號、應用與政策，制定 SLA（Service Level Agreement，服務水準協議）、聯絡窗口與矩陣，設定 Help Desk 工具與知識庫。
2. **日常運作**：提供遠端/到場支援、Patch 與備份檢查、容量規畫、資產與授權管理，以及到離職流程整理。
3. **治理與回饋**：每月報告事件統計、改善提案與預算建議，並協助教育訓練或與內部團隊共維以逐步內製。

行雲資訊讓企業保有決策權，我們則扛起執行責任，確保 IT 支援這項必要功能在預算內完成，同時釋放團隊能量投入核心業務。
`,Ce=e({default:()=>we}),we=`---
type: service
slug: services/mdm
title: MDM and Enterprise Device Management
description: WalksCloud plans and manages MDM programs with platforms such as Jamf Pro, Jamf Protect, Jamf Security Cloud, Mosyle, and related tooling so devices stay visible, compliant, and supportable across their lifecycle.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Mobile Device Management
---

## Case Insight: Standardizing Device Management Across Sites

A Mac and iPhone-centric organization relied on manual setup, scattered scripts, and informal handover. After opening additional offices, the gaps became visible:

- New hires waited days for configured devices, while IT still had to install software and tune environments device by device based on department, role, and location.
- Encryption, password, and patch policies varied by department.
- Customer and upstream security reviews required inventory, policy, lost-device handling, and alert evidence the team could not easily produce.
- Onboarding and offboarding lacked a fixed process for issuing, recovering, wiping, and redeploying devices.

## Risks of Rolling Your Own

- **Inconsistent builds**: Manual installs and scripts maintained by different people can conflict, turning routine updates into fleet-wide incidents.
- **Security blind spots**: Without MDM, endpoint protection, or conditional access, lost devices become hard to lock, locate, wipe, or audit.
- **Asset handover gaps**: If departing employees return devices without a reset, unenrollment, and redeployment process, the next user receives an unclear device state.
- **Resource drain**: IT spends too much time on setup, patching, device handoff, and repeated questions; if every new hire requires a device to be shipped back to IT or an onsite specialist, strategic work keeps getting delayed.

## WalksCloud’s Delivery Approach

1. **Discovery and platform selection**: Evaluate device mix, budget, IdP, audit requirements, and internal IT capacity to choose Jamf, Mosyle, or another suitable MDM platform.
2. **Enrollment and policy design**: Plan Apple Business Manager, automated enrollment, groups, permissions, configuration profiles, app catalogs, and patch policies.
3. **Device security and lost-device handling**: Define lock, lost mode, location, remote wipe, and alert follow-up workflows so missing or offline devices can be tracked and handled.
4. **Onboarding and offboarding device flow**: Standardize new-hire device issuance, app delivery, policy assignment, departure recovery, data wipe, unenrollment, and redeployment.
5. **Zero-touch onboarding deployment**: Connect MDM with SSO / IdP so employee attributes such as department, role, group, location, or employment type automatically drive policy assignment. After a new hire powers on the device and signs in with the company account, the device can enroll itself, enable encryption, receive network and VPN settings, install certificates, deploy required apps, configure browser and collaboration tools, and apply role-specific environments for engineering, design, sales, or operations teams. As long as the device can reach the network and enter enrollment, initialization and installation can be completed as a zero-touch workflow without shipping the device back to IT or sending a dedicated technician onsite.
6. **Automation and operations handover**: Integrate IdP, MFA, conditional access, endpoint alerts, and self-service workflows; provide dashboards, reports, runbooks, and training for managed or co-managed support.

MDM is not a single-product purchase. It is the operating chain for device lifecycle, security policy, and daily support. WalksCloud helps select, deploy, and operate the right platform so governance becomes repeatable instead of ad hoc.
`,Te=e({default:()=>Ee}),Ee=`---
type: service
slug: services/mdm
title: MDM 與企業裝置管理
description: 行雲資訊協助企業規劃與代管 MDM，依需求導入 Jamf Pro、Jamf Protect、Jamf Security Cloud、Mosyle 等平台，讓裝置從註冊、設定、修補到退役都可視且可稽核。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.8
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Mobile Device Management
---

## 案例洞察：多據點裝置管理標準化

某以 Mac、iPhone 與少量共用裝置為主的組織，原本靠手動設定、零散腳本與口頭交接維運。拓展多個辦公據點後，管理問題開始放大：

- 新人等數天才收到完成設定的裝置，IT 還需要依部門、職務與據點逐台安裝軟體與調整環境，影響上線速度。
- 不同部門套用不同設定，硬碟加密、密碼政策與軟體修補無法一致。
- 客戶或上游要求提供資安合規證據時，缺乏裝置清單、政策紀錄、遺失處置與告警報表。
- 員工到職與離職時，裝置發放、資料清除、權限移轉與設備收回缺少固定流程。

## 內部摸索的風險

- **部署不一致**：手動安裝與不同人維護的腳本容易互相衝突，版本更新後可能造成大量裝置異常。
- **資安盲點**：缺少 MDM、端點防護或條件式存取時，遺失裝置無法即時鎖定、定位或遠端清除，資料外洩風險上升。
- **資產交接斷點**：離職員工裝置若未收回、解除綁定與重置，下一位使用者可能拿到狀態不明的設備。
- **營運成本**：IT 團隊必須花上大半時間處理設定、修補、收發設備與重複詢問；若每位新人都要寄回設備或等待專人到場，核心專案也會被迫延後。

## 行雲資訊的導入流程

1. **需求盤點與平台選型**：依裝置類型、預算、既有 IdP、稽核要求與內部 IT 能力，評估 Jamf、Mosyle 或其他 MDM 平台的適用性。
2. **註冊與政策設計**：規劃 Apple Business Manager、自動註冊、群組、權限、設定檔、應用程式與 Patch Policy。
3. **裝置安全與遺失處理**：建立裝置鎖定、遺失模式、定位、遠端清除與告警追蹤流程，讓遺失或離線風險能被記錄與處理。
4. **到離職裝置流程**：定義新進員工配機、應用程式發放、權限套用、離職回收、資料清除、解除綁定與重新配發流程，避免設備與帳號交接斷點。
5. **零接觸到職部署**：將 MDM 與 SSO / IdP 串接，依使用者帳號中的部門、職務、群組、據點或雇用型態自動分流。新進員工第一次開機並登入企業帳號後，裝置即可自動完成註冊、加密、網路與 VPN 設定、憑證配置、必要軟體安裝、瀏覽器與協作工具設定，以及開發、設計、業務或行政角色所需的環境差異。只要裝置能連網並進入註冊流程，初始化與安裝可以零接觸完成，不需要先寄回 IT 整備，也不需要安排專職人員到場處理。
6. **自動化與營運交接**：整合 IdP、MFA、條件式存取、端點告警與自助服務；提供儀表板、報告、維運手冊與教育訓練，可由行雲資訊代管或與內部 IT 共維。

MDM 不只是單一工具採購，而是裝置生命週期、資安政策與日常營運的管理鏈。企業專注於員工體驗，行雲資訊協助選型、導入與維運，確保政策與安全真正落地。
`,De=e({default:()=>Oe}),Oe=`---
type: service
slug: services/office-network
title: Office Network Deployment and Maintenance
description: WalksCloud plans and operates office Wi-Fi, LAN, SD-WAN, VPN, and Internet edge environments so hybrid workplaces keep both performance and security in check.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.75
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Office Networking
---

## Case Insight: Local Multi-site Network Challenges

A multi-office organization reused aging gear when relocating, leading to:

- Wi-Fi dead zones and interference disrupting video calls.
- VLAN and firewall policies mixed up, causing guest and internal networks to overlap.
- No documentation, so every change depended on one engineer.

## Internal Planning Pain Points

- **Delayed openings**: Underestimating cabling and electrical needs meant rework that pushed move-in dates back by weeks.
- **Security gaps**: Without NAC/VPN integration or posture checks, zero-trust promises went unfulfilled.
- **Cost overruns**: Ad-hoc hardware purchases created vendor sprawl and expensive inventories.

## WalksCloud’s Solution Path

1. **Assessment and topology**: Onsite surveys, heatmaps, and spectrum analysis inform AP, switch, and SD-WAN placement plus power and redundancy planning.
2. **Build and policy design**: Deploy Cisco, Juniper, Palo Alto, Fortinet, or VyOS equipment; implement VLANs, QoS, zero-trust policies, guest access, and NAC/VPN integration.
3. **Operations and documentation**: Deliver monitoring, firmware management, incident handling, and complete documentation so expansions or moves can reuse proven templates.

This blueprint gives companies a repeatable network foundation, keeping office connectivity aligned with business growth.
`,ke=e({default:()=>Ae}),Ae=`---
type: service
slug: services/office-network
title: 辦公室網路建置與維運
description: 行雲資訊規劃並維運辦公室 Wi-Fi、LAN、SD-WAN、VPN 與 Internet Edge，確保混合辦公環境兼顧效能與資安。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.75
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Office Networking
---

## 案例洞察：本地多據點辦公的網路挑戰

某個多辦公據點運作的企業沿用舊有設備，搬遷後出現：

- Wi-Fi 死角與干擾，視訊會議常斷線。
- VLAN 與防火牆策略混亂，Guest/內部網路被混用。
- 管理員無文件可循，每次變更都需仰賴單一工程師。

## 內部規畫的難題

- **開幕延遲**：因不了解建物配線限制，搬遷時重新佈線，導致延後兩週啟用。
- **安全缺口**：未整合 NAC（Network Access Control，網路存取控制）/VPN 與裝置檢查，違反客戶零信任要求。
- **成本失控**：臨時採購設備造成品牌混搭，維修與備品成本增加。

## 行雲資訊的解決路徑

1. **現場與拓樸設計**：實地勘查、熱點模擬與頻譜分析，規畫 AP/交換器/SD-WAN，並評估電力、備援與布線。
2. **佈建與安全策略**：部署 Cisco/Juniper/Palo Alto/Fortinet/VyOS/Mikrotik/Aruba 等設備，設計 VLAN、QoS、零信任與訪客網路政策，整合 NAC（Network Access Control）與 VPN。
3. **營運與文件**：提供監控、韌體管理、事件處理與完整文件，建立搬遷/擴編模板，並可由行雲資訊代管或與內部共維。

透過這三步驟，我們協助企業建立可複製的網路藍圖，確保辦公室網路這項必要基礎與業務成長同步。
`,je=e({default:()=>Me}),Me=`---
type: service
slug: services/virtualization-cloud
title: Virtualization and Cloud Solutions
description: WalksCloud merges Proxmox VE, Ceph, SDN, and hybrid network designs to deliver highly available virtualization platforms for general workloads, AI, and VDI while lowering licensing and operational complexity.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.78
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Virtualization & Cloud
---

## Case Insight: Replacing a Legacy Platform

An enterprise left with expensive legacy virtualization licenses wanted to switch to open platforms but struggled with:

- Undefined maintenance windows and fear of production downtime.
- Limited Ceph and SDN expertise, resulting in subpar performance tests.
- Pressure to support GPU/AI workloads and offsite resilience without a unified architecture.

## Pitfalls of Self-managed Migrations

- **Overruns from downtime**: Misjudged migration durations halted production for hours, costing more than the original licenses.
- **Dual-platform chaos**: Operating legacy and new stacks simultaneously doubled operational effort.
- **Compliance gaps**: Missing DR reports and exercises meant audits could not be completed.

## WalksCloud’s Execution Path

1. **Assessment and blueprint**: Analyze workloads, capacity, SLA requirements, and dependencies; design migration waves and test PoC performance.
2. **Platform build**: Deploy Proxmox VE, Ceph, SDN, and GPU nodes with HA, replication, and, where appropriate, Terraform-managed infrastructure settings to reduce environment drift.
3. **Migration and operations**: Perform P2V/V2V moves, configure hybrid links, backups, and DR workflows, and deliver monitoring, reporting processes, and operations documentation—offering managed operations if needed.

This three-phase approach lets businesses retire legacy platforms quickly and support future workloads without sacrificing reliability.
`,Ne=e({default:()=>Pe}),Pe=`---
type: service
slug: services/virtualization-cloud
title: 虛擬化與雲端解決方案
description: 行雲資訊結合 Proxmox VE、Ceph、SDN 與混合雲策略，建立高可用虛擬化平台，支援一般工作負載、AI 與 VDI，降低授權與維運成本。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.78
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Virtualization & Cloud
---

## 案例洞察：舊平台汰換

某企業因舊虛擬化授權昂貴，決定改用開放式平台，但遇到：

- 無法規畫停機窗口，擔心生產系統遷移失敗。
- 對 Ceph 與 SDN 不熟，建置後效能不如預期。
- 需要 GPU/AI 支援與異地備援，卻沒有一致架構。

## 內部遷移的風險

- **停機風險**：錯估遷移時間導致產線停擺好幾個小時，造成的損失遠超出授權費用。
- **雙平台維護**：過渡期需同時維護舊平台與新叢集，人力成本倍增。
- **合規缺口**：缺少備援報告與演練紀錄，客戶稽核無法通過。

## 行雲資訊的實作路線

1. **盤點與藍圖**：分析工作負載、容量、SLA（Service Level Agreement，服務水準協議）與依賴系統，設計遷移批次與停機策略，並先行進行 PoC 驗證性能。
2. **平台建置**：部署 Proxmox VE、Ceph、SDN 與 GPU 節點，設計高可用、儲存複寫、備援電力與網路，並在需要時以 Terraform 管理基礎設施設定，降低環境落差。
3. **遷移與營運**：執行 P2V/V2V、建立混合雲連線、備份與 DR，建立監控與報告流程，提供維運文件與訓練，必要時由行雲資訊代管。

透過這些步驟，企業能快速汰換老舊平台並支援新工作負載，確保虛擬化這項必要基礎隨營運成長而進化。
`,Fe=e({default:()=>Ie}),Ie=`---
type: service
slug: services/vpn-remote
title: VPN and Remote Security Solutions
description: WalksCloud designs OpenVPN, WireGuard, clientless gateways, and conditional access architectures that keep hybrid workers connected without weakening the perimeter.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.72
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Remote Access
---

## Case Insight: Multi-site Collaboration with One VPN Server

A growing team continued relying on a single VPN appliance and ran into:

- Saturated bandwidth during peaks, crippling meetings and file sync.
- Shared accounts and expired certificates that triggered security audit flags.
- No device posture checks, letting ad-hoc laptops become entry points.

## Limits of In-house Maintenance

- **Operational disruptions**: VPN outages during peak periods delayed projects and even led to customer claims.
- **Security incidents**: Compromised shared credentials enabled attackers to reach internal networks, requiring lengthy investigations.
- **Staffing strain**: IT manually provisioned accounts, updated certificates, and troubleshot connectivity every day.

## WalksCloud’s Deployment Steps

1. **Needs assessment**: Analyze user personas, applications, bandwidth, and geography to define concurrency targets, SLAs, and zero-trust boundaries.
2. **Architecture build**: Deploy redundant OpenVPN/WireGuard/clientless gateways, integrate IdPs, MFA, device posture, and fine-grained segmentation.
3. **Operations and visibility**: Establish certificate rotation, self-service portals, monitoring, and audit reports, and provide operating guides, training, or managed services.

WalksCloud ensures remote access is both easy and safe, freeing teams to focus on collaboration while we keep the edge hardened.
`,Le=e({default:()=>X}),X=`---
type: service
slug: services/vpn-remote
title: VPN 及遠端安全解決方案
description: 行雲資訊設計 OpenVPN、WireGuard、零客戶端閘道與條件式存取架構，打造混合辦公需要的安全遠端入口。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.72
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Remote Access
---

## 案例洞察：本地多據點協作的併發瓶頸

某個多據點協作團隊在擴張後仍仰賴單一 VPN 伺服器，因此：

- 連線人數高峰時頻寬不足，會議與檔案同步大幅延遲。
- 帳號共用與憑證過期，安全稽核屢遭警告。
- 沒有裝置檢查，臨時設備成為攻擊入口。

## 內部維護的限制

- **營運受阻**：高峰期 VPN 甚至當機兩次，造成專案延宕與客戶求償。
- **安全曝險**：共用帳密被外洩，攻擊者利用 VPN 進入內網，後續花費數週調查。
- **人力負荷**：IT 需要不斷手動新增帳號、更新憑證與排除連線問題。

## 行雲資訊導入步驟

1. **需求盤點**：分析用戶類型、應用、頻寬與地理分佈，定義併發、SLA（Service Level Agreement，服務水準協議）與零信任邊界。
2. **架構設計**：部署 OpenVPN/WireGuard/安全閘道備援叢集，整合 IdP、MFA、裝置態勢，並以分段策略控制資源存取。
3. **營運與可視化**：建立憑證輪替、自助入口、監控與稽核報表，提供操作指引、教育與可選的代管服務。

行雲資訊確保遠端連線「好用又安全」，企業專注於協作與營運，我們則持續調校架構，使 VPN/零信任入口成為必要且可靠的能力。
`,Re=e({default:()=>ze}),ze=`---
type: service
slug: services/wazuh-asset
title: Wazuh Asset Visibility
description: WalksCloud adapts Wazuh for asset intelligence by deploying agents and policies that surface real-time hardware, software, and configuration data.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.74
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Asset Management
---

## Case Insight: Audits Without Reliable Inventories

A company facing annual audits ran on spreadsheets and manual reporting, leading to:

- Software versions mismatching production reality, causing audit rejections.
- No visibility into unauthorized applications or config drift.
- Weeks needed to identify assets impacted by a high-risk CVE.

## Challenges of Building Internally

- **Data silos**: CMDB, scanners, and EDR tools each held partial truth, and integrating them was costly.
- **Reporting grind**: Compiling evidence required multiple staff for an entire week.
- **Slow response**: Without realtime alerts, incidents escalated before IT knew which systems were affected.

## WalksCloud’s Delivery Model

1. **Deployment and policy**: Plan agent coverage across desktops, servers, and cloud workloads while balancing performance and visibility.
2. **Rules and dashboards**: Build decoders and correlation to track installs, configuration changes, and unauthorized software; surface insights via dashboards and exports.
3. **Workflow integration**: Feed data into CMDB, vulnerability management, ITSM, or GRC systems with ticket handling flows, audit packages, and training.

With WalksCloud maintaining the platform, organizations enjoy on-demand asset truth and can prove compliance or remediate vulnerabilities without guesswork.
`,Be=e({default:()=>Ve}),Ve=`---
type: service
slug: services/wazuh-asset
title: Wazuh 資產可視化
description: 行雲資訊將 Wazuh 延伸到資產管理，透過 Agent 與規則設計提供即時的硬體、軟體與設定資料，支援稽核、授權與弱點修補。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.74
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Asset Management
---

## 案例洞察：稽核壓力下的資產掌控

某需要面對年度稽核的企業擁有大量端點，原本依賴 Excel 與人工回報，結果出現：

- 軟體版本與實際狀態不符，稽核被退件。
- 無法即時得知未授權程式或設定變更。
- 高風險漏洞公告後，需要兩週才能找出受影響設備。

## 內部建置的挑戰

- **資料孤島**：CMDB（Configuration Management Database，組態管理資料庫）、弱掃、EDR 各自為政，整合成本高。
- **報告耗時**：整理資產報告需三位同仁耗上一週。
- **反應緩慢**：缺乏即時告警，事件發生後無法迅速定位。

## 行雲資訊的落地方式

1. **部署與策略**：規畫 Wazuh Agent 佈署範圍，考量桌機、伺服器、雲端工作負載與效能需求，建立資料收集策略。
2. **規則與儀表板**：客製解碼與規則，追蹤軟體安裝、設定漂移、未授權程式，並建立資產儀表板、匯出 API 與報告模板。
3. **流程串接**：將資料串入 CMDB、弱掃、ITSM（IT Service Management，IT 服務管理）或 GRC（Governance, Risk, Compliance，治理風險與合規）系統，建立工單處理流程、稽核證據與教育訓練，確保流程閉環。

透過這些步驟，企業可隨時掌握資產真相，行雲資訊負責系統維運與調校，確保資產可視化這項必要能力真正支援零信任與合規要求。
`,He=e({default:()=>Ue}),Ue=`---
type: service
slug: services/wazuh-siem
title: Wazuh SIEM Deployment and Operations
description: WalksCloud deploys and operates Wazuh SIEM to consolidate endpoint, server, cloud, and SaaS logs with MITRE-aligned alert handling workflows so analysts focus on real threats.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.78
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Security Operations
---

## Case Insight: Security Team Overwhelmed by Operations

A multi-site enterprise adopted Wazuh but lacked operational experience, leading to:

- Elastic indices overrunning capacity and delaying alerts by tens of minutes.
- Untuned rules producing extreme false-positive rates that exhausted on-call staff.
- Upgrades requiring downtime because no backup or recovery workflows existed.

## Pressures of Maintaining Wazuh Internally

- **Time sink**: Senior analysts spent most of their week tuning hardware and configs instead of investigating threats.
- **Audit pain**: Without MITRE mappings and compliance reports, customer reviews failed.
- **Incident delays**: Legitimate attacks hid among noisy alerts, stretching investigation timelines and increasing breach risk.

## WalksCloud’s Delivery Steps

1. **Architecture planning**: Design manager/indexer/agent topology with high availability, capacity buffers, and backup strategies.
2. **Rules and visualization**: Tune detections, ingest threat intel, and build MITRE ATT&CK dashboards while integrating SOAR or ITSM systems when needed so alerts become actionable tasks.
3. **Operations and enablement**: Handle upgrades, backup/restore drills, performance monitoring, handling guides, training, or managed services to keep the stack healthy.

With WalksCloud managing the platform, organizations can stop worrying about the SIEM itself and instead shorten detection and response cycles while trusting Wazuh as a dependable security backbone.
`,We=e({default:()=>Ge}),Ge=`---
type: service
slug: services/wazuh-siem
title: Wazuh SIEM 部署與維運
description: 行雲資訊協助部署與維運 Wazuh SIEM，整合端點、伺服器、雲端與 SaaS 日誌，提供 MITRE 對應與告警處理流程，讓安全團隊專注威脅分析。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.78
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Security Operations
---

## 案例洞察：資安團隊的維運瓶頸

某個多據點的企業採用 Wazuh，但因缺乏經驗而面臨：

- Elastic 索引經常爆量，告警動輒延遲數十分鐘。
- 規則未調整，誤報率極高，值班人力被耗光。
- 升級需要停機，沒有備援與還原流程。

## 內部維運的壓力

- **時間浪費**：團隊將大半時間花在調整硬體與設定上，威脅分析反而被擠壓。
- **稽核壓力**：缺乏 MITRE 映射與合規報告，客戶審查無法通過。
- **事件延遲**：真實攻擊被大量誤報淹沒，導致調查時間拉長並可能造成資料外洩。

## 行雲資訊的實作步驟

1. **架構規劃**：設計管理節點、索引與 Agent 佈署拓樸，確保高可用與容量彈性，並建立備援策略。
2. **規則與可視化**：調校規則、匯入威脅情資、建立 MITRE ATT&CK 儀表板，視需求串接 SOAR（Security Orchestration, Automation and Response）或 ITSM（IT Service Management，IT 服務管理）系統，將告警整理為可執行任務。
3. **營運與訓練**：提供版本升級、備份還原、效能監控與處理手冊，並安排教育訓練或代管，確保平台長期健康。

透過行雲資訊的協助，企業無需再為 SIEM 平台本身煩惱，而能專注在縮短偵測與回應時間，讓 Wazuh 成為必要且可靠的安全底座。
`,Ke=e({default:()=>qe}),qe=`---
type: service
slug: services/zero-trust
title: Zero Trust Architecture Enablement
description: WalksCloud turns zero-trust principles into practical rollouts by selecting the right mix of Jamf Security Cloud, Cloudflare Zero Trust, NetBird, and identity tooling.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.76
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Zero Trust
---

## Case Insight: Multi-office Teams Without Segmentation

A local multi-office company relied on VPN and flat networks. Once credentials leaked, attackers moved laterally because:

- VPN accounts provided broad access with no internal segmentation.
- SaaS and custom apps had inconsistent login experiences, frustrating users.
- Auditors demanded device health evidence the IT team couldn’t provide.

## Challenges of DIY Zero Trust

- **Point-solution sprawl**: Buying isolated tools without a strategy created complex management overhead.
- **Change friction**: Without cross-team alignment, onboarding/offboarding flows never matched new policies.
- **Budget leakage**: Security spending ballooned while gaps remained.

## WalksCloud’s Implementation Path

1. **Strategy and discovery**: Workshops clarify identity sources, application tiers, data flows, and success metrics.
2. **Platform deployment**: We configure Jamf Security Cloud, Cloudflare Zero Trust, or NetBird (or a combination) with posture checks, app proxies, and zero-client networks wired into IdPs, SIEM, and SD-WAN/VPN.
3. **Operations and governance**: Policy templates, handling guides, audit-ready reports, and training connect zero trust with onboarding, exception handling, and patching rhythms.

Zero trust is an ongoing posture, not a single product. WalksCloud orchestrates the people, processes, and platforms so the journey moves forward without derailing productivity.
`,Je=e({default:()=>Ye}),Ye=`---
type: service
slug: services/zero-trust
title: Zero Trust 安全架構導入
description: 行雲資訊以 Jamf Security Cloud、Cloudflare Zero Trust、NetBird 等組合落實零信任，將身分、裝置、應用與資料重新定義信任邊界。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.76
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Zero Trust
---

## 案例洞察：本地多據點團隊的邊界失守

某個多辦公據點協作的企業，VPN 與內網一旦被入侵就無任何分段，因此：

- 攻擊者利用 VPN 帳密入侵後迅速橫向移動。
- SaaS 與自建系統登錄體驗不一致，使用者抱怨多因子流程冗長。
- 稽核要求裝置健康證明，IT 卻無任何資料可提供。

## 內部摸索的挑戰

- **點狀部署**：只裝了新的 VPN 或 SWG（Secure Web Gateway，安全網頁閘道），卻沒有策略，造成管理複雜。
- **轉型卡關**：缺乏部門間溝通，變更流程與到離職機制無法配合。
- **成本外溢**：購買多套工具卻沒有整合，資安預算被消耗殆盡。

## 行雲資訊的導入路線

1. **策略與盤點**：透過工作坊釐清身分來源、應用分類、資料價值與存取場景，定義階段目標與成功指標。
2. **平台與整合**：根據需求選擇 Jamf Security Cloud、Cloudflare Zero Trust、NetBird 等解決方案，部署身分、裝置態勢、應用 Proxy 與零客戶端網路，並串接 IdP、SIEM、SD-WAN/VPN。
3. **營運與治理**：建立政策模板、處理手冊、稽核報表與教育訓練，整理到離職流程、異常回應與設備修補節奏，確保策略能持續演進。

零信任是必要的安全升級，並非單點產品。行雲資訊以可執行的步驟協助企業逐步落地，讓策略、工具與流程緊密連結，避免無謂投資並確保風險受控。
`,Xe=Object.assign({"../content/services/8021x.en.md":O,"../content/services/8021x.zh-tw.md":k,"../content/services/backup-security.en.md":A,"../content/services/backup-security.zh-tw.md":M,"../content/services/container-devops.en.md":N,"../content/services/container-devops.zh-tw.md":F,"../content/services/custom-dev.en.md":I,"../content/services/custom-dev.zh-tw.md":R,"../content/services/hosting-operations.en.md":B,"../content/services/hosting-operations.zh-tw.md":H,"../content/services/iam-zitadel.en.md":W,"../content/services/iam-zitadel.zh-tw.md":K,"../content/services/idc-deployment.en.md":J,"../content/services/idc-deployment.zh-tw.md":Y,"../content/services/index.en.md":fe,"../content/services/index.zh-tw.md":me,"../content/services/it-monitoring.en.md":ge,"../content/services/it-monitoring.zh-tw.md":ve,"../content/services/it-outsourcing.en.md":be,"../content/services/it-outsourcing.zh-tw.md":Se,"../content/services/mdm.en.md":we,"../content/services/mdm.zh-tw.md":Ee,"../content/services/office-network.en.md":Oe,"../content/services/office-network.zh-tw.md":Ae,"../content/services/virtualization-cloud.en.md":Me,"../content/services/virtualization-cloud.zh-tw.md":Pe,"../content/services/vpn-remote.en.md":Ie,"../content/services/vpn-remote.zh-tw.md":X,"../content/services/wazuh-asset.en.md":ze,"../content/services/wazuh-asset.zh-tw.md":Ve,"../content/services/wazuh-siem.en.md":Ue,"../content/services/wazuh-siem.zh-tw.md":Ge,"../content/services/zero-trust.en.md":qe,"../content/services/zero-trust.zh-tw.md":Ye}),Ze=Object.keys(Xe),Qe=e=>{let t=e.match(/\.([a-z-]+)\.md$/i);return t?t[1]:null},$e=e=>e.replace(/\.([a-z-]+)\.md$/i,``).replace(/^..\//,``),et=(e=``)=>{let t=typeof e==`string`?e:String(e||``),n=t.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);return n?{meta:w.parse(n[1])||{},body:t.slice(n[0].length)}:{meta:{},body:t}},tt=(e=``)=>e.replace(/^\/+/,``).replace(/\/+$/,``),nt=()=>{let e=new Map;return Ze.forEach(t=>{let n=Xe[t],{meta:r}=et(n),i=Qe(t)||`zh-tw`,a=tt($e(t).split(`/`).slice(1).join(`/`)),o=Object.hasOwn(r,`slug`),s=tt(o?r.slug:a);!o&&s.endsWith(`/index`)&&(s=s.replace(/\/index$/,``));let c=s?s.replace(/\//g,`-`):r.pageKey||``,l=r.type||`page`,u=s,d=r.title||``,f=r.description||``,p=r.ogType,m=r.index!==!1,h=r.sitemap||{},g=r.jsonld||{},_=r.deploy===!0,v=e.get(c)||{pageKey:c,type:l,slugs:{},titles:{},descriptions:{},og:{},index:m,sitemap:h,jsonld:g,deploy:!1};v.type=l,v.slugs[i]=u,v.titles[i]=d,f&&(v.descriptions[i]=f),p&&(v.og.type=p),v.index=m,v.sitemap=h,v.jsonld=g,v.deploy=v.deploy||_,e.set(c,v)}),Array.from(e.values())},rt=(e=``)=>e?(typeof e==`string`?e:String(e)).replace(/^\/+/,``).replace(/\/+$/,``):``,it=(()=>{let e=nt(),t=new Map;return[...E,...e].forEach(e=>{t.set(e.pageKey,e)}),Array.from(t.values())})(),at=()=>T,ot=()=>it,Z=e=>it.find(t=>t.pageKey===e),st=(e,t)=>e&&(rt(e.slugs?.[t])||rt(e.slugs?.[T.defaultLocale])||Object.values(e.slugs||{}).map(e=>rt(e)).find(Boolean))||``,ct=(e,t)=>st(Z(e),t),lt=(e,t)=>{let n=ct(e,t);if(!n)return null;let r=n.split(`/`),i=r[0],a=r.slice(1).join(`/`)||`index`;switch(i){case`services`:return`../content/${i}/${a}`;case`cases`:return`../content/${i}/${a}`;case`tech`:return`../content/${i}/${a}`;default:return`../content/${n}`}},Q=(e,t)=>{let n=Z(e);if(!n)return`/`;let r=st(n,t);return r?`/${t}/${r}/`:`/${t}/`},ut=(e,t)=>{let n=Z(e);if(!n)return`/`;let r=st(n,t);return r?`/${r}/`:`/`},dt=(e,t)=>{let n=Q(e,t);return`${T.baseUrl?.replace(/\/+$/,``)||``}${n}`},ft=(e,t)=>Z(e)||null,pt=()=>T.locales||[],mt=S(`alert`,{state:()=>({alert:{title:``,content:``},loading:!1}),actions:{showLoading(){this.loading=!0},hideLoading(){this.loading=!1},message(e,t,n=!1){this.alert.title=e,this.alert.content=t,n&&setTimeout(()=>{this.clear()},5e3)},clear(){this.alert.title=``,this.alert.content=``}}}),$=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ht={key:0,class:`relative z-200`},gt={class:`fixed inset-0 z-10 w-screen overflow-y-auto`},_t={class:`flex min-h-[50vh] md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0`},vt={key:0,class:`w-5/6 lg:w-1/4 relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 bg-white dark:bg-[#222831]`},yt={class:`px-5 pt-6`},bt=[`textContent`],xt={class:`my-2 lg:mt-2 lg:mb-4`},St=[`textContent`],Ct={class:`px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6`},wt={class:`bg-white/70 dark:bg-[#222831]/70 z-200 fixed`},Tt={class:`mt-2 font-weight-bold`},Et=$({__name:`Alert`,setup(e){let r=mt(),{alert:i,loading:o}=C(r),{clear:s}=r;return(e,r)=>(a(),t(h,null,[u(i).title?(a(),t(`div`,ht,[r[1]||=p(`div`,{class:`fixed inset-0 bg-gray-500/75 transition-opacity duration-300`,"aria-hidden":`true`},null,-1),p(`div`,gt,[p(`div`,_t,[d(m,{name:`slide-down`,appear:``},{default:_(()=>[u(i).title?(a(),t(`div`,vt,[p(`div`,yt,[p(`h3`,{class:`font-bold text-gray-900 dark:text-gray-300`,textContent:n(u(i).title)},null,8,bt),p(`div`,xt,[p(`p`,{class:`text-gray-500 dark:text-gray-200`,textContent:n(u(i).content)},null,8,St)])]),p(`div`,Ct,[p(`button`,{onClick:r[0]||=(...e)=>u(s)&&u(s)(...e),type:`button`,class:`text-white bg-primary border hover:border-primary hover:bg-white hover:text-primary dark:border-transparent dark:hover:bg-[#222831] rounded-lg text-sm px-3 lg:px-5 py-1.5 lg:py-2.5`},n(e.$t(`close`)),1)])])):l(``,!0)]),_:1})])])])):l(``,!0),p(`div`,wt,[p(`div`,{class:b([{flex:u(o),hidden:!u(o)},`w-screen h-screen text-center items-center justify-center`])},[p(`div`,null,[r[2]||=p(`svg`,{class:`text-gray-300 animate-spin`,viewBox:`0 0 64 64`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`114`,height:`114`},[p(`path`,{d:`M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),p(`path`,{d:`M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,class:`text-primary`})],-1),p(`p`,Tt,n(e.$t(`loading`)),1)])],2)])],64))}},[[`__scopeId`,`data-v-6441aa44`]]),Dt={class:`text-center px-3 pb-3 lg:py-6 lg:px-0 text-sm lg:text-base`},Ot=[`href`],kt=[`href`],At={class:`text-sm lg:leading-1`},jt=[`href`],Mt=[`href`],Nt=[`href`],Pt={__name:`Footer`,setup(e){let r={BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,__APP_ENV__:void 0,buildHash:`d265717`,buildTime:`2026-04-28 12:29:48 +08:00`};return(e,i)=>{let s=o(`font-awesome-icon`);return a(),t(`footer`,Dt,[i[3]||=p(`p`,null,[y(` © 2025 — Walks Cloud Inc. `),p(`img`,{class:`inline-block dark:hidden align-bottom ms-2 h-5`,alt:``,src:`/logo-wordmark-company.svg`}),p(`img`,{class:`hidden dark:inline-block align-bottom ms-2 h-5`,alt:``,src:`/logo-wordmark-company-white.svg`})],-1),p(`a`,{href:e.$t(`footer.facebook_url`),target:`_black`,class:`inline-block my-2 me-2`},[d(s,{icon:[`fab`,`square-facebook`],class:`text-2xl text-gray-600 dark:text-gray-300`})],8,Ot),p(`a`,{href:e.$t(`footer.linkedin_url`),target:`_black`,class:`inline-block my-2`},[d(s,{icon:[`fab`,`linkedin`],class:`text-2xl text-gray-600 dark:text-gray-300`})],8,kt),p(`p`,At,[i[0]||=p(`a`,{href:`https://github.com/WalksCloud/OfficialWebsite`},`GitHub Repo`,-1),i[1]||=y(` (`,-1),p(`a`,{href:`https://github.com/WalksCloud/OfficialWebsite/commit/`+u(r).buildHash},`#`+n(u(r).buildHash),9,jt),y(` `+n(u(r).buildTime)+`) | `,1),p(`a`,{href:e.$t(`footer.term-of-use_url`),target:`_blank`},n(e.$t(`footer.term-of-use`)),9,Mt),i[2]||=y(` | `,-1),p(`a`,{href:e.$t(`footer.privacy-policy_url`),target:`_blank`},n(e.$t(`footer.privacy-policy`)),9,Nt)])])}}},Ft={class:`fixed top-0 left-0 w-full z-50`},It={class:`bg-white/85 dark:bg-[#222831]/85 shadow backdrop-blur-sm`},Lt={class:`px-3 lg:px-6 py-3 lg:py-4 flex justify-between items-center`},Rt=[`href`],zt={class:`text-xl lg:text-2xl ms-2 inline-block align-middle font-barlow font-bold text-primary dark:text-white`},Bt={key:0,class:`material-symbols-outlined`},Vt={key:1,class:`material-symbols-outlined`},Ht={key:1,class:`space-x-4 hidden lg:flex`},Ut=[`href`,`onClick`],Wt={class:`ms-2 locale-changer inline-block`},Gt={class:`flex flex-col leading-4 whitespace-normal wrap-break-word sm:block`},Kt={class:`font-semibold block sm:inline`},qt={class:`font-normal block wrap-break-word sm:inline sm:ml-2`},Jt={key:1,class:`lg:hidden bg-white/85 dark:bg-[#222831]/85 py-6 text-center flex flex-col space-y-4`},Yt=[`href`,`onClick`],Xt={class:`mt-2 locale-changer`},Zt={class:`inline-flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600`},Qt=[`onClick`],$t=$({__name:`Navbar`,setup(e){let{locale:i,t:m,tm:y}=ae(),ne=y(`nav-links`),S=g(null),C=ie(),w=re(),T=at(),E=T.locales||[],D=x(()=>E.map(e=>({code:e,name:m(`locales.${e}`)}))),O=e=>e<=31||e>=127&&e<=159||e>=768&&e<=879,oe=e=>e>=4352&&e<=4447||e>=9001&&e<=9002||e>=11904&&e<=42191||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65135||e>=65280&&e<=65376||e>=65504&&e<=65510||e>=127744&&e<=129791||e>=131072&&e<=262141,k=e=>{if(!e)return 0;let t=e.codePointAt(0)||0;return O(t)?0:oe(t)?2:1},se=e=>Array.from(String(e||``)).reduce((e,t)=>e+k(t),0),A=x(()=>{let e=D.value.reduce((e,t)=>Math.max(e,se(t.name)),0);return`${Math.max(e+6,10)}ch`}),j=x(()=>C.name.match(/^(not-found|not-found-nonprefixed)$/)!==null),M=e=>{let t=e.target.value;le(t),z.value=!1},ce=e=>{M({target:{value:e}})},N=e=>{!e||e===V.value||le(e)},P=(e,t)=>Object.hasOwn(e?.slugs||{},t),F=(e,t)=>{let n=Z(e);if(!n||P(n,t))return{locale:t,fallbackFromMissingTarget:!1};let r=C.meta.locale||i.value||T.defaultLocale,a=r&&P(n,r)&&r||T.defaultLocale&&P(n,T.defaultLocale)&&T.defaultLocale||E.find(e=>P(n,e))||t;return{locale:a,fallbackFromMissingTarget:a!==t}},le=e=>{let t=C.meta.pageKey||`home`,{locale:n,fallbackFromMissingTarget:r}=F(t,e),a=r?C.fullPath:(()=>{let e=Q(t,n),r=ut(t,n);return n===T.defaultLocale&&!(typeof navigator>`u`)&&(navigator.languages||[navigator.language||``]).some(e=>(e||``).toLowerCase().startsWith(n.toLowerCase()))?r:e})();return i.value=e,localStorage.setItem(`locale`,e),w.push(a).catch(()=>{})},I=()=>{if(globalThis.window)return 100;let e=getComputedStyle(document.documentElement);return Number.parseFloat(e.getPropertyValue(`--header-offset`))||90},L=()=>{let e=I(),t=!1;for(let n in ne){let r=document.getElementById(n);if(!r)continue;let i=r.getBoundingClientRect();if(i.top<=e&&i.bottom>=e){S.value=n,t=!0;break}}t||(S.value=null)};te(()=>{window.addEventListener(`scroll`,L,{passive:!0}),L()}),s(()=>{window.removeEventListener(`scroll`,L)});let R=e=>{if(globalThis.window!==void 0){if(globalThis.window.requestAnimationFrame===`function`){globalThis.window.requestAnimationFrame(e);return}setTimeout(e,0)}},z=g(!1),B=()=>{z.value=!1},V=x(()=>i.value||C.meta.locale||T.defaultLocale),H=x(()=>{let{locale:e,fallbackFromMissingTarget:t}=F(C.meta.pageKey||`home`,V.value);return t?{title:m(`locale-switch.unavailable.title`),message:m(`locale-switch.unavailable.message`,{requested:m(`locales.${V.value}`),fallback:m(`locales.${e}`)})}:null}),U=x(()=>C.meta.prefixed===!1?ut(`home`,V.value):Q(`home`,V.value));c(()=>C.meta.pageKey,e=>{if(e!==`home`){S.value=null;return}R(()=>L())},{immediate:!0}),c(()=>C.fullPath,()=>{C.meta.pageKey===`home`&&R(()=>L())});let W=e=>`${U.value}#${e}`,G=e=>e?w.push(e).catch(()=>{}):Promise.resolve(),K=e=>{e?.preventDefault(),S.value=null,G(U.value).finally(()=>{R(()=>{window.scrollTo({top:0,behavior:`smooth`})})})},q=(e,t)=>{e?.preventDefault(),S.value=t,B(),G(W(t))};return(e,i)=>{let s=o(`ULocaleSelect`),c=o(`UBanner`);return a(),t(`header`,Ft,[p(`div`,It,[p(`nav`,Lt,[p(`div`,null,[p(`a`,{href:U.value,"aria-label":`Home`,onClick:v(K,[`prevent`])},[i[1]||=p(`img`,{class:`rounded-[50%] w-7 lg:w-12.5 inline-block`,alt:`WalksCloud Logo`,src:`/logo-gradual.svg`},null,-1),p(`h2`,zt,n(e.$t(`brand-name`)),1)],8,Rt)]),j.value?l(``,!0):(a(),t(`button`,{key:0,class:`lg:hidden dark:text-white`,onClick:i[0]||=e=>z.value=!z.value},[z.value?(a(),t(`span`,Vt,`close`)):(a(),t(`span`,Bt,`menu`))])),j.value?l(``,!0):(a(),t(`div`,Ht,[(a(!0),t(h,null,f(e.$tm(`nav-links`),(e,r)=>(a(),t(`a`,{key:r,class:b([{"text-primary":S.value===r,"dark:text-white":S.value!==r},`hover:text-primary`]),href:W(r),onClick:v(e=>q(e,r),[`prevent`])},n(e),11,Ut))),128)),p(`div`,Wt,[d(s,{class:`wc-locale-select w-auto`,"model-value":V.value,locales:D.value,size:`sm`,variant:`ghost`,"search-input":!1,ui:{base:`w-auto min-w-0 pl-2.5 pr-2.5`,content:`z-[70]`,value:`truncate-none whitespace-nowrap`,item:`wc-locale-item`,itemLabel:`whitespace-nowrap pr-0`},style:r({width:A.value}),"onUpdate:modelValue":N},null,8,[`model-value`,`locales`,`style`])])]))])]),H.value?(a(),ee(c,{key:0,color:`warning`,icon:`i-lucide-languages`,ui:{container:`h-16 min-h-16 py-1 sm:h-8 sm:min-h-0 sm:py-0.5`,center:`min-h-0 items-center gap-1.5`,title:`text-sm leading-4 text-gray-600 dark:text-gray-300`,icon:`size-3.5 text-gray-600 dark:text-gray-300`},class:`border-t border-amber-300/60 bg-amber-200/70 shadow-sm backdrop-blur-sm dark:border-amber-400/55 dark:bg-amber-400/30`},{title:_(()=>[p(`span`,Gt,[p(`span`,Kt,n(H.value.title),1),p(`span`,qt,n(H.value.message),1)])]),_:1})):l(``,!0),z.value&&!j.value?(a(),t(`div`,Jt,[(a(!0),t(h,null,f(e.$tm(`nav-links`),(e,r)=>(a(),t(`a`,{key:r,class:b([{"text-primary":S.value===r,"dark:text-white":S.value!==r},`hover:text-primary`]),href:W(r),onClick:v(e=>q(e,r),[`prevent`])},n(e),11,Yt))),128)),p(`div`,Xt,[p(`div`,Zt,[(a(!0),t(h,null,f(u(E),r=>(a(),t(`button`,{key:`locale-${r}`,class:b([[e.$i18n.locale===r?`bg-primary text-white`:`bg-white text-gray-700 dark:bg-[#222831]/85 dark:text-white`],`px-4 py-2 text-sm`]),onClick:e=>ce(r)},n(e.$t(`locales.${r}`)),11,Qt))),128))])])])):l(``,!0)])}}},[[`__scopeId`,`data-v-ff743adc`]]),en={__name:`App`,setup(e){let n=()=>typeof window>`u`||typeof document>`u`||document.readyState===`complete`?Promise.resolve():new Promise(e=>{window.addEventListener(`load`,e,{once:!0})});return te(async()=>{await i(),!(typeof window>`u`)&&(await n(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{window.dispatchEvent(new Event(`walkscloud:app-ready`))})}))}),(e,n)=>(a(),t(h,null,[d(Et),p(`div`,{class:b([`min-h-screen bg-white dark:bg-[#222831]`,e.$i18n.locale===`en`?`font-barlow`:``])},[d($t),d(u(ne)),d(Pt)],2)],64))}};export{pe as $,Ie as A,T as At,Ee as B,He as C,j as Ct,Re as D,oe as Dt,ze as E,k as Et,je as F,xe as G,we as H,Ae as I,ve as J,be as K,ke as L,Pe as M,Ne as N,X as O,O as Ot,Me as P,me as Q,Oe as R,Ue as S,M as St,Be as T,se as Tt,Ce as U,Te as V,Se as W,ge as X,_e as Y,he as Z,Je as _,le as _t,$ as a,q as at,Ge as b,N as bt,Q as c,W as ct,Z as d,V as dt,fe as et,ot as f,B as ft,Ye as g,I as gt,ft as h,L as ht,Et as i,J as it,Fe as j,Le as k,D as kt,lt as l,U as lt,ct as m,R as mt,$t as n,Y as nt,dt as o,K as ot,at as p,z as pt,ye as q,Pt as r,ue as rt,ut as s,G as st,en as t,de as tt,pt as u,H as ut,qe as v,F as vt,Ve as w,A as wt,We as x,ce as xt,Ke as y,P as yt,De as z};