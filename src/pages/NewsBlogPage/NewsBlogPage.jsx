import React, { useEffect, useState } from "react";
import style from "./NewsBlogPage.module.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import api from "../../api/api";

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
  }, [])


  return (
    <main>
      <section className={style.newsContainer}>
        <div>
          <BlogCard
            articleItem={latestArticles?.data?.data?.latestArticle}
          />
          <div>
            <h2>Latest News</h2>
            {
              latestArticles?.data?.data?.nextArticles?.map((item, index) => {
                return (
                  <NewsCard
                    index={index}
                    key={item.id}
                    articleItem={item}
                  />
                )
              })
            }
            <button>view more</button>
          </div>
        </div>
      </section>

      <div className={style.blogCardContainer}>
        <div>

          {
            latestArticles?.data?.data?.remainingArticles?.map((item, index) => {
              return (
                <BlogCard
                  index={index}
                  key={item.id}
                  articleItem={item}
                />
              )
            })
          }

        </div>

        <button>more causes</button>

      </div>

    </main>
  );
};

export default NewsBlogPage;
