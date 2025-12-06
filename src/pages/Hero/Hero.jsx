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
import Skeleton from "@mui/material/Skeleton";
import { useAuth } from "../../context/AuthContext";
import { convert } from "html-to-text";
import { Pagination } from "@mui/material";

const Hero = () => {
  const { user } = useAuth();
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
          setSupportCampaigns({
            loading: false,
            error: data.message,
            data: {},
          });
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
    fetchLatestArticles();
  }, []);

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchFeaturedCampaigns = async () => {
      setFeaturedCampaigns((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const { data } = await api.post("/get-featured-campaign", {
          page,
        });
        if (data.code === 200) {
          setFeaturedCampaigns({ loading: false, error: null, data });
          setTotalPages(data?.pagination?.totalPages);
        } else if (data.code === 400) {
          setFeaturedCampaigns({
            loading: false,
            error: data.message,
            data: {},
          });
        }
      } catch (error) {
        setFeaturedCampaigns({
          loading: false,
          error: error.message,
          data: {},
        });
      }
    };

    fetchFeaturedCampaigns();
  }, [page]);

  const [visibleFeatureCount, setVisibleFeatureCount] = useState(6);

  const allFeatureItems = featuredCampaigns?.data?.data || [];

  const handleShowAllFeatureItems = () => {
    setVisibleFeatureCount(allFeatureItems.length);
  };

  const options = {
    // wordwrap: 130,
    wordwrap: false,
    selectors: [
      { selector: "h1", format: "block" },
      { selector: "p", format: "block" },
    ],
    // ...
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${supportCampaigns?.data?.data?.banner_image})`,
        }}
        className={style.heroContainer}
      >
        <div>
          <div className={style.heroContent}>
            <h1>
              {supportCampaigns?.data?.data?.campaign_name}{" "}
              <span
                style={{
                  fontSize: "2.4rem",
                  textTransform: "lowercase",
                }}
              >
                {"( v 1.0.0 )"}
              </span>
            </h1>
            {/* <p>Help power the world's social justice movements</p> */}
            <button
              onClick={() => {
                // login-signup
                // if (user === null || user === undefined) {
                //   window.scrollTo(0, 0);
                //   navigate("/login-signup");
                // } else {
                //   window.scrollTo(0, 0);
                //   navigate("/start-campaign");
                // }
                navigate("/start-campaign");
              }}
            >
              Get Funding
            </button>
          </div>
        </div>
      </main>

      <section className={style.impactContainer}>
        <div>
          <h2>the latest</h2>
          <div>
            {latestCampaigns?.loading ? (
              <>
                <Skeleton
                  variant="rectangular"
                  height="40rem"
                  sx={{
                    width: {
                      xs: "100%", // mobile
                      sm: "100%", // tablet
                      md: "50%", // desktop
                    },
                  }}
                />

                <Skeleton
                  variant="rectangular"
                  height="40rem"
                  sx={{
                    width: {
                      xs: "100%", // mobile
                      sm: "100%", // tablet
                      md: "50%", // desktop
                    },
                  }}
                />
              </>
            ) : (
              <>
                <img
                  src={
                    latestCampaigns?.data?.data?.latestCampaigns?.[0]
                      ?.banner_image
                  }
                  alt=""
                />

                <div>
                  <h2>
                    {
                      latestCampaigns?.data?.data?.latestCampaigns?.[0]
                        ?.campaign_name
                    }
                  </h2>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    <p>
                      {convert(
                        latestCampaigns?.data?.data?.latestCampaigns?.[0]?.description
                          ?.replace(/\\n/g, "")
                          ?.replace(/^"(.*)"$/, "$1")
                          .trim(),
                        options
                      )}
                    </p>
                  </div>

                  <ProgressBar
                    raisedAmount={
                      latestCampaigns?.data?.data?.latestCampaigns?.[0]
                        ?.raisedAmount
                    }
                    targetAmount={
                      latestCampaigns?.data?.data?.latestCampaigns?.[0]
                        ?.targetAmount
                    }
                    percentageAchieved={
                      latestCampaigns?.data?.data?.latestCampaigns?.[0]
                        ?.percentageAchieved
                    }
                    donationCount={
                      latestCampaigns?.data?.data?.latestCampaigns?.[0]
                        ?.donationInfo?.length
                    }
                    currency={
                      latestCampaigns?.data?.data?.latestCampaigns?.[0]?.country
                        ?.currency
                    }
                    symbol={
                      latestCampaigns?.data?.data?.latestCampaigns?.[0]?.country
                        ?.symbol
                    }
                  />

                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate("/checkout");
                    }}
                  >
                    DONATE
                  </button>
                </div>
              </>
            )}

            <div className={style.impactMobileContainer}>
              <h3>
                {
                  latestCampaigns?.data?.data?.latestCampaigns?.[0]
                    ?.campaign_name
                }
              </h3>
              <button>View More</button>
              <button>DONATE</button>
            </div>

            <button>View Details</button>
          </div>
        </div>
      </section>

      <section className={style.topCampaignsContainer}>
        <div>
          <div>
            {latestCampaigns?.loading ? (
              [0, 1].map((item) => {
                return (
                  <Skeleton
                    key={item}
                    variant="rectangular"
                    height="40rem"
                    animation={false}
                    sx={{
                      width: {
                        xs: "100%", // mobile
                        sm: "100%", // tablet
                        md: "50%", // desktop
                      },
                      bgcolor: "#1e1e1e",
                    }}
                  />
                );
              })
            ) : (
              <>
                <CampaignCard
                  bannerImage={
                    latestCampaigns?.data?.data?.latestCampaigns?.[1]
                      ?.banner_image
                  }
                  description={convert(
                    latestCampaigns?.data?.data?.latestCampaigns?.[1]?.description
                      ?.replace(/\\n/g, "")
                      ?.replace(/^"(.*)"$/, "$1"),
                    options
                  )}
                  campaignName={
                    latestCampaigns?.data?.data?.latestCampaigns?.[1]
                      ?.campaign_name
                  }
                  campaignItem={
                    latestCampaigns?.data?.data?.latestCampaigns?.[1]
                  }
                />
                <CampaignCard
                  bannerImage={
                    latestCampaigns?.data?.data?.latestCampaigns?.[2]
                      ?.banner_image
                  }
                  description={convert(
                    latestCampaigns?.data?.data?.latestCampaigns?.[2]?.description
                      .replace(/\\n/g, "")
                      ?.replace(/^"(.*)"$/, "$1"),
                    options
                  )}
                  campaignName={
                    latestCampaigns?.data?.data?.latestCampaigns?.[2]
                      ?.campaign_name
                  }
                  campaignItem={
                    latestCampaigns?.data?.data?.latestCampaigns?.[2]
                  }
                />
              </>
            )}
          </div>
        </div>
      </section>

      <section className={style.featureContainer}>
        <div>
          <h2>Featured</h2>

          <div className={style.featureCardContainer}>
            {featuredCampaigns?.loading
              ? [0, 1, 2, 3, 4, 5].map((item) => {
                  return (
                    <Skeleton
                      key={item}
                      variant="rectangular"
                      height={"40rem"}
                      sx={{
                        width: {
                          xs: "100%", // mobile
                          sm: "48%", // tablet
                          md: "32%", // desktop
                        },
                      }}
                    />
                  );
                })
              : allFeatureItems?.map((item) => {
                  return <FeatureCard key={item.id} featureItem={item} />;
                })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={totalPages}
              size="large"
              sx={{
                "& .MuiPaginationItem-page": {
                  fontSize: "1.4rem",
                },
              }}
              value={page}
              onChange={handlePageChange}
              disabled={featuredCampaigns?.loading}
            />
          </div>

          {/* {visibleFeatureCount < allFeatureItems.length && (
            <button onClick={handleShowAllFeatureItems}>MORE CAUSES</button>
          )} */}
        </div>
      </section>

      {/* <RegionMapContainer /> */}

      <section className={style.newsContainer}>
        <div>
          <h2>News</h2>
          <div>
            {latestArticles.loading ? (
              <Skeleton
                variant="rectangular"
                // width={"50%"}
                height={"50rem"}
                sx={{
                  width: {
                    xs: "0%", // mobile
                    sm: "100%", // tablet
                    md: "50%", // desktop
                  },
                }}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              <img
                src={latestArticles?.data?.data?.latestArticle?.image}
                alt=""
              />
            )}

            <div>
              {latestArticles.loading
                ? [0, 1, 2, 3].map((item) => {
                    return (
                      <Skeleton
                        key={item}
                        variant="rectangular"
                        width={"100%"}
                        height={"9.6rem"}
                        // sx={{ bgcolor: "black" }}
                      />
                    );
                  })
                : latestArticles?.data?.data?.nextArticles?.map(
                    (item, index) => {
                      return (
                        <NewsCard
                          index={index}
                          key={item.id}
                          articleItem={item}
                        />
                      );
                    }
                  )}
            </div>
          </div>
        </div>
      </section>

      {/* <section className={style.biographContainer}>
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
      </section> */}
    </>
  );
};

export default Hero;
