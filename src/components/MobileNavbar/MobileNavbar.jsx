import React, { useState } from "react";
import style from "./MobileNavbar.module.css";
import blimpLogoBlack from "../../assets/blimpLogoBlack.png";
import { CrossIcon, LeftIcon, MenuIcon, ProfileIcon, RightIcon, SearchIcon } from "../../icons";
import { useGlobalContext } from "../../context/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const MobileNavbar = () => {

  const {
    isAuthenticated,
    setIsAuthenticated,
    user
  } = useAuth()

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

  const AccountMenu = [
    {
      id: 1,
      name: "Profile",
      url: "/account",
    },
    {
      id: 2,
      name: "Active Campaigns",
      url: "/account/active-campaigns",
    },
    {
      id: 3,
      name: "Draft Campaigns",
      url: "/account/draft-campaigns",
    },

    {
      id: 4,
      name: "Donation History",
      url: "/account/donation-history",
    },

    {
      id: 5,
      name: "Bank Account",
      url: "/account/bank-account",
    },
    {
      id: 7,
      name: "Change Password",
      url: "/account/change-password",
    },

  ]

  const { openMobileMenu, setOpenMobileMenu } = useGlobalContext();
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const [authenticated, setAuthenticated] = useState(true)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)

  console.log(navigate)

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
          {
            profileMenuOpen ? (
              <div>
                <button onClick={() => {
                  navigate(-1)
                  setProfileMenuOpen(false)
                }}><LeftIcon size={"1.2rem"} /> Back</button>
                {AccountMenu.map((item) => {
                  return (
                    <button
                      key={item.id}
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
            ) : (
              <>
                <div>
                  {menus.map((item) => {
                    return (
                      <button
                        key={item.name}
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

                {
                  isAuthenticated && user?.profile_picture ? (
                    <div
                      onClick={() => setProfileMenuOpen(true)}
                      className={style.profileSectionCard}>
                      <div><img
                        src={user.profile_picture} alt=""
                        width={"100%"}
                        height={"100%"}
                        style={{ borderRadius: "50%" }}
                      /></div>
                      <div>
                        <p>{user?.fullname}</p>
                        <div><RightIcon /></div>
                      </div>
                    </div>
                  ) : isAuthenticated ? (
                    <div
                      onClick={() => setProfileMenuOpen(true)}
                      className={style.profileSectionCard}>
                      <div><ProfileIcon size={"4.5rem"} /></div>
                      <div>
                        <p>{user?.fullname}</p>
                        <div><RightIcon /></div>
                      </div>
                    </div>
                  ) : (
                    <button
                      className={style.signinBtn}
                      onClick={() => {
                        setOpenMobileMenu(false);
                        navigate("/login-signup")
                      }}>Sign In</button>
                  )
                }

              </>
            )
          }

        </div>
      )
      }
    </header >
  );
};

export default MobileNavbar;
