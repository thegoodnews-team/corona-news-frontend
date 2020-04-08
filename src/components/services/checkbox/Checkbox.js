import React, { useContext } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import ThemeContext from '../../context/ThemeContext'
import themes from '../../context/themes.module.css'

export default function Checkbox({ color, value = true, label, onChange }) {
  const theme = useContext(ThemeContext)

  return (
    <div className='checkboxContent' onClick={onChange}>
      <span className='checkbox' style={{ borderColor: color }}>
        <div className={`${value ? `checkboxSelected ${themes[theme + '-primary']}` : ''}`}></div>
      </span>
      <p className='checkboxlabel'>{label}</p>
    </div>
  )
}

Checkbox.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}
