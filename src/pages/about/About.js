import React from 'react'
import './style.css'
import Person from './Person'
import Adnet from '../../assets/people/idealizadores/adnet.JPG'
import Maciel from '../../assets/people/idealizadores/maciel.jpg'
import Rafa from '../../assets/people/idealizadores/rafa.jpeg'
import Urso from '../../assets/people/idealizadores/urso.jpeg'
import Carol from '../../assets/people/colaboradores/carol.jpeg'
import Yasminn from '../../assets/people/colaboradores/yasminn.jpeg'
import Ruan from '../../assets/people/colaboradores/ruan.jpeg'
import Rodolfo from '../../assets/people/colaboradores/rodolfo.jpeg'
import Hiago from '../../assets/people/colaboradores/hiago.jpeg'
import Kaio from '../../assets/people/colaboradores/kaio.jpeg'
import Arthur from '../../assets/people/colaboradores/arthur.jpeg'
import Jess from '../../assets/people/colaboradores/jess.jpeg'
import Barbara from '../../assets/people/colaboradores/barbara.jpeg'
import Yula from '../../assets/people/colaboradores/yula.jpeg'
import Antonio from '../../assets/people/colaboradores/antonio.jpeg'
import Roberto from '../../assets/people/colaboradores/roberto.jpeg'

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
        <h2>Idealizadores</h2>
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

        <div className="subtitle">
          <h2>Colaboradores</h2>
          <div className="row mt-5">
            <Person
              name="Carolina Lucca"
              role="Desenvolvedora"
              link="https://www.linkedin.com/in/carolina-lucca/"
              linkImg={Carol}
            />
            <Person
              name="Yasminn Vaz"
              role="Desenvolvedora"
              link="https://www.linkedin.com/in/yasminnvaz/"
              linkImg={Yasminn}
            />
            <Person
              name="Ruan Victor"
              role="Desenvolvedor"
              link="https://www.linkedin.com/in/ruanvictor/"
              linkImg={Ruan}
            />
            <Person
              name="Rodolfo Santos"
              role="Desenvolvedor"
              link="https://www.linkedin.com/in/rodolfosvc/"
              linkImg={Rodolfo}
            />
            <Person
              name="Hiago Balbino"
              role="Desenvolvedor"
              link="https://www.linkedin.com/in/hiagobalbino"
              linkImg={Hiago}
            />
            <Person
              name="Kaio Oliveira de Morais"
              role="Desenvolvedor"
              link="https://www.linkedin.com/in/kaioramon/"
              linkImg={Kaio}
            />
            <Person
              name="Arthur Cohen"
              role="Desenvolvedor"
              link="https://www.linkedin.com/in/forcohen/"
              linkImg={Arthur}
            />
            <Person
              name="Jéssica Pureza"
              role="Visual Designer"
              link="https://br.linkedin.com/in/j%C3%A9ssica-pureza-206221170"
              linkImg={Jess}
            />
            <Person
              name="Bárbara Jaber"
              role="Desenvolvedora"
              link="https://www.linkedin.com/in/barbara-poliana-jaber-m-ferreira-193559b9"
              linkImg={Barbara}
            />
            <Person
              name="Yula Rocha"
              role="Jornalista"
              link="https://www.linkedin.com/in/yula-rocha-70797370/"
              linkImg={Yula}
            />
            <Person
              name="Antônio Aureliano"
              role="Analista de Qualidade"
              link="https://www.linkedin.com/in/antonioaureliano/"
              linkImg={Antonio}
            />
            <Person
              name="Roberto Oliveira"
              role="Desenvolvedor"
              link="https://www.linkedin.com/in/roberto-oliveira-998a83a8/"
              linkImg={Roberto}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
