import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import blimpLogoBlack from "../../assets/blimpLogoBlack.png";
import { AccountIcon, MenuIcon, SearchIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const menus = [
    {
      name: "How it works",
      url: "/works",
    },
    {
      name: "Discover",
      url: "/discover",
    },
    {
      name: "About Us",
      url: "/aboutus",
    },
    {
      name: "News",
      url: "/news-blog",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
  ];

  const navigate = useNavigate()

  return (
    <header className={style.header}>
      <div>
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
          <button>
            <SearchIcon />
            <span>Search</span>
          </button>

          <button onClick={() => navigate("/login-signup")}>Sign In</button>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
