import React from 'react'
import './style.css'
import PropTypes from 'prop-types'
import AdSense from 'react-adsense'

export default function AdCard({ index, frequency }) {
  if (index % frequency === frequency - 1) {
    return (
      <div className="col" key={`${index}ad`}>
        <div className="card ad">
          <div className="text-center m-1">
            <small>O dinheiro deste anúncio será doado.</small>
          </div>
          <AdSense.Google
            client="ca-pub-2186608926010606"
            slot="6057077357"
            style={{ display: 'block' }}
            layoutKey="-6g+bz+1g-9+dz"
            format="fluid"
          />
        </div>
      </div>
    )
  } else {
    return null
  }
}

AdCard.propTypes = {
  index: PropTypes.number.isRequired,
  frequency: PropTypes.number.isRequired
}
