import React, { useEffect, useState, useContext } from 'react'
import style from './css/bannerfeed.module.css'
import brFlag from './assets/brazil.svg'
import worldFlag from './assets/planet-earth.svg'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import PropTypes from 'prop-types'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import content from '../../utils/content'

export const FeedBanner = ({ displayBanner }) => {
  const [feed, setFeed] = useState({})
  const theme = useContext(ThemeContext)
  const { recovery } = content

  useEffect(() => {
    (async () => {
      const csvData = await getItemsFromSpreadsheet(recovery)

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
      href='https://google.com/covid19-map/?hl=pt' target='_blank' rel="noopener noreferrer">
      <div className={`${style.counterBannerTitle} ${style.displayMdInline}`}>Pessoas curadas <span>do coronavírus</span></div>
      <div className={style.displayMdInline}>
        <span className={style.counterBannerText}><img src={brFlag} className={style.counterBannerFlag} alt='Bandeira do Brasil' />{feed.Brasil}</span>
        <span className={style.counterBannerText}><img src={worldFlag} className={style.counterBannerFlag} alt='Mundo' />{feed.World}</span>
      </div>
    </a >
  )
}

export default FeedBanner

FeedBanner.propTypes = {
  displayBanner: PropTypes.string.isRequired
}
