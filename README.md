# OneWayAir — Storefront UI

Custom **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion** storefront for the OneWayAir brand. Dark premium "hype" direction with the brand's flame→ice gradient identity. UI-only for now (mock product data) — ready to wire to Shopify as a headless backend.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified passing)
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab).
2. Import it in Vercel — it auto-detects Next.js, no config needed.
3. Deploy. That's it.

## Structure

```
src/
  app/
    layout.tsx              # shell: nav + footer + cart drawer
    page.tsx                # home (hero, drop, features, CTA, reviews)
    catalog/page.tsx        # shop grid + filters/sort
    product/[slug]/page.tsx # product detail (SSG)
    contact/page.tsx        # contact form
    globals.css             # brand tokens, animations, utilities
  components/
    Navbar, Footer, CartDrawer, ProductCard, CatalogGrid, ProductDetail, ContactForm, Reveal
    home/   Hero, TrustBar, BigMarquee, DropCollection, Features, JoinCrew, CrewLove
    brand/  Logo, FireIce, Garment
  lib/
    products.ts             # mock catalog (swap for Shopify)
    cart.tsx                # client cart state (swap for Shopify cart)
```

Product imagery is rendered as stylized SVG garments (`brand/Garment.tsx`) — replace with real photos once available.

## Next step: Shopify as headless backend

This UI is built to plug into Shopify's **Storefront API** (GraphQL). You keep this custom Next.js front-end and let Shopify own products, inventory, orders, payments, and analytics. See the chat summary for the full plan; the short version:

- `lib/products.ts` → fetch from the Storefront API (`products`, `collections`).
- `lib/cart.tsx` → back with Shopify Cart mutations; checkout redirects to `cart.checkoutUrl`.
- Inventory/analytics stay in the Shopify admin — nothing to rebuild.

Brand: **One Way, The Right Way.**
