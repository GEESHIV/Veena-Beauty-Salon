# Project memory

## Product intent & audience

- **Project:** Premium marketing website for **Veena's Beauty Salon**, a beauty parlour in Noida, Uttar Pradesh, India.
- **Audience:** Local women seeking personalized, professional beauty services (facial, makeup, hair, grooming, bridal packages).
- **Primary goal:** Attract visitors and drive appointment bookings via WhatsApp integration.

## Brand personality & voice

- Luxury, feminine, elegant, professional, established-sounding.
- Voice conveys beauty as art and self-care; sophisticated but approachable.

## Visual design & UX direction

- **Palette:** Champagne Gold, Ivory White, Blush Pink, Warm Beige, Rose Gold accents.
- **Typography:** Cormorant Garamond (serif headings), Poppins (body).
- **Aesthetic:** Spacious, premium feminine luxury; image-based service cards; smooth scroll-reveal animations and hover zoom/overlay effects.
- **Layout:** Full-width hero with professional photography background; tabbed service categories; responsive masonry gallery grid with captions; dark-background "Why Choose Us" section.
- **Components:** Lucide icons for features; custom reveal-on-scroll hook for animations; floating WhatsApp button with greeting tooltip; mobile menu drawer.
- **Responsive:** Fully responsive across mobile, tablet, desktop; proper mobile navigation.
- **Buttons:** Sophisticated styling; all CTAs functional (WhatsApp, click-to-call, maps directions).

## Decisions, constraints & rationale

- **Stack:** Vite + React + Tailwind CSS + Lucide React (per template/prompt).
- **Path alias:** `@/` maps to `src/`.
- **WhatsApp integration:** Booking form opens WhatsApp to `918447455551` with a pre-filled message containing all form fields. Floating WhatsApp button site-wide.
- **Google Business Profile:** https://maps.app.goo.gl/bKXakYD2AJg4oAnk6 — used for "Read Our Google Reviews" and directions link.
- **Images:** Professional beauty photography sourced from Pexels (external URLs).
- **No fabricated content:** Per user instruction, no invented prices (use "Contact for Pricing"), fake reviews, fake customer names/ratings, owner biography, qualifications, opening hours, or awards.
- **SEO:** Friendly page titles and descriptions set in `index.html`.
- Build and typecheck pass cleanly.

## Open questions & assumptions

- Opening hours not provided — intentionally omitted.
- Social media links omitted (unverified).
- No backend; booking is via WhatsApp deep link only.
- If business later wants real customer testimonials, Google reviews embed or curated verified testimonials could replace the CTA-only reviews section.