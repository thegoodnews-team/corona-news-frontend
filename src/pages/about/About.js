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
          A catástrofe desenhada pela Covid-19 nos direciona, naturalmente, para um cenário de desesperança. São tantos aspectos negativos que esquecemos que existem notícias fantásticas: número de curados, buscas por uma vacina em uma velocidade sem precedentes, colaboração entre organismos internacionais e a sociedade civil. Por isso precisamos ampliar o nosso olhar.
        </p>
        <p className="description">
          E é para isso que o “The Good News Coronavírus” foi concebido: ser um farol de esperança para quem se sente afogado em um oceano de más notícias, que apesar de serem importantes para a prevenção da pandemia, causam ansiedade e desespero.
        </p>
        <p className="description">
          Através desse portal a sociedade vai saber que existe um amanhã de possibilidades e que a derrota ao Coronavírus vai entrar na história como o momento em que nos conectamos  e construímos um futuro melhor.
        </p>
      </div>

      <div className="subtitle">
        <h2>Nota</h2>
        <p className="description">
          Esse portal não tem qualquer direcionamento político, nenhum relacionamento ou suporte vindo de qualquer nível de governo ou seus terceiros, tendo sua idealização e desenvolvimento inteiramente partido de membros da sociedade civil.
        </p>
        <p className="description">
          As pessoas  desse grupo são favoráveis ao isolamento social como melhor medida para o combate ao Covid-19 e defendem que todas as medidas e recomendação da Organização Mundial de Saúde (OMS) no combate ao Covid-19 sejam seguidas.
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
