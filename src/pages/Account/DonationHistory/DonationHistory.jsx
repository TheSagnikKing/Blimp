import React from "react";
import styles from "./DonationHistory.module.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

const DonationHistory = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className={styles.campaignCard} key={item}>
            <div>
              <h2>*Your Campaign Name*</h2>
              <button>withdraw</button>
            </div>

            <div className={styles.donationContainer}>
              <p>
                Published by: <b>Arghya Ghosh</b>
              </p>

              <ProgressBar />

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DonationHistory;
