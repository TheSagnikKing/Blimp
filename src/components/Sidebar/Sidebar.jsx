import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink
        to="/account"
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Profile
      </NavLink>
      <NavLink
        to="/account/active-campaigns"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Active Campaigns
      </NavLink>

      <NavLink
        to="/account/draft-campaigns"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Draft Campaigns
      </NavLink>

      <NavLink
        to="/account/donation-history"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Donation History
      </NavLink>

      <NavLink
        to="/account/bank-account"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Bank Account
      </NavLink>

      <NavLink
        to="/account/kyc-document"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        KYC Document
      </NavLink>

      <NavLink
        to="/account/change-password"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Change Password
      </NavLink>

    </div>
  );
};

export default Sidebar;
