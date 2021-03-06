import intl from 'react-intl-universal'

const load = location => {
  return {
    pt: require('../locales/pt-BR.json'),
    en: require('../locales/en-US.json')
  }[location]
}

export const hasLocation = location => {
  return load(location) && true
}

export const isLocaleValid = locale => {
  return ['en', 'pt', 'pt-BR', 'en-US'].includes(locale)
}

const loadLocale = locale => {
  const currentLocale = load(locale)

  const loadedLocale = () => {
    const obj = {}
    obj[currentLocale] = currentLocale
    return obj
  }

  intl.init({
    currentLocale,
    locales: loadedLocale()
  })
}

export default loadLocale
