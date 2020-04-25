import React, { useEffect, useState } from 'react'
import './style.css'
import Person from './Person'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import content from '../../utils/content'
import intl from 'react-intl-universal'

const About = () => {
  const { people: link } = content

  const [creators, setCreators] = useState([])
  const [colaborators, setColaborators] = useState([])
  const creatorsTitle = intl.get('about.creators')
  const collaboratorsTitle = intl.get('about.collaborators')
  const msg1 = intl.get('about.msg1')
  const msg2 = intl.get('about.msg2')
  const msg3 = intl.get('about.msg3')
  const msg4 = intl.get('about.msg4')
  const msg5 = intl.get('about.msg5')
  const mission = intl.get('about.mission')

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
        <h2>{mission}</h2>
        <p className="description">
          {msg1}
        </p>
        <p className="description">
          {msg2}        </p>
        <p className="description">
          {msg3}        </p>
        <blockquote>
          <p className="description note">
            {msg4}          </p>
        </blockquote>
        <p className="description">
          {msg5}        </p>
      </div>

      <div className="subtitle">
        <h2>{creatorsTitle}</h2>
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
          <h2>{collaboratorsTitle}</h2>
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
