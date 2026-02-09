"use client";

import type { CSSProperties } from "react";
import type { LocaleCode, HubCard } from "@/types/app";

type HubsSectionProps = {
  locale: LocaleCode;
  hubs: HubCard[];
};

export default function HubsSection({ locale, hubs }: HubsSectionProps) {
  return (
    <section
      id="hubs"
      className="section-entry relative z-10 space-y-8 rounded-3xl border border-[#cacfdc] bg-gradient-to-br from-[#f3f7ff] to-[#fdfdff] p-10 shadow-[0_30px_60px_rgba(24,40,69,0.12)]"
      style={{ "--entry-delay": "0.2s" } as CSSProperties}
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1a4368]">
          {locale === "fa" ? "هاب‌ها" : "Hubs"}
        </p>
        <h2 className="text-3xl font-semibold text-[#0f2235]">
          {locale === "fa" ? "هاب‌ها باید مثل دنیاهای قابل زندگی باشند" : "Hubs should feel like worlds you belong to"}
        </h2>
        <p className="text-sm text-[#41506a]">
          {locale === "fa"
            ? "هر هاب فضایی با هویت، جو و جوایز خودش دارد؛ شما باید با داستان، موسیقی و جوایز طوری طراحی‌شده همکاری کنید که مردم بگویند «می‌خواهم دوباره اینجا برگردم.»"
            : "Each hub needs identity, mood, and rewards that make people say “I belong here” and feel the tension to return."}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {hubs.map((hub) => (
          <article key={hub.title} className="rounded-2xl border border-[#d5ddee] bg-white p-6 shadow-[0_20px_35px_rgba(20,38,60,0.08)]">
            <h3 className="text-xl font-semibold text-[#0d2e46]">{hub.title}</h3>
            <p className="mt-2 text-sm text-[#4c5b6b]">{hub.fantasy}</p>
            <dl className="mt-3 space-y-1 text-sm text-[#3c4b5b]">
              <div className="flex items-start gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa4c7]">Games</span>
                <p className="max-w-[420px]">{hub.games}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa4c7]">
                  {locale === "fa" ? "قدم‌ها" : "Steps"}
                </span>
                <p className="max-w-[420px]">{hub.steps}</p>
              </div>
            </dl>
            <p className="mt-3 text-xs text-[#8ea2b8]">{hub.why}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
