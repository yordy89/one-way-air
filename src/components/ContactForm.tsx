"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-line bg-surface/50 p-6 sm:p-8"
    >
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <div className="brand-gradient grid h-16 w-16 place-items-center rounded-full text-onbrand">
              <Check size={30} strokeWidth={3} />
            </div>
            <h3 className="mt-5 font-display text-2xl font-black uppercase">{t("contact.doneTitle")}</h3>
            <p className="mt-2 text-sm text-fg/55">{t("contact.doneSub")}</p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("contact.formName")} placeholder={t("contact.formNamePh")} />
              <Field label={t("contact.formEmail")} type="email" placeholder={t("contact.formEmailPh")} />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-fg/50">
                {t("contact.formTopic")}
              </label>
              <select
                className="w-full appearance-none rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-flame/60"
                defaultValue="order"
              >
                <option value="order">{t("contact.topicOrder")}</option>
                <option value="sizing">{t("contact.topicSizing")}</option>
                <option value="wholesale">{t("contact.topicWholesale")}</option>
                <option value="other">{t("contact.topicOther")}</option>
              </select>
            </div>

            <Field label={t("contact.formSubject")} placeholder={t("contact.formSubjectPh")} />

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-fg/50">
                {t("contact.formMessage")}
              </label>
              <textarea
                required
                rows={5}
                placeholder={t("contact.formMessagePh")}
                className="w-full resize-none rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg/30 focus:border-flame/60"
              />
            </div>

            <button
              type="submit"
              className="brand-gradient group flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-black uppercase tracking-wider text-onbrand transition-transform hover:scale-[1.01]"
            >
              {t("contact.send")}
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-fg/50">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg/30 focus:border-flame/60"
      />
    </div>
  );
}
