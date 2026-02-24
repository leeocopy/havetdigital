# HavetDigital Landing — Astro + Vue (Light Mode / Salix-like UI) — Skill v2

## Goal
Build a **one-page** marketing landing for *HavetDigital × IAWeb* using **Astro** for layout and **@astrojs/vue** only for interactive islands (pricing switch, FAQ accordion, form).  
Visual direction: **light mode UI very close to Salix** (clean, bright, bento cards, soft borders, subtle shadows, smooth hover/scroll reveals) while keeping **HavetDigital brand accent colors**.

---

## Non‑negotiables (UI/UX)
- **Light mode only** (no dark theme).  
- **Same feel as Salix**:
  - lots of white space
  - rounded “bento” cards
  - thin borders + gentle shadow
  - pill chips
  - primary CTA button style consistent everywhere
- **Single source of copy/prices**: `plaquette_havetdigital.docx` (do not change meaning).

---

## Brand tokens (CSS variables)
> Keep these tokens as variables so you can swap the exact HavetDigital colors later (or extract from their logo PNG).

Create `src/styles/tokens.css`:

```css
:root{
  color-scheme: light;

  /* Surfaces */
  --bg: #ffffff;
  --bg-muted: #f7f7f9;
  --surface: #ffffff;
  --surface-2: #fbfbfd;

  /* Text */
  --text: #0b0d12;
  --text-muted: #525866;

  /* Borders / shadows */
  --border: rgba(15, 23, 42, 0.10);
  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 10px 30px rgba(15, 23, 42, 0.10);

  /* Radii (Salix-like) */
  --r-lg: 20px;   /* sections/cards */
  --r-md: 14px;   /* buttons/inputs */
  --r-sm: 12px;   /* chips */
  --r-pill: 999px;

  /* Brand accent (REPLACE with real HavetDigital colors) */
  --brand: #2563eb;     /* primary */
  --brand-2: #06b6d4;   /* secondary */
  --brand-soft: rgba(37, 99, 235, 0.10);
}
```

In `src/styles/global.css`:

```css
@import "tailwindcss";
@import "./tokens.css";

html, body { background: var(--bg); color: var(--text); }
```

---

## Tailwind usage rules (v4)
- Use Tailwind utilities for layout/spacing/typography.
- Use CSS variables for colors/radius:
  - `bg-[var(--bg)]`
  - `text-[var(--text)]`
  - `rounded-[var(--r-lg)]`
  - `border-[color:var(--border)]`

---

## Typography (Salix-like)
- Headings: tight tracking, strong weight, large sizes.
- Body: readable, slightly muted.

Defaults:
- H1: `text-4xl md:text-6xl font-semibold tracking-tight`
- H2: `text-2xl md:text-4xl font-semibold tracking-tight`
- Body: `text-base md:text-lg text-[var(--text-muted)]`

---

## Component specs (must match everywhere)

### Button (Primary)
Create a single reusable component `src/components/ui/Button.astro` (or Vue if you prefer).  
Primary button style (Salix-like):
- height: 44–48px
- radius: `var(--r-md)`
- background: `--brand`
- text: white
- shadow: subtle
- hover: slightly darker + tiny lift (translateY -1px) + stronger shadow
- focus: visible ring using `--brand-soft`

Example classes:
```txt
inline-flex items-center justify-center gap-2
h-11 px-5 rounded-[var(--r-md)]
bg-[var(--brand)] text-white font-medium
shadow-[var(--shadow-sm)]
transition
hover:shadow-[var(--shadow-md)] hover:-translate-y-[1px]
focus:outline-none focus:ring-4 focus:ring-[var(--brand-soft)]
```

### Button (Secondary / Ghost)
- White background, border, text `--text`, hover uses `--bg-muted`.
```txt
bg-white border border-[color:var(--border)] text-[var(--text)]
hover:bg-[var(--bg-muted)]
```

### Cards (Bento)
- background white, border, radius `--r-lg`, shadow-sm, hover shadow-md.
```txt
rounded-[var(--r-lg)] bg-white border border-[color:var(--border)]
shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]
transition
```

### Inputs
- height 44, radius `--r-md`, border, focus ring (brand-soft).
```txt
h-11 w-full rounded-[var(--r-md)] border border-[color:var(--border)]
bg-white px-4
focus:outline-none focus:ring-4 focus:ring-[var(--brand-soft)]
```

---

## Layout patterns (Salix-like)
- Max width container: `max-w-6xl mx-auto px-4 md:px-6`
- Section spacing: `py-16 md:py-24`
- Grids:
  - 2–3 column bento blocks: `grid md:grid-cols-2 gap-6` / `grid lg:grid-cols-3`
- “Chips” / badges: pill, small border, muted background.

---

## Animations (subtle)
Goal: small “polish” (no heavy motion).
- Scroll reveal: fade + translateY 8–12px, 350–500ms ease-out.
- Hover: tiny lift + shadow for cards/buttons.
- Always respect `prefers-reduced-motion`.

Implementation options:
1) Pure CSS (preferred): add `data-reveal` + CSS class toggled by IntersectionObserver.
2) Lightweight JS module in Astro `src/scripts/reveal.ts`.

Rules:
- No giant parallax.
- No janky on mobile.
- Animate only once.

---

## Astro + Vue rules
- **Astro for sections/layout**.
- **Vue only for**:
  - Pricing monthly/one-time switcher
  - Tabs (if used)
  - FAQ accordion
  - Contact form validation (optional)
- Use minimal hydration:
  - `client:visible` for below-the-fold widgets
  - `client:idle` for light components

---

## Content wiring
Create a single data file:
- `src/data/landing.fr.ts`
Populate it from `plaquette_havetdigital.docx`:
- hero
- problem/pains
- solution bullets
- pricing (Starter/Pro/Premium)
- abonnement (Essentiel/Confort/Sérénité)
- options, why-us, audit CTA
- FAQ
- contact info

---

## Logo swap (PNG)
Put the new logo here:
- `public/brand/logo.png`

Use in `Header.astro`:
```astro
<img src="/brand/logo.png" alt="Havet Digital" width="140" height="36" loading="eager" />
```

If you have a white logo too:
- `public/brand/logo-white.png` (only if needed; still keep overall UI light)

---

## Acceptance checklist
- Light mode UI matches Salix feel: white background, bento cards, consistent radii/buttons.
- All copy/prices come from docx.
- Responsive: mobile first, no overflow.
- Minimal JS: Vue only where needed.
- Animations subtle + reduced-motion safe.
