import React, { useState } from "react";
import WalletBtn from "../WalletBtn.tsx";
import "./MarketLaunch.css";

const Launchpad = (props) => {
  const [walletID, setwalletID] = useState("");

  const getWalletId = (gotWalletId) => {
    setwalletID(gotWalletId);
  };

  const [isWalletActive, setisWalletActive] = useState("");

  const mintNft = (url, name) => {
    if (walletID === "") {
      setisWalletActive((prevState) => !prevState);
    } else {
      let finalUrl = `https://austinplex.wesleybian.repl.co/mint?address=${walletID}&jsonFile=${url}&biz=${name}`;
      window.open(finalUrl, "_blank");
    }
  };

  return (
    <div className="launch-wrap">
      <div
        className={`buy-popup-wrap ${isWalletActive && "buy-popup-open"}`}
        onClick={mintNft}
      >
        <div className="buy-popup">
          <p>Error: Please connect your Phantom wallet first!</p>
        </div>
      </div>
      <div className="wallet-btn-wrap">
        <h3 className="title">LaunchPad.</h3>
        <WalletBtn getWalletId={getWalletId} walletMarket={props.getWalletId} />
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
            will provide access to special Gucci events.
          </p>
          <div
            className="mint-btn"
            onClick={() =>
              mintNft(
                "https://ipfs.io/ipfs/bafkreiaytg3ddwcnfmlu5q4ozjzxlijcvidby36regcmj2a6oxevnknzoe",
                "Gucci"
              )
            }
          >
            Mint!
          </div>
        </div>
        <div className="launch-img"></div>
      </div>
    </div>
  );
};

export default Launchpad;
