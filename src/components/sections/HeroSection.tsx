"use client";

import type { CSSProperties } from "react";
import type { LocaleCode } from "@/types/app";

type HeroCopy = {
  title: string;
  subtitle: string;
  describe: string;
};

type HeroSectionProps = {
  locale: LocaleCode;
  hero: HeroCopy;
  countdownDone: boolean;
  appRepoUrl: string;
};

export default function HeroSection({ locale, hero, countdownDone, appRepoUrl }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="section-entry relative z-10 grid gap-8 rounded-3xl border border-[#cdded6] bg-gradient-to-br from-[#edf6f3] to-[#f6fbfa] p-8 shadow-[0_30px_100px_rgba(28,52,46,0.12)] lg:grid-cols-[3fr,2fr]"
      lang={locale}
      style={{ "--entry-delay": "0s" } as CSSProperties}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 rounded-full border border-[#f7c16c] bg-[#fff7e5] px-4 py-1 text-sm font-semibold text-[#ad5200]">
          <span>{locale === "fa" ? "فاز تجربی دو زبانه" : "Bilingual experimental release"}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#0b5f46]">
            {locale === "fa" ? "نسخه آزمایشی ۱.۰" : "Experimental v1.0"}
          </span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-[#111] md:text-5xl">{hero.title}</h1>
        <p className="text-lg text-[#46403a]">{hero.subtitle}</p>
        <p className="text-base text-[#5a564e]">{hero.describe}</p>
        <div className="flex flex-wrap gap-3">
          <button className="cursor-pointer rounded-full bg-[#2b8a75] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(40,65,57,0.25)] transition hover:-translate-y-0.5">
            {locale === "fa" ? "دانلود اپ" : "Download the app"}
          </button>
          <button className="cursor-pointer rounded-full border border-[#accfc6] px-6 py-3 text-sm font-semibold text-[#0b1c1a] transition hover:bg-[#edf5f3]">
            {locale === "fa" ? "سازمان‌دهی نگاهی" : "Watch walkthrough"}
          </button>
        </div>
      </div>
      <div className="space-y-5 rounded-3xl bg-gradient-to-br from-[#fefbf6] to-[#fff9f3] p-6 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f6b52]">
          {locale === "fa" ? "چیست کوونج؟" : "What is Koonj?"}
        </p>
        <p className="text-base font-semibold text-[#0a2c23]">
          {locale === "fa"
            ? "فضایی موبایل‌محور برای همگام‌سازی خانواده، تیم، و دوستان با نشانگرهای بصری قدرتمند."
            : "A mobile-first hub that keeps households, founders, and friends aligned with bold visual cues."}
        </p>
        <p className="text-sm text-[#4b433a]">
          {locale === "fa"
            ? "هشدارهای لحظه‌ای، بردهای تقسیم‌شده، و اشتراک‌گذاری دو زبانه تجربه‌ای دوجانبه می‌سازند."
            : "Instant reminders, shared boards, and bilingual sharing create a seamless space for every crew."}
        </p>
        <p className="text-xs text-[#777a71]">
          {locale === "fa"
            ? "iOS + Android • حالت شب همیشه روشن"
            : "iOS + Android • always-on dark mode for on-the-go checklists"}
        </p>
        {countdownDone && (
          <a
            href={appRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.3em] text-[#0f3f2c] underline decoration-[#1c7c55]"
          >
            {locale === "fa" ? "رفتن به مخزن اپ" : "Go to the app repo"}
          </a>
        )}
      </div>
    </section>
  );
}
