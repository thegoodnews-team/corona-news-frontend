import React, { useContext } from 'react'
import ThemeContext from '../../components/context/ThemeContext'
import PropTypes from 'prop-types'
import CardSearch from '../card-search/CardSearch'
import intl from 'react-intl-universal'

export default function Initiatives() {
  const themeColor = useContext(ThemeContext)
  const spreadsheetLink = intl.get('json-data.initiatives')

  return <CardSearch color={themeColor} spreadsheetLink={spreadsheetLink} labelTitle='Qual iniciativa você está buscando?'
    labelFilter='Filtrar iniciativas por categoria' labelSearch='Buscar iniciativas' analyticsCategory='INITIATIVES'></CardSearch>
}

Initiatives.propTypes = {
  spreadsheetLink: PropTypes.string.isRequired
}
