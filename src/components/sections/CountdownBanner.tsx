"use client";

import type { CSSProperties } from "react";
import type { LocaleCode, TimeSegment } from "@/types/app";

type CountdownBannerProps = {
  locale: LocaleCode;
  timeSegments: TimeSegment[];
  countdownDone: boolean;
  appRepoUrl: string;
};

export default function CountdownBanner({ locale, timeSegments, countdownDone, appRepoUrl }: CountdownBannerProps) {
  const orderedSegments = locale === "fa" ? [...timeSegments].reverse() : timeSegments;

  return (
    <section
      id="countdown"
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="section-entry relative z-10 space-y-6 overflow-hidden rounded-[36px] border border-[#4b0d0d] bg-[#050505] p-8 shadow-[0_40px_110px_rgba(0,0,0,0.65)]"
      style={{ "--entry-delay": "0s" } as CSSProperties}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#ffce9f]">
            {locale === "fa" ? "نسخه آزمایشی" : "Experimental version"}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            {locale === "fa" ? "۱۴ روز تا تجربه نسخه آزمایشی" : "14 days until the experimental version drops"}
          </h2>
          <p className="text-sm text-white/80">
            {locale === "fa"
              ? "هر حلقه، مرز و یادآوری در این نسخه آزمایشی، روایت دوزبانه آرامش و دقت را همراه دارد."
              : "Every circle, boundary, and reminder in this experimental version keeps a bilingual calm and precise feel."}
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 rounded-3xl bg-white/5 px-5 py-3 shadow-[0_25px_60px_rgba(255,0,0,0.35)]">
          {orderedSegments.map((segment) => (
            <div
              key={segment.label}
              className="flex min-w-[90px] flex-1 flex-col items-center justify-center gap-1 text-center"
            >
              <span className="text-3xl font-semibold tracking-[0.3em] text-[#ffbabe] md:text-4xl">
                {String(segment.value).padStart(2, "0")}
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.4em] text-white/60">
                {segment.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#e63f3f] px-3 py-1 text-[0.65rem] uppercase tracking-[0.4em] text-white">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/80" />
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          {locale === "fa" ? "زنده امروز" : "Live today"}
          <span className="text-white/80">
            {countdownDone
              ? locale === "fa"
                ? "پایان یافته"
                : "ended"
              : locale === "fa"
              ? "تا پایان"
              : "until end"}
          </span>
        </span>
        {countdownDone ? (
          <a
            href={appRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-emerald-400 bg-emerald-500 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-emerald-400"
          >
            {locale === "fa" ? "رفتن به مخزن اپ" : "View the app repo"}
          </a>
        ) : (
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            {locale === "fa"
              ? "وقتی تایمر صفر شود، این بنر سبز می‌شود و به مخزن اپ می‌برد."
              : "When the timer hits zero, this banner will glow green for the app repo."}
          </p>
        )}
      </div>
    </section>
  );
}
