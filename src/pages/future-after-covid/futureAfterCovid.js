import React, { useContext } from 'react'
import ThemeContext from '../../components/context/ThemeContext'
import CardSearch from '../card-search/CardSearch'
import intl from 'react-intl-universal'

export default function FutureAfterCovid() {
  const themeColor = useContext(ThemeContext)
  const future = intl.get('future')
  const spreadsheetLink = intl.get('json-data.future')

  return <CardSearch color={themeColor} spreadsheetLink={spreadsheetLink} labelTitle={future.title}
    labelFilter={future.arrow} labelSearch={future.selector} analyticsCategory='FUTURE'></CardSearch>
}
