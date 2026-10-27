# Business starter template

This is a vanilla HTML, CSS, and JavaScript Vite template. The default Palm Grove Landscaping content is fictional. The contact form is a demonstration and does not send or store inquiries.

## Run locally

```powershell
npm install
npm run dev
npm run build
```

## Customize the business

Edit `src/config/business.js` to change the business name, brand lines and initials, tagline, description, contact details, location, service areas, hours, services, social links, images, and theme colors. Empty optional fields are omitted or marked as placeholders. Configuration text is inserted using DOM text properties, not interpreted as HTML.

- Change `name`, `brandLine`, `brandDescriptor`, and `brandMark` together to update the title, logo text, and heading.
- Edit the `services` array to update both the service cards and the form's service options.
- Put replacement images in `public` and update their paths, alt text, and labels under `images`. If a hero image has no responsive variants, clear its `srcset` string. Remove a placeholder label only when the image is appropriate to present as a real project.
- Change the `theme` color values in the configuration. Additional colors, typography, spacing, and responsive layout rules are in `src/style.css`. The Google Fonts stylesheet is linked in `index.html`, with local fallback fonts if unavailable.
- Add real customer testimonials only with appropriate permission. Leave the testimonials array empty to hide the section.
- Edit page section headings and general copy in `index.html`.

## SEO and production

The default metadata identifies this as a fictional sample. Search engines and social platforms may not run JavaScript reliably, so update the default title, description, and Open Graph tags in `index.html` for a production site as well as `seo.description` in the configuration.

LocalBusiness structured data is disabled by default. To enable it for a real business, replace all fictional text and images, enter the verified name and full physical address (including postal code and country code), and set both `seo.verified` and `seo.structuredData` to `true`. Optional HTTPS `seo.siteUrl` and `seo.imageUrl` enable Open Graph URL and image metadata. The template does not create a canonical URL.

Before launch, connect and secure a real form handler, add a privacy notice appropriate to the business, verify contact information and image rights, replace the generic favicon if desired, and test on real devices and with assistive technology.

## Verification notes

The production build and checks for internal anchor targets and the LocalBusiness verification gate passed. A controllable browser was unavailable in the implementation environment, so browser console errors, mobile layout, keyboard navigation, menu interaction, and the demo form announcement still need a browser check.

The original image files are retained in `public` for editing and are also copied into `dist` by Vite. The page requests the smaller WebP variants; move or remove the originals before production if they are no longer needed.
