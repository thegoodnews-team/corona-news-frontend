import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

export default function Checkbox({ value = true, label, onChange }) {
  return (
    <div className='checkboxContent' onClick={onChange}>
      <span className={`checkbox ${value ? 'isSelected' : ''}`}></span>
      <p className='checkboxlabel'>{label}</p>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}
