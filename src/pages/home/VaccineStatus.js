import React from 'react'
import PropTypes from 'prop-types'
// import BrazilIcon from '../../assets/brazil-flag.svg'
import intl from 'react-intl-universal'
import vaccine from '../../assets/vacina.svg'
import CountUp from 'react-countup'

export default function VaccineStatus({ numOfDosesBrazil, numOfDosesWorld }) {
  const vaccineProp = intl.get('vaccine')
  const lang = localStorage.getItem('goodnewscoronavirus')

  const brazilCount = (
    <h1 className="pb-4 fw-light">
      <img
        src={vaccine}
        alt="Vacina"
        style={{ fill: 'black', width: '50px', height: '50px', marginRight: '10px', marginTop: '-10px' }}
      />
      <CountUp start={0} end={numOfDosesBrazil} /> {vaccineProp.brazil}
    </h1>
  )

  const worldCount = (
    <h1 className="pb-4 fw-light">
      <img
        src={vaccine}
        alt="Vacina"
        style={{ fill: 'black', width: '50px', height: '50px', marginRight: '10px', marginTop: '-10px' }}
      />
      <CountUp start={0} end={numOfDosesWorld} /> {vaccineProp.world}
    </h1>
  )

  return (
    <section className="text-center container" style={{ marginTop: '40px', marginBottom: '-40px' }}>
      <div className="row">
        <div className="col-lg-10 col-md-10 mx-auto">
          {lang === 'pt' ? brazilCount : worldCount}
        </div>
      </div>
    </section>
  )
}

VaccineStatus.propTypes = {
  numOfDosesBrazil: PropTypes.number.isRequired,
  numOfDosesWorld: PropTypes.number.isRequired
}
