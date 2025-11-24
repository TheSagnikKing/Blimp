import React, { useEffect, useState } from "react";
import style from "./NewsBlogPage.module.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import api from "../../api/api";
import Skeleton from "@mui/material/Skeleton";

const NewsBlogPage = () => {
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
  }, []);

  return (
    <main>
      <section className={style.newsContainer}>
        <div>
          {latestArticles.loading ? (
            <Skeleton
              variant="rectangular"
              height={"56rem"}
              sx={{
                width: {
                  xs: "100%", // mobile
                  sm: "100%", // tablet
                  md: "50%", // desktop
                },
              }}
              // sx={{ bgcolor: "black" }}
            />
          ) : (
            <BlogCard articleItem={latestArticles?.data?.data?.latestArticle} />
          )}

          <div>
            {latestArticles.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"9.6rem"}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              <h2>Latest News</h2>
            )}

            {latestArticles.loading
              ? [0, 1, 2].map((item) => {
                  return (
                    <Skeleton
                      key={item}
                      variant="rectangular"
                      height={"9.6rem"}
                      // sx={{ bgcolor: "black" }}
                    />
                  );
                })
              : latestArticles?.data?.data?.nextArticles?.map((item, index) => {
                  return (
                    <NewsCard index={index} key={item.id} articleItem={item} />
                  );
                })}
            <button>view more</button>
          </div>
        </div>
      </section>

      <div className={style.blogCardContainer}>
        <div>
          {latestArticles.loading
            ? [0, 1, 2, 3, 4, 5].map((item) => {
                return (
                  <Skeleton
                    key={item}
                    variant="rectangular"
                    height={"30rem"}
                    sx={{
                      width: {
                        xs: "100%", // mobile
                        sm: "48%", // tablet
                        md: "32%", // desktop
                      },
                    }}
                    // sx={{ bgcolor: "black" }}
                  />
                );
              })
            : latestArticles?.data?.data?.remainingArticles?.map(
                (item, index) => {
                  return (
                    <BlogCard index={index} key={item.id} articleItem={item} />
                  );
                }
              )}
        </div>

        {!latestArticles.loading && <button>MORE CAUSES</button>}
      </div>
    </main>
  );
};

export default NewsBlogPage;
