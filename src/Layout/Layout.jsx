import React, { useEffect } from "react";
import style from "./Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Layout = () => {
  const { mobileWidth, openMobileMenu } = useGlobalContext();

  return (
    <>
      {mobileWidth ? <MobileNavbar /> : <Navbar />}
      <Outlet /> {/* Dynamic page content */}
      <Footer />
    </>
  );
};

export default Layout;
