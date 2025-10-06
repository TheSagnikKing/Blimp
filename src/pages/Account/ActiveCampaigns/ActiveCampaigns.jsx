import React from "react";
import styles from "./ActiveCampaign.module.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

const ActiveCampaigns = () => {
  const navigate = useNavigate()
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

              <ProgressBar />

            </div>

            <div>
              <button onClick={() => {
                navigate("/cause")
              }}>view campaign</button>
              <button>promote campaign</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveCampaigns;
