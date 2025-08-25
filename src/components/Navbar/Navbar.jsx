import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import blimpLogoBlack from "../../assets/blimpLogoBlack.png";
import { AccountIcon, MenuIcon, SearchIcon } from "../../icons";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("Theme"));

  const themeChanged = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("Theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("Theme", "light");
    }
  };

  useEffect(() => {
    if (theme) {
      const body = document.querySelector("body");

      body.setAttribute("data-theme", theme);
    }
  }, [theme]);

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
      url: "/",
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


      <div className={style.mobileNavContainer}>
        <div className={style.logoContainer}>
          <a href="/" aria-label="Go to Home">
            <img
              src={blimpLogoBlack}
              alt="Blimp Company Logo"
              className={style.logo}
            />
          </a>
        </div>

        <button><MenuIcon/></button>
      </div>
      
    </header>
  );
};

export default Navbar;
