/* eslint-disable no-unused-expressions */
import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="navbar navbar-dark bg-dark shadow-sm-new">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <div className="navbar-logo-icon"></div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">Sobre</h4>
              <p className="text-muted">
                Criamos este site para mostrar que existe esperança em meio ao
                caos. Aqui mostraremos todas as notícias positivas em relação ao
                corona vírus, com o objetivo de deixar esses dias mais leves e
                esperançosos, mas lembrem-se, nosso cenário atual é bastante
                crítico, fiquem em casa e lavem as mãos.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Quem somos nós?</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rafaela-fernandes/"
                    target="_target"
                    className="text-white"
                  >
                    Rafaela Fernandes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/flasfl/"
                    target="_target"
                    className="text-white"
                  >
                    Fernando Fernandes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/macielmelo/"
                    target="_target"
                    className="text-white"
                  >
                    Maciel Melo
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/danielnbarros/"
                    target="_target"
                    className="text-white"
                  >
                    Daniel Barros
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
