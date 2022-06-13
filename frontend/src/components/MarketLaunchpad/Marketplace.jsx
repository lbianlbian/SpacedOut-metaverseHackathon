import React, { useState } from "react";
import "./MarketLaunch.css";

const Marketplace = (props) => {
  const [isWalletActive, setisWalletActive] = useState("");

  const buyNft = (url, name) => {
    if (props.walletID === "") {
      setisWalletActive((prevState) => !prevState);
    } else {
      let finalUrl = `https://austinplex.wesleybian.repl.co/mint?address=${props.walletID}&jsonFile=${url}&biz=${name}`;
      window.open(finalUrl, "_blank");
    }
  };
  return (
    <div className="market-wrap">
      <div
        className={`buy-popup-wrap ${isWalletActive && "buy-popup-open"}`}
        onClick={buyNft}
      >
        <div className="buy-popup">
          <p>Error: Please connect your Phantom wallet first!</p>
        </div>
      </div>
      <h3 className="title">MarketPlace.</h3>
      <div className="market-tiles-wrap">
        <div className="market-tile">
          <div className="tile-img" id="img1"></div>
          <div className="market-tile-body">
            <h4>Spotify Voucher.</h4>
            <h4>00.00 SOL</h4>
            <p className="utility">
              Benefit: Access to special events with artists.
            </p>
            <div
              className="mint-btn"
              onClick={() =>
                buyNft(
                  "https://ipfs.io/ipfs/bafkreieuijubxtvdn4hj6w65znscjy7a5qahkaayzy3oovnfc6lpel4icq",
                  "Spotify"
                )
              }
            >
              Buy Now!
            </div>
          </div>
        </div>
        <div className="market-tile">
          <div className="tile-img" id="img2"></div>
          <div className="market-tile-body">
            <h4>Razer Voucher.</h4>
            <h4>00.00 SOL</h4>
            <p className="utility">Benefit: Get 5% off on all products.</p>
            <div
              className="mint-btn"
              onClick={() =>
                buyNft(
                  "https://ipfs.io/ipfs/bafkreidnhle55nslmif55e2wduz2vm7wg2agpnfgqcmqjnjotmhp6kausq",
                  "Razer"
                )
              }
            >
              Buy Now!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
