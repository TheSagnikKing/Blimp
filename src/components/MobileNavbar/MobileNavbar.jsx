import React, { useState } from "react";
import style from "./MobileNavbar.module.css";
import blimpLogoBlack from "../../assets/blimpLogoBlack.png";
import { CrossIcon, MenuIcon, SearchIcon } from "../../icons";
import { useGlobalContext } from "../../context/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";

const MobileNavbar = () => {
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
      name: "Contact Us",
      url: "/contact-us",
    },
  ];

  const menuProfile = [
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
      name: "Contact Us",
      url: "/contact-us",
    },
    {
      name: "Profile",
      url: "/account",
    },
    {
      name: "Active Campaigns",
      url: "/account/active-campaigns",
    },
    {
      name: "Draft Campaigns",
      url: "/account/draft-campaigns",
    },
    {
      name: "Donation History",
      url: "/account/donation-history",
    },
    {
      name: "Bank Account",
      url: "/account/bank-account",
    },
    {
      name: "KYC Document",
      url: "/account/kyc-document",
    },
    {
      name: "Change Password",
      url: "/account/change-password",
    },
  ]

  const { openMobileMenu, setOpenMobileMenu } = useGlobalContext();
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.pathname);

  return (
    <header className={style.mobileHeader}>
      {searchOpen && location.pathname === "/" ? (
        <div className={style.search_input}>
          <input placeholder="Search for campaigns or causes" />
          <button
            onClick={() => {
              setSearchOpen(false);
            }}
          >
            <CrossIcon />
          </button>
        </div>
      ) : (
        <>
          <div className={style.logoContainer}>
            <a href="/" aria-label="Go to Home">
              <img
                src={blimpLogoBlack}
                alt="Blimp Company Logo"
                className={style.logo}
              />
            </a>
          </div>

          <div>
            {location.pathname === "/" ? (
              <button
                onClick={() => {
                  setSearchOpen((prev) => !prev);
                }}
              >
                <SearchIcon />
              </button>
            ) : null}

            <button
              onClick={() => {
                setOpenMobileMenu((prev) => !prev);
              }}
            >
              {openMobileMenu ? <CrossIcon /> : <MenuIcon />}
            </button>
          </div>
        </>
      )}

      {openMobileMenu && (
        <div className={style.mobileMenuContainer}>
          <div>
            {menus.map((item) => {
              return (
                <button
                  onClick={() => {
                    navigate(item.url);
                    setOpenMobileMenu(false);
                  }}
                >
                  {item.name}
                </button>
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
