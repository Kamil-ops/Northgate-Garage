# PayStream — Technical Project Summary

> Context brief for a design-system / product-design case study. Self-contained so it can be pasted into a new conversation as background.

## 1. What the project is

**PayStream** is a B2B SaaS **financial dashboard** UI — a clarity-driven product for tracking revenue, cash flow, invoices, transactions, and connected bank accounts. It was designed in **Figma** as a case-study piece (cover, full screen set, component library, and design-process notes).

- **Figma file:** "PayStream" · fileKey `lIKgzFfmL2e158ba3TzSh5`
- **Designer:** Krystian Kowalczyk
- **Brand:** teal `#0F5F5F` primary on a Tailwind-slate neutral base; **Inter** typeface throughout
- **Format note:** the screens are drawn at a compact "case-study" scale (type ramp 9–22px), not 1:1 production sizes.

### File structure (5 pages)
| Page | Contents |
|---|---|
| Cover | Title/hero + a mini dashboard mock |
| Components | Self-described "PayStream Design System v2.0" — **33 components** |
| Screens | **11 frames:** Dashboard, Transactions, Reports, Settings (each full + above-the-fold), plus Empty / Loading / Rejected / Before states |
| Flows | (empty) |
| Case Study, Design Process | (empty) |

### Component inventory (highlights)
KPI cards (positive / negative / neutral / loading), invoice table rows, status badges (Paid / Pending / Overdue), sidebar nav items, banner strips, buttons (Primary / Secondary / Destructive / Ghost × XS–LG), search-bar states, chart containers (with-data / empty / loading skeleton), and report cards.

---

## 2. The technical work performed

The file started as a **visually complete design with zero systematisation** — every colour and radius was a raw hard-coded value, with the intended token names written only as text annotations. There were **no Figma variables and no styles**. The work turned it into a properly tokenised, theme-ready, WCAG-conscious design system, and exported it to code.

### Phase 1 — Token architecture (Figma variables + styles)
Built four variable collections plus a text-style ramp, each with correct **scopes** and **WEB code-syntax** (`var(--token)`):

- **Primitives** — raw palette: `base/white`, `slate/50–900`, `teal/brand`, and accent hues (emerald, amber, red, blue, violet, pink) incl. 700-level dark shades for accessible text.
- **Color (semantic)** — `brand/*`, `text/*`, `surface/*`, `border/*`, `success` / `warning` / `danger` / `info`, each **aliased to a primitive**. Set up with a "Light" mode so a **Dark mode is a drop-in addition** (theming for free).
- **Radius** — `sm 4 → full 999`.
- **Spacing** — 2px-base scale (created for documentation; intentionally not force-bound to avoid shifting existing layouts).
- **Text styles** — 12-step Inter ramp (Display/22 → Caption/9).

Architecture pattern: **primitives → semantic (aliased) → components**. Components were bound to primitives during the retrofit (see below); the semantic layer sits on top as the theming surface.

### Phase 2 — Retrofit binding (the core engineering task)
The existing designs used raw hex/number values, so they were **programmatically re-bound to the new variables** via the Figma Plugin API: a script walked every node on every page, matched each fill/stroke/corner-radius against the token set by exact value, and replaced the raw paint with a variable binding (`setBoundVariableForPaint` / `setBoundVariable`), preserving opacity so the result was **pixel-identical**.

- **~2,265 fills, ~1,235 strokes, ~739 corner-radius nodes** rebound across the whole file.
- Zero errors; verified visually against before/after screenshots.

### Phase 3 — Accessibility remediation (WCAG AA)
Auditing exposed a systemic pre-existing bug: many elements had **content the same colour as its background**, so information was invisible or illegible. Fixed in escalating passes, each detection **self-limited to genuinely broken elements** (content colour == background, or measured contrast < 3:1) so nothing already-correct was touched:

- **Icon chips** (KPI cards): green line-icons on green chips → recoloured icons to **white**.
- **Trend / status badges**: solid colour bg with same-colour text/arrow → **12% tint background + saturated text**.
- **Category & amount pills** (Transactions): solid 500-level bg with 600-level text (~1.3–1.5:1) → unified on **tint bg + 700-level text**, clearing WCAG AA.
- **Active sidebar nav item**: white-on-white ("empty white box" on every screen) → **teal label + icon** on the white active pill.
- **Avatars / labels**: same-hue initials → white; **"P&L"** teal-on-teal → white.
- **CTA button** ("Upgrade to Pro"): white on bright green (2.54:1) → **darkened green** so white text passes AA.
- **Info banners** (e.g. "Bank-level encryption"): solid green + darker-green text → tinted + dark text/icon.
- Faint search placeholder darkened for legibility.

All new colours were bound to variables (added `emerald/700`, `red/700`, `violet/700`, `pink/700`), so the system stays fully tokenised.

### Phase 4 — Code export (design-to-code)
Extracted the same system to a framework-agnostic token set for developer handoff:
- `tokens.css` — CSS custom properties mirroring the Figma collections + ready-to-use component classes (`.ps-btn`, `.ps-badge`, `.ps-card`).
- `tokens.json` — structured tokens (Tailwind / Style-Dictionary ready).
- `styleguide.html` — a living style-guide reference page.

---

## 3. Key technical specifications

**Colour — Primitives**
- Neutral (slate): `#F8FAFC #F1F5F9 #E2E8F0 #CBD5E1 #94A3B8 #64748B #475569 #334155 #1E293B #0F172A`
- Brand: teal `#0F5F5F`
- Accents: emerald `#10B981`, amber `#F59E0B`, red `#EF4444`, blue `#3B82F6`, violet `#8B5CF6`, pink `#EC4899` (+ 600/700 dark shades for accessible on-tint text)

**Semantic mapping:** brand→teal · text primary/secondary/muted→slate 900/500/400 · surface page/card→slate50/white · border→slate 100/200 · success/warning/danger/info→emerald/amber/red/blue.

**Typography:** Inter — Display 22 / Heading 16–18 / Title 13–14 / Body 12–13 / Label 10–12 / Caption 9. Weights Regular / Medium / Semi Bold / Bold.

**Radii:** 4 / 6 / 8 / 10 (card default) / 12 / 14 / full.  **Spacing:** 2px base (2,4,6,8,10,12,16,20,24,32,40).

---

## 4. Tools & methods

- **Figma** (design source of truth) + **Figma MCP / Plugin API** for programmatic reads and writes.
- Token creation, variable aliasing, scopes and code-syntax via the Variables API.
- Automated **retrofit binding** and **accessibility remediation** scripts (node traversal, colour matching, contrast calculation via WCAG relative-luminance formula).
- Validation by structural metadata reads + before/after screenshots at each step.

## 5. Talking points (for interview)
- Turned a "looks-done" file into an **actual system**: primitives → semantic → components, theme-ready via modes.
- **Non-destructive automation** at scale (4,000+ node mutations, pixel-identical result) rather than manual re-styling.
- **Accessibility as a systematic pass**, not spot-fixes: contrast-driven detection, WCAG AA, tokenised fixes.
- **Design-to-code parity**: one source of truth expressed as Figma variables *and* CSS/JSON tokens for engineering.
- Caught and fixed a real **information-design bug** (colour-coded elements that carried no visible information).
