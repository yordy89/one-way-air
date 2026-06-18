"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Wind, Heart, ArrowRight } from "lucide-react";
import { FireIce } from "./brand/FireIce";
import { Garment } from "./brand/Garment";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function AboutContent() {
  const { t } = useI18n();

  const blocks = [
    { icon: Flame, title: t("about.p1Title"), body: t("about.p1") },
    { icon: Wind, title: t("about.p2Title"), body: t("about.p2") },
    { icon: Heart, title: t("about.p3Title"), body: t("about.p3") },
  ];

  const stats = [
    { value: "12+", label: t("about.statYears") },
    { value: "8,000+", label: t("about.statHomes") },
    { value: "5.0★", label: t("about.statRating") },
  ];

  return (
    <div className="relative">
      {/* hero */}
      <section className="grain relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_-10%,rgba(255,90,31,0.16),transparent),radial-gradient(60%_80%_at_80%_20%,rgba(30,127,255,0.16),transparent)]" />
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-24 text-center sm:px-8">
          <FireIce size={48} className="mx-auto animate-flicker" />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.4em] text-flame">
            {t("about.eyebrow")}
          </p>
          <h1 className="mt-3 font-display text-6xl font-black uppercase leading-[0.88] tracking-tight sm:text-8xl">
            {t("about.title1")} <span className="text-gradient">{t("about.title2")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg/65">{t("about.lead")}</p>
        </div>
      </section>

      {/* stats */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-3 gap-4 rounded-3xl border border-line bg-surface/50 p-6 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-black sm:text-5xl">
                <span className="text-gradient">{s.value}</span>
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-fg/50 sm:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* story blocks */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-line bg-gradient-to-b from-surface to-ink-soft p-8 transition-colors hover:border-flame/40">
                <div className="brand-gradient mb-5 grid h-12 w-12 place-items-center rounded-2xl text-onbrand">
                  <b.icon size={22} strokeWidth={2.4} />
                </div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/60">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* showcase + CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grain relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-center">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#e8431a,#ff7a3c_45%,#1e7fff)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_120%_at_50%_0%,transparent,rgba(10,10,12,0.4))]" />
          <div className="mx-auto flex max-w-md justify-center gap-2">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="w-32 drop-shadow-2xl">
              <Garment base="#15151a" accent="#1e7fff" category="Tees" className="w-full" />
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1.5 }} className="w-32 drop-shadow-2xl">
              <Garment base="#e8431a" accent="#ffd24a" category="Long Sleeve" className="w-full" />
            </motion.div>
          </div>
          <h2 className="mx-auto mt-8 max-w-2xl font-display text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
            {t("about.title1")} <span className="text-white">{t("about.p3Title")}</span>
          </h2>
          <Link
            href="/catalog"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0c] px-10 py-4 text-sm font-black uppercase tracking-wider text-white transition-transform hover:scale-105"
          >
            {t("about.cta")}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
