"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { useI18n } from "@/lib/i18n";

const categories = ["All", "Tees", "Long Sleeve", "Jersey", "Headwear"] as const;
const sorts = ["Featured", "Price: Low", "Price: High"] as const;

const sortKey: Record<(typeof sorts)[number], string> = {
  Featured: "catalog.featured",
  "Price: Low": "catalog.priceLow",
  "Price: High": "catalog.priceHigh",
};

export function CatalogGrid() {
  const { t } = useI18n();
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Featured");

  const list = useMemo(() => {
    let l = products.filter((p) => cat === "All" || p.category === cat);
    if (sort === "Price: Low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "Price: High") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [cat, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                cat === c ? "text-onbrand" : "border border-line text-fg/60 hover:text-fg"
              }`}
            >
              {cat === c && (
                <motion.span
                  layoutId="cat-pill"
                  className="brand-gradient absolute inset-0 -z-10 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {t(`cat.${c}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-fg/40">{t("catalog.sort")}</span>
          <div className="flex gap-1 rounded-full border border-line p-1">
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                  sort === s ? "bg-fg/10 text-fg" : "text-fg/50 hover:text-fg"
                }`}
              >
                {t(sortKey[s])}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </motion.div>

      <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-fg/35">
        {list.length} {t("catalog.pieces")}
      </p>
    </div>
  );
}
