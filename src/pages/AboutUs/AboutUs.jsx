import React from "react";
import style from "./AboutUs.module.css";
import WorkCard from "../../components/WorkCard/WorkCard";
import FocusCard from "../../components/FocusCard/FocusCard";
import { RightIcon } from "../../icons";
import BlogCard from "../../components/BlogCard/BlogCard";

const AboutUs = () => {
  return (
    <main>
      <section className={style.missionContainer}>
        <WorkCard dir={"left"} title={"Our Mission*"} />
        <WorkCard dir={"right"} title={"Our Vision*"} />
        <WorkCard dir={"left"} title={"Our Values*"} />
      </section>

      <FocusCard />

      <section className={style.vissionContainer}>
        <div>
          <h2>Transforming lives</h2>
          <h2>Through love and generosity.</h2>
        </div>
        <img
          src="https://img.lemde.fr/2024/09/27/0/0/7965/5310/1440/960/60/0/85faf87_1727417648111-000-36gp2e6.jpg"
          alt=""
        />

        <div>
          <div>
            <h2>our best work</h2>
            <p>
              Facilisis mollis morbi ultrices ac tellus vitae pulvinar. Egestas
              sagittis nec et arcu enim ac. Vivamus a dignissim nulla ornare sit
              aliquam elementum blandit. Leo in sem pellentesque viverra
              malesuada viverra eget aliquam. Diam mi dolor pellentesque nec at.
              Ut nisi faucibus ultrices etiam tortor vitae eros.
            </p>

            <button>
              <p>learn more</p>
              <span>
                <RightIcon />
              </span>
            </button>
          </div>

          <div>
            <h2>want to contribute ?</h2>
            <p>
              Urna velit pharetra pellentesque magna eget. Ut egestas est id
              netus. Facilisis mollis morbi ultrices ac tellus vitae pulvinar.
              Egestas sagittis nec et arcu enim ac. Vivamus a dignissim nulla
              ornare sit aliquam elementum blandit. Leo in sem pellentesque
              viverra malesuada viverra eget aliquam. Diam mi dolor
            </p>

            <button>
              <p>donate</p>
            </button>
          </div>
        </div>
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

export default AboutUs;

