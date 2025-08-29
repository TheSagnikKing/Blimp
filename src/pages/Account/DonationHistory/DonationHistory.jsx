import React from "react";
import styles from "./DonationHistory.module.css";

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

              <div>
                <div>
                  <p>$180,050 USD raised</p>
                  <p>$200K goal - 3.9K donations</p>
                </div>

                <div className={styles.circularProgressbar}>
                  <div>
                    <p>100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DonationHistory;
