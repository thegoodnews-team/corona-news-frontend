import React from 'react'
import './style.css'
import sendAnalitycs from '../../analitycs'
import PropTypes from 'prop-types'

export default function Card({
  link,
  linkImg,
  title,
  fonte,
  date,
  analyticsCategory
}) {
  return (
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
      <div className="card news">
        <div
          className="news-img"
          style={{ backgroundImage: `url('${linkImg}')` }}
        />

        <div className="card-body card-body-height">
          <p className="card-text">{title}</p>
        </div>

        <div className="card-footer bg-transparent text-footer-size">
          <div className="float-left news-fonte">{fonte}</div>
          <div className="float-right news-data">{date}</div>
        </div>
      </div>
    </a>
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
