import React from "react";
import "./MarketLaunch.css";

const Marketplace = () => {
  return (
    <div className="market-wrap">
      <h3 className="title">MarketPlace.</h3>
      <div className="market-tiles-wrap">
        <div className="market-tile">
          <div className="tile-img" id="img1"></div>
          <div className="market-tile-body">
            <h4>Spotify Voucher.</h4>
            <h4>23.56 SOL</h4>
            <p className="utility">Benifit: Get free premium for 1 year.</p>
            <div className="mint-btn">Buy Now!</div>
            <div className="buy-btn">Buy Now!</div>
          </div>
        </div>
        <div className="market-tile">
          <div className="tile-img" id="img2"></div>
          <div className="market-tile-body">
            <h4>Razor Voucher.</h4>
            <h4>50.45 SOL</h4>
            <p className="utility">
              Benifit: Get a free Razor mouse and deskpad.
            </p>
            <div className="mint-btn">Buy Now!</div>
            <div className="buy-btn">Buy Now!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
