import React from 'react'
import './Main2.css';
import frame1 from './imges2/Frame 1.png';
import frame2 from "./imges2/Frame 10.png";
import frame3 from "./imges2/Frame 11.png";

function Main2() {
  return (
    <div className="main2">
      <div className="container">
        <div className="left">
          <h1 className="heading">About the store</h1>
          <div className="decsription">
            <h5> Home </h5>
            <h5>Become a customer</h5>
            <h5>About us</h5>
            <h5>FAQ</h5>
            <h5>Return Policy</h5>
            <h5>Contact Us</h5>
          </div>
        </div>
        <div className="middle">
          <h1>Language</h1>
          <div className="decsription1">
            <div className="lan">
              <h5> Deutsch</h5>
              <h5 className="blue">English</h5>
              <h5>Español</h5>
            </div>
            <div className="lan">
              <h5>Français</h5>
              <h5>Indonesian </h5>
              <h5>Italian</h5>
            </div>
            <div className="lan">
              <h5>Nederlands</h5>
              <h5>Polnisch</h5>
              <h5>Português</h5>
            </div>
            <div className="lan">
              <h5>русский</h5>
              <h5>Tiếng Việt</h5>
              <h5>Türkçe</h5>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Get in touch</h1>
          <div className="icon">
            <img src={frame1} alt="" />
            <img src={frame2} alt="" />
            <img src={frame3} alt="" />
          </div>
        </div>
        <div className="footer">
          <h5>Terms of purches</h5>
          <h5>Security and privacy</h5>
          <h5>Newsletter</h5>
        </div>
      </div>
    </div>
  );
}

export default Main2
