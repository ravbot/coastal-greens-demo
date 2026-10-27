// Edit this file to adapt the template. Empty strings and arrays are optional.
// The default business and images are examples, not verified business information.
export const business = {
  name: 'Palm Grove Landscaping',
  brandLine: 'Palm Grove',
  brandDescriptor: 'Landscaping',
  brandMark: 'PG',
  tagline: 'Thoughtful landscaping and dependable care for outdoor spaces made to be enjoyed.',
  description: 'Palm Grove Landscaping is a fictional West Palm Beach company imagined around a simple idea: caring for your landscape should feel as natural as enjoying it.',
  phone: '', // Example: '+1 561 555 0123'
  email: '',
  address: '', // Street address; leave blank when unavailable.
  city: 'West Palm Beach',
  state: 'Florida',
  postalCode: '',
  countryCode: 'US',
  serviceAreas: ['West Palm Beach, Florida'],
  hours: [], // Example: [{ days: 'Monday - Friday', time: '8:00 AM - 5:00 PM' }]
  socialLinks: [], // Example: [{ label: 'Instagram', url: 'https://example.com' }]
  services: [
    { name: 'Lawn maintenance', description: 'Keep your lawn healthy, tidy, and ready for every season.' },
    { name: 'Landscape design', description: 'Bring your vision to life with a landscape that feels like home.' },
    { name: 'Tree trimming', description: 'Thoughtful pruning to keep your trees looking their best.' },
    { name: 'Pressure washing', description: 'Refresh walkways, patios, and other outdoor surfaces.' },
  ],
  theme: {
    forest: '#173b2f',
    forestDark: '#102b22',
    cream: '#f7f7f0',
    paper: '#fffef9',
    gold: '#d6bc7e',
    goldDark: '#735a2e',
  },
  images: {
    hero: {
      src: '/garden-hero-1600.webp',
      srcset: '/garden-hero-800.webp 800w, /garden-hero-1600.webp 1600w',
      alt: 'Generated placeholder image of a landscaped tropical garden',
      label: 'Generated placeholder image',
    },
    about: {
      src: '/garden-about-800.webp',
      alt: 'Placeholder photograph of garden tools and soil',
      label: 'Placeholder photograph',
    },
    gallery: [
      { src: '/garden-hero-800.webp', alt: 'Generated placeholder image of a landscaped tropical garden', label: 'Generated placeholder image', title: 'Room to unwind' },
      { src: '/garden-gallery-lawn-800.webp', alt: 'Placeholder photograph of a green lawn', label: 'Placeholder photograph', title: 'Everyday greenery' },
      { src: '/garden-gallery-garden-800.webp', alt: 'Placeholder photograph of a garden landscape', label: 'Placeholder photograph', title: 'A place to grow' },
    ],
  },
  testimonials: [], // Add only genuine, permitted customer testimonials.
  seo: {
    description: 'A sample website for Palm Grove Landscaping, a fictional landscaping company in West Palm Beach, Florida.',
    siteUrl: '', // Verified public HTTPS URL, without a trailing slash.
    imageUrl: '', // Verified absolute HTTPS URL for an Open Graph image.
    verified: false, // Set true only after confirming real business details.
    structuredData: false, // Also set true to enable LocalBusiness JSON-LD.
  },
}
