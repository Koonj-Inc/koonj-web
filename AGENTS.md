# AGENTS instructions

## Context

- Path: `D:\Code\mobile-apps\koonj-web`.
- Purpose: single-page Next.js marketing site for the Koonj app with emphasis on bilingual messaging (English + Persian) and SEO/structured data for `koonj.ir`.
- Styling: Tailwind CSS 4 utilities with gradients/shadows and Google fonts (Space Grotesk + Manrope).
- SEO: Metadata lives in `src/app/layout.tsx`, structured data (JSON-LD `MobileApplication`) lives in `src/app/page.tsx`.

## Priorities for future work

1. Keep the hero, feature cards, and CTA sections focused on telling people *what Koonj is*, *who it helps*, and *why the bilingual support matters*.
2. Preserve the `lang="fa"` spans for Persian copy and keep copy paired (English + Persian) whenever describing the product promise.
3. Maintain SEO accuracy: the canonical domain is `https://koonj.ir`, and metadata should match the latest marketing story.
4. Deployments only happen through the `workflow_dispatch` Liara Action—changes should land on the site after someone manually triggers `.github/workflows/liara.yml`.

## Development reminders

- Use `npm run dev` for local previews, `npm run lint` for static checks.
- The project uses the App Router, so add new pages inside `src/app` and remember to export metadata when necessary.
- Keep CTA buttons ready for real App Store / Play Store URLs; placeholder buttons currently do not navigate.

## Communication

- Document UX or copy changes directly in this repo so future collaborators understand the bilingual experience requirements.
