import React, { useEffect, useState } from "react";
import style from "./Works.module.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Skeleton from "@mui/material/Skeleton";

const Works = () => {

  const navigate = useNavigate()

  const [latestArticles, setLatestArticles] = useState({
    loading: false,
    error: null,
    data: {},
  });

  useEffect(() => {

    const fetchLatestArticles = async () => {
      setLatestArticles((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const { data } = await api.post("/get-latest-article");
        if (data.code === 200) {
          setLatestArticles({ loading: false, error: null, data });
        } else if (data.code === 400) {
          setLatestArticles({ loading: false, error: data.message, data: {} });
        }
      } catch (error) {
        setLatestArticles({ loading: false, error: error.message, data: {} });
      }
    };

    fetchLatestArticles();
  }, [])

  return (
    <main>
      <section className={style.crowdFundContainer}>
        <h2>Our guide to crowdfunding</h2>
        <p>
          Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac
          suspendisse vitae vel nulla eleifend. Est eros facilisi aenean nisl a.
          Vitae et fusce purus consectetur.
        </p>
      </section>

      <section className={style.crowdHeaderContainer}>
        <div>
          <div>
            <img src="https://www.rescue.org/sites/default/files/styles/square_1x1_1280px_wide/public/2025-06/GettyImages-2184690593.jpg?itok=vEWo37NF" alt="" />
          </div>

          <div>
            {[0, 1, 2, 3, 4].map((item, index) => (
              <div className={style.crowdHeadItem} key={index}>
                <div><p>{item + 1}</p></div>
                <div>
                  <h2>Use our tools to create your fundraiser</h2>
                  <p>
                    You'll be guided by prompts to add fundraiser details and set your goal.Make updates anytime.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className={style.blogsContainer}>

        <div>
          <div>
            <h2>latest news and blog</h2>
            <button onClick={() => {
              window.scrollTo(0, 0)
              navigate("/news-blog")
            }}>
              <span>more news</span>
            </button>
          </div>

          <div className={style.blogCardContainer}>

            {
              latestArticles.loading ? (
                [0, 1, 2, 3, 4, 5].map((item) => {
                  return (
                    <Skeleton
                      key={item}
                      variant="rectangular"
                      height={"30rem"}
                      sx={{
                        width: {
                          xs: "100%", // mobile
                          sm: "48%", // tablet
                          md: "32%",  // desktop
                        },
                      }}
                    />
                  )
                })
              ) : (
                latestArticles?.data?.data?.remainingArticles?.map((item, index) => {
                  return (
                    <BlogCard
                      index={index}
                      key={item.id}
                      articleItem={item}
                    />
                  )
                })
              )
            }

          </div>

          <button>more causes</button>
        </div>

      </section>
    </main>
  );
};

export default Works;
