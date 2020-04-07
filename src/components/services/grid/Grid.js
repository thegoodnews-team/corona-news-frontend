import React, { useState, useEffect } from 'react'
import './style.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import PropTypes from 'prop-types'
import ServiceCard from '../service-card'
import Loading from '../../loading'

export default function Grid({ content, analyticsCategory }) {
  const BATCH_SIZE = 9

  const [allItems, setAllItems] = useState([])
  const [visibleItems, setVisibleItems] = useState([])
  const [pageIndex, setPageIndex] = useState(0)
  const [hasMoreItems, setHasMoreItems] = useState(true)

  useEffect(() => {
    setPageIndex(0)
    setAllItems(content)

    if (allItems && allItems.length > 0) {
      setPageIndex(1)
    }
  }, [content, allItems])

  useEffect(() => {
    const end = pageIndex * BATCH_SIZE

    setVisibleItems(allItems.slice(0, end))
    setHasMoreItems(allItems.length > visibleItems.length)
  }, [allItems, pageIndex, visibleItems.length])

  const fetchMoreData = () => {
    setPageIndex(pageIndex + 1)
  }

  const buildContent = () => {
    return (
      <InfiniteScroll
        dataLength={visibleItems.length}
        next={fetchMoreData}
        hasMore={hasMoreItems}
      >
        <div className="album py-5">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            {visibleItems.map(item => (
              <div className="col" key={`${item.title}-${item.fonte}`}>
                <ServiceCard {...item} analyticsCategory={analyticsCategory} />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    )
  }

  return allItems.length > 0 ? buildContent() : <Loading />
}

Grid.propTypes = {
  content: PropTypes.array.isRequired,
  analyticsCategory: PropTypes.string.isRequired
}
