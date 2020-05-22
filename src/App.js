import React, { useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import intl from 'react-intl-universal'
import Routes from './routes'
import 'react-notifications-component/dist/theme.css'
import ReactNotification, { store } from 'react-notifications-component'

function App() {
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

  useEffect(() => {
    const footer = intl.get('footer')

    store.addNotification({
      title: footer.msgInstagram,
      message: '@thegoodnewscoronavirus',
      type: 'default',
      insert: 'bottom',
      container: 'bottom-center',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 8000,
        onScreen: false
      },
      onRemoval: (id, removedBy) => {
        if (removedBy !== 'timeout') {
          var windowReference = window.open()
          windowReference.location = footer.instagramLink
        }
      }
    })
  }, [])

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
