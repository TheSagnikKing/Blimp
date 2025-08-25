import React from "react";
import style from "./FocusCard.module.css"
import educationImage from "../../assets/educationImage.png";
import waterImage from "../../assets/waterImage.png";
import socialImage from "../../assets/socialImage.png";
import healthImage from "../../assets/healthImage.png";

const FocusCard = () => {
  const focusMenu = [
    {
      img: educationImage,
      name: "Education",
      desc: "Fermentum nisl accumsan nisi sapien in vitae",
    },
    {
      img: waterImage,
      name: "Clean Water",
      desc: "Ultricies lacus turpis proin tempor faucibus",
    },
    {
      img: healthImage,
      name: "Health Care",
      desc: "Adipiscing in vitae necposue eget fringilla a morbi",
    },
    {
      img: socialImage,
      name: "Local Communities",
      desc: "Nunc tristique quis leo duis gravida volutpat vitae",
    },
  ];

  return (
    <section className={style.focusContainer}>
      {focusMenu.map((item) => {
        return (
          <div key={item.name} className={style.focusItem}>
            <img src={item.img} alt="" />
            <div>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FocusCard;
