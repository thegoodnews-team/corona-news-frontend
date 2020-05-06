import React from 'react'
import Routes from './routes'
import intl from 'react-intl-universal'

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

  return (
    <Routes />
  )
}

export default App
