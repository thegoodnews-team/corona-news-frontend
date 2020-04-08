import React from 'react'
import PropTypes from 'prop-types'

import CardSearch from '../card-search/CardSearch'

export default function FreeServices({ color, spreadsheetLink }) {
  return <CardSearch color={color} spreadsheetLink={spreadsheetLink} labelTitle='Qual serviço gratuito você está buscando?'
    labelFilter='Filtrar serviços por categoria' labelSearch='Buscar serviços' analyticsCategory='SERVICES'></CardSearch>
}

FreeServices.propTypes = {
  color: PropTypes.string.isRequired,
  spreadsheetLink: PropTypes.string.isRequired
}
