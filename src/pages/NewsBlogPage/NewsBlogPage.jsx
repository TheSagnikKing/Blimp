import React from "react";
import style from "./NewsBlogPage.module.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import BlogCard from "../../components/BlogCard/BlogCard";

const NewsBlogPage = () => {
  return (
    <main>
      <section className={style.newsContainer}>
        <div>
          <BlogCard title={"where to give now"} />
          <div>
            <h2>Latest News</h2>
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />

            <button>view more</button>
          </div>
        </div>
      </section>

      <div className={style.blogCardContainer}>
        <div>
          <BlogCard title={"where to give now"} />
          <BlogCard title={"popular charities"} />
          <BlogCard title={"childcare crisis"} />

          <BlogCard title={"where to give now"} />
          <BlogCard title={"popular charities"} />
          <BlogCard title={"childcare crisis"} />

          <button>more causes</button>
        </div>
      </div>

    </main>
  );
};

export default NewsBlogPage;
