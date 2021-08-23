import React, { useEffect, useState, useContext } from 'react'
import style from './css/bannerfeed.module.css'
import brFlag from './assets/brazil.svg'
import { formatter } from '../../utils/FormatNumber'
import worldFlag from './assets/planet-earth.svg'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import csv from 'csvtojson'
import request from 'request'

export const FeedBanner = ({ displayBanner }) => {
  const [worldRecovered, setWorldRecovered] = useState('')
  const [brazilRecovered, setBrazilRecovered] = useState('')
  const theme = useContext(ThemeContext)
  const recoveryData = intl.get('recovery')
  const locale = localStorage.getItem('goodnewscoronavirus')

  useEffect(() => {
    (async () => {
      csv()
        .fromStream(request.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/Brazil.csv'))
        .then(json => {
          setBrazilRecovered(formatter(json[json.length - 1].total_vaccinations))
        })

      csv()
        .fromStream(request.get(' https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv'))
        .then(json => {
          const worlds = json.filter(c => c.location === 'World')
          setWorldRecovered(formatter(worlds[worlds.length - 1].total_vaccinations))
        })
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
        {locale !== 'pt' ? (
          <span className={style.counterBannerText}>
            <img
              src={worldFlag}
              className={style.counterBannerFlag}
              alt="Mundo"
            />
            {worldRecovered}
          </span>
        ) : (<></>)
        }
      </div>
    </a>
  )
}

export default FeedBanner

FeedBanner.propTypes = {
  displayBanner: PropTypes.string.isRequired
}
