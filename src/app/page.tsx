import Script from "next/script";

const features = [
  {
    title: "Organized moments",
    body:
      "Every reminder, task, and plan lives in adaptive boards that stay synced between phone, tablet, and web.",
    detail: "Available offline, encrypted across devices, with smart recurrences you define.",
  },
  {
    title: "Trusted circles",
    body:
      "Invite family, roommates, crews, or teammates to shared spaces that respect boundaries and minimize noise.",
    detail: "Assign view/edit rights per circle so nobody sees more than they need.",
  },
  {
    title: "Live updates",
    body:
      "Statuses, votes, and location-based cues stream in as soon as someone acts, keeping everyone aligned in real time.",
    detail: "Adaptive notifications learn what matters to you and quiet the rest.",
  },
];

const steps = [
  "Sign in with your work email, phone, or a WebAuthn key.",
  "Create a smart board for each part of your life—home, travel, side projects.",
  "Add tasks, attach PDFs or voice notes, and let Koonj surface the right item when you need it.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Koonj",
  url: "https://koonj.ir",
  description:
    "Koonj is a bilingual productivity hub for households, founders, and friends who want calm, shared spaces for plans and checklists.",
  operatingSystem: "iOS, Android",
  applicationCategory: "ProductivityApplication",
  inLanguage: ["en", "fa"],
  provider: {
    "@type": "Organization",
    name: "Koonj Labs",
    url: "https://koonj.ir",
  },
};

export default function Home() {
  return (
    <>
      <Script id="koonj-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <main className="relative min-h-screen overflow-hidden bg-dark-sand text-dark">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,232,194,.9),_transparent_45%)]" />
        <div className="pointer-events-none absolute inset-y-1/3 -right-24 w-[420px] bg-white/10 blur-3xl" />

        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:px-10">
          <section className="relative z-10 grid gap-12 lg:grid-cols-[3fr,2fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full border border-amber-300/80 px-4 py-1 text-sm font-semibold text-amber-600">
                Live today • هر لحظه تازه
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-black md:text-5xl">
                Koonj keeps every plan, circle, and place in one calm flow.
              </h1>
              <p className="text-lg text-zinc-700">
                Build routines, share updates, and get nudged only when what matters actually happens.
                Koonj learns how you move and removes the noise.
              </p>
              <p className="text-lg text-zinc-700" lang="fa">
                کوونج اپلیکیشنی است برای مدیریت لحظه‌به‌لحظهٔ زندگی، ارتباطات نزدیک و برنامه‌ریزی‌های کوتاه‌مدت که با
                رابطی ساده و دو زبانه طراحی شده؛ از خانواده تا تیم‌های کوچک، هر کس می‌تواند بدون سر و صدای اضافی کنار هم قرار بگیرد.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/40 transition hover:-translate-y-0.5">
                  Download the app
                </button>
                <button className="rounded-full border border-zinc-400 px-6 py-3 font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100">
                  Watch walkthrough
                </button>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-white/80 to-amber-50 p-8 shadow-[0_30px_80px_rgba(55,14,35,.15)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                What is Koonj?
              </p>
              <div className="mt-4 space-y-4 text-base text-zinc-700">
                <p>
                  Koonj is a mobile-first hub for keeping households, founders, and friends aligned with
                  bold visual cues and context-aware nudges.
                </p>
                <p className="font-semibold text-zinc-900" lang="fa">
                  در یک کلام: محیطی امن برای برنامه‌ریزی، همگام‌سازی، و اقدام در لحظه.
                </p>
                <p className="text-sm text-zinc-500">
                  Available on iOS and Android with an always-on dark mode for on-the-go checklists.
                </p>
              </div>
            </div>
          </section>

          <section className="relative z-10 space-y-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-black">Experience</h2>
                <p className="text-zinc-500">
                  Details capture, live syncing, and multi-language support from the start.
                </p>
              </div>
              <span className="rounded-full border border-zinc-300 px-4 py-1 text-sm text-zinc-600">
                bilingual readiness
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                  <p className="mt-3 text-sm font-medium text-zinc-500">{feature.body}</p>
                  <p className="mt-4 text-sm text-zinc-600">{feature.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="relative z-10 grid gap-12 rounded-3xl border border-amber-100/80 bg-gradient-to-br from-amber-50/90 to-white p-10 shadow-[0_30px_80px_rgba(255,153,51,.2)] lg:grid-cols-2">
            <div className="space-y-4 text-zinc-800">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
                What you can do
              </p>
              <h2 className="text-3xl font-semibold text-black">Build rituals that stay true.</h2>
              <p className="text-lg text-zinc-700">
                From dropping grocery lists and ride details to syncing gym meetups or product sprints,
                Koonj keeps the right circle in the loop with context-rich notifications.
              </p>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-700">
              {steps.map((step) => (
                <p key={step} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                    ✓
                  </span>
                  <span>{step}</span>
                </p>
              ))}
              <p className="mt-4 text-sm text-zinc-600" lang="fa">
                تمام رابط‌ها از ابتدا به صورت دو زبانه طراحی شده‌اند تا فارسی‎زبان‌ها و انگلیسی‎زبان‌ها بتوانند همزمان در تجربه‌ای مشترک مشارکت کنند.
              </p>
            </div>
          </section>

          <section className="relative z-10 space-y-8 rounded-3xl border border-zinc-200/80 bg-white/90 p-8 shadow-lg">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Why Koonj
              </p>
              <h2 className="text-3xl font-semibold text-black">A calm center for busy people.</h2>
              <p className="text-zinc-600">
                Quiet alerts, schedule-aware automations, and transparent sharing rules ensure that every touchpoint
                feels intentional.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-zinc-500">Context</p>
                <p className="text-lg text-black">Map tasks to places, events, or people.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-500">Privacy</p>
                <p className="text-lg text-black">
                  End-to-end content protection with optional dark data retention controls.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-500">Support</p>
                <p className="text-lg text-black">Smart help articles and human concierge in both languages.</p>
              </div>
            </div>
          </section>

          <section className="relative z-10 space-y-8 rounded-3xl border border-amber-200/90 bg-gradient-to-br from-zinc-900 to-black p-10 text-white shadow-xl">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                For whom
              </p>
              <h2 className="text-3xl font-semibold">Families, founders, and care teams.</h2>
              <p className="text-lg text-white/80">
                Koonj keeps everyone informed without forcing them to check the same messaging thread. Each board
                can be public, private, or invite-only so that planning stays purposeful.
              </p>
              <p className="text-sm text-white/70" lang="fa">
                Koonj محصولی است برای خانواده‌ها، بنیان‌گذاران، و تیم‌های مراقبتی که به دنبال ابزاری ساده اما قابل اعتماد برای هماهنگی‌اند.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-amber-200">Purpose</p>
                <p className="text-lg text-white">
                  Keep shared plans visible, remind gently, and capture decisions without interrupting reality.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-200">Use cases</p>
                <p className="text-lg text-white">
                  Family dinners, moving checklists, remote product sprints, or volunteer shifts—Koonj adapts.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-200">Why Persian</p>
                <p className="text-lg text-white">
                  Built-in Persian support means mirrored content, hero copy, and dialog are accurate for Tehran to Toronto.
                </p>
              </div>
            </div>
          </section>

          <section className="relative z-10 rounded-3xl bg-gradient-to-r from-black via-zinc-900 to-black p-10 text-white shadow-xl">
            <div className="space-y-6">
              <p className="text-3xl font-semibold">
                Ready to show up smarter with Koonj?
              </p>
              <p className="text-lg text-white/80">
                Download from the App Store or Google Play and keep your day in sync no matter where “next” is.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:-translate-y-0.5">
                Download iOS
              </button>
              <button className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Download Android
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
