"use client";

import type { CSSProperties } from "react";
import type { LocaleCode } from "@/types/app";

type ForWhomSectionProps = {
  locale: LocaleCode;
};

export default function ForWhomSection({ locale }: ForWhomSectionProps) {
  return (
    <section
      className="relative z-10 grid gap-8 rounded-3xl border border-[#0f3029] bg-gradient-to-br from-[#0d221b] to-[#0b1812] p-10 text-white shadow-[0_30px_60px_rgba(7,38,30,0.45)] lg:grid-cols-[2fr,1.2fr]"
      style={{ "--entry-delay": "0.32s" } as CSSProperties}
    >
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
          {locale === "fa" ? "برای کی" : "For whom"}
        </p>
        <h2 className="text-3xl font-semibold">
          {locale === "fa"
            ? "خانواده‌ها، بنیان‌گذاران و تیم‌های مراقبتی"
            : "Families, founders, and care teams."}
        </h2>
        <p className="text-sm text-white/80">
          {locale === "fa"
            ? "با حفظ شفافیت، هر برد می‌تواند عمومی، خصوصی یا فقط دعوت‌شده باشد."
            : "Each shared board can be public, private, or invite-only so planning stays purposeful."}
        </p>
        <p className="text-xs text-white/70">
          {locale === "fa"
            ? "پشتیبانی از فارسی و انگلیسی به‌صورت تعاملی: نسخه‌ها همیشه همگام و دقیق هستند."
            : "Interactive Persian + English support keeps mirrored content accurate from Tehran to Toronto."}
        </p>
      </div>
      <div className="grid gap-3">
        <div className="rounded-2xl bg-gradient-to-br from-[#dfece4] to-[#b5d6c2] p-4 text-sm text-[#0c352d] shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
            {locale === "fa" ? "هدف" : "Purpose"}
          </p>
          <p className="text-lg font-semibold">
            {locale === "fa"
              ? "برنامه‌هایی قابل مشاهده، یادآوری‌های ملایم، تصمیم‌گیری بدون مزاحمت"
              : "Keep plans visible, remind gently, and capture decisions without interrupting reality."}
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-[#0f4e46] to-[#0b1e17] p-4 text-sm text-white shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-200">
            {locale === "fa" ? "هشدار و آرامش" : "Warn + relax"}
          </p>
          <p className="text-lg font-semibold">
            {locale === "fa"
              ? "رنگ‌های زرد برای هشدار، سبز برای آرامش؛ تجربه‌ای روان و قابل اعتماد."
              : "Amber for alert, teal for calm—an emotional palette that feels intentional and soothing."}
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-[#0f3e36] to-[#0c1b16] p-4 text-sm text-white shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
            {locale === "fa" ? "ریتم" : "Rhythm"}
          </p>
          <p className="text-lg font-semibold">
            {locale === "fa"
              ? "اعلان‌ها خودشان یاد می‌گیرند چه مهم است و بقیه را ساکت می‌کنند."
              : "Notifications learn what matters and keep the rest silent."}
          </p>
        </div>
      </div>
    </section>
  );
}
