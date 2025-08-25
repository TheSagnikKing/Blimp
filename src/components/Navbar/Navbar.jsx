import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import blimpLogoBlack from "../../assets/blimpLogoBlack.png";
import { AccountIcon, MenuIcon, SearchIcon } from "../../icons";

const Navbar = () => {

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

  return (
    <header className={style.header}>
      <div>
        <div className={style.logoContainer}>
          <a href="/" aria-label="Go to Home">
            <img
              src={blimpLogoBlack}
              alt="Blimp Company Logo"
              className={style.logo}
            />
          </a>
        </div>

        <nav className={style.nav} aria-label="Main Navigation">
          <ul>
            {menus.map((item) => (
              <li key={item.name}>
                <a href={item.url} className={style.navLink}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <button>GET FUNDING</button>
        <button>
          <SearchIcon />
        </button>
        <button>
          <AccountIcon />
        </button>
      </div>
      
    </header>
  );
};

export default Navbar;
