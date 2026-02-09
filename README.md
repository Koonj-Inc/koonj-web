# Koonj landing

This repository hosts the single-page Next.js marketing site for **Koonj**, a bilingual (English + Persian) lifestyle productivity app that keeps plans, circles, and places in sync with calm visual cues.

## Why this site?

- **Explain the product.** The hero and content describe what Koonj is, how it supports trusted circles, and why Persian localization matters.
- **Boost findability.** Metadata, Open Graph/Twitter tags, and a JSON-LD `MobileApplication` schema describe the app to search engines, while the copy explicitly calls out both English and Persian experiences.
- **Stay visual.** The design leans on gradients, layered cards, and bold micro-animations (via Tailwind utilities) to feel intentional without defaulting to typical template styling.

## Key features

- Live hero messaging with bilingual snippets and CTA focus on “showing up” for today.
- Feature grid highlighting organized moments, trusted circles, and live updates with supporting microcopy.
- Narrative sections that share who uses Koonj, the dual-language experience, and the product promise for busy families, founders, and care teams.
- Built-in SEO touches: page metadata in `src/app/layout.tsx` and structured data in `src/app/page.tsx`.

## Tech stack

- Framework: Next.js 16.1.6 with the App Router and `/src`.
- Styling: Tailwind CSS 4 (via the new `@tailwindcss/postcss` plugin), custom gradients, and Google fonts (Space Grotesk + Manrope).
- Language: TypeScript.
- Deployment target: Node on Liara (manual run via GitHub Actions).

## Development

1. Install dependencies with `npm install`.
2. Run `npm run dev` to spin up the preview server on [http://localhost:3000](http://localhost:3000).
3. Tailwind utilities are defined directly inside components; no extra configuration is needed beyond `src/app/globals.css`.

## Testing

- `npm run lint` (relies on the generated ESLint config in this project).

## Deployment

- The Liara workflow (`.github/workflows/liara.yml`) no longer runs automatically. Trigger deployment manually through the **Actions → CD-Liara → Run workflow** button and provide the appropriate token (via the `LIARA_API_TOKEN` secret).
- The workflow deploys with `liara deploy --app="koonj"` against the `koonj.ir` host.

## Documentation

- Detailed agent instructions and expectations live in `AGENTS.md`.
- Keep `package.json` scripts for `dev`, `build`, `start`, and `lint` aligned with the Next.js defaults.
