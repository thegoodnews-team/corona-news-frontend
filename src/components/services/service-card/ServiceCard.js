import React from 'react'
import './style.css'
import sendAnalitycs from '../../../analitycs'
import PropTypes from 'prop-types'
import toHexColor from '../../../utils/ColorPicker'
import intl from 'react-intl-universal'

export default function ServiceCard({
  link,
  linkImage,
  title,
  description,
  category,
  author,
  analyticsCategory
}) {
  const truncateDescription = str => {
    return str && str.length > 200
      ? str.substring(0, 150) + '...'
      : str
  }

  const future = intl.get('future')

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
      <div className="card news card-height">
        <div
          className="news-img"
          style={{ backgroundImage: `url('${linkImage}')` }}
        />
        <span className='category' style={{ backgroundColor: '#' + toHexColor(category) }}>
          {category}
        </span>

        <div className="card-body card-body-height card-body-service">
          <p className="card-title">{title}</p>
          {!author &&
          <p className="card-description">{truncateDescription(description)}</p>
          }
        </div>

        {author &&
             <div className="card-footer bg-transparent text-footer-size">
               <div className="float-left news-fonte">{future.author}</div>
               <div className="float-right news-data">{author}</div>
             </div>
        }
      </div>
    </a>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  analyticsCategory: PropTypes.string.isRequired
}
