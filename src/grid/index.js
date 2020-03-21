import React, { useState, useEffect } from "react";
import csv from "csvtojson";
import request from "request";
import "./index.css";

const Grid = () => {
  const [goodNews, setGoodNews] = useState([]);
  
  useEffect(() => {
    csv()
      .fromStream(request.get(`${window.location.origin}/news.csv`))
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
                <a className="card shadow-sm" href={item.link} target="_blank">
                  <img
                    className="borderimg"
                    width="100%"
                    height="225"
                    src={item.linkImg}
                  ></img>
                  <div className="card-body">
                    <p className="card-text text">{item.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group"></div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
