import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isMenuActive, setMentActive] = useState();

  const toggleMenu = () => {
    setMentActive(!isMenuActive);
  };
  return (
    <div className="nav-main">
      <div className="nav-wrap">
        <div className="menu-btn-container" onClick={toggleMenu} isMenuActive>
          <svg
            viewBox="0 0 46 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="3"
              y1="2"
              x2="44"
              y2="2"
              stroke="#F1F1F1"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="26"
              x2="44"
              y2="26"
              stroke="#F1F1F1"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="-2"
              x2="32.2511"
              y2="-2"
              transform="matrix(0.999966 -0.00820888 0.00668381 0.999978 1 16.2927)"
              stroke="#F1F1F1"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="logo">
          Spaced<span>Out!</span>
        </div>
        <div className="search-icon-container">
          <svg
            viewBox="0 0 38 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.1197 15.3295C29.1197 22.9691 22.935 29.159 15.3098 29.159C7.68469 29.159 1.5 22.9691 1.5 15.3295C1.5 7.68986 7.68469 1.5 15.3098 1.5C22.935 1.5 29.1197 7.68986 29.1197 15.3295Z"
              stroke="white"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="14.3285"
              y2="-1.5"
              transform="matrix(0.707107 0.707107 -0.706201 0.708012 24.8682 26.5541)"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      <div className={`menu-slider-wrap ${isMenuActive && "open"}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L37.0571 37.0571"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M2 37.0571L37.0571 2"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div>Home</div>
        <div>LaunchPad</div>
        <div>MarketPlace</div>
        <div className="nav-logo"></div>
      </div>
    </div>
  );
};

export default Nav;
