"use client";

import { Flame, Wind, Timer } from "lucide-react";
import { Reveal } from "../Reveal";
import { useI18n } from "@/lib/i18n";

export function Features() {
  const { t } = useI18n();
  const features = [
    { icon: Flame, title: t("features.hotTitle"), body: t("features.hotBody") },
    { icon: Wind, title: t("features.dryTitle"), body: t("features.dryBody") },
    { icon: Timer, title: t("features.limitedTitle"), body: t("features.limitedBody") },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-ink-soft p-8 transition-colors hover:border-flame/40">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-flame/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
              <div className="brand-gradient mb-5 grid h-12 w-12 place-items-center rounded-2xl text-onbrand">
                <f.icon size={22} strokeWidth={2.4} />
              </div>
              <h3 className="font-display text-2xl font-black uppercase tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg/55">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
