import React from 'react';
import './style.css';
import send from '../analitycs'

const Person = ({ name, role, link, linkImg }) => {
  return (
    <div className='col-xs-12 col-md-6 mb-4'>
      <div className='row text-center text-md-left'>
		<a className='col-xs-12 col-md-auto' href={link} target='_blank' rel='noopener noreferrer' 
			onClick={() => send({name: name, category: "LINKEDIN", type: "CLICK"})}>
          <img className='img' src={linkImg} alt={`Foto de ${name}`} />
        </a>
        <div className='col-xs-12 col-md-auto'>
          <p className='name'>{name}</p>
          <p className='role'>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
