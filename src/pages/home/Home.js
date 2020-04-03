import React, { useState, useEffect } from 'react'
import csv from 'csvtojson'
import request from 'request'
import CardsGrid from '../../components/cards-grid'

export default function Home() {
  const [news, setNews] = useState([])
  const [ads, setAds] = useState([])

  useEffect(() => {
    const loadContent = async () => {
      const newsJson = await csv().fromStream(
        request.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4KL9aw4PCXZ12mT_659WoihJr5Lu7xoZooXWhmcAVgNwfGqbMnX6Wk4MUxUgEYlD9XDeJ_zpXWg5n/pub?gid=0&single=true&output=csv'
        )
      )

      setNews(newsJson.reverse())

      const adsJson = await csv().fromStream(
        request.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQfy4ZRC64gsDElbs_50g_dzAoRMw1Xih8Jz-v65WS1Xt7Afvx0ryWMDgclCMF4XdtJf-jhNiGqdDZQ/pub?gid=0&single=true&output=csv'
        )
      )

      setAds(adsJson.reverse())
    }

    loadContent()
  }, [])

  return <CardsGrid content={news} ads={ads} analyticsCategory="NEWS" />
}
