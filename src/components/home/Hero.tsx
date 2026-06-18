"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { FireIce } from "../brand/FireIce";
import { Garment } from "../brand/Garment";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  // headline 3D tilt
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 120, damping: 20 });

  // background aurora drift
  const px = useTransform(mx, [0, 1], [-16, 16]);
  const py = useTransform(my, [0, 1], [-16, 16]);

  // shirts parallax — opposite directions read as depth
  const lx = useSpring(useTransform(mx, [0, 1], [-34, 34]), { stiffness: 70, damping: 22 });
  const ly = useSpring(useTransform(my, [0, 1], [-24, 24]), { stiffness: 70, damping: 22 });
  const rxs = useSpring(useTransform(mx, [0, 1], [34, -34]), { stiffness: 70, damping: 22 });
  const rys = useSpring(useTransform(my, [0, 1], [24, -24]), { stiffness: 70, damping: 22 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <section
      onMouseMove={onMove}
      className="grain relative isolate flex min-h-[94vh] items-center overflow-hidden"
    >
      {/* ── split fire/ice background ── */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#0b2a5e_0%,#0a0a0c_44%,#0a0a0c_56%,#3a1206_100%)] light:bg-[linear-gradient(105deg,#d4e6ff_0%,#f4f5f9_44%,#f4f5f9_56%,#ffe2d2_100%)]" />
        <motion.div
          style={{ x: px, y: py }}
          className="absolute -left-32 top-0 h-[140%] w-[55%] -skew-x-12 bg-[radial-gradient(60%_60%_at_30%_40%,rgba(30,127,255,0.45),transparent_70%)] animate-aurora light:opacity-50"
        />
        <motion.div
          style={{ x: useTransform(px, (v) => -v), y: py }}
          className="absolute -right-32 top-0 h-[140%] w-[55%] -skew-x-12 bg-[radial-gradient(60%_60%_at_70%_55%,rgba(255,90,31,0.5),transparent_70%)] animate-aurora light:opacity-50"
        />
        {/* center seam light */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent light:via-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_38%,rgba(10,10,12,0.82)_100%)] light:bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_45%,rgba(244,245,249,0.7)_100%)]" />
      </div>

      {/* ── floating shirts (desktop) ── */}
      <motion.div
        style={{ x: lx, y: ly }}
        className="pointer-events-none absolute top-1/2 z-0 hidden w-[40%] max-w-[460px] -translate-y-1/2 md:left-[-3%] md:block lg:left-[3%] lg:w-[33%]"
      >
        <FloatShirt glow="flame" rotate={-9} duration={7}>
          <Garment base="#e8431a" accent="#ffd24a" category="Long Sleeve" className="w-full" />
        </FloatShirt>
      </motion.div>

      <motion.div
        style={{ x: rxs, y: rys }}
        className="pointer-events-none absolute top-1/2 z-0 hidden w-[40%] max-w-[460px] -translate-y-1/2 md:right-[-3%] md:block lg:right-[3%] lg:w-[33%]"
      >
        <FloatShirt glow="ice" rotate={9} duration={8}>
          <Garment base="#15151a" accent="#1e7fff" category="Tees" className="w-full" />
        </FloatShirt>
      </motion.div>

      {/* ── single shirt behind text (mobile) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 grid place-items-center md:hidden">
        <div className="w-[82%] max-w-xs opacity-20 blur-[1px]">
          <Garment base="#e8431a" accent="#1e7fff" category="Long Sleeve" className="w-full" />
        </div>
      </div>

      {/* floating sparks */}
      <Spark className="left-[18%] top-[30%]" color="#ff7a3c" />
      <Spark className="left-[26%] top-[64%]" color="#ffd24a" delay={1.2} />
      <Spark className="right-[20%] top-[36%]" color="#4aa3ff" delay={0.6} />
      <Spark className="right-[28%] top-[62%]" color="#bfe2ff" delay={1.8} />

      {/* ── content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        {/* legibility halo behind the headline */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(10,10,12,0.78),transparent)] blur-2xl light:bg-[radial-gradient(closest-side,rgba(244,245,249,0.85),transparent)]" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-fg/80 backdrop-blur light:border-black/10 light:bg-black/5">
            <FireIce size={16} className="animate-flicker" />
            {t("hero.badge")}
          </div>

          <motion.h1
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
            className="font-display text-[13vw] font-black uppercase leading-[0.82] tracking-tight drop-shadow-[0_8px_40px_rgba(0,0,0,0.7)] sm:text-[8.5rem]"
          >
            <span className="block text-gradient">{t("hero.title1")}</span>
            <span className="block text-fg">{t("hero.title2")}</span>
          </motion.h1>

          <p className="mt-7 max-w-md text-base text-fg/70 sm:text-lg">{t("hero.sub")}</p>

          <div className="mt-5 flex items-center gap-2">
            <div className="flex text-flame">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-fg/70">{t("hero.rated")}</span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalog"
              className="brand-gradient group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-9 py-4 text-sm font-black uppercase tracking-wider text-onbrand animate-pulse-glow"
            >
              <span className="relative z-10">{t("hero.shop")}</span>
              <ArrowRight size={17} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-9 py-4 text-sm font-black uppercase tracking-wider text-fg backdrop-blur transition-colors hover:border-white/60 light:border-black/20 light:bg-black/5 light:hover:border-black/50"
            >
              {t("hero.story")}
            </Link>
          </div>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.45em] text-fg/45">
            {t("hero.tagline")}
          </p>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-9 w-5 rounded-full border border-white/25 p-1 light:border-black/25"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-white/60 light:bg-black/40" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatShirt({
  children,
  glow,
  rotate,
  duration,
}: {
  children: ReactNode;
  glow: "flame" | "ice";
  rotate: number;
  duration: number;
}) {
  const aura =
    glow === "flame"
      ? "radial-gradient(closest-side, rgba(255,90,31,0.55), transparent 72%)"
      : "radial-gradient(closest-side, rgba(30,127,255,0.55), transparent 72%)";

  return (
    <motion.div
      animate={{ y: [0, -16, 0], rotate: [rotate, rotate + 1.6, rotate] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="absolute inset-0 -z-10 scale-125 blur-3xl" style={{ background: aura }} />
      <div className="absolute -bottom-4 left-1/2 h-5 w-2/3 -translate-x-1/2 rounded-[100%] bg-black/55 blur-xl" />
      <div className="drop-shadow-2xl">{children}</div>
    </motion.div>
  );
}

function Spark({
  className = "",
  color,
  delay = 0,
}: {
  className?: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.span
      aria-hidden
      animate={{ y: [0, -22, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`pointer-events-none absolute z-0 hidden h-1.5 w-1.5 rounded-full md:block ${className}`}
      style={{ background: color, boxShadow: `0 0 12px 2px ${color}` }}
    />
  );
}
