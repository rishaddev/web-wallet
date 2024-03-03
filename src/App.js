import React from "react";
import "./index.css";

import Overview from "./routes/Overview";
import Customers from "./routes/Customers";
import Payments from "./routes/Payments";
import QRcodes from "./routes/QRcodes";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import TitleBar from "./components/TitleBar";
import OverviewCenterContents from "./components/OverviewCenterContents";
import CustomerCenterContents from "./components/CustomerCenterContents";
import CustomerCard from "./components/CustomerCard";
import PaymentsCenterContents from "./components/PaymentsCenterContents";
import PaymentCard from "./components/PaymentCard";
import QRCenterContent from "./components/QRCenterContents";
import QRCard from "./components/QRCard";
import Login from "./components/Login";


import { Route, Routes } from "react-router-dom";
import StatCard from "./components/StatCard";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/qrcodes" element={<QRcodes />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/title" element={<TitleBar />} />
        <Route path="/stat" element={<StatCard />} />
        <Route path="/overviewcontent" element={<OverviewCenterContents />} />
        <Route path="/customercontent" element={<CustomerCenterContents />} />
        <Route path="/customercard" element={<CustomerCard />} />
        <Route path="/paymentcontent" element={<PaymentsCenterContents />} />
        <Route path="/paymentcard" element={<PaymentCard />} />
        <Route path="/qrcontent" element={<QRCenterContent />} />
        <Route path="/qrcard" element={<QRCard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
