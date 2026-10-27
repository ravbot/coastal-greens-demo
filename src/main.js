import './style.css'
import { business } from './config/business.js'
import { isHttpsUrl, makeLocalBusinessData } from './structured-data.js'

// textContent treats configuration as text, never as markup.
function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value || ''
  })
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag)
  if (className) element.className = className
  if (text) element.textContent = text
  return element
}

function safeImageUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return ''
  try {
    const url = new URL(value, window.location.origin)
    if (url.origin === window.location.origin || url.protocol === 'https:') return url.href
  } catch {
    // Invalid or missing image URLs leave the existing image in place.
  }
  return ''
}

function updateImage(id, labelId, image) {
  const element = document.querySelector(id)
  if (!element || !image) return
  const src = safeImageUrl(image.src)
  if (src) element.src = src
  element.alt = image.alt || ''
  // srcset entries are image URLs and width descriptors, not HTML.
  if (image.srcset) {
    const entries = image.srcset.split(',').map((entry) => {
      const match = entry.trim().match(/^(\S+)\s+(\d+w)$/)
      return match && safeImageUrl(match[1]) ? `${safeImageUrl(match[1])} ${match[2]}` : ''
    }).filter(Boolean)
    element.srcset = entries.join(', ')
  } else {
    element.removeAttribute('srcset')
  }
  setText(labelId, image.label)
}

function renderServices(services) {
  const grid = document.querySelector('#services-grid')
  const select = document.querySelector('#service')
  if (!grid || !select) return
  grid.replaceChildren()
  select.querySelectorAll('option:not([value=""])').forEach((option) => option.remove())

  services.forEach((service, index) => {
    const article = makeElement('article', 'service')
    const top = makeElement('div', 'service-top')
    const number = makeElement('span', 'service-number', String(index + 1).padStart(2, '0'))
    const arrow = makeElement('span', 'service-arrow', '↗')
    arrow.setAttribute('aria-hidden', 'true')
    top.append(number, arrow)

    const link = makeElement('a', '', `Explore ${service.name}`)
    link.href = '#contact'
    const linkArrow = makeElement('span', '', '→')
    linkArrow.setAttribute('aria-hidden', 'true')
    link.append(linkArrow)
    article.append(top, makeElement('h3', '', service.name), makeElement('p', '', service.description), link)
    grid.append(article)

    const option = makeElement('option', '', service.name)
    option.value = service.name
    select.append(option)
  })
  const other = makeElement('option', '', 'Something else')
  other.value = 'Something else'
  select.append(other)
}

function renderGallery(images) {
  const gallery = document.querySelector('#gallery')
  if (!gallery) return
  gallery.replaceChildren()
  images.forEach((image, index) => {
    const src = safeImageUrl(image.src)
    if (!src) return
    const figure = makeElement('figure', index === 0 ? 'gallery-item gallery-tall' : 'gallery-item')
    const img = document.createElement('img')
    img.src = src
    img.alt = image.alt || ''
    img.loading = 'lazy'
    img.width = 800
    img.height = 600
    const label = makeElement('span', 'photo-label', image.label)
    label.hidden = !image.label
    const caption = document.createElement('figcaption')
    caption.append(makeElement('span', '', `${String(index + 1).padStart(2, '0')} / INSPIRATION`), makeElement('strong', '', image.title))
    figure.append(img, label, caption)
    gallery.append(figure)
  })
}

function renderOptionalDetails() {
  const areas = document.querySelector('#service-areas')
  const areaText = areas?.querySelector('strong')
  if (areas && areaText && business.serviceAreas?.length) {
    areas.hidden = false
    areaText.textContent = business.serviceAreas.join(', ')
  }
  const hours = document.querySelector('#business-hours')
  const hoursText = hours?.querySelector('strong')
  if (hours && hoursText && business.hours?.length) {
    hours.hidden = false
    hoursText.textContent = business.hours.map((entry) => `${entry.days}: ${entry.time}`).join('; ')
  }
  const socialLinks = document.querySelector('#social-links')
  business.socialLinks?.forEach((social) => {
    if (!socialLinks || !social.label || !isHttpsUrl(social.url)) return
    const link = makeElement('a', '', social.label)
    link.href = social.url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    socialLinks.append(link)
  })
  const testimonials = document.querySelector('#testimonials')
  const list = document.querySelector('#testimonials-list')
  const entries = business.testimonials?.filter((entry) => entry.quote && entry.name) || []
  if (testimonials && list && entries.length) {
    testimonials.hidden = false
    entries.forEach((entry) => {
      const quote = document.createElement('blockquote')
      quote.append(makeElement('p', '', entry.quote), makeElement('cite', '', entry.name))
      list.append(quote)
    })
  }
}

function updateMetadata() {
  const location = [business.city, business.state].filter(Boolean).join(', ')
  document.title = [business.name, location].filter(Boolean).join(' | ')
  const setMeta = (selector, value) => {
    const element = document.querySelector(selector)
    if (element && value) element.content = value
  }
  setMeta('meta[name="description"]', business.seo?.description)
  setMeta('meta[property="og:title"]', document.title)
  setMeta('meta[property="og:description"]', business.seo?.description)
  ;[['og:url', business.seo?.siteUrl], ['og:image', business.seo?.imageUrl]].forEach(([property, url]) => {
    if (!business.seo?.verified || !isHttpsUrl(url)) return
    const meta = document.createElement('meta')
    meta.setAttribute('property', property)
    meta.content = url
    document.head.append(meta)
  })
  const structuredData = makeLocalBusinessData(business)
  if (structuredData) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData).replace(/</g, '\\u003c')
    document.head.append(script)
  }
}

const location = [business.city, business.state].filter(Boolean).join(', ')
const values = {
  name: business.name,
  brandLine: business.brandLine,
  brandDescriptor: business.brandDescriptor,
  brandMark: business.brandMark,
  tagline: business.tagline,
  description: business.description,
  location,
  state: business.state,
  address: business.address || 'Street address: placeholder',
  phone: business.phone || 'Phone number: placeholder',
  email: business.email || 'Email: placeholder',
}
Object.entries(values).forEach(([key, value]) => setText(`[data-business="${key}"]`, value))
Object.entries(business.theme || {}).forEach(([key, value]) => {
  const property = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  if (CSS.supports('color', value)) document.documentElement.style.setProperty(`--${property}`, value)
})
const demoLabel = document.querySelector('#demo-label')
if (demoLabel) demoLabel.hidden = Boolean(business.seo?.verified)
updateImage('#hero-image', '#hero-image-label', business.images?.hero)
updateImage('#about-image', '#about-image-label', business.images?.about)
renderServices(business.services || [])
renderGallery(business.images?.gallery || [])
renderOptionalDetails()
updateMetadata()

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#primary-navigation')

function setMenuOpen(open) {
  if (!menuButton || !navigation) return
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu')
  navigation.classList.toggle('is-open', open)
}

menuButton?.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})
navigation?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('a')) setMenuOpen(false)
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
    menuButton.focus()
  }
})

// The demonstration never sends or stores visitor information.
const form = document.querySelector('#estimate-form')
const formStatus = document.querySelector('#form-status')
form?.addEventListener('submit', (event) => {
  event.preventDefault()
  if (formStatus) formStatus.textContent = 'Demo only: your request was not sent or stored.'
})

const year = document.querySelector('#year')
if (year) year.textContent = new Date().getFullYear()
