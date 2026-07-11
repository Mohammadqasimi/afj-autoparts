# AFJ Auto Parts & Wreckers — Website

## What changed

1. **Map fixed** — the old `.map-box` placeholder `<div>` now contains a live
   Google Maps `iframe`, driven by `BUSINESS.mapQuery` in `js/data.js`. Update
   that one value if the address ever changes and the map updates everywhere.

2. **Responsive layout** — added/extended breakpoints at `1024px`, `900px`,
   `720px`, and `480px` covering the brand grid, the services swiper cards,
   the finder bar, hero, sell banner, stats band, testimonials and footer, so
   the layout no longer breaks on tablet/phone widths (the brand grid and
   swiper cards in particular had no small-screen rules before).

3. **Real form submissions via Resend → your Gmail** — all three forms
   (quote request, sell-my-car, newsletter) now `fetch()` a backend endpoint
   instead of just resetting themselves. The backend (`server.js`) emails the
   submission to your Gmail through [Resend](https://resend.com). See
   **Backend setup** below — you need a free Resend API key for this to
   actually send mail.

4. **Content moved into data files** — `js/data.js` holds plain arrays/objects
   for `SERVICES`, `INVENTORY`, `BRANDS`, `TESTIMONIALS`, `FAQS`, and
   `BUSINESS` (phone/email/address/hours/WhatsApp). `js/main.js` renders all
   of that into the page on load. To add, remove, or edit a part, brand,
   FAQ, testimonial, or service — edit the array, not the HTML.

5. **WhatsApp integration** — a floating WhatsApp button (bottom-right), a
   WhatsApp entry in the Contact section, the footer social row, and the
   mobile menu all link to `https://wa.me/<number>` using
   `BUSINESS.whatsappNumber` / `BUSINESS.whatsappDefaultMessage` in
   `js/data.js`.

## File structure

```
index.html        the page (structure + styles, content containers are empty and filled by JS)
js/data.js         all editable content: services, inventory, brands, testimonials, faqs, business info
js/main.js         renders data.js into the page, wires up swiper/filters/FAQ/menu/forms
server.js          Express backend: serves the site + /api/quote, /api/sell-car, /api/newsletter
package.json       backend dependencies
.env.example       template for required environment variables
```

## Backend setup (required for forms to actually email you)

1. Create a free account at https://resend.com and grab an API key from
   **API Keys**.
2. In this folder:
   ```bash
   npm install
   cp .env.example .env
   ```
3. Edit `.env`:
   - `RESEND_API_KEY` — your Resend key
   - `TO_EMAIL` — the Gmail address that should receive leads
   - `FROM_EMAIL` — leave as the default `onboarding@resend.dev` sender
     until you verify your own domain in Resend (Resend requires a verified
     sending domain for anything other than their shared test address).
4. Run it:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000` — this serves `index.html` **and** the API
   from the same origin, so the forms work with no extra configuration.

If you deploy the static site somewhere else (Netlify, GitHub Pages, etc.),
either deploy `server.js` alongside it (e.g. on Render/Railway/Fly.io) or
turn it into a serverless function — either way, keep the `RESEND_API_KEY`
server-side only. Never put it in the front-end JS; that would let anyone
who views page source send mail through your account.

## Editing content

Open `js/data.js`:

- **Add a part to inventory** → add an object to `INVENTORY`.
- **Add/remove a brand logo** → edit `BRANDS`.
- **Change the phone number, address, or WhatsApp number** → edit
  `BUSINESS`. Every phone link, the map, and the WhatsApp buttons update
  automatically.
- **Add a service card** → add an object to `SERVICES` (they're
  auto-chunked into swiper slides of 8).
- **Edit FAQs or testimonials** → edit `FAQS` / `TESTIMONIALS`.

No HTML editing needed for normal content updates.
