import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    setMobileWidth(mediaQuery.matches);

    const handleChange = (e) => {
      setMobileWidth(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMobileMenu]);

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

  const value = {
    mobileWidth,
    openMobileMenu,
    setOpenMobileMenu,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
