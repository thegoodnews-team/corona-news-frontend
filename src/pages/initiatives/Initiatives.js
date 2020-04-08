import React from 'react'
import PropTypes from 'prop-types'
import CardSearch from '../card-search/CardSearch'

export default function Initiatives({ color, spreadsheetLink }) {
  return <CardSearch color={color} spreadsheetLink={spreadsheetLink} labelTitle='Qual iniciativa você está buscando?'
    labelFilter='Filtrar iniciativas por categoria' labelSearch='Buscar iniciativas' analyticsCategory='INITIATIVES'></CardSearch>
}

Initiatives.propTypes = {
  color: PropTypes.string.isRequired,
  spreadsheetLink: PropTypes.string.isRequired
}
