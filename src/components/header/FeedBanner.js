import React, { useEffect, useState, useContext } from 'react'
import style from './css/bannerfeed.module.css'
import brFlag from './assets/brazil.svg'
import worldFlag from './assets/planet-earth.svg'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'

import getItemsFromSpreadsheet from '../../utils/spreadsheet'

export const FeedBanner = ({ displayBanner }) => {
  const [feed, setFeed] = useState({})
  const theme = useContext(ThemeContext)
  const recoveryData = intl.get('recovery')
  const locale = intl.options.currentLocale

  useEffect(() => {
    (async () => {
      const { content } = recoveryData
      const csvData = await getItemsFromSpreadsheet(content)

      const transfomedFeed = csvData.reduce(
        (acc, curr) => {
          acc[curr.country] = curr.number
          return acc
        }, {})

      setFeed(transfomedFeed)
    })()
  }, [])

  return (
    <a className={`${style.counterBanner} ${themes[theme + '-secundary']}`} style={{ display: displayBanner }}
      href='https://www.worldometers.info/coronavirus' target='_blank' rel="noopener noreferrer">

      <div className={`${style.counterBannerTitle} ${style.displayMdInline}`}> {recoveryData.description} <span> {recoveryData.description2}</span></div>
      <div className={style.displayMdInline}>

        {locale === 'pt-BR' ? (
          <>
            <span className={style.counterBannerText}><img src={brFlag} className={style.counterBannerFlag} alt='Bandeira do Brasil' />{feed.Brasil}</span>
          </>
        ) : <></>
        }
        <span className={style.counterBannerText}><img src={worldFlag} className={style.counterBannerFlag} alt='Mundo' />{feed.World}</span>

      </div>

    </a >
  )
}

export default FeedBanner

FeedBanner.propTypes = {
  displayBanner: PropTypes.string.isRequired
}
