import intl from 'react-intl-universal'

const load = location => {
  return {
    pt: require('../locales/pt-BR.json'),
    en: require('../locales/en-US.json'),
    es: require('../locales/es.json')
  }[location]
}

export const hasLocation = location => {
  return load(location) && true
}

const loadLocale = async locale => {
  const currentLocale = load(locale) || load('pt')

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