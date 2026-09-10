# CLAUDE.md — K.K Knitwear Club Website Redesign

## Project goal

Rebuild the website for **K.K Knitwear Club** from scratch as a modern, fast, mobile-friendly
business site — no existing code to reuse. The current site (https://www.kkknitwearclub.com/)
is a generic IndiaMART-hosted B2B storefront; keep the **business content, product catalog,
and overall intent** close to the original, but redesign the layout, visual design, and UX to
be clean and genuinely user-friendly (the current site is a dated template with cluttered
IndiaMART branding, a marketplace-style header, and no real navigation or product pages).

Build a **static multi-page site** (HTML/CSS/JS, no framework needed unless the user asks for
one) that can later be deployed anywhere (Netlify, Vercel, GitHub Pages, or plain hosting).

## Business info (source of truth — keep accurate)

- **Company:** K.K Knitwear Club
- **Owner:** Mr. Avnish Jain
- **Established:** 1990
- **Nature of business:** Manufacturer
- **Legal status:** Proprietorship
- **Employees:** 11–25 people
- **Annual turnover:** ₹1.5–5 Cr
- **GST No.:** 03ABLPJ0347H1ZZ (GST registered 01-07-2017)
- **Address:** Street No-1, K.K Knitwear Club, Kabir Nagar, Sekhonwal Road, Ludhiana – 141008,
  Punjab, India
- **Phone:** 07942802251
- **Location:** Ludhiana, Punjab — a major textile/hosiery manufacturing hub in India

### About-us copy (original, to be rewritten in cleaner language but same facts)

> Established in 1990, K.K Knitwear Club is a manufacturer of Polyester Fabric, Knitted
> Fabric, Sportswear Fabric, Terry Fabric, Baby Blanket Fabric/Jacket Fabrics, Dot Knit
> Fabrics, Polyester Knitted Fabric, and Dotted Fabric, etc. The company focuses on excellent
> quality products, ethical business policies, and transparency to maintain strong customer
> relationships. Credit for the company's growth is given to owner Mr. Avnish Jain.

## Product catalog (keep all categories; this is the core of the site)

Group these into a clean **Products** section with categories and, ideally, one page/card per
category with a placeholder image, short description, and an inquiry CTA:

1. Polyester Fabric (e.g., 140 GSM Plain Polyester Fabric — flagship/featured product)
2. Knitted Fabric
3. Sportswear Fabric
4. Terry Fabric
5. Mens Lower (fabric/product line)
6. Polyester Knitted Fabric
7. Mens T-Shirt (fabric/product line)
8. Baby Blanket Fabric / Jacket Fabrics
9. Home Furnishing (fabric)
10. Foma Fabric
11. Surplus Fabric
12. Bon Patti
13. Dot Knit Fabrics / Dotted Fabric

Note: some names overlap/duplicate (e.g., "Polyester Fabric" vs "Polyester Knitted Fabric",
"Dot Knit Fabrics" vs "Dotted Fabric") — consolidate sensibly when designing the IA, but don't
drop any product line without flagging it to the user first.

## Site structure (pages to build)

- **Home** — hero intro, snapshot of the business (est. 1990, manufacturer, Ludhiana), featured
  products, why-choose-us, CTA to contact/inquire
- **About Us** — company story, owner, values (quality, tran sparency, ethics), key business facts
- **Products** — category grid linking to individual product/category detail sections
- **Contact Us** — address, phone, email inquiry form, embedded map (Ludhiana location)
- Optional: **Gallery/Showcase** page for product photos (original site had a "Showcase Gallery")

Keep primary nav simple: Home · About Us · Products · Contact Us.

## What to deliberately leave behind from the original

- IndiaMART marketplace chrome (TrustSeal badges, "64% Response Rate", "Payment Protected",
  "Developed and Managed by IndiaMART" footer, search bar tied to IndiaMART)
- Cluttered/dated layout, inconsistent typography, low-quality stock imagery
- Lack of real navigation/routing (original is essentially a single scrollable listing page)

## Design direction

- Modern, professional B2B textile-manufacturer aesthetic — trustworthy, clean, not flashy
- Mobile-first responsive layout
- Clear typography hierarchy, generous whitespace, consistent color palette (2–3 core colors)
- Fast-loading: optimized images, minimal JS, no heavy frameworks unless requested
- Accessible: semantic HTML, proper alt text, sufficient color contrast, keyboard-navigable nav
- Real product imagery is not available yet — use clearly-labeled placeholders and note where
  the user should supply real photos

## Tech approach

- Plain HTML/CSS/JS by default (simple, no build step, easy for a small business to host anywhere)
- If the user later asks for a framework (React/Next.js, etc.) or a CMS, switch approaches —
  don't over-engineer up front
- No backend/database needed unless the user wants a working contact form (in which case ask
  about form backend options — e.g., Formspree, mailto, or a simple serverless function —
  before wiring anything up, since sending data to a third-party service needs confirmation)

## Working notes

- No existing code — this is a from-scratch build in this folder
- Preserve original content/facts (business details, product list) faithfully; improve wording,
  layout, and UX freely
- Do not scrape or reproduce copyrighted images/text verbatim from the original site beyond
  factual business info (address, phone, GST no., product names) — write fresh copy
