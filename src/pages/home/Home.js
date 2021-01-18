import React, { useEffect, useState } from 'react'
import intl from 'react-intl-universal'
import CardsGrid from '../../components/cards-grid'
import getItemsFromSpreadsheet from '../../utils/fetchUrl'
import VaccineStatus from './VaccineStatus'

export default function Home() {
  const [news, setNews] = useState([])

  const newsLink = intl.get('json-data.newsLink')

  useEffect(() => {
    const loadContent = async () => {
      const newsJson = await getItemsFromSpreadsheet(newsLink)
      setNews(newsJson.reverse())
    }

    loadContent()
  }, [])

  return (
    <>
      <VaccineStatus numOfDosesBrazil={130} numOfDosesWorld={9482349} />
      <CardsGrid content={news} analyticsCategory="NEWS" />
    </>
  )
}
