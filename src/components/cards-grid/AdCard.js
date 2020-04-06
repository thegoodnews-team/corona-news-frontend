import React, { useEffect } from 'react'
import './style.css'
import sendAnalitycs from '../../analitycs'
import PropTypes from 'prop-types'

export default function AdCard({ link, image, title }) {
  useEffect(() => {
    sendAnalitycs({ name: title, category: 'ADS', type: 'VIEW' })
  }, [title])

  return (
    <a className='link' href={link} target='_blank' rel='noopener noreferrer' onClick={() => sendAnalitycs({ name: link, category: 'ADS', type: 'CLICK' })}>
      <div className='card ad'>
        <div className='text-center m-1'>
          <small>Esta marca doou para aparecer aqui.</small>
        </div>
        <img src={image} className='m-2' />
        {/* <div className='ad-img' style={{ backgroundImage: `url('${image}')` }} /> */}
      </div>
    </a>
  )
}

AdCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
