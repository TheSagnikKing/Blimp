import React, { useState } from "react";
import styles from "./Footer.module.css";
import blimpLogo from "../../assets/blimpLogo.png";
import { FacebookIcon, InstagramIcon, TwitterXIcon } from "../../icons";
import toast from 'react-hot-toast';
import { toastStyle } from "../../utils/toastStyles";
import api from "../../api/api";

const Footer = () => {
  const menus = [
    {
      name: "Our Story",
    },
    {
      name: "How it Works",
    },
    {
      name: "Blog",
    },
    {
      name: "BlimpTube",
    },
    {
      name: "Case Studies",
    },
    {
      name: "Team",
    },
    {
      name: "Contact Us",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "FAQ",
    },
    {
      name: "Terms & Conditions",
    },
    {
      name: "Settings",
    },
  ];

  const [subscribeEmail, setSubscribeEmail] = useState("")

  const [subscribeNewsLetters, setSubscribeNewsLetters] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subscribeEmail)) {
      toast.error("Please enter a valid email", {
        duration: 3000,
        style: toastStyle,
      });
      return;
    }

    try {
      setSubscribeNewsLetters((prev) => ({ ...prev, loading: true, error: null }));

      const { data } = await api.post("/subscribeNewsLetters", { email: subscribeEmail })

      if (data?.code === 400) {
        setSubscribeNewsLetters({ loading: false, error: data.message, data: {} });
        return
      }

      setSubscribeNewsLetters({ loading: false, error: null, data });

      toast.success(data.message, { duration: 3000, style: toastStyle });
      setSubscribeEmail("")

    } catch (error) {
      setSubscribeNewsLetters({ loading: false, error: error.message, data: {} });
    }

  };


  return (
    <>
      <footer className={styles.footer}>
        <div>
          <div>
            <div>
              <h2>
                One email. One story. Every week. Sign up for the Blimp
                newsletter.
              </h2>
              <div>
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={subscribeEmail}
                  onChange={(e) => {
                    setSubscribeEmail(e.target.value)
                  }}
                />
                <button onClick={handleSubscribe}>subscribe</button>
              </div>
            </div>

            <div className={styles.linkContainer}>
              <div>
                <button>
                  <InstagramIcon />
                </button>
                <button>
                  <FacebookIcon />
                </button>
                <button>
                  <TwitterXIcon />
                </button>
              </div>

              <div>
                <p>Eng</p>
              </div>
            </div>
          </div>

          <p>
            By signing up, you agree to the <span>Terms of Use</span> and{" "}
            <span>Privacy Policy</span> & to receive electronic communications
            from VICE Media Group, which may include marketing promotions,
            advertisements and sponsored content.
          </p>

          <div>
            <img src={blimpLogo} alt="Blimp Company Logo" />
          </div>

          <div className={styles.menuContainer}>
            {menus.map((item) => {
              return (
                <a href="#" key={item.name}>
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
      <div className={styles.copyrightContainer}>
        <p>Copyright @ 2024. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
