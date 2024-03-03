import QRCard from "./QRCard";

function QRCenterContent() {
  return (
    <div className="centerContents">
      <div className="firstRow">
        <p className="centerContentsp1">QR Codes</p>
        <div className="topbtn">
          <button type="submit" className="btn2">
            Generate QR
          </button>
        </div>
      </div>

      <div className="secondRow">
        <div className="formContainer">
          <form action="" className="infoForm">
            <input type="text" placeholder="Enter Name" className="infoInput" />
            <input type="text" placeholder="Enter Name" className="infoInput" />
            <input
              type="text"
              placeholder="Enter Mobile No"
              className="infoInput"
            />
            <input
              type="text"
              placeholder="Enter QR ID"
              className="infoInput"
              infoinput
            />

            <button type="submit" className="btn">
              Search Customer
            </button>
          </form>
        </div>

        <div className="cardGroup">
        <QRCard />
        </div>

      </div>
    </div>
  );
}

export default QRCenterContent;
