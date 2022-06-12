import React, { useState } from "react";
import WalletBtn from "../WalletBtn.tsx";
import axios from "axios";
import "./MarketLaunch.css";

const Launchpad = () => {
  const [walletID, setwalletID] = useState("");

  const getWalletId = (gotWalletId) => {
    setwalletID(gotWalletId);
  };
  const mintNft = async (url, name) => {
    let res = await axios.get(
      `https://austinplex.wesleybian.repl.co/mint?address=${walletID}&jsonFile=${url}&biz=${name}`
    );
    let { data } = res.data;
    // let finalUrl = `https://austinplex.wesleybian.repl.co/mint?address=${walletID}&jsonFile=${url}&biz=${name}`;
    console.log(data);
  };

  return (
    <div className="launch-wrap">
      <div className="wallet-btn-wrap">
        <h3 className="title">LaunchPad.</h3>
        <WalletBtn getWalletId={getWalletId} />
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
