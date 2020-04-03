import React from 'react'
import './style.css'
import TW from '../../assets/tw.png'
import AIDS from '../../assets/agencia-aids.png'
import insta from '../../assets/insta.svg'
import email from '../../assets/email.svg'
import send from '../../analitycs'

const Footer = () => {
  return (
    <footer className="py-4 bg">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 text-center text-sm-left">
            <h1 className="row-sm footer-title">Contato</h1>
            <div className="row-sm social2">
              <a
                href="https://instagram.com/thegoodnewscoronavirus"
                target="_blank"
                rel="noopener noreferrer"
                className="col social"
                onClick={() =>
                  send({ name: 'INSTAGRAM', category: 'FOOTER', type: 'CLICK' })
                }
              >
                <img src={insta} alt="Instagram" />
              </a>
              <a
                href="mailto:thegoodnewscoronavirus@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="col social"
                onClick={() =>
                  send({ name: 'EMAIL', category: 'FOOTER', type: 'CLICK' })
                }
              >
                <img src={email} alt="Email" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 text-center text-sm-left">
            <div className="row">
              <h1 className="col-12 footer-title">Apoio</h1>
              <div className="col-12 mb-4">
                <a
                  href="https://www.thoughtworks.com/pt/remote-work-playbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    send({ name: 'TW-LOGO', category: 'FOOTER', type: 'CLICK' })
                  }
                >
                  <img
                    className="support-img-wide"
                    src={TW}
                    alt="ThoughtWorks"
                  />
                </a>
              </div>
              <div className="col-12">
                <a
                  href="https://agenciaaids.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    send({
                      name: 'AIDS-LOGO',
                      category: 'FOOTER',
                      type: 'CLICK'
                    })
                  }
                >
                  <img
                    className="support-img-tall"
                    src={AIDS}
                    alt="Agência de Notícias da AIDS"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
