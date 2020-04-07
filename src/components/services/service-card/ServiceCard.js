import React from 'react'
import './style.css'
import sendAnalitycs from '../../../analitycs'
import PropTypes from 'prop-types'
import toHexColor from '../../../utils/ColorPicker'

export default function ServiceCard({
  link,
  linkImage,
  title,
  description,
  category,
  analyticsCategory
}) {
  const truncateDescription = str => {
    return str && str.length > 120
      ? str.substring(0, 117) + '...'
      : str
  }

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
          style={{ backgroundImage: `url('${linkImage}')` }}
        />
        <span className='category' style={{ backgroundColor: '#' + toHexColor(category) }}>
          {category}
        </span>

        <div className="card-body card-body-height">
          <p className="card-title">{title}</p>
          <p className="card-description">{truncateDescription(description)}</p>
        </div>
      </div>
    </a>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  analyticsCategory: PropTypes.string.isRequired
}
