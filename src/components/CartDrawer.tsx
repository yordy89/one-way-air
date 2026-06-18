"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Lock, Truck, ShieldCheck, RotateCcw, Trash2 } from "lucide-react";
import { Garment } from "./brand/Garment";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";

export function CartDrawer() {
  const { open, setOpen, lines, remove, setQty, subtotal, count } = useCart();
  const { t } = useI18n();
  const freeShipThreshold = 75;
  const remaining = Math.max(0, freeShipThreshold - subtotal);
  const pct = Math.min(100, (subtotal / freeShipThreshold) * 100);
  const unlocked = remaining <= 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 360, damping: 38 }}
            className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-ink-soft shadow-2xl"
          >
            {/* header */}
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <div className="flex items-center gap-2.5">
                <span className="brand-gradient grid h-9 w-9 place-items-center rounded-xl text-onbrand">
                  <ShoppingBag size={18} />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-lg font-black">{t("cart.title")}</p>
                  <p className="text-[11px] uppercase tracking-wider text-fg/45">
                    {count} {count === 1 ? "item" : "items"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg/70 transition-colors hover:border-fg/30 hover:text-fg"
                aria-label="Close cart"
              >
                <X size={17} />
              </button>
            </div>

            {/* free-shipping meter */}
            {lines.length > 0 && (
              <div className="border-b border-line bg-surface/40 px-6 py-4">
                <div className="flex items-center gap-2 text-xs">
                  <Truck size={15} className={unlocked ? "text-flame" : "text-fg/50"} />
                  {unlocked ? (
                    <span className="font-bold text-flame">{t("cart.freeShipUnlocked")}</span>
                  ) : (
                    <span className="text-fg/60">
                      {t("cart.freeShipPre")}{" "}
                      <span className="font-bold text-fg">${remaining.toFixed(0)}</span>{" "}
                      {t("cart.freeShipPost")}
                    </span>
                  )}
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                  <motion.div
                    className="brand-gradient h-full rounded-full"
                    animate={{ width: `${pct}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  />
                </div>
              </div>
            )}

            {/* items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full border border-line bg-surface">
                    <ShoppingBag size={28} className="text-fg/40" />
                  </div>
                  <p className="mt-5 font-display text-xl font-black">{t("cart.empty")}</p>
                  <p className="mt-1 text-sm text-fg/50">{t("cart.emptySub")}</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="brand-gradient mt-6 rounded-full px-7 py-3 text-sm font-black uppercase tracking-wider text-onbrand transition-transform hover:scale-105"
                  >
                    {t("cart.shopDrop")}
                  </button>
                </div>
              ) : (
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {lines.map((l) => (
                      <motion.li
                        key={`${l.slug}-${l.size}`}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        className="flex gap-3 rounded-2xl border border-line bg-surface/50 p-3 transition-colors hover:border-line/80"
                      >
                        <div
                          className="grid h-24 w-20 shrink-0 place-items-center overflow-hidden rounded-xl border border-line"
                          style={{ background: `linear-gradient(150deg, ${l.base}, #0a0a0c)` }}
                        >
                          <Garment base={l.base} accent={l.accent} category={l.category} className="w-16" />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <p className="truncate text-sm font-bold leading-tight">{l.name}</p>
                            <button
                              onClick={() => remove(l.slug, l.size)}
                              className="shrink-0 text-fg/35 transition-colors hover:text-flame"
                              aria-label="Remove"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                          <span className="mt-1 w-fit rounded-md border border-line px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-fg/55">
                            {t("cart.size")} {l.size}
                          </span>
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center rounded-full border border-line">
                              <button
                                onClick={() => setQty(l.slug, l.size, l.qty - 1)}
                                className="grid h-7 w-7 place-items-center text-fg/70 hover:text-fg"
                                aria-label="Decrease"
                              >
                                <Minus size={13} />
                              </button>
                              <span className="w-5 text-center text-sm font-bold">{l.qty}</span>
                              <button
                                onClick={() => setQty(l.slug, l.size, l.qty + 1)}
                                className="grid h-7 w-7 place-items-center text-fg/70 hover:text-fg"
                                aria-label="Increase"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                            <span className="font-display text-base font-black">
                              ${(l.price * l.qty).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* footer */}
            {lines.length > 0 && (
              <div className="border-t border-line bg-surface/30 px-6 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-fg/60">{t("cart.subtotal")}</span>
                  <span className="font-display text-2xl font-black">${subtotal.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-fg/40">{t("cart.taxNote")}</p>

                <button className="brand-gradient group mt-4 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-black uppercase tracking-wider text-onbrand transition-transform hover:scale-[1.02]">
                  <Lock size={15} />
                  {t("cart.checkout")}
                </button>

                <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-fg/50">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-ice" />
                    {t("cart.secure")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RotateCcw size={13} className="text-ice" />
                    {t("cart.returns")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck size={13} className="text-ice" />
                    {t("cart.ship")}
                  </span>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
