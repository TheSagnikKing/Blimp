import React from "react";
import styles from "./ActiveCampaign.module.css";

const ActiveCampaigns = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className={styles.campaignCard} key={item}>
            <h2>*Your Campaign Name*</h2>

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

            <div>
              <button>view campaign</button>
              <button>promote campaign</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveCampaigns;
