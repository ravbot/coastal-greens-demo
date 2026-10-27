import './style.css'

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#primary-navigation')

function setMenuOpen(open) {
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu')
  navigation.classList.toggle('is-open', open)
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
    menuButton.focus()
  }
})

// This sample form intentionally does not transmit or store visitor information.
document.querySelector('#estimate-form').addEventListener('submit', (event) => {
  event.preventDefault()
  document.querySelector('#form-status').textContent = 'Demo only: your request was not sent.'
})

document.querySelector('#year').textContent = new Date().getFullYear()
