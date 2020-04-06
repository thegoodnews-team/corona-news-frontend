import React, { useState, useContext } from 'react'
import style from './css/header.module.css'
import logo from '../../assets/logo.svg'
import covid from './assets/covidzinho.png'
import { Link, useLocation } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import TooglerNav from './TogglerNav'
import FeedBanner from './FeedBanner'

const Header = () => {
  const [displayBanner, setDisplayBanner] = useState('block')
  const { pathname } = useLocation()
  const theme = useContext(ThemeContext)

  const navLinks = () => (
    <>
      <Link to="/" className={`nav-link ${style.navItem} ${pathname === '/' ? style.active : ''}`}> Notícias </Link>
      {/* <Link to="/iniciativas" className={`nav-link ${style.navItem} ${pathname === '/iniciativas' ? style.active : ''}`}> Iniciativas </Link>
      <Link to="/servicos" className={`nav-link ${style.navItem} ${pathname === '/servicos' ? style.active : ''}`}> Serviços Gratuitos </Link> */}
      <Link to="/sobre" className={`nav-link ${style.navItem} ${pathname === '/sobre' ? style.active : ''}`}> Sobre </Link>
    </>
  )

  const renderDesktopNav = () => (
    <div className={`text-center sticky-top ${style.headerLinks} p-1 shadow-sm ${themes[theme + '-secundary']}`}>
      <nav className='nav container'>
        {navLinks()}
      </nav>
    </div>
  )

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${style.nav} ${themes[theme + '-primary']}`}>
        <div className={`container ${style.containerPadX}`}>

          <a className={`navbar-brand ${style.brand}`} href="/">
            <img className={style.codiv} src={covid} alt="Covidzinho" />
            <img className={style.logoIcon} src={logo} alt='The Good News Corona Virus' />
          </a>

          <TooglerNav onClickAct={() => displayBanner === 'none' ? setDisplayBanner('block') : setDisplayBanner('none')}>
            {navLinks()}
          </TooglerNav>
          <FeedBanner displayBanner={displayBanner} />
        </div>
      </nav>

      {renderDesktopNav()}

      <div className={`text-center sticky-top ${style.headerMsg} p-1 shadow-sm`}>
        <span>Vale lembrar que as noticias não mudam o cenário atual do Brasil.</span> Fiquem em casa e lavem as mãos.
      </div>
    </>
  )
}

export default Header
