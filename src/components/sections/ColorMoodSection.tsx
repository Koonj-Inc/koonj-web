"use client";

import type { CSSProperties } from "react";
import type { LocaleCode } from "@/types/app";

type MoodItem = {
  title: string;
  body: string;
  gradient: string;
  shadow: string;
};

type ColorMoodSectionProps = {
  locale: LocaleCode;
  items: MoodItem[];
};

export default function ColorMoodSection({ locale, items }: ColorMoodSectionProps) {
  return (
    <section
      className="relative z-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-[#ddebe4] to-[#f4fbf8] p-8 shadow-[0_20px_40px_rgba(16,16,16,0.08)]"
      style={{ "--entry-delay": "0.25s" } as CSSProperties}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            {locale === "fa" ? "حالت رنگ‌ها" : "Color moods"}
          </p>
          <h3 className="text-xl font-semibold text-[#1d1b17]">
            {locale === "fa" ? "هشدار و آرامش" : "Warning and relaxation"}
          </h3>
        </div>
        <p className="text-xs text-[#5c544a]">
          {locale === "fa" ? "ترکیب کهربایی/سبز روشن" : "Amber meets grounded teal"}
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-slate-100 p-5 text-sm font-semibold text-[#062d24] bg-gradient-to-br ${item.gradient} ${item.shadow}`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#093529]/80">
              {locale === "fa" ? "پالت" : "Palette"}
            </p>
            <p className="mt-2 text-base font-bold text-white">{item.title}</p>
            <p className="mt-1 text-xs font-normal text-white/90">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
