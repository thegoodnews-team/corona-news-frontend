import React, { useContext } from 'react'
import ThemeContext from '../../components/context/ThemeContext'
import PropTypes from 'prop-types'
import CardSearch from '../card-search/CardSearch'

export default function Donation({ spreadsheetLink }) {
  const themeColor = useContext(ThemeContext)
  return <CardSearch color={themeColor} spreadsheetLink={spreadsheetLink} labelTitle='Qual doação você está buscando?'
    labelFilter='Filtrar doações por categoria' labelSearch='Buscar doações' analyticsCategory='DONATE'></CardSearch>
}

Donation.propTypes = {
  spreadsheetLink: PropTypes.string.isRequired
}
