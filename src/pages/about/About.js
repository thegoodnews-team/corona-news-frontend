import React, { useEffect, useState } from 'react'
import './style.css'
import Person from './Person'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import content from '../../utils/content'

const About = () => {
  const { people: link } = content

  const [creators, setCreators] = useState([])
  const [colaborators, setColaborators] = useState([])

  useEffect(() => {
    const loadPeople = async () => {
      const peopleJson = await getItemsFromSpreadsheet(link)
      listOfPeople(peopleJson)
    }
    loadPeople()
  }, [])

  function listOfPeople(peopleJson) {
    const creatorsList = peopleJson.filter(creator => creator.Role === 'Idealizador')
    const colaboratorsList = peopleJson.filter(colaborator => colaborator.Role === 'Colaborador')
    setCreators(creatorsList)
    setColaborators(colaboratorsList)
  }

  return (
    <div className="container">
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
        <blockquote>
          <p className="description note">
            Esse portal não tem qualquer direcionamento político, nenhum relacionamento ou suporte vindo de qualquer nível de governo ou seus terceiros, tendo sua idealização e desenvolvimento inteiramente partido de membros da sociedade civil.
          </p>
        </blockquote>
        <p className="description">
          As pessoas  desse grupo são favoráveis ao isolamento social como melhor medida para o combate ao Covid-19 e defendem que todas as medidas e recomendação da Organização Mundial de Saúde (OMS) no combate ao Covid-19 sejam seguidas.
        </p>
      </div>

      <div className="subtitle">
        <h2>Idealizadores</h2>
        <div className="row mt-5">
          {creators.map(creator => (
            <Person key={creator.Nome}
              name={creator.Nome}
              role={creator.Cargo}
              link={creator.Link}
              linkImg={creator.Imagem}
            />
          ))}
        </div>

        <div className="subtitle">
          <h2>Colaboradores</h2>
          <div className="row mt-5">
            {colaborators.map(colaborator => (
              <Person key={colaborator.Nome}
                name={colaborator.Nome}
                role={colaborator.Cargo}
                link={colaborator.Link}
                linkImg={colaborator.Imagem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
