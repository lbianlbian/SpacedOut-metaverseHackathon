import React, { useState } from "react";
import Launchpad from "../../components/MarketLaunchpad/Launchpad";
import Marketplace from "../../components/MarketLaunchpad/Marketplace";

const MarketplaceLaunchpad = () => {
  const [data, setData] = useState("");
  const getWalletId = (childdata) => {
    setData(childdata);
  };
  return (
    <div>
      <Launchpad getWalletId={getWalletId} />
      <Marketplace walletID={data} />
    </div>
  );
};

export default MarketplaceLaunchpad;
