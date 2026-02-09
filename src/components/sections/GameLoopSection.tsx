"use client";

import type { CSSProperties } from "react";
import type { LocaleCode, RewardCard } from "@/types/app";

type GameLoopSectionProps = {
  locale: LocaleCode;
  gameLoop: {
    title: string;
    summary: string;
  };
  rewardSystem: RewardCard[];
};

export default function GameLoopSection({ locale, gameLoop, rewardSystem }: GameLoopSectionProps) {
  return (
    <section
      id="game-loop"
      className="section-entry relative z-10 space-y-10 rounded-3xl border border-[#cfded4] bg-white/90 p-10 shadow-[0_30px_60px_rgba(32,60,52,0.15)]"
      style={{ "--entry-delay": "0.15s" } as CSSProperties}
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f6b52]">
          {locale === "fa" ? "بخش بازی" : "Game design"}
        </p>
        <h2 className="text-3xl font-semibold text-[#111b15]">
          {locale === "fa" ? "روح، تنش و دلایل برای اهمیت دادن" : "Soul, tension, and reasons to care"}
        </h2>
        <p className="text-sm text-[#45584f]">
          {locale === "fa"
            ? "مکانیک‌هایتان ساختار خوبی دارند؛ حالا به آن‌ها معنا، هیجان، و سیستم‌هایی بده که افراد را با هم هم‌مسیر می‌کند."
            : "You already have the right skeleton—now we layer meaning, suspense, and emotional hooks that make people say “let’s do this together.”"}
        </p>
      </div>
      <article className="rounded-2xl border border-[#d8ede0] bg-[#f5f9f6] p-6">
        <p className="text-sm text-[#0f6b52] uppercase tracking-[0.4em]">
          Upgrade loop
        </p>
        <h3 className="mt-2 text-xl font-semibold text-[#0c2f26]">{gameLoop.title}</h3>
        <p className="mt-2 text-sm text-[#3f5b4f]">{gameLoop.summary}</p>
      </article>
      <div className="grid gap-4 md:grid-cols-2">
        {rewardSystem.map((reward) => (
          <div
            key={reward.title}
            className="rounded-2xl border border-[#d9e6dd] bg-white p-6 shadow-[0_20px_40px_rgba(37,83,64,0.08)]"
          >
            <h4 className="text-lg font-semibold text-[#0f3d2f]">{reward.title}</h4>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#7d9c8f]">
              {locale === "fa" ? "چه چیزی می‌گیرید" : "What you get"}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-[#4a5f54]">
              {reward.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0f6b52]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-[#2c4f42]">{reward.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
