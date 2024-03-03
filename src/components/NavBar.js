import "./NavBarStyles.css";
import Logo from "./Logo";

import React from "react";

import { Link } from "react-router-dom";
import { MdDashboard, MdPeopleAlt, MdPayments } from "react-icons/md";
import { IoQrCode } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <Logo />

      <div className="user">
        <p className="p1">Rishad Ahamed</p>
        <p className="p2">rishadcol@gmail.com</p>
      </div>

      <div>
        <ul className="navBarLinks">
          <li>
            <Link to="/" className="navLi">
              <MdDashboard size={25} className="navIcon" />
              Overview
            </Link>
          </li>
          <li>
            <Link to="/customers" className="navLi">
              <MdPeopleAlt size={25} className="navIcon" />
              Customers
            </Link>
          </li>
          <li>
            <Link to="/payments" className="navLi">
              <MdPayments size={25} className="navIcon" />
              Payments
            </Link>
          </li>
          <li>
            <Link to="/qrcodes" className="navLi">
              <IoQrCode size={25} className="navIcon" />
              QR Codes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
