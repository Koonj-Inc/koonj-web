"use client";

import { useEffect, useState } from "react";

import CountdownBanner from "@/components/sections/CountdownBanner";
import type { LocaleCode, TimeSegment } from "@/types/app";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const releaseDate = new Date("2026-02-23T00:00:00Z");

const calculateTimeLeft = (target: Date): TimeLeft => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(releaseDate));
  const locale: LocaleCode = "fa";
  const countdownDone =
    timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;
  const timeSegments: TimeSegment[] = [
    { label: locale === "fa" ? "روز" : "days", value: timeLeft.days },
    { label: locale === "fa" ? "ساعت" : "hours", value: timeLeft.hours },
    { label: locale === "fa" ? "دقیقه" : "minutes", value: timeLeft.minutes },
    { label: locale === "fa" ? "ثانیه" : "seconds", value: timeLeft.seconds },
  ];

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(releaseDate));
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(releaseDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040404] px-4 py-16">
      <CountdownBanner
        locale={locale}
        timeSegments={timeSegments}
        countdownDone={countdownDone}
        appRepoUrl="https://github.com/Koonj-Inc/koonj-app"
      />
    </main>
  );
}
