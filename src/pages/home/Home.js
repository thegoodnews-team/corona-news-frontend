import React, { useState, useEffect } from 'react'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import CardsGrid from '../../components/cards-grid'
import content from '../../utils/content'

export default function Home() {
  const [news, setNews] = useState([])
  const { newsLink } = content

  useEffect(() => {
    const loadContent = async () => {
      const newsJson = await getItemsFromSpreadsheet(newsLink)
      setNews(newsJson.reverse())
    }

    loadContent()
  }, [])

  return <CardsGrid content={news} analyticsCategory="NEWS" />
}
