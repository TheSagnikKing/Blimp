import React, { useEffect, useState } from "react";
import style from "./WorkCard.module.css";
import { useGlobalContext } from "../../context/GlobalContext";

const WorkCard = ({ dir, title, description }) => {
  const { mobileWidth } = useGlobalContext();

  return (
    <div className={style.missionCardWrapper}>
      {mobileWidth ? (
        <>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdnu3tuqGZxqxqvmLhwEEPSCTrXCJOW0J4Q&s"
            alt=""
          />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </>
      ) : dir === "left" ? (
        <>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdnu3tuqGZxqxqvmLhwEEPSCTrXCJOW0J4Q&s"
            alt=""
          />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdnu3tuqGZxqxqvmLhwEEPSCTrXCJOW0J4Q&s"
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default WorkCard;
