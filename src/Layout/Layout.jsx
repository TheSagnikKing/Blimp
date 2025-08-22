import React from "react";
import style from "./Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <>
      <Navbar />
      <Outlet /> {/* Dynamic page content */}
      <Footer />
    </>
  );
};

export default Layout;
