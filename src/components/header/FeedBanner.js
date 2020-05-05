import React, { useEffect, useState, useContext } from 'react'
import style from './css/bannerfeed.module.css'
import brFlag from './assets/brazil.svg'
import worldFlag from './assets/planet-earth.svg'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import PropTypes from 'prop-types'
import recovered from '../../utils/Recover'
import { forkJoin, from } from 'rxjs'

export const FeedBanner = ({ displayBanner }) => {
  const [worldRecovered, setWorldRecovered] = useState('')
  const [brazilRecovered, setBrazilRecovered] = useState('')
  const theme = useContext(ThemeContext)

  useEffect(() => {
    (async () => {
      forkJoin(
        from(recovered('https://covid19-server.chrismichael.now.sh/api/v1/AllReports')),
        from(recovered('https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/BRAZIL'))
      ).subscribe(([a, b]) => {
        var recovered = [a, b]
        setWorldRecovered(recovered[0].reports[0].recovered)
        setBrazilRecovered(recovered[1].report.recovered)
      })
    })()
  }, [])

  return (
    <a className={`${style.counterBanner} ${themes[theme + '-secundary']}`} style={{ display: displayBanner }}
      href='https://google.com/covid19-map/?hl=pt' target='_blank' rel="noopener noreferrer">
      <div className={`${style.counterBannerTitle} ${style.displayMdInline}`}>Pessoas curadas <span>do coronavírus</span></div>
      <div className={style.displayMdInline}>
        <span className={style.counterBannerText}><img src={brFlag} className={style.counterBannerFlag} alt='Bandeira do Brasil' />{brazilRecovered}</span>
        <span className={style.counterBannerText}><img src={worldFlag} className={style.counterBannerFlag} alt='Mundo' />{worldRecovered}</span>
      </div>
    </a >
  )
}

export default FeedBanner

FeedBanner.propTypes = {
  displayBanner: PropTypes.string.isRequired
}
