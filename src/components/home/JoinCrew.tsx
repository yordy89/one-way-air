"use client";

import Link from "next/link";
import { FireIce } from "../brand/FireIce";
import { Reveal } from "../Reveal";
import { useI18n } from "@/lib/i18n";

export function JoinCrew() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="grain relative isolate overflow-hidden rounded-[2.5rem] px-6 py-20 text-center">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#e8431a,#ff7a3c_45%,#1e7fff)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_120%_at_50%_0%,transparent,rgba(10,10,12,0.35))]" />

          <FireIce size={56} className="mx-auto animate-float drop-shadow-lg" />

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow sm:text-7xl">
            {t("join.title1")}
            <br />
            {t("join.title2")}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/90">{t("join.sub")}</p>

          <Link
            href="/catalog"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-[#0a0a0c] px-10 py-4 text-sm font-black uppercase tracking-wider text-white transition-transform hover:scale-105"
          >
            {t("join.cta")}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
