import React from "react";
import style from "./BlogCard.module.css";
import { CalenderIcon, RightIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title }) => {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => {
        navigate("/news-detail")
        window.scrollTo(0, 0);
      }}
      className={style.blogCardItem}
    >
      <img src="https://a.rgbimg.com/users/b/ba/badk/600/qfOGvbS.jpg" alt="" />

      <div>
        <div>
          <span>
            <CalenderIcon />
          </span>
          <p>June 20, 2024</p>
        </div>

        <h2>{title}</h2>
        <p>
          Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio
          a. Curabitur porttitor quis gravida porttitor vel...
        </p>

        <button>
          read more
          <span>
            <RightIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
