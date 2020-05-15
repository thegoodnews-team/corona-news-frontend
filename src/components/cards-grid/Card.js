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
  const card = intl.get('card')

  function buildURL() {
    return encodeURI(`${'https://www.thegoodnewscoronavirus.com'}`)
  }

  function onShareVia() {
    if (HasNavigatorShare()) {
      const data = {
        text: `[${date}] [${card.source} ${fonte}]  ${title}. ${card.knowmore} ${buildURL()}`
      }

      navigator.share(data)
    }
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
          <div className="news">
            <div
              className="news-img"
              style={{ backgroundImage: `url('${linkImg}')` }}
            />

            <div className="card-body card-body-height">
              <p className="card-text">{title}</p>
            </div>

          </div>
        </a>
        <div className="card-footer bg-transparent text-footer-size">
          <div className="float-left news-fonte w-50">{fonte}</div>
          <ShareBtn onClick={() => onShareVia()} />
          <div className={HasNavigatorShare() ? 'float-right margin-right' : 'float-right'}>{date}</div>
        </div>
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
          className="share "
          src={Share}
          alt="icon clock"
        ></img>
      </div>
    )
  } else return null
}

function HasNavigatorShare() {
  return navigator && navigator.share
}
