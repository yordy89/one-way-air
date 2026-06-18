"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  size: string;
  base: string;
  accent: string;
  category: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  remove: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  function add(line: Omit<CartLine, "qty">, qty = 1) {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.slug === line.slug && l.size === line.size);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { ...line, qty }];
    });
    setOpen(true);
  }

  function remove(slug: string, size: string) {
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size)));
  }

  function setQty(slug: string, size: string, qty: number) {
    setLines((prev) =>
      prev
        .map((l) => (l.slug === slug && l.size === size ? { ...l, qty: Math.max(0, qty) } : l))
        .filter((l) => l.qty > 0)
    );
  }

  const count = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);
  const subtotal = useMemo(() => lines.reduce((s, l) => s + l.qty * l.price, 0), [lines]);

  return (
    <CartContext.Provider value={{ lines, open, setOpen, add, remove, setQty, count, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
