import React, { useContext } from 'react'
import ThemeContext from '../../components/context/ThemeContext'
import CardSearch from '../card-search/CardSearch'
import intl from 'react-intl-universal'

export default function Donation() {
  const spreadsheetLink = intl.get('json-data.donation')
  const themeColor = useContext(ThemeContext)

  return <CardSearch color={themeColor} spreadsheetLink={spreadsheetLink} labelTitle='Qual doação você está buscando?'
    labelFilter='Filtrar doações por categoria' labelSearch='Buscar doações' analyticsCategory='DONATE'></CardSearch>
}
