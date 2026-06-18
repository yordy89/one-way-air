"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string>;

const en: Dict = {
  // nav
  "nav.home": "Home",
  "nav.shop": "Shop",
  "nav.catalog": "Catalog",
  "nav.about": "Our Story",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.cart": "Cart",
  "nav.menu": "Menu",
  "nav.shopAll": "Shop All",
  "nav.featured": "Featured Drop",
  "nav.shopBlurb": "Premium dry-fit, bold colorways, limited runs.",
  "nav.theme": "Theme",
  "nav.language": "Language",

  // announcement
  "announce.1": "ONE WAY, THE RIGHT WAY",
  "announce.2": "FREE SHIPPING OVER $75",
  "announce.3": "NEW DROP IS LIVE",
  "announce.4": "LIMITED RUN — DON'T SLEEP",

  // categories
  "cat.All": "All",
  "cat.Tees": "Tees",
  "cat.Long Sleeve": "Long Sleeve",
  "cat.Jersey": "Jersey",
  "cat.Headwear": "Headwear",

  // hero
  "hero.badge": "New Drop — Now Live",
  "hero.title1": "The Right",
  "hero.title2": "Way Is Here",
  "hero.sub": "Premium dry-fit built for the grind. Grab yours before the drop sells out.",
  "hero.rated": "5-Star Rated by the Crew",
  "hero.shop": "Shop The Drop",
  "hero.story": "Our Story",
  "hero.tagline": "One Way, The Right Way.",

  // trust bar
  "trust.shipping": "Free shipping over $75",
  "trust.secure": "Secure checkout",
  "trust.returns": "Easy 30-day returns",
  "trust.drops": "Limited drops",

  // marquee
  "marquee.join": "JOIN THE CREW",
  "marquee.live": "THE DROP IS LIVE",
  "marquee.wear": "WEAR THE BRAND",

  // drop collection
  "drop.eyebrow": "// The Collection",
  "drop.title": "New Drop",
  "drop.sub": "Limited pieces. Built for the One Way crew. When it's gone, it's gone.",
  "drop.shopAll": "Shop All",

  // features
  "features.hotTitle": "Hot & Cold",
  "features.hotBody":
    "Heating and cooling done the right way — the same energy we put in every home, now on you.",
  "features.dryTitle": "Premium Dry-Fit",
  "features.dryBody": "Soft, breathable, built for Florida heat. Clean fit, bold colors, everyday wear.",
  "features.limitedTitle": "Limited Drops",
  "features.limitedBody":
    "Seasonal releases in limited runs. When it's gone, it's gone — collect them all.",

  // join crew
  "join.title1": "Wear The Brand.",
  "join.title2": "Join The Crew.",
  "join.sub": "More than merch — it's a way of doing things. The honest way. The one way.",
  "join.cta": "Shop The Drop",

  // crew love
  "crew.eyebrow": "// What the crew is saying",
  "crew.title": "Crew Love",
  "crew.verified": "Verified Crew",

  // footer
  "footer.tagline":
    "Heating & cooling done the right way — the same energy we put in every home, now on you. More than merch. The honest way. The one way.",
  "footer.shop": "Shop",
  "footer.brand": "Brand",
  "footer.support": "Support",
  "footer.story": "Our Story",
  "footer.crew": "The Crew",
  "footer.drops": "Drops",
  "footer.shippingL": "Shipping",
  "footer.returnsL": "Returns",
  "footer.sizeGuide": "Size Guide",
  "footer.join": "Join the crew",
  "footer.rights": "One Way, The Right Way.",

  // cart
  "cart.title": "Your Cart",
  "cart.empty": "Your cart is empty",
  "cart.emptySub": "The drop is waiting. Don't sleep.",
  "cart.shopDrop": "Shop The Drop",
  "cart.freeShipPre": "You're",
  "cart.freeShipPost": "away from free shipping",
  "cart.freeShipUnlocked": "Free shipping unlocked!",
  "cart.size": "Size",
  "cart.subtotal": "Subtotal",
  "cart.taxNote": "Taxes & shipping calculated at checkout.",
  "cart.checkout": "Secure Checkout",
  "cart.secure": "SSL secure",
  "cart.returns": "30-day returns",
  "cart.ship": "Fast shipping",
  "cart.tagline": "One Way, The Right Way.",

  // catalog page
  "catalog.eyebrow": "// Shop All",
  "catalog.title": "The Catalog",
  "catalog.sub": "Every piece from the drop. Premium dry-fit, bold colorways, limited runs.",
  "catalog.sort": "Sort",
  "catalog.featured": "Featured",
  "catalog.priceLow": "Price: Low",
  "catalog.priceHigh": "Price: High",
  "catalog.pieces": "pieces · The Collection",

  // contact page
  "contact.eyebrow": "// Get in touch",
  "contact.title1": "Talk To",
  "contact.title2": "The Crew",
  "contact.sub": "Orders, sizing, wholesale, or just to say what's up. We do support the right way.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.based": "Based in",
  "contact.basedVal": "Southwest Florida",
  "contact.support": "Support",
  "contact.supportVal": "Mon–Sat · 9am–6pm ET",
  "contact.formName": "Name",
  "contact.formNamePh": "Your name",
  "contact.formEmail": "Email",
  "contact.formEmailPh": "you@email.com",
  "contact.formSubject": "Subject",
  "contact.formSubjectPh": "What's up?",
  "contact.formTopic": "Topic",
  "contact.topicOrder": "Order help",
  "contact.topicSizing": "Sizing",
  "contact.topicWholesale": "Wholesale",
  "contact.topicOther": "Something else",
  "contact.formMessage": "Message",
  "contact.formMessagePh": "Tell us what you need — orders, sizing, wholesale, anything.",
  "contact.send": "Send Message",
  "contact.doneTitle": "You're in.",
  "contact.doneSub": "We'll hit you back the right way. Welcome to the crew.",
  "contact.faqTease": "Looking for something quick?",
  "contact.faqLink": "Check the FAQ",

  // about page
  "about.eyebrow": "// Our Story",
  "about.title1": "More Than",
  "about.title2": "Merch",
  "about.lead":
    "OneWayAir started in Southwest Florida heating and cooling homes the right way. The crew, the work ethic, the standard — we put it into apparel.",
  "about.p1Title": "Where It Started",
  "about.p1":
    "Every home, every install, every service call — done the honest way. That same energy is stitched into every piece we drop.",
  "about.p2Title": "Built For The Grind",
  "about.p2":
    "Premium dry-fit made for Florida heat. Bold colorways, clean fits, limited runs. Wear it on the job or on the weekend.",
  "about.p3Title": "Wear The Brand",
  "about.p3":
    "It's more than merch — it's a way of doing things. Join the crew and rep a brand you actually believe in.",
  "about.statYears": "Years doing it right",
  "about.statHomes": "Homes served",
  "about.statRating": "Crew rating",
  "about.cta": "Shop The Drop",

  // faq page
  "faq.eyebrow": "// Help Center",
  "faq.title": "Questions",
  "faq.sub": "Everything you need to know about the drop, orders, and sizing.",
  "faq.q1": "When will my order ship?",
  "faq.a1":
    "Orders ship within 1–2 business days from Southwest Florida. You'll get a tracking link by email as soon as it's on the way.",
  "faq.q2": "Do you offer free shipping?",
  "faq.a2": "Yes — free standard shipping on every order over $75. Under that, a flat rate is calculated at checkout.",
  "faq.q3": "How do the sizes fit?",
  "faq.a3":
    "Our dry-fit runs true to size with a clean, athletic fit. If you're between sizes or want it relaxed, size up.",
  "faq.q4": "What's your return policy?",
  "faq.a4":
    "Unworn items can be returned within 30 days for a full refund or exchange. Drops marked Sold Out are final sale.",
  "faq.q5": "Do you restock sold-out drops?",
  "faq.a5":
    "Drops are limited runs — when it's gone, it's gone. Join the crew to get early access to the next release.",
  "faq.q6": "Do you do wholesale or team orders?",
  "faq.a6": "We do. Reach out through the contact page with your details and we'll set you up the right way.",
  "faq.stillTitle": "Still have questions?",
  "faq.stillSub": "The crew is here to help.",
  "faq.stillCta": "Contact Us",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.shop": "Tienda",
  "nav.catalog": "Catálogo",
  "nav.about": "Nuestra Historia",
  "nav.faq": "Preguntas",
  "nav.contact": "Contacto",
  "nav.cart": "Carrito",
  "nav.menu": "Menú",
  "nav.shopAll": "Ver Todo",
  "nav.featured": "Drop Destacado",
  "nav.shopBlurb": "Dry-fit premium, colores intensos, ediciones limitadas.",
  "nav.theme": "Tema",
  "nav.language": "Idioma",

  "announce.1": "ONE WAY, THE RIGHT WAY",
  "announce.2": "ENVÍO GRATIS DESDE $75",
  "announce.3": "NUEVO DROP DISPONIBLE",
  "announce.4": "EDICIÓN LIMITADA — NO DUERMAS",

  "cat.All": "Todo",
  "cat.Tees": "Camisetas",
  "cat.Long Sleeve": "Manga Larga",
  "cat.Jersey": "Jersey",
  "cat.Headwear": "Gorras",

  "hero.badge": "Nuevo Drop — Disponible",
  "hero.title1": "El Camino",
  "hero.title2": "Correcto",
  "hero.sub": "Dry-fit premium hecho para el día a día. Consigue el tuyo antes de que se agote.",
  "hero.rated": "5 Estrellas por la Crew",
  "hero.shop": "Comprar El Drop",
  "hero.story": "Nuestra Historia",
  "hero.tagline": "One Way, The Right Way.",

  "trust.shipping": "Envío gratis desde $75",
  "trust.secure": "Pago seguro",
  "trust.returns": "Devoluciones en 30 días",
  "trust.drops": "Ediciones limitadas",

  "marquee.join": "ÚNETE A LA CREW",
  "marquee.live": "EL DROP ESTÁ AQUÍ",
  "marquee.wear": "USA LA MARCA",

  "drop.eyebrow": "// La Colección",
  "drop.title": "Nuevo Drop",
  "drop.sub": "Piezas limitadas. Hechas para la One Way crew. Cuando se acaba, se acaba.",
  "drop.shopAll": "Ver Todo",

  "features.hotTitle": "Calor y Frío",
  "features.hotBody":
    "Calefacción y aire hechos como debe ser — la misma energía que ponemos en cada hogar, ahora en ti.",
  "features.dryTitle": "Dry-Fit Premium",
  "features.dryBody": "Suave, transpirable, hecho para el calor de Florida. Corte limpio, colores intensos.",
  "features.limitedTitle": "Ediciones Limitadas",
  "features.limitedBody":
    "Lanzamientos de temporada en ediciones limitadas. Cuando se acaba, se acaba — colecciónalos.",

  "join.title1": "Usa La Marca.",
  "join.title2": "Únete A La Crew.",
  "join.sub": "Más que merch — es una forma de hacer las cosas. La forma honesta. The one way.",
  "join.cta": "Comprar El Drop",

  "crew.eyebrow": "// Lo que dice la crew",
  "crew.title": "Crew Love",
  "crew.verified": "Crew Verificada",

  "footer.tagline":
    "Calefacción y aire hechos como debe ser — la misma energía que ponemos en cada hogar, ahora en ti. Más que merch. La forma honesta. The one way.",
  "footer.shop": "Tienda",
  "footer.brand": "Marca",
  "footer.support": "Soporte",
  "footer.story": "Nuestra Historia",
  "footer.crew": "La Crew",
  "footer.drops": "Drops",
  "footer.shippingL": "Envíos",
  "footer.returnsL": "Devoluciones",
  "footer.sizeGuide": "Guía de Tallas",
  "footer.join": "Únete a la crew",
  "footer.rights": "One Way, The Right Way.",

  "cart.title": "Tu Carrito",
  "cart.empty": "Tu carrito está vacío",
  "cart.emptySub": "El drop te espera. No duermas.",
  "cart.shopDrop": "Comprar El Drop",
  "cart.freeShipPre": "Te faltan",
  "cart.freeShipPost": "para el envío gratis",
  "cart.freeShipUnlocked": "¡Envío gratis desbloqueado!",
  "cart.size": "Talla",
  "cart.subtotal": "Subtotal",
  "cart.taxNote": "Impuestos y envío se calculan al pagar.",
  "cart.checkout": "Pago Seguro",
  "cart.secure": "SSL seguro",
  "cart.returns": "Devoluciones 30 días",
  "cart.ship": "Envío rápido",
  "cart.tagline": "One Way, The Right Way.",

  "catalog.eyebrow": "// Ver Todo",
  "catalog.title": "El Catálogo",
  "catalog.sub": "Todas las piezas del drop. Dry-fit premium, colores intensos, ediciones limitadas.",
  "catalog.sort": "Ordenar",
  "catalog.featured": "Destacados",
  "catalog.priceLow": "Precio: Menor",
  "catalog.priceHigh": "Precio: Mayor",
  "catalog.pieces": "piezas · La Colección",

  "contact.eyebrow": "// Contáctanos",
  "contact.title1": "Habla Con",
  "contact.title2": "La Crew",
  "contact.sub": "Pedidos, tallas, mayoreo, o solo para saludar. Damos soporte como debe ser.",
  "contact.email": "Correo",
  "contact.phone": "Teléfono",
  "contact.based": "Ubicados en",
  "contact.basedVal": "Suroeste de Florida",
  "contact.support": "Soporte",
  "contact.supportVal": "Lun–Sáb · 9am–6pm ET",
  "contact.formName": "Nombre",
  "contact.formNamePh": "Tu nombre",
  "contact.formEmail": "Correo",
  "contact.formEmailPh": "tu@correo.com",
  "contact.formSubject": "Asunto",
  "contact.formSubjectPh": "¿Qué tal?",
  "contact.formTopic": "Tema",
  "contact.topicOrder": "Ayuda con pedido",
  "contact.topicSizing": "Tallas",
  "contact.topicWholesale": "Mayoreo",
  "contact.topicOther": "Otra cosa",
  "contact.formMessage": "Mensaje",
  "contact.formMessagePh": "Cuéntanos qué necesitas — pedidos, tallas, mayoreo, lo que sea.",
  "contact.send": "Enviar Mensaje",
  "contact.doneTitle": "¡Listo!",
  "contact.doneSub": "Te responderemos como debe ser. Bienvenido a la crew.",
  "contact.faqTease": "¿Buscas algo rápido?",
  "contact.faqLink": "Mira las Preguntas",

  "about.eyebrow": "// Nuestra Historia",
  "about.title1": "Más Que",
  "about.title2": "Merch",
  "about.lead":
    "OneWayAir nació en el suroeste de Florida calentando y enfriando hogares como debe ser. La crew, la ética, el estándar — lo pusimos en ropa.",
  "about.p1Title": "Dónde Empezó",
  "about.p1":
    "Cada hogar, cada instalación, cada servicio — hecho de forma honesta. Esa misma energía está cosida en cada pieza.",
  "about.p2Title": "Hecho Para El Grind",
  "about.p2":
    "Dry-fit premium hecho para el calor de Florida. Colores intensos, cortes limpios, ediciones limitadas.",
  "about.p3Title": "Usa La Marca",
  "about.p3":
    "Es más que merch — es una forma de hacer las cosas. Únete a la crew y representa una marca en la que crees.",
  "about.statYears": "Años haciéndolo bien",
  "about.statHomes": "Hogares atendidos",
  "about.statRating": "Rating de la crew",
  "about.cta": "Comprar El Drop",

  "faq.eyebrow": "// Centro de Ayuda",
  "faq.title": "Preguntas",
  "faq.sub": "Todo lo que necesitas saber sobre el drop, pedidos y tallas.",
  "faq.q1": "¿Cuándo se envía mi pedido?",
  "faq.a1":
    "Los pedidos se envían en 1–2 días hábiles desde el suroeste de Florida. Recibirás un enlace de seguimiento por correo.",
  "faq.q2": "¿Tienen envío gratis?",
  "faq.a2": "Sí — envío estándar gratis en pedidos sobre $75. Por debajo, se calcula una tarifa fija al pagar.",
  "faq.q3": "¿Cómo es la talla?",
  "faq.a3":
    "Nuestro dry-fit es fiel a la talla con un corte atlético limpio. Si estás entre tallas o lo quieres holgado, sube una talla.",
  "faq.q4": "¿Cuál es la política de devoluciones?",
  "faq.a4":
    "Las prendas sin usar se pueden devolver dentro de 30 días para reembolso o cambio. Los drops agotados son venta final.",
  "faq.q5": "¿Reabastecen los drops agotados?",
  "faq.a5":
    "Los drops son ediciones limitadas — cuando se acaba, se acaba. Únete a la crew para acceso anticipado al próximo.",
  "faq.q6": "¿Hacen mayoreo o pedidos de equipo?",
  "faq.a6": "Sí. Escríbenos en la página de contacto con tus detalles y te atendemos como debe ser.",
  "faq.stillTitle": "¿Aún tienes preguntas?",
  "faq.stillSub": "La crew está aquí para ayudar.",
  "faq.stillCta": "Contáctanos",
};

const dicts: Record<Lang, Dict> = { en, es };

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const langScript = `
(function(){
  try {
    var l = localStorage.getItem('owa-lang') || 'en';
    document.documentElement.setAttribute('lang', l);
  } catch(e){}
})();
`;

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (localStorage.getItem("owa-lang") as Lang) || "en";
    setLangState(stored);
    document.documentElement.setAttribute("lang", stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    document.documentElement.setAttribute("lang", l);
    try {
      localStorage.setItem("owa-lang", l);
    } catch {}
  }

  function t(key: string) {
    return dicts[lang][key] ?? en[key] ?? key;
  }

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
