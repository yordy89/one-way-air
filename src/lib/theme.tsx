"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Runs before paint (injected in <head>) so there's no theme flash.
export const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('owa-theme') || 'dark';
    document.documentElement.classList.toggle('light', t === 'light');
  } catch(e){}
})();
`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("owa-theme") as Theme) || "dark";
    setThemeState(stored);
    document.documentElement.classList.toggle("light", stored === "light");
  }, []);

  function setTheme(t: Theme) {
    setThemeState(t);
    document.documentElement.classList.toggle("light", t === "light");
    try {
      localStorage.setItem("owa-theme", t);
    } catch {}
  }

  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
