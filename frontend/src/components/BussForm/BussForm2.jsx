import React from "react";
import { useNavigate } from "react-router-dom";
import "./bussform.css";

const BussForm2 = () => {
  const navigate = useNavigate();
  const toggleToLaunchpad = (e) => {
    e.preventDefault();
    navigate("/marketplace");
  };
  return (
    <div className="form-wrap">
      <div className="form2-container">
        <h1>Build your company NFT</h1>
        <form action="">
          <label htmlFor="name-nft">Name the NFT:</label>
          <br />
          <input type="text" name="name-nft" id="name-nft" />
          <br />
          <label htmlFor="comp-desc">Company Description:</label>
          <br />
          <textarea name="desc" id="comp-desc" cols="30" rows="10"></textarea>
          <br />
          <label htmlFor="utility">List of Utilities:</label>
          <br />
          <textarea
            name="utilities"
            id="utility"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <label htmlFor="num-nft"># of NFTs to mint:</label>
          <br />
          <input type="text" name="num-nft" id="num-nft" />
          <br />
          <label htmlFor="white"># of whitelists:</label>
          <br />
          <input type="text" name="white" id="white" />
          <br />
          <label htmlFor="dom">Date of mint:</label>
          <br />
          <input type="date" name="dom" id="dom" />
          <br />
          <label htmlFor="tom">Time of mint(UTC):</label>
          <br />
          <input type="time" name="tom" id="tom" />
          <br />
          <button type="submit" onClick={toggleToLaunchpad}>
            Continue
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default BussForm2;
