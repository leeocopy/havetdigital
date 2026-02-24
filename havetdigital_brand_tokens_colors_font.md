# HavetDigital — Colors & Font (extracted from screenshot) + Tokens (Astro + Vue)

## Colors (approx from the screenshot)
Main accents you should reuse:

- **Purple (primary CTA / brand)**: `#5C48B1`
- **Deep purple (footer / sections)**: `#534289` (alt: `#58449D`)
- **Cyan / teal accent**: `#52AFDA`
- **Blue accent**: `#4874CB`

Neutrals:
- **Background**: `#FFFFFF`
- **Soft gray bg**: `#F7F7F9` (safe UI neutral)
- **Border**: `rgba(15, 23, 42, 0.10)`
- **Text**: `#0B0D12`
- **Muted text**: `#525866`

Gradients used on the site (recommended):
- Hero / CTA gradient: `linear-gradient(90deg, #52AFDA 0%, #5C48B1 100%)`

> Note: These hex values are extracted from the screenshot, so they’re **very close** but can be ± a tiny bit depending on compression.

---

## Font (closest match)
From the screenshot style, the typography looks like a **modern geometric sans** (very close to **Poppins**).

Recommended setup:
- **Font family**: `Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif`
- Headings: `600`
- Body: `400 / 500`

If you want the *exact* font used on the live site: open havetdigital.fr in Chrome → Inspect → select a heading → Computed → `font-family`.

---

## Drop-in Tokens (Light mode)
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

  /* Radii (match Salix-like UI) */
  --r-lg: 20px;
  --r-md: 14px;
  --r-sm: 12px;
  --r-pill: 999px;

  /* HavetDigital brand */
  --brand: #5c48b1;       /* purple primary */
  --brand-2: #52afda;     /* cyan accent */
  --brand-3: #4874cb;     /* blue accent */
  --brand-deep: #534289;  /* footer / deep sections */
  --brand-soft: rgba(92, 72, 177, 0.12);

  --grad-brand: linear-gradient(90deg, var(--brand-2) 0%, var(--brand) 100%);

  /* Typography */
  --font-sans: Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial,
               "Noto Sans", "Helvetica Neue", sans-serif;
}
```

Then in `src/styles/global.css`:

```css
@import "tailwindcss";
@import "./tokens.css";

html, body { background: var(--bg); color: var(--text); font-family: var(--font-sans); }
```

---

## Install Poppins (recommended)
```bash
npm i @fontsource/poppins
```

Add imports (example) in `src/styles/global.css` **above** the tokens import:

```css
@import "@fontsource/poppins/latin-400.css";
@import "@fontsource/poppins/latin-500.css";
@import "@fontsource/poppins/latin-600.css";
@import "@fontsource/poppins/latin-700.css";
```

---

## Primary Button (HavetDigital look)
Use solid purple or gradient:

**Solid:**
- `bg-[var(--brand)]`

**Gradient (very close to hero feel):**
- `bg-[image:var(--grad-brand)]`

Add consistent hover/focus:
- `hover:-translate-y-[1px] hover:shadow-[var(--shadow-md)]`
- `focus:ring-4 focus:ring-[var(--brand-soft)]`
