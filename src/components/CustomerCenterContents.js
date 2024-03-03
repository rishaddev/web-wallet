import CustomerCard from "./CustomerCard";

import { Link } from "react-router-dom";

function CustomerCenterContents() {
  return (
    <div className="centerContents">
      <div className="firstRow">
        <p className="centerContentsp1">Customers</p>
        <div className="topbtn">
          <Link to="" className="btn">
            View All +
          </Link>
        </div>
      </div>

      <div className="secondRow">

        <div className="formContainer">
          <form action="" className="infoForm">
            <input type="text" placeholder="Enter Name" className="infoInput" />
            <input
              type="text"
              placeholder="Enter Mobile No"
              className="infoInput"
            />
            <input
              type="text"
              placeholder="Enter NIC No"
              className="infoInput"
            />
            <input
              type="text"
              placeholder="Enter Job Role"
              className="infoInput"
              infoinput
            />
            <input
              type="text"
              placeholder="Enter Initial Deposit"
              className="infoInput"
            />

            <button type="submit" className="btn">
              Add New Customer
            </button>
            <button type="submit" className="btn">
              Search Customer
            </button>
            <button type="submit" className="btn2">
              Delete Customer
            </button>
          </form>
        </div>

        <div className="cardGroup">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </div>
      </div>
    </div>
  );
}

export default CustomerCenterContents;
