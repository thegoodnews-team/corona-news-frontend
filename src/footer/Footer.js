import React from 'react';
import './style.css';
import TW from '../assets/tw.png';
import insta from '../assets/insta.svg';
import email from '../assets/email.svg';
import send from '../analitycs'


const Footer = () => {
  return (
    <footer className='py-4 bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-4 info text-center text-sm-left'>
            Ativamos dia 28/03 anúncios no site. Toda a renda será doada para o combate ao corona vírus!
          </div>
          <div className='col-xs-12 col-sm-6 text-center text-sm-left'>
            <h1 className='row-sm contact'>Contato</h1>
            <div className='row-sm social2'>
              <a href='https://instagram.com/thegoodnewscoronavirus' target='_blank' rel='noopener noreferrer' className='col social' 
			  	onClick={() => send({name: "INSTAGRAM", category: "FOOTER", type: "CLICK"})}>
                <img src={insta} alt='Instagram' />
              </a>
              <a href='mailto:thegoodnewscoronavirus@gmail.com' target='_blank' rel='noopener noreferrer' className='col social'
			  	onClick={() => send({name: "EMAIL", category: "FOOTER", type: "CLICK"})}>
                <img src={email} alt='Email' />
              </a>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 text-center text-sm-left'>
            <h1 className='row-sm'>Apoio</h1>
            <a className='row-sm' href='https://www.thoughtworks.com/pt/remote-work-playbook' target='_blank' rel='noopener noreferrer'
			onClick={() => send({name: "TW-LOGO", category: "FOOTER", type: "CLICK"})}>
              <img className='tw' src={TW} alt='ThoughtWorks' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
