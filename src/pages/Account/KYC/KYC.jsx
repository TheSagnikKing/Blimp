import React from "react";
import styles from "./KYC.module.css";
import { DownArrow } from "../../../icons";

const KYC = () => {
  return (
    <div className={styles.kycContainer}>
      <div>
        <h2>Are you an</h2>
        <div>
          <button>individual</button>
          <button>organization</button>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="">Select Your Document Type</label>
        <div>
          <input type="text" defaultValue="" />
          <DownArrow className={styles.editIcon} />
        </div>
      </div>

      <div>
        <button>upload</button>
        <p>** supported format (pdf, jpeg,) max size(5mb)</p>
      </div>

      <button>update</button>
    </div>
  );
};

export default KYC;
