import React from "react";
import "./Launch.css";

const Launchpad = () => {
  return (
    <div className="launch-wrap">
      <div className="wallet-btn-wrap">
        <h3 className="title">LaunchPad.</h3>
        <div className="wallet-btn">Select Wallet</div>
      </div>
      <div className="launch-tile-wrap">
        <div className="launch-tile-body">
          <h1>
            <span>Gucci</span> Voucher.
          </h1>
          <p>
            Gucci is an Italian high-end luxury fashion house based in Florence,
            Italy. Its product lines include handbags, ready-to-wear, footwear,
            and accessories, makeup, fragrances, and home decoration. These NFTs
            will provide discounts on different categories of products.
          </p>
          <div className="mint-btn">Mint!</div>
        </div>
        <div className="launch-img"></div>
      </div>
    </div>
  );
};

export default Launchpad;
