import React from "react";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import PaymentsCenterContents from "../components/PaymentsCenterContents";

const Payments = () => {
  return (
    <div className="container">
      <div className="col-l">
        <NavBar />
      </div>

      <div className="col-r">
        <TitleBar />
        <PaymentsCenterContents />
      </div>
    </div>
  );
};

export default Payments;
