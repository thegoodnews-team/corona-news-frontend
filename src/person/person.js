import React from "react";
import "./style.css";

const Person = ({ name, func, link, linkImg }) => {
  return (
    <div className="row">
      <a
        className="cols-sm "
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="img" src={linkImg} />
      </a>
      <div className="col-sm col-md">
        <p className="name">{name}</p>
        <p className="description">{func}</p>
      </div>
    </div>
  );
};

export default Person;
