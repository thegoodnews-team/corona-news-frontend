import React from "react";
import "./style.css";

const Person = ({ name, func, link, linkImg }) => {
  return (
    <div className="row row-sm">
      <a
        className="col cols-sm "
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="img" src={linkImg} />
      </a>
      <div className="col col-sm">
        <p className="name">{name}</p>
        <p className="func">{func}</p>
      </div>
    </div>
  );
};

export default Person;
