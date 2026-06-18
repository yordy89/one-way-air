"use client";

import { Star, BadgeCheck } from "lucide-react";
import { reviews } from "@/lib/products";
import { Reveal } from "../Reveal";
import { useI18n } from "@/lib/i18n";

export function CrewLove() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-ice">{t("crew.eyebrow")}</p>
        <h2 className="mt-3 font-display text-6xl font-black uppercase tracking-tight sm:text-7xl">
          <span className="text-gradient">{t("crew.title").split(" ")[0]}</span>{" "}
          {t("crew.title").split(" ").slice(1).join(" ")}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface/60 p-6">
              <div className="flex gap-1 text-flame">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fg/75">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-fg/50">
                <BadgeCheck size={15} className="text-ice" />
                {r.name} — {t("crew.verified")}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
