import React from "react";
import style from "./BlogCard.module.css";
import { CalenderIcon, RightIcon } from "../../icons";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const BlogCard = ({ index, articleItem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/news-detail", {
          state: articleItem,
        });
        window.scrollTo(0, 0);
      }}
      className={style.blogCardItem}
    >
      <img src={articleItem?.image} alt="" />

      <div>
        <div>
          <span>
            <CalenderIcon />
          </span>
          <p>{moment(articleItem?.createdAt).format("MMMM D, YYYY")}</p>
        </div>

        <h2>{articleItem?.title}</h2>
        <p
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {articleItem?.description}
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
