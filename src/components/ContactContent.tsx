"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { FireIce } from "./brand/FireIce";
import { useI18n } from "@/lib/i18n";

export function ContactContent() {
  const { t } = useI18n();

  const info = [
    { icon: Mail, label: t("contact.email"), value: "crew@onewayair.com" },
    { icon: Phone, label: t("contact.phone"), value: "(239) 555-0001" },
    { icon: MapPin, label: t("contact.based"), value: t("contact.basedVal") },
    { icon: Clock, label: t("contact.support"), value: t("contact.supportVal") },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(30,127,255,0.14),transparent)]" />
      <header className="mx-auto max-w-7xl px-5 pb-10 pt-24 text-center sm:px-8">
        <FireIce size={44} className="mx-auto animate-flicker" />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.4em] text-ice">{t("contact.eyebrow")}</p>
        <h1 className="mt-3 font-display text-6xl font-black uppercase tracking-tight sm:text-8xl">
          {t("contact.title1")} <span className="text-gradient">{t("contact.title2")}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-fg/55">{t("contact.sub")}</p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {info.map((it) => (
            <div
              key={it.label}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface/50 p-5 transition-colors hover:border-flame/40"
            >
              <div className="brand-gradient grid h-11 w-11 shrink-0 place-items-center rounded-xl text-onbrand">
                <it.icon size={19} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-fg/40">{it.label}</p>
                <p className="font-bold">{it.value}</p>
              </div>
            </div>
          ))}

          {/* FAQ tease */}
          <Link
            href="/faq"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface/30 p-5 transition-colors hover:border-ice/50"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-fg/40">{t("contact.faqTease")}</p>
              <p className="font-bold">{t("contact.faqLink")}</p>
            </div>
            <ArrowRight size={18} className="text-ice transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="grain relative overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 -z-10 brand-gradient opacity-90" />
            <p className="font-display text-2xl font-black uppercase leading-tight text-onbrand">
              One Way,
              <br />
              The Right Way.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
