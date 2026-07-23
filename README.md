# Univariety Reverse-Engineering & Blueprint

An interactive, self-contained website that **reverse-engineers Univariety's career-guidance + alumni-management business model** and lays out a complete blueprint for building an **AI-first superior version**.

🔗 **Live site:** https://astronkirax.github.io/univariety-blueprint/

---

## What's inside

A single-page app (left-sidebar navigation) covering **15 sections**:

| # | Section | # | Section |
|---|---------|---|---------|
| 01 | Business Reverse-Engineering | 09 | Business Feasibility |
| 02 | Platform Feature Analysis | 10 | Financial Analysis (₹) |
| 03 | Competitor Analysis | 11 | Product Roadmap |
| 04 | Service Analysis | 12 | Technical Architecture |
| 05 | Additional Opportunities | 13 | Go-to-Market |
| 06 | AI Opportunities | 14 | Scaling Strategy |
| 07 | Market Research | 15 | Final Blueprint |
| 08 | Revenue Model | ＊ | Sources |

Plus an Executive Summary landing page.

## Interactive features

- **Sidebar navigation** — section switching with hash routing (browser back/forward works)
- **Tabbed cards** — 7-competitor analysis and 4-phase roadmap
- **Accordions** — 8 platform features and 12 AI capabilities
- **CSS bar/funnel visuals** — market size, TAM/SAM/SOM, revenue mix, 1/3/5-year projections
- **Comparison tables** — competitor grid, service-gap analysis, risk matrix, tech rationale
- **Responsive** — collapses to a hamburger menu on mobile

## Tech

Plain **HTML + CSS + vanilla JavaScript**. No frameworks, no build step, no external CDNs — the site runs fully offline.

```
├─ index.html          # all 15 sections + summary + sources
└─ assets/
   ├─ styles.css        # design system
   └─ app.js            # nav routing, tabs, accordions, animated bars
```

## Run locally

Just open `index.html` in any browser (double-click it) — no server required.

## Notes

- Financial figures are **illustrative planning estimates in Indian Rupees (₹)**, not audited projections.
- Univariety's internal tech stack is **inferred**, not confirmed (labelled as such in the site).
- The "superior version" is referred to generically as **Our Platform**.
- Content is grounded in ~20 public sources, all linked in the site's **Sources** section (accessed July 2026).
