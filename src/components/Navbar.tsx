"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ChevronDown, Sun, Moon, Check } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { Logo } from "./brand/Logo";
import { Garment } from "./brand/Garment";
import { useCart } from "@/lib/cart";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { products } from "@/lib/products";

const categories = ["Tees", "Long Sleeve", "Jersey", "Headwear"] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const { t } = useI18n();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The navbar sits on the page/hero background (both theme-adaptive), so the
  // foreground token keeps it readable in either theme without special-casing.
  const navText = "text-fg";
  const dim = "text-fg/55";
  const chip = "border-line bg-surface/70 text-fg hover:border-flame/60";

  return (
    <>
      <Announcement />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-xl border-b border-line/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="shrink-0">
            <Logo className="text-base" />
          </Link>

          {/* desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink href="/" label={t("nav.home")} active={pathname === "/"} text={navText} dim={dim} />

            {/* Shop mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <Link
                href="/catalog"
                className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname.startsWith("/catalog") ? navText : dim
                } hover:${navText}`}
              >
                {t("nav.shop")}
                <ChevronDown size={14} className={`transition-transform ${shopOpen ? "rotate-180" : ""}`} />
                {pathname.startsWith("/catalog") && <ActivePill />}
              </Link>

              <AnimatePresence>
                {shopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3"
                  >
                    <div className="grid grid-cols-[1.2fr_1fr] gap-4 rounded-3xl border border-line bg-ink-soft/95 p-4 shadow-2xl backdrop-blur-xl">
                      <div>
                        <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-fg/40">
                          {t("nav.shop")}
                        </p>
                        <Link
                          href="/catalog"
                          className="block rounded-2xl px-3 py-2.5 text-sm font-bold text-fg transition-colors hover:bg-surface"
                        >
                          {t("nav.shopAll")}
                        </Link>
                        {categories.map((c) => (
                          <Link
                            key={c}
                            href="/catalog"
                            className="block rounded-2xl px-3 py-2.5 text-sm font-semibold text-fg/70 transition-colors hover:bg-surface hover:text-fg"
                          >
                            {t(`cat.${c}`)}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/product/${products[0].slug}`}
                        className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface to-ink-soft p-4"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-flame">
                          {t("nav.featured")}
                        </p>
                        <div className="mx-auto my-2 w-28 transition-transform group-hover:scale-105">
                          <Garment
                            base={products[0].base}
                            accent={products[0].accent}
                            category={products[0].category}
                            className="w-full"
                          />
                        </div>
                        <p className="truncate text-sm font-bold text-fg">{products[0].name}</p>
                        <p className="text-xs text-fg/50">${products[0].price.toFixed(2)}</p>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.slice(1).map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} active={pathname === l.href} text={navText} dim={dim} />
            ))}
          </div>

          {/* right controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle chip={chip} />
            </div>
            <div className="hidden sm:block">
              <LangDropdown chip={chip} />
            </div>
            <button
              onClick={() => setOpen(true)}
              className={`group relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${chip}`}
            >
              <ShoppingBag size={17} className="transition-transform group-hover:-rotate-6" />
              <span className="hidden sm:inline">{t("nav.cart")}</span>
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="brand-gradient grid h-5 min-w-5 place-items-center rounded-full px-1 text-[11px] font-black text-onbrand"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button
              onClick={() => setMenu(true)}
              className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${chip}`}
              aria-label={t("nav.menu")}
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <Logo className="text-base" />
              <button
                onClick={() => setMenu(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-5 pt-6">
              {[{ href: "/", label: t("nav.home") }, { href: "/catalog", label: t("nav.shop") }, ...links.slice(1)].map(
                (l, i) => (
                  <motion.div
                    key={l.href + i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenu(false)}
                      className="block border-b border-line py-5 font-display text-4xl font-black text-fg"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
            <div className="flex items-center justify-between gap-3 px-5 pt-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-fg/40">{t("nav.theme")}</span>
                <ThemeToggle chip="border-line bg-surface text-fg" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-fg/40">{t("nav.language")}</span>
                <LangDropdown chip="border-line bg-surface text-fg" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  label,
  active,
  text,
  dim,
}: {
  href: string;
  label: string;
  active: boolean;
  text: string;
  dim: string;
}) {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
        active ? text : dim
      } hover:${text}`}
    >
      {label}
      {active && <ActivePill />}
    </Link>
  );
}

function ActivePill() {
  return (
    <motion.span
      layoutId="nav-pill"
      className="brand-gradient absolute -bottom-0.5 left-4 right-4 h-0.5 rounded-full"
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
    />
  );
}

function ThemeToggle({ chip }: { chip: string }) {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={t("nav.theme")}
      title={t("nav.theme")}
      className={`relative flex h-10 w-[4.5rem] items-center rounded-full border px-1.5 transition-colors ${chip} ${
        isDark ? "justify-start" : "justify-end"
      }`}
    >
      {/* track icons */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5">
        <Moon size={14} className="text-frost" />
        <Sun size={14} className="text-ember" />
      </span>
      {/* sliding knob */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
        className="brand-gradient z-10 grid h-7 w-7 place-items-center rounded-full text-onbrand shadow-md"
      >
        {isDark ? <Moon size={15} /> : <Sun size={15} />}
      </motion.span>
    </button>
  );
}

const LANGS: { code: Lang; flag: string; name: string }[] = [
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" },
];

function LangDropdown({ chip, up = false }: { chip: string; up?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        aria-label="Language"
        className={`flex h-10 items-center gap-1.5 rounded-full border px-3 transition-colors ${chip}`}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-sm font-bold uppercase">{current.code}</span>
        <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: up ? 8 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: up ? 8 : -8 }}
            transition={{ duration: 0.16 }}
            className={`absolute right-0 z-50 w-44 rounded-2xl border border-line bg-ink-soft/95 p-1.5 shadow-2xl backdrop-blur-xl ${
              up ? "bottom-full mb-2" : "top-full mt-2"
            }`}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  lang === l.code ? "bg-surface font-bold text-fg" : "text-fg/70 hover:bg-surface hover:text-fg"
                }`}
              >
                <span className="text-base leading-none">{l.flag}</span>
                {l.name}
                {lang === l.code && <Check size={15} className="ml-auto text-flame" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Announcement() {
  const { t } = useI18n();
  const items = [t("announce.1"), t("announce.2"), t("announce.3"), t("announce.4")];
  return (
    <div className="relative overflow-hidden brand-gradient">
      <div className="grain absolute inset-0 opacity-30" />
      <div className="flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0">
            {items.map((text, i) => (
              <span
                key={`${rep}-${i}`}
                className="flex items-center gap-3 px-6 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-onbrand/90"
              >
                {text}
                <span className="text-onbrand/50">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
