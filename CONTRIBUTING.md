## Contributing to the Koonj landing page

Thanks for helping polish Koonj’s marketing site. Keep these points in mind:

1. **Fork + feature branch.** Start from `master`, create a descriptive branch (`feature/farsi-hero`, `fix/seo-meta`), and keep changes scoped to marketing copy, layout, or SEO helpers for this single-page site.
2. **Dependencies & scripts.** Run `npm install` once, then use `npm run dev` to verify locally; rerun `npm run lint` before opening a PR. Tailwind CSS is configured via PostCSS plugins, so no extra tooling is required.
3. **Bilingual copy.** Maintain English + Persian context in the hero and narrative sections. When adding new sections, include `lang="fa"` spans for Persian strings and keep translations simple but meaningful.
4. **SEO / metadata updates.** Update `src/app/layout.tsx` for page metadata and `src/app/page.tsx` for any structured data changes (JSON-LD). Always verify the canonical domain stays `https://koonj.ir`.
5. **Manual deploy awareness.** The Liara Action is manual (`workflow_dispatch`). Document any production implications in `README.md` or AGENTS so the next person knows to kick off the workflow from Actions.
6. **PR message.** Mention what you added, how it improves the story, and confirm `npm run lint` passed locally. If you touched copy, include translation notes where needed.
