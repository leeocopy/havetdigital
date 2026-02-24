# Skill: HavetDigital — Landing “Programme One-Page Vitrine” (Astro + Vue)

> Objective: build a fast, modern one-page landing for **HavetDigital × IAWeb**.  
> Stack: **Astro + @astrojs/vue** with an “islands” approach (Astro for layout, Vue only for interactive widgets).  
> Style direction: close to **salix.framer.website** (bento cards, large headline, soft gradients, subtle scroll-reveal).

---

## 1) Brand & positioning (HavetDigital)

### What HavetDigital communicates
- “Développement de Solutions pour le Business”
- A B2B agency vibe: “créer de la valeur”, services, process, testimonials.

**Tone of voice:** direct, reassuring, no jargon, conversion-focused.

### Visual direction (practical)
We don’t have a dedicated brand kit in this repo, so use a **token-based design system** so colors/fonts can be swapped quickly later.

#### Color tokens (PROPOSED — easily replace)
Use CSS variables and keep all brand tokens in one place.

- Background: `--bg: #0B0F14`
- Surface: `--surface: #0F1724`
- Border: `--border: rgba(255,255,255,.10)`
- Text: `--text: rgba(255,255,255,.92)`
- Muted text: `--muted: rgba(255,255,255,.70)`
- Primary accent: `--primary: #6EE7FF` (cyan)
- Secondary accent: `--secondary: #A78BFA` (violet)
- Success: `--success: #34D399`
- Warning: `--warning: #FBBF24`

> If a real HavetDigital logo file is later provided, extract its main colors and replace `--primary/--secondary` only.

#### Typography (PROPOSED — easily replace)
- Headings: `Manrope` (or `Sora`)
- Body: `Inter`

Fallback: system-ui.

---

## 2) Style reference: Salix template cues

Emulate these patterns:
- Extra-large hero headline, sometimes letter-spaced.
- Soft gradient “glow” behind hero + bento cards.
- Repeated “pill badges” (e.g., “No Credit Card Required”).
- Social proof row (logos/metrics).
- Sections with **cards** and consistent spacing.
- Tabs / segmented controls.
- Subtle scroll animations (fade-up, slight translate, stagger).

---

## 3) Information architecture (what pages/sections)

### Required routes
- `/` → the full one-page landing (French).
- `/merci` → simple thank-you page after form submit (optional but recommended).

### Landing sections (order)
1. **Header / Nav**  
   - Logo + 1 primary CTA (“Réserver un audit”)
2. **Hero**  
   - Title + subcopy + 2 CTAs (primary + secondary)
   - A small trust note (“Livré en 7 jours”, “Sans jargon”, “Sans engagement”)
3. **Problem / Reality check**  
   - 2 columns: “Ce que vivent …” vs “Ce que vous méritez”
4. **Solution** (Programme One-Page Vitrine)  
   - 4 feature chips: mobile / 7 jours / conversion / sans engagement
5. **Offers — Paiement unique**  
   - 3 pricing cards (Starter/Pro/Premium)
   - Highlight “Pro” as most popular
6. **Offers — Abonnement**  
   - 3 pricing cards (Essentiel/Confort/Sérénité)
7. **Options à la carte**  
   - Table/cards: Copywriting, Prise de RDV/Devis, Automatisation
8. **Pourquoi HavetDigital × IAWeb**  
   - Two columns with flags & bullet lists
9. **Audit offert** CTA  
   - Short, bold, with 1 button
10. **FAQ** (add 6-8 Q/A)
11. **Contact**  
   - Form + email + phone
12. **Footer**

---

## 4) Source content (from plaquette_havetdigital.docx)

**Hero copy**
- “Votre présence en ligne, enfin rentable.”
- “Un site web professionnel, conçu pour convertir vos visiteurs en clients.”
- “Livré en 7 jours. Sans jargon. Sans mauvaise surprise.”

**Problem section**
- Include the paragraph about being visible but not found by the right clients.
- Include bullet lists “Ce que vivent…” and “Ce que vous méritez…”

**Solution**
- “Le Programme One-Page Vitrine”
- Chips: 100% Mobile, livré en 7 jours, orienté conversion, sans engagement.

**Pricing — one-time**
- Starter 399€ HT
- Pro 799€ HT
- Premium 1 599€ HT

**Pricing — subscription**
- Essentiel 59€ HT/mois
- Confort 89€ HT/mois
- Sérénité 129€ HT/mois

**Options**
- Copywriting 349€
- Prise de RDV / Devis 189€
- Automatisation 399€

**Why us**
- HavetDigital — France (strategy/acquisition, branding, interlocuteur, terrain TPE)
- IAWeb — Maroc (dev/tech, automation, reactivity, infrastructure)

**Audit**
- “Audit offert — 15 minutes, sans engagement”
- Provide CTA to book + contact email.

---

## 5) Tech stack: Astro + Vue (best-practice constraints)

### Core rules
- **Astro handles** layout + static sections.
- Use **Vue components only** for interactive widgets:
  - Pricing toggle (Paiement unique / Abonnement)
  - Tabs
  - FAQ accordion
  - Contact form validation / submission
- Hydrate Vue components only when needed using client directives:
  - `client:visible` for below-the-fold widgets
  - `client:idle` for light widgets

### Styling
Use **Tailwind CSS v4 via Vite plugin** (preferred modern setup).
- Install: `tailwindcss` + `@tailwindcss/vite`
- Configure plugin in `astro.config.mjs`
- Add `src/styles/global.css` with `@import "tailwindcss";`
- Import `global.css` once from `src/pages/index.astro` or a shared layout.

### Animations
Prefer:
- CSS transitions + IntersectionObserver (tiny JS).
- Respect `prefers-reduced-motion`.
- Only if needed: `@motionone/dom` for scroll reveals (lightweight).

### Accessibility checklist
- Proper heading order (H1 once).
- Visible focus states.
- Buttons have `type="button"` if not submitting.
- Form inputs have labels + error messages with aria-describedby.
- Ensure contrast (AA).

### Performance
- Keep JS minimal (islands).
- Use responsive images; prefer WebP/AVIF.
- Lazy-load below-the-fold images.
- Avoid heavy animation libraries unless required.

---

## 6) Suggested project structure

```
src/
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    merci.astro
  components/
    ui/ (Button, Badge, Card, Container, Section)
    sections/ (Hero.astro, Problem.astro, Pricing.astro, Options.astro, WhyUs.astro, CTA.astro, FAQ.astro, Contact.astro)
  components-vue/
    PricingSwitcher.vue
    Tabs.vue
    FaqAccordion.vue
    ContactForm.vue
  styles/
    global.css
  data/
    landing.fr.ts (all copy + pricing data)
public/
  images/
```

---

## 7) Content data model (keep it reusable for IAWeb later)

Create `src/data/landing.fr.ts`:

- `brand`: { name, tagline, primaryCta, secondaryCta }
- `hero`: { badge, title, subtitle, bullets[] }
- `problem`: { paragraph, pains[], gains[] }
- `solution`: { title, paragraph, chips[] }
- `pricingOneTime[]`: { name, price, highlight, features[] }
- `pricingSub[]`: { name, price, highlight, features[] }
- `options[]`: { name, price, benefit }
- `whyUs`: { franceBullets[], moroccoBullets[], conclusion }
- `audit`: { title, paragraph, ctaText, ctaHref, email }
- `faq[]`: { q, a }
- `contact`: { email, phone, address? }

---

## 8) Deliverable definition (done = good)

A) Visual
- Looks close to Salix style: bento layout, gradients, pill badges, clean spacing.
- Responsive: mobile first, great on desktop.

B) Content
- All copy/prices from doc are present and not altered in meaning.

C) Technical
- Astro + Vue integrated.
- Minimal hydration (islands), no unnecessary JS.
- Lighthouse-friendly (performance/SEO/a11y).

