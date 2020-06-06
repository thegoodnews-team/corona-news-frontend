import React, { useContext } from 'react'
import ThemeContext from '../../components/context/ThemeContext'
import PropTypes from 'prop-types'
import CardSearch from '../card-search/CardSearch'
import intl from 'react-intl-universal'

export default function FutureAfterCovid({ spreadsheetLink }) {
  const themeColor = useContext(ThemeContext)
  const future = intl.get('future')

  return <CardSearch color={themeColor} spreadsheetLink={spreadsheetLink} labelTitle={future.title}
    labelFilter={future.arrow} labelSearch={future.selector} analyticsCategory='FUTURE'></CardSearch>
}

FutureAfterCovid.propTypes = {
  spreadsheetLink: PropTypes.string.isRequired
}
