"use client";

import type { CSSProperties } from "react";
import type { LocaleCode } from "@/types/app";

type SupportSectionProps = {
  locale: LocaleCode;
  donateUrl: string;
};

export default function SupportSection({ locale, donateUrl }: SupportSectionProps) {
  return (
    <section
      className="relative z-10 space-y-6 rounded-[36px] border border-[#c6ded4] bg-gradient-to-br from-[#fffefa] to-[#f6f5ef] p-10 shadow-[0_30px_60px_rgba(8,45,33,0.15)]"
      lang={locale}
      style={{ "--entry-delay": "0.35s" } as CSSProperties}
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e7a61]">
          {locale === "fa" ? "حمایت ویژه" : "Support boldly"}
        </p>
        <h2 className="text-3xl font-semibold text-[#0d3a2d]">
          {locale === "fa"
            ? "حفظ تجربه دو زبانه را با یک حرکت ساده تضمین کنید"
            : "Keep the bilingual experience living, breathing, and free"}
        </h2>
        <p className="text-sm text-[#3b4a44]">
          {locale === "fa"
            ? "کمک‌های شما هزینه‌های زیرساخت، ترجمه، و طراحی لحظه به لحظه را تغذیه می‌کند. با یک تراکنش ساده، یک هزار هزینه مبهم حذف می‌شود."
            : "Your donation keeps translators, designers, and realtime reminders in motion. A single contribution unblocks countless quiet moments."}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            label: locale === "fa" ? "ترجمه زنده" : "Live localization",
            value: locale === "fa" ? "حفظ همزمان فارسی + انگلیسی" : "Keeps Persian + English synced",
          },
          {
            label: locale === "fa" ? "زیرساخت" : "Infrastructure",
            value: locale === "fa" ? "سرورها و حفاظت" : "Servers, security, and backups",
          },
          {
            label: locale === "fa" ? "هدیه‌ی کوچک" : "Tiny gift",
            value: locale === "fa" ? "پیش‌نمایش‌های ویژه برای حمایت‌کنندگان" : "Sneak peeks for supporters",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#d1e7dc] bg-white/70 px-4 py-3 shadow-[0_15px_30px_rgba(14,79,60,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1a7a58]">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-[#1b342a]">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#7d8c82]">
            {locale === "fa" ? "هر کمک یک چرخه‌ی پیشرانه است" : "Each gift fuels the engine"}
          </p>
          <p className="text-sm text-[#32453c]">
            {locale === "fa"
              ? "هدایای کوچک به اندازه کمک‌های بزرگ اثرگذارند—تا زمانی که این تجربه زنده بماند."
              : "Small gifts matter just as much as big ones—as long as the story continues."}
          </p>
        </div>
        <a
          href={donateUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#1c7c55] bg-gradient-to-r from-[#0f3b2f] to-[#1c7c55] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(12,59,45,0.4)] transition hover:brightness-110"
        >
          {locale === "fa" ? "حمایت مالی کن" : "Donate to Koonj"}
        </a>
      </div>
    </section>
  );
}
