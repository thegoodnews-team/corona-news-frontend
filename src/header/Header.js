import React from "react";
import style from "./header.module.css";
import logo from '../assets/logo.svg'

const Header = () => {
	return (
		<>
		<nav className={`navbar navbar-expand-lg navbar-light sticky-top ${style.nav}`}>
			<div className={`container ${style.containerPadX}`}>

				<a className="navbar-brand" href="/">
					<img className={style.logoIcon} src={logo} alt='The Good News Corona Virus'/>
				</a>

				<button
					className={`navbar-toggler ${style.togglerBtn}`}
					type="button"
					data-toggle="collapse"
					data-target="#toggler"
					aria-controls="toggler"
					aria-expanded="false"
					aria-label="navegação">

					<span className={`navbar-toggler-icon ${style.togglerIcon}`} />
				</button>
				<div className="collapse navbar-collapse" id="toggler">
					<ul className="navbar-nav ml-auto mt-lg-0">
						<li className={`nav-item ${style.navItem}`}>
							<a className={`nav-link ${style.navLink}`} href="/">Notícias</a>
						</li>
						<li className={`nav-item ${style.navItem}`}>
							<a className={`nav-link ${style.navLink}`} href="/sobre">Sobre</a>
						</li>
					</ul>
				</div>

			</div>
		</nav>
		<div className={`text-center sticky-top ${style.headerMsg} p-1 shadow-sm`}> 
			<span>As noticias não mudam o cenário atual do Brasil.</span> Fiquem em casa e lavem as mãos.
		</div>
		</>
	);
};

export default Header;
