import React, { useEffect, useState, useContext } from 'react'
import style from './css/bannerfeed.module.css'
import brFlag from './assets/brazil.svg'
import worldFlag from './assets/planet-earth.svg'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import getItems from '../../utils/fetchUrl'
import formatNumber from '../../utils/FormatNumber'

export const FeedBanner = ({ displayBanner }) => {
  const [worldRecovered, setWorldRecovered] = useState('')
  const [brazilRecovered, setBrazilRecovered] = useState('')
  const theme = useContext(ThemeContext)
  const recoveryData = intl.get('recovery')
  const locale = localStorage.getItem('goodnewscoronavirus')

  useEffect(() => {
    (async () => {
      const { content } = recoveryData

      const data = await getItems(content)
      setWorldRecovered(formatNumber(data.reports[0].recovered))
      setBrazilRecovered(formatNumber(data.reports[0].table[0].find(c => c.Country === 'Brazil').TotalRecovered))
    })()
  }, [])

  return (
    <a className={`${style.counterBanner} ${themes[theme + '-secundary']}`} style={{ display: displayBanner }}
      href='https://www.worldometers.info/coronavirus' target='_blank' rel="noopener noreferrer">

      <div className={`${style.counterBannerTitle} ${style.displayMdInline}`}> {recoveryData.description} <span> {recoveryData.description2}</span></div>
      <div className={style.displayMdInline}>

        {locale === 'pt' ? (
          <>
            <span className={style.counterBannerText}><img src={brFlag} className={style.counterBannerFlag} alt='Bandeira do Brasil' /> {brazilRecovered}</span>
          </>
        ) : <></>
        }
        <span className={style.counterBannerText}><img src={worldFlag} className={style.counterBannerFlag} alt='Mundo' />{worldRecovered}</span>

      </div>

    </a >
  )
}

export default FeedBanner

FeedBanner.propTypes = {
  displayBanner: PropTypes.string.isRequired
}
