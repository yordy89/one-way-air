"use client";

import { CatalogGrid } from "./CatalogGrid";
import { useI18n } from "@/lib/i18n";

export function CatalogContent() {
  const { t } = useI18n();
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,90,31,0.12),transparent)]" />
      <header className="mx-auto max-w-7xl px-5 pb-10 pt-24 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-flame">{t("catalog.eyebrow")}</p>
        <h1 className="mt-3 font-display text-6xl font-black uppercase tracking-tight sm:text-8xl">
          {t("catalog.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-fg/55">{t("catalog.sub")}</p>
      </header>
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <CatalogGrid />
      </div>
    </div>
  );
}
