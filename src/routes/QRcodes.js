import React from "react";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import QRCenterContent from "../components/QRCenterContents";

const QRcodes = () => {
  return (
    <div className="container">
      <div className="col-l">
        <NavBar />
      </div>

      <div className="col-r">
        <TitleBar />
        <QRCenterContent />
      </div>
    </div>
  );
};

export default QRcodes;
