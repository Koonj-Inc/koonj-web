"use client";

import type { CSSProperties } from "react";
import type { LocaleCode, FeatureCard } from "@/types/app";

type ExperienceSectionProps = {
  locale: LocaleCode;
  features: FeatureCard[];
  steps: string[];
};

export default function ExperienceSection({ locale, features, steps }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="section-entry relative z-10 space-y-10"
      lang={locale}
      style={{ "--entry-delay": "0.1s" } as CSSProperties}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-[#181510]">
            {locale === "fa" ? "تجربه" : "Experience"}
          </h2>
          <p className="text-sm text-[#7d776e]">
            {locale === "fa"
              ? "جزئیات، همگام‌سازی زنده، و پشتیبانی از چندزبانگی از ابتدا."
              : "Details capture, live syncing, and multi-language support from the start."}
          </p>
        </div>
        <span className="rounded-full border border-slate-300 px-4 py-1 text-xs font-semibold text-slate-600">
          {locale === "fa" ? "دو زبان آماده" : "bilingual ready"}
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-[#d6e4dc] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(36,76,68,0.12)]"
          >
            <h3 className="text-xl font-semibold text-[#1d1b17]">{feature.title}</h3>
            <p className="mt-3 text-sm font-medium text-[#6b6560]">{feature.body}</p>
            <p className="mt-4 text-sm text-[#4b433a]">{feature.detail}</p>
          </article>
        ))}
      </div>
      <section className="relative z-10 grid gap-10 rounded-3xl border border-[#cdded6] bg-gradient-to-br from-[#e7f4ef] to-[#fdfdfb] p-10 shadow-[0_30px_60px_rgba(45,84,72,0.12)] lg:grid-cols-2">
        <div className="space-y-3" lang={locale}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            {locale === "fa" ? "کارهایی که می‌توانید انجام دهید" : "What you can do"}
          </p>
          <h2 className="text-3xl font-semibold text-[#14110f]">
            {locale === "fa" ? "آیین‌هایی بسازید که وفادار بماند" : "Build rituals that stay true."}
          </h2>
          <p className="text-sm text-[#5d554a]">
            {locale === "fa"
              ? "از لیست‌های خرید گرفته تا هماهنگی گروهی، کوونج همان حلقه مناسب را با اعلامیه‌های درست وارد جریان می‌کند."
              : "From grocery lists to coordinated crews, Koonj keeps the right circle in the loop with context-rich nudges."}
          </p>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-[#4b433a]" lang={locale}>
          {steps.map((step) => (
            <p key={step} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0f0d0b] text-xs font-semibold text-white">
                ✓
              </span>
              <span>{step}</span>
            </p>
          ))}
          <p className="text-xs text-[#6b6560]">
            {locale === "fa"
              ? "رابط‌ها از ابتدا دو زبانه‌اند تا فارسی‌زبان‌ها و انگلیسی‌زبان‌ها در تجربه‌ای مشترک مشارکت کنند."
              : "UI and copy mirror each other so Persian and English speakers can share the same calm experience."}
          </p>
        </div>
      </section>
    </section>
  );
}
