import React, { useState } from 'react'
import PropTypes from 'prop-types'

import getIcon from '../../../utils/Icons'
import './style.css'

export default function Search({ filter, color, labelSearch }) {
  const [searchtext, setSearchText] = useState('')

  return (
    <div className="input-custom px-0">
      <img src={getIcon(color).loupe} alt="icon" />
      <input
        className="search"
        style={{ borderColor: color }}
        placeholder={labelSearch}
        onChange={e => {
          setSearchText(e.target.value)
          filter(e.target.value)
        }}
        value={searchtext}
      />
    </div>
  )
}

Search.propTypes = {
  filter: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  labelSearch: PropTypes.string.isRequired
}
