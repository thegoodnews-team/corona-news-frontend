import React from 'react'
import CookieConsent from 'react-cookie-consent'
import intl from 'react-intl-universal'
import Routes from './routes'

function App() {
  const locales = {
    'pt-BR': require('./locales/pt-BR.json'),
    'en-US': require('./locales/en-US.json')
  }

  const currentLocale = localStorage.getItem('goodnewscoronavirus') ? localStorage.getItem('goodnewscoronavirus') : locales[navigator.language] ? navigator.language : 'en-US'

  localStorage.setItem('goodnewscoronavirus', currentLocale)

  intl.init({
    currentLocale,
    locales
  })

  const textCookies = intl.get('cookies')

  return (
    <>
      <Routes />
      <CookieConsent buttonText={textCookies.button}>{textCookies.consent}</CookieConsent>
    </>
  )
}

export default App
