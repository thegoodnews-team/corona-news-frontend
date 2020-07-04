import React from 'react'
import './style.css'
import sendAnalitycs from '../../analitycs'
import PropTypes from 'prop-types'
import Share from '../../assets/share.png'
import intl from 'react-intl-universal'

export default function Card({
  link,
  linkImg,
  title,
  fonte,
  date,
  analyticsCategory
}) {
  const cardProp = intl.get('card')

  function buildURL() {
    return encodeURI(`${'https://www.thegoodnewscoronavirus.com'}`)
  }

  function onShareVia() {
    if (HasNavigatorShare()) {
      const data = {
        text: `[${date}] [${cardProp.source} ${fonte}]  ${title}. ${cardProp.knowmore} ${buildURL()}`
      }

      sendAnalitycs({
        name: link,
        category: analyticsCategory,
        type: 'SHAREVIA'
      })

      navigator.share(data)
    }
  }

  function getDay(dateString) {
    var d
    if (localStorage.getItem('goodnewscoronavirus') === 'en') {
      d = new Date(dateString)
    } else {
      var date = dateString.split('/')
      d = new Date(date[1] + '/' + date[0] + '/' + date[2])
    }
    return d.getDate()
  }

  function getMonth(dateString) {
    var msEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var msPt = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    var days = []
    var day = []
    var d

    if (localStorage.getItem('goodnewscoronavirus') === 'en') {
      d = new Date(dateString)
      days = msEn
      day = d.getDay()
    } else {
      days = msPt
      var date = dateString.split('/')
      d = new Date(date[1] + '/' + date[0] + '/' + date[2])
      day = d.getDay()
    }

    return days[day]
  }

  return (
    <>
      <div className="card">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            sendAnalitycs({
              name: link,
              category: analyticsCategory,
              type: 'CLICK'
            })
          }
        >

          <div className="card-header-date">
            <div className="card-header-date-day">{getDay(date)}</div>
            <div className="card-header-date-month">{getMonth(date)}</div>
          </div>

          <div className="news">
            <div
              className="news-img2"
              style={{ backgroundImage: `url('${linkImg}')` }}
            />
            <div className="card-body card-body-height">
              <div className="card-body-header-category">{fonte}</div>
              <p className="card-text">{title}</p>
            </div>
          </div>

        </a>

        <ShareBtn onClick={() => onShareVia()} />

      </div>

    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkImg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  fonte: PropTypes.string.isRequired,
  analyticsCategory: PropTypes.string
}

function ShareBtn({ onClick }) {
  if (HasNavigatorShare()) {
    return (
      <div className="float-right">
        <img
          onClick={onClick}
          className="share"
          src={Share}
          alt="icon clock"
        ></img>
      </div>
    )
  } else {
    return null
  }
}

function HasNavigatorShare() {
  return navigator && navigator.share
}
