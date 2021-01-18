import React from 'react'
import PropTypes from 'prop-types'
// import BrazilIcon from '../../assets/brazil-flag.svg'
import intl from 'react-intl-universal'

export default function VaccineStatus({ numOfDosesBrazil, numOfDosesWorld }) {
  const vaccineProp = intl.get('vaccine')
  const lang = localStorage.getItem('goodnewscoronavirus')

  const brazilCount = (
    <h2 className="pb-4 fw-light">
      🇧🇷
      <br />
      {`${numOfDosesBrazil.toLocaleString(lang)} ${vaccineProp.brazil}`}
    </h2>
  )

  const worldCount = (
    <h2 className="fw-light">
      🇧🇷
      <br />
      {`${numOfDosesWorld.toLocaleString(lang)} ${vaccineProp.world}`}
    </h2>
  )

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-10 col-md-10 mx-auto">
          {lang === 'pt' && brazilCount}
          {worldCount}
        </div>
      </div>
    </section>
  )
}

VaccineStatus.propTypes = {
  numOfDosesBrazil: PropTypes.number.isRequired,
  numOfDosesWorld: PropTypes.number.isRequired
}

// trocar icons
// ajustar estilo
// pegar dados da plailha
