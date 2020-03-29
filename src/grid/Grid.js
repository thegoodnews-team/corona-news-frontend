import React, { useState, useEffect } from "react";
import csv from "csvtojson";
import request from "request";
import "./style.css";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Grid() {
  const BATCH_SIZE = 9;

  const [allItems, setAllItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  useEffect(() => {

    const loadAllItems = async () => {
      const json = await csv().fromStream(
        request.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4KL9aw4PCXZ12mT_659WoihJr5Lu7xoZooXWhmcAVgNwfGqbMnX6Wk4MUxUgEYlD9XDeJ_zpXWg5n/pub?gid=0&single=true&output=csv"
        )
      );

      setAllItems(json.reverse());
      setPageIndex(1);
    };

    loadAllItems();
  }, []);

  useEffect(() => {
    const end = pageIndex * BATCH_SIZE;
    
    setVisibleItems(allItems.slice(0, end));
    setHasMoreItems(allItems.length > visibleItems.length);
  }, [allItems, pageIndex, visibleItems.length]);

  const fetchMoreData = () => {
    setPageIndex(pageIndex + 1);
  };

  if (allItems.length > 0) {
	return (
		<InfiniteScroll
			dataLength={visibleItems.length}
			next={fetchMoreData}
			hasMore={hasMoreItems}
		>
			<div className="album py-5">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
						{visibleItems.map(item => (
							<div className="col" key={item.title}>
								<Card key={item.title} {...item} />
							</div>
						))}
					</div>
				</div>
			</div>
		</InfiniteScroll>
	);
	}
	return (
		<div className="fluid-container text-center">
			<div className="spinner-grow text-primary load-spin" role="status">
				<span className="sr-only">Carregando...</span>
			</div>
		</div>
	)
}
