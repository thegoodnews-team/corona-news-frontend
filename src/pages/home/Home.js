import React, { useState, useEffect } from 'react'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import CardsGrid from '../../components/cards-grid'
import intl from 'react-intl-universal'

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

  return <CardsGrid content={news} analyticsCategory="NEWS" />
}
