"use client";

import Link from "next/link";
import { Logo } from "./brand/Logo";
import { Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-ink-soft">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-flame/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="text-lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg/55">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg/70 transition-all hover:border-flame/60 hover:text-flame"
                  aria-label="social"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title={t("footer.shop")}
            links={[
              [t("nav.shopAll"), "/catalog"],
              [t("cat.Tees"), "/catalog"],
              [t("cat.Long Sleeve"), "/catalog"],
              [t("cat.Headwear"), "/catalog"],
            ]}
          />
          <FooterCol
            title={t("footer.brand")}
            links={[
              [t("footer.story"), "/about"],
              [t("footer.crew"), "/about"],
              [t("nav.contact"), "/contact"],
              [t("footer.drops"), "/catalog"],
            ]}
          />
          <FooterCol
            title={t("footer.support")}
            links={[
              [t("footer.shippingL"), "/faq"],
              [t("footer.returnsL"), "/faq"],
              [t("footer.sizeGuide"), "/faq"],
              [t("nav.faq"), "/faq"],
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-[0.3em] text-fg/40">
            © {new Date().getFullYear()} OneWayAir — {t("footer.rights")}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-fg/60 hover:text-fg"
          >
            {t("footer.join")}
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-fg/40">{title}</h4>
      <ul className="space-y-3">
        {links.map(([label, href], i) => (
          <li key={label + i}>
            <Link href={href} className="text-sm text-fg/70 transition-colors hover:text-flame">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
