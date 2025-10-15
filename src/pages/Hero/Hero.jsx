import React, { useEffect, useState } from "react";
import style from "./Hero.module.css";
import crowdImageOne from "../../assets/crowdImageOne.jpg";
import { FilterIcon } from "../../icons";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import RegionMapContainer from "../../components/RegionMap/RegionMap";
import NewsCard from "../../components/NewsCard/NewsCard";
import BiographImage from "../../assets/biograph.jpg";
import FocusCard from "../../components/FocusCard/FocusCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const Hero = () => {

  const navigate = useNavigate();

  const [supportCampaigns, setSupportCampaigns] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const [latestCampaigns, setLatestCampaigns] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const [featuredCampaigns, setFeaturedCampaigns] = useState({
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
    const fetchSupportCampaigns = async () => {
      setSupportCampaigns((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const { data } = await api.post("/get-support-campaign");
        if (data.code === 200) {
          setSupportCampaigns({ loading: false, error: null, data });
        } else if (data.code === 400) {
          setSupportCampaigns({ loading: false, error: data.message, data: {} });
        }
      } catch (error) {
        setSupportCampaigns({ loading: false, error: error.message, data: {} });
      }
    };

    const fetchLatestCampaigns = async () => {
      setLatestCampaigns((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const { data } = await api.post("/get-top-campaigns");
        if (data.code === 200) {
          setLatestCampaigns({ loading: false, error: null, data });
        } else if (data.code === 400) {
          setLatestCampaigns({ loading: false, error: data.message, data: {} });
        }
      } catch (error) {
        setLatestCampaigns({ loading: false, error: error.message, data: {} });
      }
    };


    const fetchFeaturedCampaigns = async () => {
      setFeaturedCampaigns((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const { data } = await api.post("/get-featured-campaign");
        if (data.code === 200) {
          setFeaturedCampaigns({ loading: false, error: null, data });
        } else if (data.code === 400) {
          setFeaturedCampaigns({ loading: false, error: data.message, data: {} });
        }
      } catch (error) {
        setFeaturedCampaigns({ loading: false, error: error.message, data: {} });
      }
    };


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

    fetchSupportCampaigns();
    fetchLatestCampaigns();
    fetchFeaturedCampaigns();
    fetchLatestArticles();

  }, []);


  const [visibleFeatureCount, setVisibleFeatureCount] = useState(6);

  const allFeatureItems = featuredCampaigns?.data?.data || [];

  const handleShowAllFeatureItems = () => {
    setVisibleFeatureCount(allFeatureItems.length);
  };

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${supportCampaigns?.data?.data?.banner_image})`
        }}

        className={style.heroContainer}>
        <div>
          <div className={style.heroContent}>
            <h1>
              {supportCampaigns?.data?.data?.campaign_name}
            </h1>
            {/* <p>Help power the world's social justice movements</p> */}
            <button button onClick={() => {
              window.scrollTo(0, 0)
              navigate("/start-campaign")
            }}>Get Funding</button >
          </div >
        </div >

      </main >

      <section className={style.impactContainer}>
        <div>
          <h2>the latest</h2>
          <div>
            <img src={latestCampaigns?.data?.data?.latestCampaigns?.[1]?.banner_image} alt="" />
            <div>
              <h2>{latestCampaigns?.data?.data?.latestCampaigns?.[1]?.campaign_name}</h2>
              <p>
                {latestCampaigns?.data?.data?.latestCampaigns?.[1]?.description}
              </p>

              <ProgressBar
                raisedAmount={latestCampaigns?.data?.data?.latestCampaigns?.[1]?.raisedAmount}
                targetAmount={latestCampaigns?.data?.data?.latestCampaigns?.[1]?.targetAmount}
                percentageAchieved={latestCampaigns?.data?.data?.latestCampaigns?.[1]?.percentageAchieved}
                donationCount={latestCampaigns?.data?.data?.latestCampaigns?.[1]?.donationInfo?.length}
                currency={latestCampaigns?.data?.data?.latestCampaigns?.[1]?.country?.currency}
                symbol={latestCampaigns?.data?.data?.latestCampaigns?.[1]?.country?.symbol}
              />

              <button onClick={() => {
                window.scrollTo(0, 0)
                navigate("/checkout")
              }}>Donate</button>
            </div>

            <div className={style.impactMobileContainer}>
              <h3>from good intentions to great impact</h3>
              <button>View More</button>
              <button>Donate</button>
            </div>

            <button>View Details</button>
          </div>
        </div>
      </section>

      <section className={style.topCampaignsContainer}>
        <div>

          <div>
            <CampaignCard
              bannerImage={latestCampaigns?.data?.data?.latestCampaigns?.[2]?.banner_image}
              description={latestCampaigns?.data?.data?.latestCampaigns?.[2]?.description}
              campaignName={latestCampaigns?.data?.data?.latestCampaigns?.[2]?.campaign_name}
            />
            <CampaignCard
              bannerImage={latestCampaigns?.data?.data?.latestCampaigns?.[3]?.banner_image}
              description={latestCampaigns?.data?.data?.latestCampaigns?.[3]?.description}
              campaignName={latestCampaigns?.data?.data?.latestCampaigns?.[3]?.campaign_name}
            />
          </div>
        </div>
      </section>


      <section className={style.featureContainer}>
        <div>
          <h2>Featured</h2>

          <div className={style.featureCardContainer}>
            {
              allFeatureItems.slice(0, visibleFeatureCount).map((item) => {
                return (
                  <FeatureCard
                    key={item.id}
                    featureItem={item}
                  />
                )
              })
            }

          </div>

          {visibleFeatureCount < allFeatureItems.length && (
            <button onClick={handleShowAllFeatureItems}>more causes</button>
          )}
        </div>
      </section>

      <RegionMapContainer />

      <section className={style.newsContainer}>
        <div>
          <h2>News</h2>
          <div>
            <img
              src={latestArticles?.data?.data?.latestArticle?.image}
              alt=""
            />
            <div>
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
            </div>
          </div>
        </div>
      </section>

      <section className={style.biographContainer}>
        <div>
          <div>
            <h2>Changing Lives, Together</h2>
            <p>
              "Thanks to this platform and everyone who gave, we turned hope into
              reality. It truly showed me how powerful we are when we come
              together."
            </p>

            <div>
              <p>George Henry</p>
              <p>Donor</p>
            </div>
          </div>

          <img src={BiographImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
