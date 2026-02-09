"use client";

import type { CSSProperties } from "react";
import type { LocaleCode } from "@/types/app";

type ArchitectureItem = {
  label: string;
  content: string;
};

type ArchitectureSectionProps = {
  locale: LocaleCode;
  items: ArchitectureItem[];
};

export default function ArchitectureSection({ locale, items }: ArchitectureSectionProps) {
  return (
    <section
      id="architecture"
      className="section-entry relative z-10 space-y-6 rounded-3xl border border-[#d8e8df] bg-[#f8fdf9] p-8 shadow-[0_25px_50px_rgba(25,46,44,0.12)]"
      style={{ "--entry-delay": "0.25s" } as CSSProperties}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1b5e43]">
          {locale === "fa" ? "معماری" : "Architecture"}
        </p>
        <h2 className="text-2xl font-semibold text-[#0b3328]">
          {locale === "fa" ? "تمیز و آماده برای آینده" : "Clean and future-proof"}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-[#c9ddd3] bg-white/80 p-4 text-sm text-[#1a342d] shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7ea899]">{item.label}</p>
            <p className="mt-2 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
