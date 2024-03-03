import React from "react";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import CustomerCenterContents from "../components/CustomerCenterContents";

const Customers = () => {
  return (
    <div className="container">
      <div className="col-l">
        <NavBar />
      </div>

      <div className="col-r">
        <TitleBar />
        <CustomerCenterContents />
      </div>
    </div>
  );
};

export default Customers;
