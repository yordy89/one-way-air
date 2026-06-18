"use client";

import { useI18n } from "@/lib/i18n";

export function BigMarquee() {
  const { t } = useI18n();
  const phrases = [t("marquee.join"), t("marquee.live"), "ONE WAY", "THE RIGHT WAY", t("marquee.wear")];

  return (
    <section className="relative overflow-hidden border-y border-line bg-ink py-8">
      <div className="mask-fade-x flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {phrases.map((p, i) => (
              <span key={`${rep}-${i}`} className="flex items-center">
                <span
                  className={`px-8 font-display text-4xl font-black uppercase tracking-tight sm:text-6xl ${
                    i % 2 === 0 ? "text-fg/90" : "stroke-text"
                  }`}
                >
                  {p}
                </span>
                <span className="brand-gradient h-3 w-3 rotate-45" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
