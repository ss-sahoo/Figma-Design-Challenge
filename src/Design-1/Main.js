import React from "react";
import "./Main.css";
import rectangle from "./images/rectangle.png";
import githubIcon from "./images/github-icon.svg";
import linkedinIcon from "./images/linked-icon.svg";
import gitlabIcon from "./images/gitlab-icon.svg";
import codeIcon from "./images/code-icon.svg";
import frame8 from "./images/Frame 8.png"
function Main() {
  return (
    <div className="conatiner">
      <div className="card">
        <div className="card-left-side">
          <div className="profile-image">
            <img src={rectangle} alt="" />
          </div>
          <div className="card-desc">
            <h1 className="card-title">MetaMask</h1>
            <div className="card-subtitle">
              <h3>@metaMask</h3>
              <p>MetaMask brings Ethereum to your web browser</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="card-button">
              <img src={githubIcon} alt="" />
            </button>
            <button className="card-button">
              <img src={linkedinIcon} alt="" />
            </button>
            <button className="card-button">
              <img src={gitlabIcon} alt="" />
            </button>
            <button className="card-button">
              <img src={codeIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="card-right-side">
          <div className="bar">
            <img src={frame8} alt="" />
          </div>
          <div className="follow">
            <h3 className="detail">
              <span>4K</span> Follewers
            </h3>
              <button className="follow_btn">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
