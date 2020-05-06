import React from 'react'
import intl from 'react-intl-universal'
import ThoughtWorksLogo from '../../assets/tw.png'
import InstagramIcon from '../../assets/insta.svg'
import EmailIcon from '../../assets/email.svg'
import AgenciaAindsLogo from '../../assets/agencia-aids.png'
import send from '../../analitycs'

import './style.css'

const Footer = () => {
  const footer = intl.get('footer')

  return (
    <footer className="footer py-5 mt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 my-3 mb-5">
            <h2 className="footer-title">{footer.contact}:</h2>
            <a
              href="https://instagram.com/thegoodnewscoronavirus"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => send({ name: 'INSTAGRAM', category: 'FOOTER', type: 'CLICK' })}>
              <img className="footer-social-icon" src={InstagramIcon} />
            </a>

            <a
              href="mailto:thegoodnewscoronavirus@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => send({ name: 'EMAIL', category: 'FOOTER', type: 'CLICK' })}>
              <img className="footer-social-icon" src={EmailIcon} />
            </a>
          </div>
          <div className="col-md-4 mb-md-0 mb-3">
            <h2 className="footer-title">{footer.support}:</h2>
            <a
              href="https://www.thoughtworks.com/pt/remote-work-playbook"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => send({ name: 'TW-LOGO', category: 'FOOTER', type: 'CLICK' })}>
              <img className="footer-logo--tw" src={ThoughtWorksLogo} />
            </a>
          </div>

          {intl.options.currentLocale === 'en-US' ? (
            <>
            </>
          )
            : (
              <>
                <div className="col-md-4 mb-md-0 mb-3 text-center agencia">
                  <a
                    href="https://agenciaaids.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => send({ name: 'AIDS-LOGO', category: 'FOOTER', type: 'CLICK' })}>
                    <img className="footer-logo--agenciaAids" src={AgenciaAindsLogo} />
                  </a>
                </div>
              </>
            )
          }

        </div>
      </div>
    </footer>
  )
}

export default Footer
