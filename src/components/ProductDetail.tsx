"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, Minus, Plus, ShoppingBag, Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { Garment } from "./brand/Garment";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const { add, setOpen } = useCart();
  const [size, setSize] = useState(product.sizes[Math.min(1, product.sizes.length - 1)]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 16);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  function onAdd() {
    if (product.soldOut) return;
    add(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        size,
        base: product.base,
        accent: product.accent,
        category: product.category,
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <nav className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-fg/40">
        <Link href="/" className="hover:text-fg">Home</Link> /
        <Link href="/catalog" className="hover:text-fg">Catalog</Link> /
        <span className="text-fg/70">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Visual */}
        <div
          onMouseMove={onMove}
          onMouseLeave={reset}
          className="relative grid place-items-center overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-surface to-ink-soft p-8 lg:sticky lg:top-24 lg:self-start"
          style={{ perspective: 1000 }}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-flame/20 blur-3xl" />
          <div
            className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-ice/20 blur-3xl"
          />
          {product.badge && (
            <span
              className={`absolute left-6 top-6 z-10 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                product.soldOut ? "bg-white/10 text-fg/60" : "brand-gradient text-onbrand"
              }`}
            >
              {product.badge}
            </span>
          )}
          <motion.div style={{ rotateX: srx, rotateY: sry }} className="relative w-full max-w-md">
            <Garment
              base={product.base}
              accent={product.accent}
              category={product.category}
              className="h-full w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Buy box */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-flame">{product.drop}</p>
          <h1 className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex text-flame">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-fg/60">{product.reviews} verified reviews</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl font-black">${product.price.toFixed(2)}</span>
            <span className="text-sm text-fg/40">{product.colorway}</span>
          </div>

          <p className="mt-6 max-w-lg leading-relaxed text-fg/65">{product.description}</p>

          {/* sizes */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-wide">Size</span>
              <span className="text-xs text-fg/40">Size guide</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-12 rounded-xl border px-4 py-3 text-sm font-bold transition-all ${
                    size === s
                      ? "border-flame bg-flame/10 text-fg"
                      : "border-line text-fg/60 hover:border-white/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* qty + add */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center justify-between rounded-full border border-line px-2 sm:w-36">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-12 w-12 place-items-center text-fg/70 hover:text-fg"
                aria-label="Decrease"
              >
                <Minus size={16} />
              </button>
              <span className="font-bold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="grid h-12 w-12 place-items-center text-fg/70 hover:text-fg"
                aria-label="Increase"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={onAdd}
              disabled={product.soldOut}
              className={`group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full py-4 text-sm font-black uppercase tracking-wider transition-transform ${
                product.soldOut
                  ? "cursor-not-allowed bg-white/10 text-fg/40"
                  : "brand-gradient text-onbrand hover:scale-[1.02]"
              }`}
            >
              {product.soldOut ? (
                "Sold Out"
              ) : added ? (
                <>
                  <Check size={17} /> Added to cart
                </>
              ) : (
                <>
                  <ShoppingBag size={17} /> Add to Cart — ${(product.price * qty).toFixed(2)}
                </>
              )}
            </button>
          </div>

          {!product.soldOut && (
            <button
              onClick={() => setOpen(true)}
              className="mt-3 w-full rounded-full border border-white/20 py-4 text-sm font-black uppercase tracking-wider text-fg transition-colors hover:border-white/50"
            >
              Buy It Now
            </button>
          )}

          {product.lowStock && !product.soldOut && (
            <p className="mt-4 text-center text-sm font-bold text-ember sm:text-left">
              🔥 Low stock — selling fast. Don&apos;t sleep on the drop.
            </p>
          )}

          {/* assurances */}
          <div className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
            {[
              [Truck, "Free shipping $75+"],
              [ShieldCheck, "Secure checkout"],
              [RotateCcw, "30-day returns"],
            ].map(([Icon, label], i) => {
              const I = Icon as typeof Truck;
              return (
                <div key={i} className="flex items-center gap-2 text-xs text-fg/60">
                  <I size={16} className="text-ice" />
                  {label as string}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
