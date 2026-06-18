# CLAUDE.md — OneWayAir Storefront

Context for AI assistants (Claude Code, etc.) working in this repo.

## What this is

A custom e-commerce **storefront UI** for the brand **OneWayAir** — a Florida HVAC company ("heating & cooling done the right way") that launched a dry-fit streetwear line. The brand identity is a **fire + ice** theme (flame→ice gradient), tagline **"One Way, The Right Way."**, currently selling **Collection 001** (tees, long sleeves, jerseys, headwear, ~$24–$64).

The site currently on Shopify looked generic; this is the redesigned front-end: **dark premium "hype" / sneaker-drop aesthetic** with heavy motion and the orange→blue brand gradient.

**Status:** UI only. Product data is mocked. It is built to later plug into Shopify as a headless backend (see roadmap below).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config lives in CSS via `@theme`, not a JS config file)
- **Framer Motion** for animation, **lucide-react** for icons
- Fonts: Archivo (display) + Inter (body), loaded via `<link>` in `app/layout.tsx`
- Deploys to **Vercel** zero-config

## Run / build

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project map

```
src/
  app/
    layout.tsx              # shell: Navbar + Footer + CartDrawer, font links, metadata
    page.tsx                # home — composes the home/* sections
    globals.css             # ALL design tokens, colors, animations, utilities
    catalog/page.tsx        # shop page (uses CatalogGrid)
    product/[slug]/page.tsx # product detail, SSG via generateStaticParams
    contact/page.tsx        # contact page (uses ContactForm)
  components/
    Navbar.tsx CartDrawer.tsx Footer.tsx        # global chrome
    ProductCard.tsx CatalogGrid.tsx             # listing
    ProductDetail.tsx ContactForm.tsx Reveal.tsx
    home/  Hero, TrustBar, BigMarquee, DropCollection, Features, JoinCrew, CrewLove
    brand/ Logo, FireIce (the flame+snowflake mark), Garment (SVG apparel)
  lib/
    products.ts   # mock catalog + reviews. Single source of product data today.
    cart.tsx      # client-side cart state (React Context). Drives the CartDrawer.
```

## Conventions

- Server Components by default; add `"use client"` only when a component uses state, effects, or Framer Motion (Navbar, CartDrawer, ProductCard, CatalogGrid, ProductDetail, ContactForm, Hero, Reveal).
- **Design tokens live in `globals.css`** under `@theme` — brand colors are `flame`, `flame-deep`, `ember`, `ice`, `ice-deep`, `frost`, plus surfaces `ink`, `ink-soft`, `surface`, `surface-2`, `line`. Use these Tailwind classes (e.g. `text-flame`, `bg-ink`, `brand-gradient`) rather than hardcoding hex.
- Reusable utilities in `globals.css`: `.brand-gradient`, `.text-gradient`, `.grain` (noise overlay), `.stroke-text`, `.mask-fade-x`, and keyframe animations (`animate-marquee`, `animate-aurora`, `animate-float`, `animate-flicker`, `animate-pulse-glow`).
- Product images are stylized SVGs in `brand/Garment.tsx` — replace with real photos when available (likely swap to `next/image`).
- Keep the brand voice: bold, uppercase display type, "crew" / "drop" / "the right way" language.

## Adding/changing products

Edit `src/lib/products.ts`. Each `Product` has `slug`, `name`, `price`, `category`, `colorway`, `base`/`accent` colors (drive the SVG), `sizes`, optional `badge`/`lowStock`/`soldOut`, `rating`, `reviews`, `description`. The catalog, home drop, product pages, and related-products all read from this array.

## Roadmap: Shopify headless integration (not built yet)

Goal: keep this custom UI, let **Shopify own products, inventory, orders, payments, analytics**. When implementing:

1. Add `src/lib/shopify.ts` — a Storefront API (GraphQL) client. Env vars: `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
2. Replace `lib/products.ts` reads with Storefront API queries (`products`, `collections`); map results to the existing `Product` shape so components don't change. Use ISR / `generateStaticParams` for product pages.
3. Back `lib/cart.tsx` with Shopify Cart mutations; checkout = redirect to `cart.checkoutUrl` (Shopify hosted checkout handles payment/tax/shipping).
4. Inventory comes from the Storefront API (`unauthenticated_read_product_inventory` scope) — drives `lowStock`/`soldOut`.
5. Customer accounts use Shopify's **Customer Account API** (OAuth), not the deprecated Storefront customer mutations.

Reference: `vercel/commerce` template.

## Notes

- `.next/` and any `build.log` in the folder are build artifacts (gitignored) — ignore them.
- No test suite or linter config beyond Next defaults yet.
