"use client";

import { Truck, ShieldCheck, RotateCcw, Flame } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useI18n();
  const items = [
    { icon: Truck, label: t("trust.shipping") },
    { icon: ShieldCheck, label: t("trust.secure") },
    { icon: RotateCcw, label: t("trust.returns") },
    { icon: Flame, label: t("trust.drops") },
  ];

  return (
    <section className="border-y border-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-7 sm:px-8 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5 text-center">
            <Icon size={17} className="shrink-0 text-flame" />
            <span className="text-xs font-semibold uppercase tracking-wide text-fg/70 sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
