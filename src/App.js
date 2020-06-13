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
    es: require('./locales/es.json'),
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
    locales,
  })

  const footerMsg = intl.get('footer')

  const notificationCard = (title, description) => {
    return (
      <div className="notification">
        <p className="notificationTitle">{title}</p>
        <p className="notificationDescription">{description}</p>
      </div>
    )
  }

  const showInstagramPopupCall = ({
    msgInstagram,
    instagramName,
    instagramLink,
  }) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      store.addNotification({
        title: msgInstagram,
        message: instagramName,
        type: 'default',
        insert: 'bottom',
        content: notificationCard(msgInstagram, instagramName),
        container: 'bottom-center',
        animationIn: ['animated fadeIn'],
        animationOut: ['animated fadeOut'],
        dismiss: {
          duration: 4000,
          onScreen: false,
        },
        onRemoval: (id, removedBy) => {
          if (removedBy !== 'timeout') {
            window.open(instagramLink, '_self')
          }
        },
      })
    }
  }

  const getCookieValue = (cookieName) => {
    const name = `${cookieName}=`
    const decodedCookie = decodeURIComponent(document.cookie)
    const coockies = decodedCookie.split(';') || []

    const cookie = coockies.find((item) => {
      return item.trim().startsWith(name)
    })

    return cookie && cookie.trim().substring(name.length, cookie.length)
  }

  useEffect(() => {
    const coockieConsentValue = getCookieValue('CookieConsent')
    if (coockieConsentValue && coockieConsentValue === 'true') {
      showInstagramPopupCall(footerMsg)
    }
  }, [])

  const textCookies = intl.get('cookies')

  return (
    <>
      <ReactNotification />
      <Routes />
      <CookieConsent
        buttonText={textCookies.button}
        onAccept={() => {
          showInstagramPopupCall(footerMsg)
        }}
      >
        {textCookies.consent}
      </CookieConsent>
    </>
  )
}

export default App
