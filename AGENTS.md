# AGENTS.md

## Setup

- `pnpm install` (pnpm, not npm/yarn)
- `pnpm dev` to run dev server

## Commands

- `pnpm dev` - dev server
- `pnpm build` - production build
- `pnpm start` - start production server
- `pnpm lint` - next lint (no ESLint config exists)

## Stack

- Next.js 15 (App Router, RSC)
- React 19
- Tailwind CSS v4 (uses `@tailwindcss/postcss` plugin, **no** `tailwind.config.js`)
- shadcn/ui (style: new-york, RSC: true)
- **No tests, no ESLint, no Prettier** - lint via `next lint` only

## Key quirks

- `next.config.mjs`: `ignoreBuildErrors: true`, `images.unoptimized: true`
- `tsconfig.json`: `strict: true` but build errors ignored
- `app/globals.css` is the Tailwind entry (v4 uses CSS-based config, no separate tailwind.config file)
- Root `layout.tsx` wraps with `CartProvider > FavoritesProvider > WhatsAppButton` - all children have cart and favorites context
- Google Fonts loaded via `next/font/google`: `Plus_Jakarta_Sans` and `Space_Grotesk` on `<html>` element
- Site is Spanish (`lang="es"`)

## Aliases

- `@/*` maps to root (`./`)
- Components at `@/components`, UI at `@/components/ui`, utils at `@/lib/utils`, hooks at `@/hooks`