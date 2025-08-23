import React from "react";
import style from "./FeatureCard.module.css";

const FeatureCard = ({ image }) => {
  return (
    <div className={style.featureCard}>
      <img src={image} alt="" />
      <div>
        <p>Gaza</p>
        <h2>We the People - Embrace. Empower.Engage. Inc.</h2>
        <div className={style.progressbar}>
          <div></div>
        </div>
        
        <div>
          <div>
            <h2>Goal: $ 12000</h2>
            <p>Raised: $ 8000</p>
          </div>

          <div>
            <h2>14</h2>
            <p>donations</p>
          </div>
        </div>

        <button>View Details</button>
      </div>
    </div>
  );
};

export default FeatureCard;
