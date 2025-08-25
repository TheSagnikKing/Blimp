import React, { useEffect, useState } from "react";
import style from "./WorkCard.module.css";
import { useGlobalContext } from "../../context/GlobalContext";

const WorkCard = ({ dir, title }) => {
  
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
            <p>
              Having a great idea or a noble cause is just the beginning. At
              Blimp, we help you turn your passion into real-world results. Our
              fundraising platform empowers you to rally support, raise funds,
              and bring your vision to life—because good intentions deserve the
              chance to make a real impact. Let's make it happen, together.
            </p>
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
            <p>
              Having a great idea or a noble cause is just the beginning. At
              Blimp, we help you turn your passion into real-world results. Our
              fundraising platform empowers you to rally support, raise funds,
              and bring your vision to life—because good intentions deserve the
              chance to make a real impact. Let's make it happen, together.
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>{title}</h2>
            <p>
              Having a great idea or a noble cause is just the beginning. At
              Blimp, we help you turn your passion into real-world results. Our
              fundraising platform empowers you to rally support, raise funds,
              and bring your vision to life—because good intentions deserve the
              chance to make a real impact. Let's make it happen, together.
            </p>
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
