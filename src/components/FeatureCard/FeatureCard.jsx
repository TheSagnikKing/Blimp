import React from "react";
import style from "./FeatureCard.module.css";
import { useNavigate } from "react-router-dom";
import { PlaceIcon, RightIcon } from "../../icons";
import ProgressBar from "../ProgressBar/ProgressBar";

const FeatureCard = ({ featureItem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0)
        navigate("/feature-detail", {
          state: featureItem
        });
      }}
      className={style.featureCard}
    >
      <img src={featureItem?.banner_image} alt="" />
      <div>
        <h2>{featureItem?.campaign_name}</h2>
        <div>
          <PlaceIcon />
          <p>{featureItem?.country?.name}</p>
        </div>

        <ProgressBar
          raisedAmount={featureItem?.raisedAmount}
          targetAmount={featureItem?.targetAmount}
          percentageAchieved={featureItem?.percentageAchieved}
          donationCount={featureItem?.donationInfo?.length}
          currency={featureItem?.country?.currency}
          symbol={featureItem?.country?.symbol}
        />


        <button>
          <span>View More</span>
          <div>
            <RightIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
