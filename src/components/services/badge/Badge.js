import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Badge({ text, backgroundcolor, onClick }) {
  return (
    <span className='badge' style={{ backgroundColor: backgroundcolor }} >
      {text}
      <span className='desactive' onClick ={onClick}>x</span>
    </span>
  )
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundcolor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
