import React, { useState, useEffect } from 'react'
import csv from 'csvtojson'
import request from 'request'
import './style.css'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component'
// import AdCard from '../../components/ad-card';

export default function Home () {
  const BATCH_SIZE = 9

  // const [adItems, setAdItems] = useState([]);
  const [allItems, setAllItems] = useState([])
  const [visibleItems, setVisibleItems] = useState([])
  const [pageIndex, setPageIndex] = useState(0)
  const [hasMoreItems, setHasMoreItems] = useState(true)

  useEffect(() => {
    const loadAllItems = async () => {
      const newsJson = await csv().fromStream(
        request.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4KL9aw4PCXZ12mT_659WoihJr5Lu7xoZooXWhmcAVgNwfGqbMnX6Wk4MUxUgEYlD9XDeJ_zpXWg5n/pub?gid=0&single=true&output=csv'
        )
      )

      setAllItems(newsJson.reverse())
      setPageIndex(1)

      // const adsJson = await csv().fromStream(
      //   request.get(
      //     'https://docs.google.com/spreadsheets/d/e/2PACX-1vQfy4ZRC64gsDElbs_50g_dzAoRMw1Xih8Jz-v65WS1Xt7Afvx0ryWMDgclCMF4XdtJf-jhNiGqdDZQ/pub?gid=0&single=true&output=csv'
      //   )
      // );
      // setAdItems(adsJson);
    }

    loadAllItems()
  }, [])

  useEffect(() => {
    const end = pageIndex * BATCH_SIZE

    setVisibleItems(allItems.slice(0, end))
    setHasMoreItems(allItems.length > visibleItems.length)
  }, [allItems, pageIndex, visibleItems.length])

  const fetchMoreData = () => {
    setPageIndex(pageIndex + 1)
  }

  const buildLoading = () => {
    return (
      <div className='fluid-container text-center'>
        <div className='spinner-grow text-primary load-spin' role='status'>
          <span className='sr-only'>Carregando...</span>
        </div>
      </div>
    )
  }

  // const buildAd = index => {
  //   if (index < adItems.length) {
  //     const item = adItems[index];
  //     return (
  //       <div className='col' key={item.title}>
  //         <AdCard title={item.title} image={item.image} link={item.link} />
  //       </div>
  //     );
  //   }
  // };

  const buildCard = (item, index) => {
    // let ad;

    // if (index % 3 === 2) {
    //   ad = buildAd(adIndex);
    //   adIndex++;
    // }

    return (
      <>
        <div className='col' key={item.title}>
          <Card key={item.title} {...item} />
        </div>
        {/* {ad} */}
      </>
    )
  }

  const buildContent = () => {
    // let adIndex = 0;

    return (
      <InfiniteScroll dataLength={visibleItems.length} next={fetchMoreData} hasMore={hasMoreItems}>
        <div className='album py-5'>
          <div className='container'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3'>
              {visibleItems.map(buildCard)}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    )
  }

  console.log('render')
  return allItems.length > 0 ? buildContent() : buildLoading()
}
