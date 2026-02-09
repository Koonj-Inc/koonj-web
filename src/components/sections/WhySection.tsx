"use client";

import type { CSSProperties } from "react";
import type { LocaleCode } from "@/types/app";

type WhySectionProps = {
  locale: LocaleCode;
};

export default function WhySection({ locale }: WhySectionProps) {
  return (
    <section
      className="relative z-10 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl"
      lang={locale}
      style={{ "--entry-delay": "0.28s" } as CSSProperties}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {locale === "fa" ? "گیج‌کننده نشوید" : "Why Koonj"}
        </p>
        <h2 className="text-3xl font-semibold text-[#1b1a16]">
          {locale === "fa" ? "مرکز آرامش برای افراد پرمشغله" : "A calm center for busy people."}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {locale === "fa" ? "زمینه" : "Context"}
          </p>
          <p className="text-sm text-[#1b1a16]">
            {locale === "fa"
              ? "وظایف را به مکان، رویداد یا افراد مرتبط می‌کند."
              : "Map tasks to places, events, or people."}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {locale === "fa" ? "حریم خصوصی" : "Privacy"}
          </p>
          <p className="text-sm text-[#1b1a16]">
            {locale === "fa"
              ? "محافظت کامل، با گزینه‌های کنترل حفظ داده."
              : "End-to-end protection with optional dark data retention controls."}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {locale === "fa" ? "پشتیبانی" : "Support"}
          </p>
          <p className="text-sm text-[#1b1a16]">
            {locale === "fa"
              ? "مقالات کمکی و کنسیرج انسانی دو زبان."
              : "Smart help articles and human concierge in both languages."}
          </p>
        </div>
      </div>
    </section>
  );
}
