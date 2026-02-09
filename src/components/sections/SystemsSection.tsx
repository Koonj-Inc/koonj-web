"use client";

import type { CSSProperties } from "react";
import type { LocaleCode } from "@/types/app";

type SystemsSectionProps = {
  locale: LocaleCode;
  systems: { title: string; body: string }[];
};

export default function SystemsSection({ locale, systems }: SystemsSectionProps) {
  return (
    <section
      id="systems"
      className="section-entry relative z-10 space-y-6 rounded-3xl border border-[#a7d1c3] bg-gradient-to-br from-[#e7f8f4] to-[#fcfffd] p-8 shadow-[0_25px_50px_rgba(15,76,50,0.08)]"
      style={{ "--entry-delay": "0.3s" } as CSSProperties}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5f45]">
          {locale === "fa" ? "سیستم‌های ضروری" : "Must-have systems"}
        </p>
        <h2 className="text-2xl font-semibold text-[#0a2d23]">
          {locale === "fa" ? "چه سیستم‌های مکملی لازم داریم" : "Ideas that keep the world alive"}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {systems.map((system) => (
          <article
            key={system.title}
            className="rounded-2xl border border-[#cfe7dc] bg-white p-6 text-sm text-[#144232] shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5ea688]">{system.title}</p>
            <p className="mt-2 text-[#1a4137]">{system.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
