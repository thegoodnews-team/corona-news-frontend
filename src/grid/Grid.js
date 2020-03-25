import React, { useState, useEffect } from "react";
import csv from "csvtojson";
import request from "request";
import "./style.css";
import Card from "./Card";

export default function Grid() {
  const [goodNews, setGoodNews] = useState([]);

  useEffect(() => {
    csv()
      .fromStream(
        request.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4KL9aw4PCXZ12mT_659WoihJr5Lu7xoZooXWhmcAVgNwfGqbMnX6Wk4MUxUgEYlD9XDeJ_zpXWg5n/pub?gid=0&single=true&output=csv"
        )
      )
      .then(json => {
        setGoodNews(json.reverse());
      });
  }, []);

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {goodNews.map(item => (
              <div className="col" key={item.title}>
                <Card key={item.title} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
