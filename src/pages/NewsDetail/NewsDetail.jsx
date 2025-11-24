import React, { useEffect, useState } from "react";
import style from "./NewsDetail.module.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import Skeleton from "@mui/material/Skeleton";

const NewsDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [newsDetailItem, setNewsDetailItem] = useState({
    loading: false,
    error: null,
    data: {},
  });

  useEffect(() => {
    const fetchNewsDetailItem = async () => {
      setNewsDetailItem((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const { data } = await api.post("/get-articles-details", {
          article_id: params.id,
        });
        if (data.code === 200) {
          setNewsDetailItem({ loading: false, error: null, data });
        } else if (data.code === 400) {
          setNewsDetailItem({ loading: false, error: data.message, data: {} });
        }
      } catch (error) {
        setNewsDetailItem({ loading: false, error: error.message, data: {} });
      }
    };

    fetchNewsDetailItem();
  }, []);

  return (
    <main>
      <section className={style.newsDetailContainer}>
        <div>
          {newsDetailItem?.loading ? (
            <Skeleton variant="rectangular" width={"100%"} height={"4rem"} />
          ) : (
            <h2>{newsDetailItem?.data?.data?.title}</h2>
          )}

          {newsDetailItem?.loading ? (
            <Skeleton variant="rectangular" width={"100%"} height={"56rem"} />
          ) : (
            <img src={newsDetailItem?.data?.data?.image} alt="" />
          )}

          <div>
            <h2>Description</h2>
            <p>{newsDetailItem?.data?.data?.description}</p>
          </div>

          <button>Donate now</button>

          <div className={style.addsContainer}>
            <h2>Run Ads / Causes section</h2>
          </div>
        </div>
      </section>

      <section className={style.blogsContainer}>
        <div>
          <div>
            <h2>latest news and blog</h2>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/news-blog");
              }}
            >
              <span>MORE NEWS</span>
            </button>
          </div>

          <div className={style.blogCardContainer}>
            <BlogCard title={"where to give now"} />
            <BlogCard title={"popular charities"} />
            <BlogCard title={"childcare crisis"} />
          </div>

          <button>MORE CAUSES</button>
        </div>
      </section>
    </main>
  );
};

export default NewsDetail;
