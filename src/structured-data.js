// Only generate structured data after the owner explicitly verifies the details.
export function makeLocalBusinessData(business) {
  const { seo = {} } = business
  if (!seo.verified || !seo.structuredData || !business.name?.trim() ||
      !business.address?.trim() || !business.city?.trim() || !business.state?.trim() ||
      !business.postalCode?.trim() || !business.countryCode?.trim()) {
    return null
  }

  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: business.countryCode,
    },
  }
  if (business.description) data.description = business.description
  if (business.phone) data.telephone = business.phone
  if (business.email) data.email = business.email
  if (isHttpsUrl(seo.siteUrl)) data.url = seo.siteUrl
  const links = (business.socialLinks || []).map((link) => link.url).filter(isHttpsUrl)
  if (links.length) data.sameAs = links
  return data
}

export function isHttpsUrl(value) {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}
