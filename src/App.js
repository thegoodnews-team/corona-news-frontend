import React from 'react'
import CookieConsent from 'react-cookie-consent'
import intl from 'react-intl-universal'
import Routes from './routes'
import 'react-notifications-component/dist/theme.css'
import ReactNotification, { store } from 'react-notifications-component'

function App() {
  const footer = intl.get('footer')

  const locales = {
    'pt-BR': require('./locales/pt-BR.json'),
    'en-US': require('./locales/en-US.json')
  }

  const currentLocale = localStorage.getItem('goodnewscoronavirus')
    ? localStorage.getItem('goodnewscoronavirus')
    : locales[navigator.language]
      ? navigator.language
      : 'en-US'

  localStorage.setItem('goodnewscoronavirus', currentLocale)

  intl.init({
    currentLocale,
    locales
  })

  store.addNotification({
    title: footer.msgInstagram,
    message: '@thegoodnewscoronavirus',
    type: 'default',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 4000,
      onScreen: true
    },
    onRemoval: (id, removedBy) => {
      if (removedBy === 'click') { window.open(footer.instagramLink, '_blank') }
    }
  })

  const textCookies = intl.get('cookies')

  return (
    <>
      <ReactNotification />
      <Routes />
      <CookieConsent buttonText={textCookies.button}>
        {textCookies.consent}
      </CookieConsent>
    </>
  )
}

export default App
