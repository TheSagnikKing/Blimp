import React, { useEffect, useState } from "react";
import style from "./AboutUs.module.css";
import WorkCard from "../../components/WorkCard/WorkCard";
import FocusCard from "../../components/FocusCard/FocusCard";
import { RightIcon } from "../../icons";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Skeleton from "@mui/material/Skeleton";

const AboutUs = () => {

  const navigate = useNavigate()
  const userId = 42

  const [userCampaigns, setUserCampaigns] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const [latestArticles, setLatestArticles] = useState({
    loading: false,
    error: null,
    data: {},
  });

  useEffect(() => {
    const fetchUserCampaign = async () => {
      if (userId) {
        setUserCampaigns((prev) => ({ ...prev, loading: true, error: null }));
        try {
          const { data } = await api.post("/get-campaigns", {
            userId
          });
          if (data.code === 200) {
            setUserCampaigns({ loading: false, error: null, data });
          } else if (data.code === 400) {
            setUserCampaigns({ loading: false, error: data.message, data: {} });
          }
        } catch (error) {
          setUserCampaigns({ loading: false, error: error.message, data: {} });
        }
      }
    }

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

    fetchUserCampaign()
    fetchLatestArticles();

  }, [userId])

  // console.log(latestArticles)

  return (
    <main>
      <section className={style.missionContainer}>
        <WorkCard dir={"left"} title={"Our Mission*"} />
        <WorkCard dir={"right"} title={"Our Vision*"} />
        <WorkCard dir={"left"} title={"Our Values*"} />
      </section>

      {/* <FocusCard /> */}

      <section className={style.vissionContainer}>
        <div>
          <h2>{userCampaigns?.data?.data?.campaigns?.[0]?.campaign_name}</h2>
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

            <button onClick={() => {
              navigate("/feature-detail")
            }}>
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

            <button onClick={() => {
              navigate("/checkout")
            }}>
              <p>donate</p>
            </button>
          </div>
        </div>
      </section>

      <section className={style.blogsContainer}>

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

      </section>
    </main>
  );
};

export default AboutUs;

