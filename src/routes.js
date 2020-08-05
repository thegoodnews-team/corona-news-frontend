import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import { MainLayout } from './pages/MainLayout'
import { ThemeProvider, themes } from './components/context/ThemeContext'
import Initiatives from './pages/initiatives'
import FreeServices from './pages/free-service/FreeServices'
import FutureAfterCovid from './pages/future-after-covid/futureAfterCovid'
import Donation from './pages/donation'
import './utils/Locales'
import intl from 'react-intl-universal'
import alert from './utils/Alert'
import { getCookieValue } from './utils/Cookies'
import CookieConsent from 'react-cookie-consent'

export default function Routes() {
  const alertMsg = intl.get('alert')

  useEffect(() => {
    const coockieConsentValue = getCookieValue('CookieConsent')
    if (coockieConsentValue && coockieConsentValue === 'true') {
      alert(alertMsg)
    }
  }, [])

  const textCookies = intl.get('cookies')

  return (
    <>
      <CookieConsent
        buttonText={textCookies.button}
        onAccept={() => {
          alert(alertMsg)
        }}
      >
        {textCookies.consent}
      </CookieConsent>
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route exact path="/future">
          <ThemeProvider value={themes.darkKhaki} >
            <MainLayout>
              <FutureAfterCovid />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/donate">
          <ThemeProvider value={themes.pink} >
            <MainLayout>
              <Donation />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/about">
          <ThemeProvider value={themes.orange} >
            <MainLayout>
              <About />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </>
  )
}
