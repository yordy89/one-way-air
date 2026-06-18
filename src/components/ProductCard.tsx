"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { Garment } from "./brand/Garment";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      className="group relative"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-ink-soft p-6 transition-all duration-500 group-hover:border-flame/40 group-hover:shadow-[0_30px_80px_-30px_rgba(255,90,31,0.35)]">
          {/* glow on hover */}
          <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-flame/25 blur-3xl" />
          </div>

          {product.badge && (
            <span
              className={`absolute left-5 top-5 z-10 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                product.soldOut
                  ? "bg-white/10 text-fg/60"
                  : "brand-gradient text-onbrand"
              }`}
            >
              {product.badge}
            </span>
          )}

          <div className="relative aspect-square">
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.06, rotate: -1.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Garment
                base={product.base}
                accent={product.accent}
                category={product.category}
                className="h-full w-full drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="relative mt-4">
            <div className="flex items-center gap-1 text-flame">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
              <span className="ml-1 text-[11px] text-fg/40">({product.reviews})</span>
            </div>
            <h3 className="mt-2 font-display text-lg font-extrabold leading-tight">{product.name}</h3>
            <p className="text-xs uppercase tracking-wider text-fg/40">{product.colorway}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-display text-xl font-black">${product.price.toFixed(2)}</span>
              {product.lowStock && !product.soldOut && (
                <span className="text-[11px] font-bold uppercase tracking-wide text-ember">
                  Low stock
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      <button
        disabled={product.soldOut}
        onClick={() =>
          add({
            slug: product.slug,
            name: product.name,
            price: product.price,
            size: product.sizes[Math.min(1, product.sizes.length - 1)],
            base: product.base,
            accent: product.accent,
            category: product.category,
          })
        }
        className={`absolute bottom-[5.5rem] right-9 grid h-11 w-11 translate-y-2 place-items-center rounded-full opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
          product.soldOut
            ? "cursor-not-allowed bg-white/10 text-fg/40"
            : "brand-gradient text-onbrand hover:scale-110"
        }`}
        aria-label="Quick add"
      >
        <Plus size={18} strokeWidth={2.6} />
      </button>
    </motion.div>
  );
}
