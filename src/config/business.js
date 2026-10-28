// Fictional demonstration business. Contact details and images are placeholders.
// Edit this file to customize the content, services, and palette in one place.
export const business = {
  demonstration: true, // Keeps fictional structured data disabled, even if SEO flags change.
  name: 'Coastal Greens Landscaping',
  brandLine: 'Coastal Greens',
  brandDescriptor: 'Landscaping',
  brandMark: 'CG',
  tagline: 'Easygoing outdoor living starts with a well-cared-for landscape. Lawn care, fresh planting, and garden refreshes inspired by the Florida coast.',
  description: 'Coastal Greens Landscaping is a fictional business based in Boynton Beach, Florida. This demo imagines a local approach to landscaping: relaxed spaces, thoughtful planting, and practical care for coastal living.',
  phone: '(561) 555-0147 (fictional)',
  email: 'hello@coastalgreens.example (fictional)',
  address: 'Street address: placeholder — fictional business',
  city: 'Boynton Beach',
  state: 'Florida',
  postalCode: '',
  countryCode: 'US',
  serviceAreas: ['Boynton Beach', 'Delray Beach', 'Ocean Ridge', 'Lantana'], // Fictional service areas, all in Florida.
  hours: [], // Example: [{ days: 'Monday - Friday', time: '8:00 AM - 5:00 PM' }]
  socialLinks: [], // Example: [{ label: 'Instagram', url: 'https://example.com' }]
  content: {
    headline: 'Your coast.',
    headlineAccent: 'Your green.',
    heroNote: 'A little coastal calm, right at home.',
    introStatement: 'FRESH GREENS. SALT-AIR SPIRIT.',
    introDescriptor: 'BOYNTON BEACH & NEARBY COMMUNITIES',
    servicesHeading: 'Coastal spaces,',
    servicesHeadingAccent: 'considered care.',
    servicesIntro: 'From a freshly edged lawn to a new garden bed, explore our fictional service offerings for laid-back Florida yards.',
    aboutHeading: 'A coastal outlook.',
    aboutHeadingAccent: 'A greener home.',
    aboutLead: 'Room for morning coffee, bare feet, and a little more time outside.',
    aboutDetails: 'The idea is simple: pair routine lawn care with planting and seasonal refreshes that suit your space, your style, and the way you enjoy being outdoors.',
    projectsHeading: 'Picture your',
    projectsHeadingAccent: 'coastal escape.',
    projectsIntro: 'Garden inspiration for a softer, greener outdoor space. All images are placeholders, not Coastal Greens projects.',
    contactEyebrow: 'YOUR NEXT OUTDOOR CHAPTER',
    contactHeading: 'Make room for',
    contactHeadingAccent: 'more outside.',
    contactIntro: 'Try planning a lawn care visit or garden refresh below. Coastal Greens is fictional; the contact details are placeholders and this demo sends no inquiries.',
  },
  services: [
    { name: 'Lawn & edge care', description: 'Routine mowing, neat edging, and a tidy finish for everyday outdoor living.' },
    { name: 'Coastal planting', description: 'Garden bed planning and planting ideas with a relaxed, coastal Florida feel.' },
    { name: 'Hedge & shrub care', description: 'Shaping and light pruning to keep garden borders balanced and inviting.' },
    { name: 'Mulch & garden refresh', description: 'Fresh mulch, bed cleanup, and seasonal touch-ups to bring your garden together.' },
  ],
  // Keep template token names so the existing layout and styles can be reused.
  theme: {
    forest: '#154e5b',
    forestDark: '#0c2e3a',
    cream: '#fbf5ec',
    paper: '#fffdf8',
    gold: '#f3ac8e',
    goldDark: '#8c3e2d',
    ink: '#183942',
    muted: '#50676d',
    line: '#b4c8ca',
    fieldBorder: '#667c82',
    softGreen: '#e9f2f2',
    sageText: '#236a73',
    focus: '#10616b',
    forestHover: '#236b76',
    accentHover: '#ffc7ac',
    lightText: '#eef6f6',
    mutedLight: '#c6dfe2',
  },
  images: {
    hero: {
      src: '/demo-coastal-garden.svg',
      srcset: '', // Vector artwork scales to every viewport without raster variants.
      alt: 'Original placeholder illustration of a coastal garden; not a real property or completed project',
      label: 'Placeholder illustration',
    },
    about: {
      src: '/demo-garden-tools.svg',
      alt: 'Original placeholder illustration of garden tools and a potted plant',
      label: 'Placeholder illustration',
    },
    gallery: [
      { src: '/demo-coastal-garden.svg', alt: 'Original coastal garden placeholder illustration; not a completed project', label: 'Placeholder illustration', title: 'A coastal retreat' },
      { src: '/demo-lawn.svg', alt: 'Original lawn placeholder illustration; not a completed project', label: 'Placeholder illustration', title: 'Space for slow mornings' },
      { src: '/demo-planting.svg', alt: 'Original garden bed placeholder illustration; not a completed project', label: 'Placeholder illustration', title: 'Fresh layers of green' },
    ],
  },
  testimonials: [], // Add only genuine, permitted customer testimonials.
  seo: {
    description: 'Explore Coastal Greens Landscaping, a fictional Boynton Beach, Florida business offering lawn care, coastal planting, shrub care, and garden refreshes. Demo only.',
    siteUrl: '', // Verified public HTTPS URL, without a trailing slash.
    imageUrl: '', // Verified absolute HTTPS URL for an Open Graph image.
    verified: false, // Set true only after confirming real business details.
    structuredData: false, // Also set true to enable LocalBusiness JSON-LD.
  },
}
