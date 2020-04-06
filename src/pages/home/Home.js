import React, { useState, useEffect } from 'react'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import CardsGrid from '../../components/cards-grid'

export default function Home() {
  const [news, setNews] = useState([])
  const newsLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4KL9aw4PCXZ12mT_659WoihJr5Lu7xoZooXWhmcAVgNwfGqbMnX6Wk4MUxUgEYlD9XDeJ_zpXWg5n/pub?gid=0&single=true&output=csv'

  useEffect(() => {
    const loadContent = async () => {
      const newsJson = await getItemsFromSpreadsheet(newsLink)
      setNews(newsJson.reverse())
    }

    loadContent()
  }, [])

  return <CardsGrid content={news} analyticsCategory="NEWS" />
}
