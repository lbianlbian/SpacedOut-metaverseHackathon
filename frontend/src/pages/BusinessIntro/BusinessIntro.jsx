import React, { useState } from "react";
import BussForm1 from "../../components/BussForm/BussForm1";
import BussForm2 from "../../components/BussForm/BussForm2";
import BussIntro from "../../components/BussForm/BussIntro";

const BusinessIntro = () => {
  const [isForm1Active, setIsForm1Active] = useState("");
  const [isForm2Active, setIsForm2Active] = useState("");

  const toggleForm1 = () => {
    setIsForm1Active((prevState) => true);
    setIsForm2Active((prevState) => false);
  };
  const toggleForm2 = (e) => {
    setIsForm2Active((prevState) => true);
    setIsForm1Active((prevState) => false);
    e.preventDefault();
  };

  if (isForm1Active === true) {
    return <BussForm1 toggleForm2={toggleForm2} />;
  } else if (isForm2Active === true) {
    return <BussForm2 />;
  }
  return (
    <div>
      <BussIntro toggleForm1={toggleForm1} />
    </div>
  );
};

export default BusinessIntro;
