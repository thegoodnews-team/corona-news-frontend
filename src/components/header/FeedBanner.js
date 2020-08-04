import React, { useEffect, useState, useContext } from 'react'
import style from './css/bannerfeed.module.css'
import brFlag from './assets/brazil.svg'
import worldFlag from './assets/planet-earth.svg'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { formatter, formatNumber } from '../../utils/FormatNumber'

export const FeedBanner = ({ displayBanner }) => {
  const [worldRecovered, setWorldRecovered] = useState('')
  const [brazilRecovered, setBrazilRecovered] = useState('')
  const theme = useContext(ThemeContext)
  const recoveryData = intl.get('recovery')
  const locale = localStorage.getItem('goodnewscoronavirus')

  const getItems = async (link) => {
    const response = await fetch(link)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    (async () => {
      const { world, brazil } = recoveryData

      const worldData = await getItems(world)
      const brazilData = await getItems(brazil)
      setWorldRecovered(formatter(worldData.totalRecovered))
      setBrazilRecovered(formatNumber(brazilData[0].totalRecovered))
    })()
  }, [])

  return (
    <a
      className={`${style.counterBanner} ${themes[theme + '-secundary']}`}
      style={{ display: displayBanner }}
      href="https://www.worldometers.info/coronavirus"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`${style.counterBannerTitle} ${style.displayMdInline}`}>
        {' '}
        {recoveryData.description} <span> {recoveryData.description2}</span>
      </div>
      <div className={style.displayMdInline}>
        {locale === 'pt' ? (
          <>
            <span className={style.counterBannerText}>
              <img
                src={brFlag}
                className={style.counterBannerFlag}
                alt="Bandeira do Brasil"
              />{' '}
              {brazilRecovered}
            </span>
          </>
        ) : (
          <></>
        )}
        <span className={style.counterBannerText}>
          <img
            src={worldFlag}
            className={style.counterBannerFlag}
            alt="Mundo"
          />
          {worldRecovered}
        </span>
      </div>
    </a>
  )
}

export default FeedBanner

FeedBanner.propTypes = {
  displayBanner: PropTypes.string.isRequired
}
