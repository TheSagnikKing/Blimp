import React from "react";
import style from "./Works.module.css";
import BlogCard from "../../components/BlogCard/BlogCard";

const Works = () => {
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
        {[0, 1, 2, 3, 4].map((item) => (
          <div className={style.crowdHeadItem}>
            <div>{item + 1}</div>
            <div>
              <h2>header</h2>
              <p>
                Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus
                ac suspendisse vitae vel nulla eleifend. Est eros facilisi
                aenean nisl a. Vitae et fusce purus
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className={style.blogsContainer}>

        <div>
          <h2>latest news and blog</h2>
          <button>
            <span>more news</span>
          </button>
        </div>

        <div className={style.blogCardContainer}>
          <BlogCard title={"where to give now"}/>
          <BlogCard title={"popular charities"}/>
          <BlogCard title={"childcare crisis"}/>
        </div>

        <button>more causes</button>

      </section>
    </main>
  );
};

export default Works;
