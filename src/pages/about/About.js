import React, { useEffect, useState } from 'react'
import './style.css'
import Person from './Person'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import intl from 'react-intl-universal'

const About = () => {
  const [creators, setCreators] = useState([])
  const [colaborators, setColaborators] = useState([])
  const about = intl.get('about')

  useEffect(() => {
    const loadPeople = async () => {
      const peopleJson = await getItemsFromSpreadsheet(about.people)
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
        <h2>{about.mission}</h2>
        <p className="description">
          {about.msg1}
        </p>
        <p className="description">
          {about.msg2}        </p>
        <p className="description">
          {about.msg3}        </p>
        <blockquote>
          <p className="description note">
            {about.msg4}          </p>
        </blockquote>
        <p className="description">
          {about.msg5}        </p>
      </div>

      <div className="subtitle">
        <h2>{about.creators}</h2>
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
          <h2>{about.collaborators}</h2>
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
