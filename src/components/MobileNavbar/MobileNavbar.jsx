import React, { useState } from "react";
import style from "./MobileNavbar.module.css";
import blimpLogoBlack from "../../assets/blimpLogoBlack.png";
import { CrossIcon, MenuIcon } from "../../icons";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const menus = [
    {
      name: "How it works",
      url: "/works",
    },
    {
      name: "Discover",
      url: "/",
    },
    {
      name: "About Us",
      url: "/aboutus",
    },
    {
      name: "Contact Us",
      url: "/",
    },
  ];

  const { openMobileMenu, setOpenMobileMenu } = useGlobalContext();

  const navigate = useNavigate();

  return (
    <header className={style.mobileHeader}>
      <div className={style.logoContainer}>
        <a href="/" aria-label="Go to Home">
          <img
            src={blimpLogoBlack}
            alt="Blimp Company Logo"
            className={style.logo}
          />
        </a>
      </div>

      <button
        onClick={() => {
          setOpenMobileMenu((prev) => !prev);
        }}
      >
        {openMobileMenu ? <CrossIcon /> : <MenuIcon />}
      </button>

      {openMobileMenu && (
        <div className={style.mobileMenuContainer}>
          <div>
            {menus.map((item) => {
              return (
                <button onClick={() => {
                  navigate(item.url)
                  setOpenMobileMenu(false)
                }}>{item.name}</button>
              );
            })}
          </div>

          <button>Login</button>
        </div>
      )}
    </header>
  );
};

export default MobileNavbar;
