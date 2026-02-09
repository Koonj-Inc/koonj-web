"use client";

import type { CSSProperties } from "react";
import type { LocaleCode, OrgInfo } from "@/types/app";

type GitHubSectionProps = {
  locale: LocaleCode;
  orgInfo: OrgInfo | null;
  orgStats: { label: string; value?: number }[];
  orgUrl: string;
  appRepoUrl: string;
  webRepoUrl: string;
};

export default function GitHubSection({
  locale,
  orgInfo,
  orgStats,
  orgUrl,
  appRepoUrl,
  webRepoUrl,
}: GitHubSectionProps) {
  return (
    <section
      id="github"
      className="section-entry relative z-10 space-y-6 rounded-[32px] border border-[#c7d9f2] bg-gradient-to-br from-[#eff5ff] to-[#ffffff] p-10 shadow-[0_30px_80px_rgba(12,32,80,0.15)]"
      style={{ "--entry-delay": "0.05s" } as CSSProperties}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#2c5fb7]">
            {locale === "fa" ? "سازمان گیت‌هاب" : "GitHub Org"}
          </p>
          <h2 className="text-3xl font-semibold text-[#0b1741]">
            {locale === "fa" ? "Koonj-Inc" : "Koonj-Inc on GitHub"}
          </h2>
          <p className="text-sm text-[#3d4c6d]">
            {locale === "fa"
              ? "تمام پروژه‌ها و تجربه‌های دو زبانه در همین سازمان با مستندات، اتوماسیون و تمرکز بر خانواده و تیم شکل می‌گیرند."
              : "All bilingual projects, docs, and automation live under this organization—made for families, founders, and care crews."}
          </p>
        </div>
        <a
          href={orgUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#a3c0ff] bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#1a2e63] shadow"
        >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-current text-[#1a2e63]">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.08.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.63 7.63 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.28.24.54.73.54 1.47 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          {locale === "fa" ? "دیدن سازمان" : "Visit the org"}
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-[#1c2f4f]">
            {orgInfo?.description
              ? orgInfo.description
              : locale === "fa"
              ? "اطلاعات هنگام بارگذاری ..."
              : "Organization details loading..."}
          </p>
          <div className="flex flex-wrap gap-3">
          <a
            href={appRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#cfd9ff] bg-white px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#1c2f5d] shadow-sm hover:border-[#8ea3ff]"
          >
            koonj-app
          </a>
          <a
            href={webRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#cfd9ff] bg-white px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#1c2f5d] shadow-sm hover:border-[#8ea3ff]"
          >
            Koonj-web
          </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#6d82b8]">
                {locale === "fa" ? "مکان" : "Location"}
              </p>
              <p className="text-sm font-semibold text-[#0e2148]">
                {orgInfo?.location ?? (locale === "fa" ? "مجازی" : "Virtual")}
              </p>
            </div>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#6d82b8]">
                {locale === "fa" ? "وبلاگ" : "Blog"}
              </p>
              {orgInfo?.blog ? (
                <a
                  href={orgInfo.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#1c3fb9] underline-offset-2 transition hover:text-[#1f6ff1]"
                >
                  {orgInfo.blog.replace(/^https?:\/\//, "")}
                </a>
              ) : (
                <p className="text-sm">{locale === "fa" ? "بزودی" : "Coming soon"}</p>
              )}
            </div>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#6d82b8]">
                {locale === "fa" ? "توئیتر" : "Twitter"}
              </p>
              {orgInfo?.twitter_username ? (
                <a
                  href={`https://twitter.com/${orgInfo.twitter_username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#1c3fb9] underline-offset-2 transition hover:text-[#1f6ff1]"
                >
                  @{orgInfo.twitter_username}
                </a>
              ) : (
                <p className="text-sm">{locale === "fa" ? "مشخص نیست" : "Not listed yet"}</p>
              )}
            </div>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#6d82b8]">
                {locale === "fa" ? "فالوئر" : "Followers"}
              </p>
              <p className="text-sm font-semibold text-[#0e2148]">
                {orgInfo?.followers?.toLocaleString() ?? (locale === "fa" ? "در حال..." : "Loading...")}
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          {orgStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#d6e3ff] bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,48,0.12)]"
            >
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#5c73a2]">{stat.label}</p>
              <p className="mt-1 text-2xl font-semibold text-[#0b2148]">
                {stat.value ?? (locale === "fa" ? "در حال..." : "Loading...")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
