import React, { useContext } from 'react'
import ThemeContext from '../../components/context/ThemeContext'
import CardSearch from '../card-search/CardSearch'
import intl from 'react-intl-universal'

export default function FreeServices() {
  const themeColor = useContext(ThemeContext)
  const service = intl.get('freeService')
  const spreadsheetLink = intl.get('json-data.freeServices')

  return <CardSearch color={themeColor} spreadsheetLink={spreadsheetLink} labelTitle={service.title}
    labelFilter={service.arrow} labelSearch={service.selector} analyticsCategory='SERVICES'></CardSearch>
}
