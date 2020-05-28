import React, { useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import intl from 'react-intl-universal'
import Routes from './routes'
import 'react-notifications-component/dist/theme.css'
import ReactNotification, { store } from 'react-notifications-component'
import './index.css'

function App() {
  const locales = {
    'pt-BR': require('./locales/pt-BR.json'),
    'en-US': require('./locales/en-US.json'),
    es: require('./locales/es.json')
  }

  let currentLocale = localStorage.getItem('goodnewscoronavirus')
  if (!currentLocale) {
    if (navigator.language === 'pt-BR') {
      currentLocale = 'pt-BR'
    } else {
      currentLocale = 'en-US'
    }
  }

  localStorage.setItem('goodnewscoronavirus', currentLocale)

  intl.init({
    currentLocale,
    locales
  })

  function notificationCard(title, description, notificationClass) {
    return (
      <div className='notification'>
        <p className="notificationTitle">{title}</p>
        <p className="notificationDescription">{description}</p>
      </div>
    )
  }

  useEffect(() => {
    const footer = intl.get('footer')

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      store.addNotification({
        title: footer.msgInstagram,
        message: footer.instagramName,
        type: 'default',
        insert: 'bottom',
        content: notificationCard(footer.msgInstagram, footer.instagramName),
        container: 'bottom-center',
        animationIn: ['animated fadeIn'],
        animationOut: ['animated fadeOut'],
        dismiss: {
          duration: 8000,
          onScreen: false
        },
        onRemoval: (id, removedBy) => {
          if (removedBy !== 'timeout') {
            window.open(footer.instagramLink, '_self')
          }
        }
      })
    }
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
