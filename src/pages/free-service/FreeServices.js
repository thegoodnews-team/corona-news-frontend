import React from 'react'
import PropTypes from 'prop-types'

import CardSearch from '../card-search/CardSearch'
import intl from 'react-intl-universal'

export default function FreeServices({ color, spreadsheetLink }) {
  const service = intl.get('freeService')

  return <CardSearch color={color} spreadsheetLink={spreadsheetLink} labelTitle={service.title}
    labelFilter={service.arrow} labelSearch={service.selector} analyticsCategory='SERVICES'></CardSearch>
}

FreeServices.propTypes = {
  color: PropTypes.string.isRequired,
  spreadsheetLink: PropTypes.string.isRequired
}
