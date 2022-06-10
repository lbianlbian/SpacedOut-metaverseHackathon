import React from "react";
import "./bussform.css";

const BussForm1 = (props) => {
  return (
    <div className="form-wrap">
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
          <button type="submit" onClick={props.toggleForm2}>
            Apply for NFT Approval
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default BussForm1;
