import React from "react";
import "./style.css";
import TW from "../assets/tw.png";
import insta from "../assets/insta.svg";
import email from "../assets/email.svg";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="row-sm contact">Contato</h1>
              <div className="row-sm">
                <a
                  href="https://instagram.com/thegoodnewscoronavirus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col social"
                >
                  <img src={insta} />
                </a>
                <a
                  href="mailto:thegoodnewscoronavirus@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col social"
                >
                  <img src={email} />
                </a>
              </div>
            </div>
            <div className="col-sm">
              <h1 className="row-sm">Apoio</h1>
              <a
                className="row-sm"
                href="https://www.thoughtworks.com/pt/remote-work-playbook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="tw" src={TW} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
