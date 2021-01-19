import React, { useEffect, useState } from 'react'
import intl from 'react-intl-universal'
import CardsGrid from '../../components/cards-grid'
import getItemsFromSpreadsheet from '../../utils/fetchUrl'
import VaccineStatus from './VaccineStatus'
import csv from 'csvtojson'
import request from 'request'

export default function Home() {
  const [news, setNews] = useState([])
  const [brazil, setBrazilJson] = useState([])
  const [world, setWorldJson] = useState([])

  const newsLink = intl.get('json-data.newsLink')

  useEffect(() => {
    const loadContent = async () => {
      const newsJson = await getItemsFromSpreadsheet(newsLink)
      setNews(newsJson.reverse())
    }

    loadContent()

    csv()
      .fromStream(request.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/Brazil.csv'))
      .then(json => {
        setBrazilJson(json[json.length - 1].total_vaccinations)
      })

    csv()
      .fromStream(request.get(' https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv'))
      .then(json => {
        setWorldJson(json[json.length - 1].total_vaccinations)
      })
  }, [])
  return (
    <>
      <VaccineStatus numOfDosesBrazil={brazil} numOfDosesWorld={world} />
      <CardsGrid content={news} analyticsCategory="NEWS" />
    </>
  )
}
