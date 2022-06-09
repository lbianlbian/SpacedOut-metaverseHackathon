import React from "react";
import "./LP.css";

const LandingPage = () => {
  return (
    <div>
      <div className="main-section">
        <h1 className="title">Buy & Sell NFTs form your favorite brands.</h1>
        <div className="main-img"></div>
        <div className="main-vector">
          <svg
            viewBox="0 0 835 351"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 348C97.6188 262.079 351.165 87.1348 357.821 25.7978C364.476 -35.5393 3.3617 37.6636 27.9568 117.986C52.5519 198.308 402.598 302.18 450.052 327.007C497.506 351.834 104.057 282.403 205.91 211.087C307.762 139.77 665.043 99.9742 832 59.5697"
              stroke="url(#paint0_linear_48_131)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_48_131"
                x1="-132.703"
                y1="-66.0848"
                x2="810.551"
                y2="598.461"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#215309" />
                <stop offset="1" stopColor="#4ED60C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="market-btn">MarketPlace</div>
        <div className="business-btn">Business</div>
      </div>
      <div className="timeline-sect">
        <h3 className="about-first">Marketplace.</h3>
        <p className="about-body">
          ACW is a marketplace for businesses and brands to create greater
          relationships with their loyal customers. Owning one of your favorite
          brands NFTs, will give you utility such as discounts, promotions,
          events, etc. Whatever the brand decieds to give its holders is fair
          game.
        </p>
        <h3 className="about-second">SpacedOut NFTs.</h3>
        <p className="about-body">
          By holding our NFTs you’ll get exclusive access to:
        </p>
        <ul>
          <li>All whitelists on our marketplace.</li>
          <li>Discounted transiction fees.</li>
          <li>Access to events with different brands.</li>
          <li>Shared revenue from any NFT you hold on our website.</li>
        </ul>
        <h3 className="about-third">Roadmap.</h3>
        <p className="about-body">
          <span>Q2 2022:</span>
        </p>
        <ul>
          <li>Start building website.</li>
          <li>Start talking to companies who may be interested.</li>
          <li>Finalize first version of whitepaper.</li>
        </ul>
        <p className="about-body">
          <span>Q3 2022:</span>
        </p>
        <ul>
          <li>
            Start building our own NFT to fund marketing campaigns and hire more
            employees.
          </li>
          <li>Release the NFT by the end of Q3.</li>
          <li>Begin partnering with brands and companies.</li>
          <li>Release our first NFTs on the platform.</li>
          <li>NFT holder utilities will be in effect.</li>
        </ul>
        <p className="about-body">
          <span>Q4 2022:</span>
        </p>
        <ul>
          <li>Re-invest revenue into marketplace for growth.</li>
          <li>Organize our first conferences with brands.</li>
          <li>Build out next phase of roadmap.</li>
        </ul>
      </div>
      <div className="main-lower-vector">
        <svg
          viewBox="0 0 782 1504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M764.865 2C739.984 185.045 852.643 381.904 690.22 551.134C527.796 720.364 360.534 607.775 277.594 509.69C194.654 411.606 367.446 120.806 441.4 256.881C515.355 392.956 457.988 517.979 499.458 917.915C540.928 1317.85 493.238 1348.93 565.81 1456.69C638.382 1564.44 860.937 1229.44 717.175 1241.18C573.413 1252.92 368.137 1446.33 134.523 1491.92C-99.0908 1537.5 55.7301 1415.93 16.3337 1377.94"
            stroke="url(#paint0_linear_48_177)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_48_177"
              x1="817.665"
              y1="-121.463"
              x2="342.616"
              y2="1429.92"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#215309" />
              <stop offset="1" stopColor="#4ED60C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
