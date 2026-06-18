"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { FireIce } from "./brand/FireIce";
import { useI18n } from "@/lib/i18n";

export function FaqContent() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(30,127,255,0.14),transparent)]" />
      <header className="mx-auto max-w-7xl px-5 pb-10 pt-24 text-center sm:px-8">
        <FireIce size={44} className="mx-auto animate-flicker" />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.4em] text-ice">{t("faq.eyebrow")}</p>
        <h1 className="mt-3 font-display text-6xl font-black uppercase tracking-tight sm:text-8xl">
          {t("faq.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-fg/55">{t("faq.sub")}</p>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-12 sm:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-surface/50 transition-colors ${
                  isOpen ? "border-flame/40" : "border-line"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold uppercase tracking-tight">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-transform ${
                      isOpen ? "rotate-45 border-flame text-flame" : "text-fg/60"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-fg/65">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-line bg-gradient-to-b from-surface to-ink-soft p-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <div className="brand-gradient grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-onbrand">
              <MessageCircle size={22} />
            </div>
            <div>
              <p className="font-display text-xl font-black uppercase">{t("faq.stillTitle")}</p>
              <p className="text-sm text-fg/55">{t("faq.stillSub")}</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="brand-gradient shrink-0 rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wider text-onbrand transition-transform hover:scale-105"
          >
            {t("faq.stillCta")}
          </Link>
        </div>
      </section>
    </div>
  );
}
