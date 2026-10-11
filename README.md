# BEXORA Landing Page — UI Preview Project

Standalone copy of the landing page from the main `docmate` app, so UI changes
can be made and deployed without the rest of the app (no Supabase, no login).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
```

Deploy: import this folder into Vercel (framework: Vite). `vercel.json` is included.

## Files you can edit (UI)

The folder paths match the main project exactly, so changed files can be copied
straight back into `docmate` at the same path:

| File | What it is |
|------|------------|
| `src/app/components/MarketingLanding.tsx` | The landing page itself |
| `src/app/components/Layout.tsx` | Shared header + footer (also used on other pages in the main app!) |
| `src/app/components/UI.tsx` | Button / Card / Badge components (used across the main app!) |
| `src/app/components/figma/ImageWithFallback.tsx` | Image helper |
| `src/styles/*.css` | Global styles / theme tokens (affect the whole main app!) |
| `public/*` | Images (add new images here) |

## Rules for the UI designer

- **Do not rename** `MarketingLanding` or change its props
  (`onStart`, `onLoginRequest`, `onStartOnboarding`, `onDoctorLoginRequest`,
  `onAdminLoginRequest`, `onGoToDashboard`) — the main app passes these in.
- Buttons call those props; in this preview they just show an alert.
- Only use packages already in `package.json`. If you need a new one, say so —
  it must be added to the main app too.
- **Do not** copy back `src/main.tsx`, `src/lib/auth.tsx`, `index.html`,
  `package.json`, `vite.config.ts` — these are preview-only.
- New components: put them in `src/app/components/` and they can be copied over too.
