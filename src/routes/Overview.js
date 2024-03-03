import React from "react";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import CenterContents from "../components/OverviewCenterContents";

function Overview() {
  return (
    <div className="container">
      <div className="col-l">
        <NavBar />
      </div>

      <div className="col-r">
        <TitleBar />
        <CenterContents />
      </div>
    </div>
  );
}

export default Overview;
