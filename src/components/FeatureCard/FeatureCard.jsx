import React from "react";
import style from "./FeatureCard.module.css";
import { useNavigate } from "react-router-dom";
import { PlaceIcon, RightIcon } from "../../icons";
import ProgressBar from "../ProgressBar/ProgressBar";

const FeatureCard = ({ image, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/feature-detail");
      }}
      className={style.featureCard}
    >
      <img src={image} alt="" />
      <div>
        <h2>We the People - Embrace. Empower.Engage. Inc.</h2>
        <div>
          <PlaceIcon />
          <p>Gaza</p>
        </div>

        <ProgressBar />


        <button>
          <span>View More</span>
          <RightIcon />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
