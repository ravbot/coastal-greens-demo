# Coastal Greens Landscaping

This vanilla HTML, CSS, and JavaScript Vite site is a public demonstration for Coastal Greens Landscaping, a fictional business in Boynton Beach, Florida. A visible banner identifies it as a fictional demonstration, not an official business website. Contact details are fictional placeholders, all illustrations are original labeled placeholders, and the contact form cannot send or store inquiries. No reviews, awards, or licensing claims are included.

## Run locally

```powershell
npm install
npm run dev
npm run build
```

## Customize the business

Edit `src/config/business.js` to change the business name, brand lines and initials, tagline, description, contact details, location, service areas, hours, services, social links, images, and theme colors. Empty optional fields are omitted or marked as placeholders. Configuration text is inserted using DOM text properties, not interpreted as HTML.

- Change `name`, `brandLine`, `brandDescriptor`, and `brandMark` together to update the title and logo text. The `content` object controls the separate hero headline, section headings, and supporting copy through `data-business` attributes.
- Edit the `services` array to update both the service cards and the form's service options.
- Put replacement images in `public` and update their paths, alt text, and labels under `images`. If a hero image has no responsive variants, clear its `srcset` string. Remove a placeholder label only when the image is appropriate to present as a real project.
- Change the `theme` color values in the configuration. Coastal Greens uses deep teal, coral, sand, and sea mist. CSS palette fallbacks, typography, spacing, and the original responsive layout rules are in `src/style.css`. The Google Fonts stylesheet is linked in `index.html`, with local fallback fonts if unavailable.
- Keep the testimonials array empty for this fictional demonstration.
- Keep the static copy in `index.html` aligned with the configuration for fallback content and metadata. The matching favicon is in `public/favicon.svg`.

## Public Netlify demonstration

`netlify.toml` sets the build command to `npm run build` and the publish directory to `dist`. You can also use those settings manually in Netlify, or upload the built `dist` directory. This project does not run a deployment command or commit changes automatically.

`public/_headers` is copied unchanged to `dist/_headers` by Vite. It applies `X-Robots-Tag: noindex, nofollow` to every path using [Netlify's custom header format](https://docs.netlify.com/manage/routing/headers/). Matching robots metadata is included directly in the HTML. This requests exclusion from search results; the demonstration can still be visited directly by URL.

Forms remain demonstration-only: there is no endpoint, Netlify Forms opt-in, or named field serialization. The native `dialog` form method cannot submit over HTTP, and a `form-action 'none'` Content Security Policy in both HTML and `_headers` blocks submission. The demo button starts disabled and is enabled only after its JavaScript cancellation handler is attached. Trying the form clears its fields and announces that no request was sent or stored; no network or storage API handles form values. Use sample details only. Do not enable Netlify Forms for this demonstration.

Keep `business.demonstration` set to `true` and both `seo.verified` and `seo.structuredData` set to `false`. The demonstration flag prevents LocalBusiness data generation even if the SEO flags are accidentally enabled. The fictional-business footer notice stays visible as well.

See [ASSETS.md](ASSETS.md) for original illustration provenance and the existing Google Fonts licenses. Images with undocumented licenses have been removed from the public deployment assets.

## Verification notes

`npm run build` passed. `dist/_headers` was verified byte-for-byte against `public/_headers`, including the all-path `X-Robots-Tag: noindex, nofollow` rule and form-blocking Content Security Policy. Build checks confirmed the static banner, robots metadata, original asset allowlist, no form endpoint or Netlify Forms opt-in, no browser storage API, and the structured-data guard even with SEO flags enabled.

Headless Chrome checks passed at 320, 390, 650, 900, and 1440 pixels: the banner is visible and there is no horizontal overflow, broken image, fictional JSON-LD, or JavaScript runtime error. Mobile menu opening and Escape dismissal passed. The form serialized zero fields, made zero network requests, cleared sample details, and left local/session storage empty. With JavaScript disabled, the button remained disabled, the explanatory notice was visible, and direct native form submission caused no request or URL change. Desktop and mobile screenshots were visually reviewed.

The demonstration build must contain `_headers`, the favicon, and only the four original placeholder illustrations as public assets. Vite preview does not apply Netlify's `_headers` rules; the matching HTML metadata and Content Security Policy provide local preview coverage. Actual response headers can be checked after a separately authorized Netlify deployment.
