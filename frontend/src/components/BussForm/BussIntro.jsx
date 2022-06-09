import React from "react";
import "./BI.css";

const BussIntro = (props) => {
  return (
    <div>
      <div className="bi-wrap">
        <h1 className="bi-title">
          <span>Hello!</span> Businesses & Brands
        </h1>
        <p className="about-body">
          Welcome to SpacedOut! We are here to help you create stronger
          relationships with your customers through NFT technology. We aim to
          create an environment where your most loyal customers have access to
          special offerings from your brand while simultaneously generating
          revenue from users trading your NFT. We make it extremely easy for you
          to create an NFT instantly that you can launch with no technical
          background right on our site.
        </p>
        <div className="market-btn" onClick={props.toggleForm1}>
          Create Your NFT!
        </div>
      </div>
    </div>
  );
};

export default BussIntro;
