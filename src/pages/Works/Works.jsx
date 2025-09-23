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
        <div>
          <div>
            <img src="https://www.rescue.org/sites/default/files/styles/square_1x1_1280px_wide/public/2025-06/GettyImages-2184690593.jpg?itok=vEWo37NF" alt="" />
          </div>

          <div>
            {[0, 1, 2, 3, 4].map((item) => (
              <div className={style.crowdHeadItem}>
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
            <button>
              <span>more news</span>
            </button>
          </div>

          <div className={style.blogCardContainer}>
            <BlogCard title={"where to give now"} />
            <BlogCard title={"popular charities"} />
            <BlogCard title={"childcare crisis"} />
          </div>

          <button>more causes</button>
        </div>

      </section>
    </main>
  );
};

export default Works;
