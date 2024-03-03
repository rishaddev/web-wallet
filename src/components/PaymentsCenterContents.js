import PaymentCard from "./PaymentCard";

import { Link } from "react-router-dom";

function PaymentsCenterContents() {
  return (
    <>
      <div className="centerContents">
        <div className="firstRow">
          <p className="centerContentsp1">Payments</p>
          <div className="topbtn">
            <Link to="" className="btn">
              Scan QR +
            </Link>
          </div>
        </div>

        <div className="secondRow">
          <div className="formContainer">
            <form action="" className="infoForm">
              <input
                type="text"
                placeholder="Enter Name"
                className="infoInput"
              />
              <input
                type="text"
                placeholder="Enter Mobile No"
                className="infoInput"
              />
              <input
                type="text"
                placeholder="Enter QR ID"
                className="infoInput"
              />

              <button type="submit" className="btn">
                Search Customer
              </button>
            </form>
          </div>

          <div className="cardGroup">
            <PaymentCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentsCenterContents;
