import React from 'react'
import './style.css'
import send from '../../analitycs'
import PropTypes from 'prop-types'

const Person = ({ name, role, link, linkImg }) => {
  return (
    <div className='col-xs-12 col-sm-6 col-lg-3 mb-4'>
      <div className='row d-flex justify-content-center'>
        <a className='col-xs-12 col-md-12 d-flex justify-content-center' href={link} target='_blank' rel='noopener noreferrer'
          onClick={() => send({ name: name, category: 'LINKEDIN', type: 'CLICK' })}>
          <img className='img p-border' src={linkImg} alt={`Foto de ${name}`} />
        </a>
        <div className='col-xs-12 col-md-auto text-center'>
          <p className='name'>{name}</p>
          <p className='role'>{role}</p>
        </div>
      </div>
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkImg: PropTypes.string.isRequired
}

export default Person
