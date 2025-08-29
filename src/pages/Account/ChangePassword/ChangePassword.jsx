import React from "react";
import styles from "./ChangePassword.module.css";
import { EyeIcon } from "../../../icons";

const ChangePassword = () => {
  return (
    <div className={styles.ChangePasswordContainer}>

      <div className={styles.inputGroup}>
        <label htmlFor="">Old Password</label>
        <div>
          <input type="text" defaultValue="" />
          <EyeIcon className={styles.editIcon} />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="">New Password</label>
        <div>
          <input type="text" defaultValue="" />
          <EyeIcon className={styles.editIcon} />
        </div>
      </div>


      <div className={styles.inputGroup}>
        <label htmlFor="">Confirm Password</label>
        <div>
          <input type="text" defaultValue="" />
          <EyeIcon className={styles.editIcon} />
        </div>
      </div>

      <button className={styles.updateBtn}>UPDATE</button>

    </div>
  );
};

export default ChangePassword;
