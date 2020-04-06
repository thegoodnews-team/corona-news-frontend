import React, { useState } from 'react'

import PropTypes from 'prop-types'

import loup from '../../../assets/loupe.svg'
import './style.css'

export default function Search({ filter }) {
  const [searchtext, setSearchText] = useState('')

  return (
    <div className="input-custom px-0">
      <img src={loup} alt="icon" />
      <input
        className="search"
        placeholder="Buscar serviços"
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
  filter: PropTypes.func.isRequired
}
