"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "../ProductCard";
import { Reveal } from "../Reveal";
import { useI18n } from "@/lib/i18n";

export function DropCollection() {
  const { t } = useI18n();
  const featured = products.slice(0, 4);
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-flame">{t("drop.eyebrow")}</p>
        <h2 className="mt-3 font-display text-6xl font-black uppercase tracking-tight sm:text-7xl">
          {t("drop.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-fg/55">{t("drop.sub")}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>

      <Reveal delay={0.1} className="mt-14 flex justify-center">
        <Link
          href="/catalog"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-8 py-4 text-sm font-black uppercase tracking-wider text-fg transition-all hover:border-flame/60"
        >
          {t("drop.shopAll")}
          <ArrowRight size={17} className="text-flame transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
