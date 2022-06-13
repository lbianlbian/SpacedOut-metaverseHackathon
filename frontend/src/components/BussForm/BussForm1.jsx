import React from "react";
import { useState } from "react";
import "./bussform.css";

const BussForm1 = (props) => {
  const [isApproveActive, setisApproveActive] = useState("");

  const toggleApprovalPopup = (e) => {
    e.preventDefault();
    setisApproveActive((prevState) => !prevState);
  };

  return (
    <div className="form-wrap">
      <div className={`popup-wrap ${isApproveActive && "popup-open"}`}>
        <div className="wallet-popup">
          <p>
            Thank you for your application. We have started the approval
            process.
          </p>
          <div className="divider"></div>
          <p>
            <span>Congratulations!</span> We have verified that you are a
            legitimate company. You are approved to start building your NFT.{" "}
          </p>
          <div onClick={props.toggleForm2} className="wallet-btn">
            Continue!
          </div>
        </div>
      </div>
      <div className="form1-container">
        <h1>Apply for your company NFT</h1>
        <form>
          <br />
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="pos">Position:</label>
          <br />
          <input type="text" name="position" id="pos" />
          <br />
          <label htmlFor="comp-name">Company Name:</label>
          <br />
          <input type="text" name="company" id="comp-name" />
          <br />
          <label htmlFor="comp-url">Company URL:</label>
          <br />
          <input type="url" name="url" id="comp-url" />
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
          <button type="submit" onClick={toggleApprovalPopup}>
            Apply for NFT Approval
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default BussForm1;
