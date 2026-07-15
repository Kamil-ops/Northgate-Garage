# UK Car Repair / Garage Website — The Winning Formula

**A build blueprint grounded in market evidence.**
Hand this to a build model (or use it as a design.md seed) to produce a high-converting independent-garage / MOT-centre website.

Prepared by: www.krystian-k.com

Scope: UK independent garages, MOT centres, bodyshops, tyre/fast-fit. Primary goal of the site = **booked jobs and phone calls**, not "looking nice".

---

## 0. How to use this document

- Sections 1–4 = the evidence and targets. Read once.
- Section 5 = the page-by-page build spec. This is the core "formula".
- Section 6 = CTA rules. Section 7 = sitemap. Section 8 = technical bar.
- Section 9 = the **Great Website Scorecard** — a 100-point rubric to grade any garage site (winner vs loser test).
- Section 11 = a ready-to-paste handoff prompt for the next model.

A note on the "10 winners / 10 losers" ask: the differential in Section 4 is built from documented industry patterns and published stats, not from a live audit of 20 named sites. To get hard per-site numbers (PageSpeed, mobile score, booking presence) for specific named garages, run the live audit described at the end of Section 9 — that's the part a browser pass adds.

---

## 1. Market context (why the formula is shaped this way)

- ~33 million cars registered in the UK; MOT/service demand grows as the car parc ages, so the market is expanding. (DfT vehicle licensing stats, via Peak Digital)
- 42,000+ vehicle maintenance & repair businesses; 23,500+ MOT testing stations — a crowded local market. (Electronic Receptionist; Garage Services Online, via Stop Hiding)
- **Only ~10% of independent garages offer online booking.** This is the single biggest open goal. (Garage Services Online, via Stop Hiding)
- 70% of UK drivers prefer independents over main dealers — the demand is there for whoever shows up well online. (Electronic Receptionist)
- 46% of Google searches have local intent; 76% of local-intent searchers visit or call a business within 24 hours. (Think with Google, via Stop Hiding)
- 97% of consumers read reviews before choosing a local business; 68% will only use a business rated 4 stars or higher. (BrightLocal 2026, via Stop Hiding)
- 70%+ of garage searches happen on mobile. 30–40% of total demand is out-of-hours (evenings/weekends) — lost entirely by phone-only garages. (Peak Digital)
- Average final invoice from an online booking ≈ £297; final invoices often exceed the original booking because MOT fails create remedial work. (BookMyGarage)

**Strategic read:** the customer is high-intent, mobile, nervous about being ripped off, and comparing 3–4 garages side by side. The winning site removes friction and builds trust faster than the competitors on the same results page. It does not need to beat Kwik Fit/Halfords on head terms — it needs to beat the other local independents.

---

## 2. Conversion benchmarks (the targets to design against)

General cross-industry (2025–2026 aggregated: Unbounce, WordStream, Ruler, Lucky Orange, LOGOS):

- All-industry median site conversion: **~2.35–2.9%**. Top 10% of sites: **~11.4%**.
- The gap between "average" and "excellent" has widened ~5x since 2022 — build quality now matters more than ever.

Local service business (the relevant band):

| Conversion event | Realistic target |
|---|---|
| Contact / enquiry form | ~3% |
| Quote / estimate request page | 5%+ |
| Focused landing page (one service, matched to an ad) | 8–10%+ |
| Click-to-call (tel: link), mobile | 1.5–3% |

Device reality: mobile converts lower than desktop across the board (smartphone ~1.86% vs tablet/desktop ~3.4%). Benchmark your **mobile rate against your own desktop rate** — a big gap = a UX problem, not a market problem. (Popupsmart; LOGOS)

Rule of thumb: if a page is 50%+ below the relevant median, something is **structurally** broken (trust, speed, offer clarity) — fix that before A/B testing anything.

---

## 3. Speed = money (non-negotiable performance bar)

- A 100ms delay can cut conversions ~7%. Every additional second of load reduces conversions ~7–12%. (Conductor; Stackmatix)
- Core Web Vitals thresholds to hit (all "green"):
  - **LCP < 2.5s** (largest content paint)
  - **INP < 200ms** (interaction responsiveness)
  - **CLS < 0.1** (layout stability)
- Test on a **real mid-range Android**, not just an iPhone — that's what most customers carry.

Speed is a ranking factor and a conversion factor simultaneously. Treat "under 3 seconds on 4G mobile" as a hard pass/fail.

---

## 4. Winners vs Losers — the differential

This is the comparison, expressed as the traits that separate the garages winning the local market from the ones losing it. Every row is supported by the sources in Section 10.

| Dimension | Winners do | Losers do |
|---|---|---|
| **Booking** | Online booking / enquiry form that captures reg + service 24/7; syncs to diary | "Call us 8–5" only — loses the 30–40% out-of-hours demand |
| **Hero** | One job: book/call CTA + phone + location above the fold | Brand waffle ("excellence in automotive care"), slider carousel, no clear action |
| **Mobile** | Mobile-first, sticky call/book bar, tap-to-call | Desktop site squeezed onto a phone; number not tappable |
| **Trust** | Google rating, review count, RAC/AA/Good Garage Scheme, IMI, real workshop photos — near the top | No reviews shown, stock photos, trust buried or absent |
| **Pricing** | "From £XX" on common jobs (MOT, service, brakes) | "Call for a quote" — the friction that sends people to a competitor |
| **Services** | One dedicated page per service (MOT, service, brakes, clutch, diagnostics, AC, EV) | One "Services" page listing everything in a blob — ranks for nothing |
| **Location** | Address, hours, embedded map, directions, parking above the fold on Contact; LocalBusiness schema | Address buried in the footer only |
| **Speed** | CWV green, <3s on mobile | Slow, heavy, unoptimised images, layout shift |
| **Reg lookup** | DVLA reg lookup → instant MOT due date / history, pre-fills booking | Manual, high-friction forms or none |
| **Reviews source** | Live-pulled from Google | Fake/stock testimonials (customers spot these instantly) |
| **Content** | Plain-spoken MOT explainers, cost guides, seasonal/EV content | Corporate jargon, thin or no content, "set once and forget" |
| **Maintenance** | Living site — fresh reviews, photos, seasonal posts | Built once, never touched — outranked over time |

**One-line summary of the formula:** *Show up locally → prove trust instantly → state a starting price → make booking a 20-second, one-CTA, mobile action → be fast.*

---

## 5. The build spec — page by page

### 5.1 Homepage section order (top → bottom)

This is the "correct order" (hero, CTA, image, etc.):

1. **Sticky header** — logo left; nav (Work/Services/Pricing/Process/About/Contact); **one primary button** ("Book MOT" / "Get a Quote") + tappable phone number on the right. Header stays on scroll.
2. **Hero** (above the fold) — see 5.2 for anatomy. This is the most important block on the site: research shows users spend ~80% of attention above the fold. (Nielsen Norman Group data)
3. **Trust strip** — Google star rating + review count, accreditation badges (RAC/AA/Good Garage Scheme/IMI), "X years in [town]". Immediately under the hero so it's seen before any scroll effort.
4. **Services grid** — 4–8 cards (MOT, Full/Interim Service, Brakes, Clutch, Diagnostics, AC, EV, Tyres). Each card links to its own page. Each card: icon, name, "from £", one line.
5. **How it works / Process** — 3 steps (Enter reg & pick a date → We confirm a slot → Drop the keys / we collect). Removes uncertainty.
6. **Pricing snapshot** — "from £" table for the top 3–4 jobs, with a "prices may vary if…" honesty note.
7. **Reviews** — live Google reviews scroller (not stock testimonials).
8. **Reg-lookup / MOT-due checker** — enter plate → MOT due date + history → CTA to book. High-engagement, high-intent.
9. **Location block** — embedded map, address, opening hours, parking/courtesy-car/key-drop info, directions.
10. **FAQ** — MOT questions, turnaround, payment, EV. Doubles as FAQPage schema.
11. **Final CTA band** — repeat the primary CTA + phone.
12. **Footer** — full NAP (name/address/phone), hours, service links, legal (Privacy/Terms), socials.
13. **Sticky mobile CTA bar** (persistent) — "Call" + "Book" at the bottom of the mobile viewport. Documented to roughly double call volume. (Peak Digital)

### 5.2 Hero anatomy — and what the CTA is

A CTA ("call to action") is the single clickable action you most want the visitor to take — a button or tappable element with an action verb. On a garage site the **primary CTA = book / get a quote**; the **secondary CTA = call**. Everything in the hero points at the primary CTA.

Hero contents, in order of priority:
- **H1 headline** — outcome-led and local, e.g. "MOT & car servicing in [Town]". Not "Welcome to [Garage]".
- **One-line subhead** — what you do + the reassurance (e.g. "Book online in 30 seconds. Same-week slots. From £[MOT price].").
- **Primary CTA button** — high contrast, action verb: "Book your MOT" or "Get a quote". One primary button only.
- **Secondary CTA** — "Call [number]" as a tappable tel: link (ghost/outline style so it doesn't compete).
- **Micro-trust** — inline under the buttons: "★ 4.9 · 300+ Google reviews · Good Garage Scheme".
- **Reg input (optional, powerful)** — a single "Enter your reg" field that starts the booking/lookup flow right in the hero.
- **Image** — a real photo of the workshop/team, or the reg-lookup widget, on the right (desktop) / below (mobile). Real photography beats stock every time and reduces bounce. Keep it from pushing the CTA below the fold on mobile.

Above-the-fold discipline: on a mid-range phone, the H1, subhead, primary CTA and rating must all be visible **without scrolling**. If the image or a carousel pushes the CTA down, cut it. (Centered, visually-elevated forms/CTAs above the fold measurably improve discovery and sign-ups — ExperiGen/large-deployment study.)

### 5.3 Service pages (one per service)

Each service page answers the same five questions (this structure ranks and converts):
1. **What is it** (plain English).
2. **How long it takes.**
3. **What it typically costs** ("from £", with what could push it higher).
4. **What brands/vehicles you cover** (inc. EV/hybrid if applicable).
5. **How to book** — CTA + reg field.

Add: Service schema, an FAQ block, 2–3 relevant reviews, and internal links to related services. Title/URL pattern: `MOT in [Town]`, `Car service in [Town]`, so each ranks for its own term instead of competing with itself.

### 5.4 Booking / enquiry flow

- Minimum viable: a short form capturing **name, phone/email, vehicle reg, service, preferred date** → emails the garage + sends the customer a confirmation. Even this beats no form.
- Better: a calendar that syncs to the workshop diary; reg lookup pre-fills the vehicle.
- Keep required fields to the minimum — every extra field costs conversions. No account creation.
- Confirmation screen + email/SMS. Never a dead-end "thanks" with no next step.

### 5.5 Contact page

Address, hours, embedded map, directions, parking, courtesy car, key-drop instructions — **above the fold**, not just in the footer. LocalBusiness schema so Google lifts it into search.

---

## 6. CTA strategy (rules)

- **One primary action per page.** Book (or quote) is primary; Call is secondary. Don't offer five equal buttons.
- **Verb-first copy:** "Book your MOT", "Get a quote", "Check my MOT date" — not "Submit" or "Learn more".
- **Repetition:** primary CTA in header, hero, after services, after reviews, and in the final band. A returning-to-CTA rhythm every ~1.5 screens.
- **Mobile sticky bar:** always-present Call + Book. Single biggest call-volume lever documented for garage sites.
- **Contrast + size:** the primary button must be the highest-contrast element in its section and thumb-sized on mobile (≥44px tall).
- **Phone is always a tel: link.** A non-tappable number on mobile is a lost call.

---

## 7. Information architecture (sitemap)

```
/                     Home
/mot-[town]           MOT (service page)
/car-service-[town]   Servicing
/brakes               Brakes
/clutch               Clutch
/diagnostics          Diagnostics
/air-conditioning     AC regas
/ev-servicing         EV / hybrid
/tyres                Tyres (if offered)
/pricing              Transparent price list
/reviews              Reviews (live Google)
/about                Team, workshop, accreditations, story
/contact              NAP + map + booking
/book                 Booking flow (or modal)
/blog                 MOT explainers, cost guides, seasonal, EV
/privacy  /terms      Legal
```

Rule: **every service a customer Googles separately gets its own page.** No single "Services" blob.

---

## 8. Technical & SEO requirements

Performance:
- Core Web Vitals green (LCP <2.5s, INP <200ms, CLS <0.1); <3s on 4G mobile.
- Images in AVIF/WebP, lazy-loaded below the fold.
- HTTPS + HSTS.

Schema (structured data):
- `LocalBusiness` / `AutomotiveBusiness`, `Service`, `FAQPage`, `Review`.

Local SEO (the ranking engine for garages):
- Fully completed **Google Business Profile** — weekly posts, workshop photos, steady review drip. Single biggest local lever.
- **One landing page per service per town** realistically served.
- **Real workshop photography** (custom, not stock) — signals authenticity to Google and customers.

Measurement (track from day one — most garages track none of these):
- Form submissions + click-to-calls as GA4 events (true lead volume).
- Cost per booked job (marketing spend ÷ jobs from digital). Ask "how did you find us?" at the desk.
- Average revenue per digital customer over rolling 12 months.

---

## 9. The Great Website Scorecard (100 points)

Score any garage site 0–100. This is the winner/loser test — apply it to competitors and to your own build. ≥80 = winner, 50–79 = average, <50 = structurally broken.

**A. Conversion architecture — 30**
- Clear single primary CTA above the fold (mobile) — 6
- Tappable phone number in header + hero — 4
- Online booking OR enquiry form present — 8
- Sticky mobile Call/Book bar — 4
- Reg lookup / MOT-due checker — 4
- CTA repeated down the page (≥3 times) — 4

**B. Trust — 20**
- Google rating + review count visible near top — 6
- Live/real reviews (not stock) — 4
- Accreditation badges (RAC/AA/GGS/IMI) — 4
- Real workshop/team photography — 4
- "Years in [town]" / local proof — 2

**C. Clarity & offer — 15**
- "From £" pricing on common jobs — 6
- Dedicated page per service — 5
- Plain-English copy (no corporate jargon) — 4

**D. Local & findability — 15**
- Address + hours + map above the fold on Contact — 4
- LocalBusiness schema present — 3
- Service pages titled "[service] in [town]" — 4
- Google Business Profile complete & active — 4

**E. Performance & mobile — 20**
- LCP < 2.5s — 5
- INP < 200ms — 3
- CLS < 0.1 — 3
- <3s load on 4G mobile — 5
- Mobile conversion within ~20% of desktop — 4

**Live-audit add-on (to fill the "20 named sites" ask):** for each competitor, run PageSpeed Insights (LCP/INP/CLS), record whether online booking exists, count trust signals above the fold, and check for "from £" pricing and per-service pages. Twenty sites scored on this rubric gives a defensible winners-vs-losers table with real numbers.

---

## 10. Evidence & sources

- **Peak Digital — Garage Website Design (2026 UK guide):** six essential elements, converting design patterns, sticky mobile CTA doubling calls, CWV thresholds, ROI metrics, out-of-hours demand 30–40%, 70%+ mobile.
- **Stop Hiding — Best Website for Independent Garages (2026):** only ~10% of independents offer online booking; 97% read reviews (BrightLocal 2026); 68% only use 4★+; 46% local-intent searches; 76% act within 24h (Think with Google); 23,500+ MOT stations; 70% prefer independents.
- **BookMyGarage:** average invoice ≈ £297; out-of-hours booking capture; reg + postcode instant comparison behaviour.
- **Conversion benchmarks (Unbounce, WordStream, Ruler, Lucky Orange, LOGOS, Popupsmart, Stackmatix):** ~2.35–2.9% median / ~11.4% top-decile; local-service form 3% / quote 5% / focused LP 8–10% / click-to-call 1.5–3%; speed impact 7–12% per second, 7% per 100ms; mobile vs desktop gap.
- **NNG-referenced eye-tracking:** ~80% of attention above the fold; left-side bias.
- **Large-deployment form study (ExperiGen):** above-the-fold, centered, visually-elevated forms convert better than footer-embedded.
- **Google Core Web Vitals guidance:** LCP/INP/CLS thresholds.

(Stats are attributed to their originating reports; secondary aggregators noted where relevant.)

---

## 11. Handoff prompt for the next model

> Build a mobile-first website for a UK independent car garage / MOT centre in [TOWN]. Primary goal: booked jobs and phone calls. Follow this structure exactly:
> Homepage order — sticky header (logo, nav, one "Book MOT" button + tappable phone) → hero (local outcome H1, one-line reassuring subhead, single high-contrast primary CTA + secondary tap-to-call + inline star rating + "enter your reg" field, real workshop photo, all above the fold on mobile) → trust strip (Google rating, review count, RAC/AA/Good Garage Scheme/IMI) → services grid (one card per service, each "from £", linking to its own page) → 3-step how-it-works → "from £" pricing snapshot → live Google reviews → reg-lookup MOT-due checker → location block (map, hours, parking, key-drop) → FAQ → final CTA band → footer with full NAP. Add a persistent sticky mobile Call/Book bar.
> One dedicated page per service, each answering: what it is, how long, typical cost, brands/vehicles covered, how to book — plus Service + FAQ schema.
> Rules: single primary CTA per page (book/quote), phone always a tel: link, "from £" pricing (never "call for a quote"), real photography not stock, plain English not corporate jargon.
> Technical: Core Web Vitals green (LCP <2.5s, INP <200ms, CLS <0.1), <3s on 4G mobile, AVIF/WebP lazy-loaded images, HTTPS+HSTS, LocalBusiness/AutomotiveBusiness/Service/FAQPage/Review schema, GA4 events on form submits and click-to-calls.
> Target: match or beat local-service benchmarks — 3%+ form conversion, mobile within 20% of desktop. Grade the result against the 100-point scorecard in this brief; ship only at ≥80.
