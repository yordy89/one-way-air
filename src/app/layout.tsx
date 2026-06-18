import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { ThemeProvider, themeScript } from "@/lib/theme";
import { I18nProvider, langScript } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "OneWayAir — One Way, The Right Way.",
  description:
    "Premium dry-fit streetwear from OneWayAir. Heating & cooling done the right way — the same energy, now on you. The new drop is live.",
  openGraph: {
    title: "OneWayAir — The Right Way Is Here",
    description: "Limited drops. Built for the One Way crew.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript + langScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink text-fg antialiased">
        <ThemeProvider>
          <I18nProvider>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <CartDrawer />
            </CartProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
