import React from "react";

const Person = ({ name, func, link, linkImg }) => {
  return (
    <div className="row">
      <a className="col" href={link} target="_blank" rel="noopener noreferrer">
        <img className="img" src={linkImg} />
      </a>
      <div className="col">
        <p>{name}</p>
        <p>{func}</p>
      </div>
    </div>
  );
};

export default Person;
