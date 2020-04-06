import React from 'react'
import './style.css'
import Person from './Person'
import Adnet from '../../assets/fernando.png'
import Maciel from '../../assets/maciel.png'
import Rafa from '../../assets/rafa.png'
import Urso from '../../assets/urso.png'

const About = () => {
  return (
    <div className="container">
      <h1 className="title">Sobre</h1>
      <div className="subtitle">
        <h2>Nossa missão</h2>
        <p className="description">
          Criamos este site para mostrar que existe esperança em meio ao caos.
          Aqui mostraremos todas as notícias positivas em relação ao corona
          vírus, com o objetivo de deixar esses dias mais leves e esperançosos,
          mas lembrem-se, nosso cenário atual é bastante crítico.
          <br />
          Fiquem em casa e lavem as mãos.
        </p>
      </div>

      <div className="subtitle">
        <h2>Quem somos</h2>
        <div className="row mt-5">
          <Person
            name="Fernando Fernandes"
            role="Desenvolvedor"
            link="https://www.linkedin.com/in/flasfl/"
            linkImg={Adnet}
          />
          <Person
            name="Rafaela Fernandes"
            role="Designer"
            link="https://www.linkedin.com/in/rafaela-fernandes/"
            linkImg={Rafa}
          />
          <Person
            name="Maciel Melo"
            role="Desenvolvedor"
            link="https://www.linkedin.com/in/macielmelo/"
            linkImg={Maciel}
          />
          <Person
            name="Daniel Barros"
            role="Desenvolvedor"
            link="https://www.linkedin.com/in/danielnbarros/"
            linkImg={Urso}
          />
        </div>
      </div>
    </div>
  )
}

export default About
