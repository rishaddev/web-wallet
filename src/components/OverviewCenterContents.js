import { Link } from "react-router-dom";

import Greeting from "./Greeting";
import StatCard from "./StatCard";

 function OverviewCenterContents(){
    return(
        <div className="centerContents">

          <div className="firstRow">
            <Greeting />

            <div className="topbtn btnOpt">
              <Link to="/payments" className="btn">
                Make Payment +
              </Link>
            </div>
            
          </div>

          <div className="secondRow">

          <StatCard
            cardTitle="Sales"
            cardNumbers='Rs. 25,0000.00'
          />

          <StatCard
            cardTitle="No of Customers"
            cardNumbers='352'
          />
          </div>
          
        </div>
    )
 }

 export default OverviewCenterContents;