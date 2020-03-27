import React from "react";
import "./style.css";
import Person from "../person/person";
import Adnet from "../assets/adnet.png";
import Maciel from "../assets/maciel.png";
import Rafa from "../assets/rafa.png";
import Urso from "../assets/urso.png";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className=" row-sm title">Sobre</h1>
        <div className=" row-sm subtitle">
          <h2>Nossa missão</h2>
          <p className="description">
            Criamos este site para mostrar que existe esperança em meio ao caos.
            Aqui mostraremos todas as notícias positivas em relação ao corona
            vírus, com o objetivo de deixar esses dias mais leves e
            esperançosos, mas lembrem-se, nosso cenário atual é bastante
            crítico.
            <br />
            Fiquem em casa e lavem as mãos.
          </p>
        </div>
        <div className="subtitle">
          <h2 className="row-sm">Quem somos</h2>
          <div className="row-sm  person">
            <div className="row">
              <div className="col-sm">
                <Person
                  name="Fernando Fernandes"
                  func="Desenvolvedor"
                  link="https://www.linkedin.com/in/flasfl/"
                  linkImg={Adnet}
                />
                <Person
                  name="Rafaela Fernandes"
                  func="Designer"
                  link="https://www.linkedin.com/in/rafaela-fernandes/"
                  linkImg={Rafa}
                />
              </div>
              <div className="col-sm">
                <Person
                  name="Maciel Melo"
                  func="Desenvolvedor"
                  link="https://www.linkedin.com/in/macielmelo/"
                  linkImg={Maciel}
                />
                <Person
                  name="Daniel Barros"
                  func="Desenvolvedor"
                  link="https://www.linkedin.com/in/danielnbarros/"
                  linkImg={Urso}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
