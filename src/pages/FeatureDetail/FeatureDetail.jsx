import React, { useEffect, useState } from "react";
import style from "./FeatureDetail.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  WhatsappIcon,
} from "../../icons";
import moment from "moment";

import FirstMedal from "../../assets/medal1st.png";
import SecondMedal from "../../assets/medal2nd.png";
import ThirdMedal from "../../assets/medal3rd.png";
import BlogCard from "../../components/BlogCard/BlogCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import api from "../../api/api";
import Pagination from "@mui/material/Pagination";
import { convert } from "html-to-text";

const FeatureDetail = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const featureItem = location.state;

  // console.log("Feature Item ", featureItem);

  const [featureItemDetail, setFeatureItemDetail] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const [totalSupporters, setTotalSupporters] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const [latestArticles, setLatestArticles] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [totalSupporterData, setTotalSupporterData] = useState(0);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (featureItem?.id) {
      const fetchCampaignDetails = async () => {
        try {
          setFeatureItemDetail((prev) => ({
            ...prev,
            loading: true,
            error: null,
          }));
          const { data } = await api.post("/view-campaign-history", {
            id: featureItem.id,
          });
          if (data.code === 200) {
            setFeatureItemDetail({ loading: false, error: null, data });
          } else if (data.code === 400) {
            setFeatureItemDetail({
              loading: false,
              error: data.message,
              data: {},
            });
          }
        } catch (error) {
          setFeatureItemDetail({
            loading: false,
            error: error.message,
            data: {},
          });
        }
      };

      const fetchLatestArticles = async () => {
        setLatestArticles((prev) => ({ ...prev, loading: true, error: null }));
        try {
          const { data } = await api.post("/get-latest-article");
          if (data.code === 200) {
            setLatestArticles({ loading: false, error: null, data });
          } else if (data.code === 400) {
            setLatestArticles({
              loading: false,
              error: data.message,
              data: {},
            });
          }
        } catch (error) {
          setLatestArticles({ loading: false, error: error.message, data: {} });
        }
      };

      fetchCampaignDetails();
      fetchLatestArticles();
    }
  }, [featureItem?.id]);

  useEffect(() => {
    if (featureItem?.id) {
      const fetchTotalSupporters = async () => {
        try {
          setTotalSupporters((prev) => ({
            ...prev,
            loading: true,
            error: null,
          }));
          const { data } = await api.post("/total-supporters", {
            id: featureItem.id,
            page,
          });

          setTotalPages(data?.data?.pagination?.totalPages);
          setTotalSupporterData(data?.data?.pagination?.total);

          if (data.code === 200) {
            setTotalSupporters({ loading: false, error: null, data });
          } else if (data.code === 400) {
            setTotalSupporters({
              loading: false,
              error: data.message,
              data: {},
            });
          }
        } catch (error) {
          setTotalSupporters({
            loading: false,
            error: error.message,
            data: {},
          });
        }
      };

      fetchTotalSupporters();
    }
  }, [page, featureItem?.id]);

  const options = {
    // wordwrap: 130,
    wordwrap: false,
    selectors: [
      { selector: "h1", format: "block" },
      { selector: "p", format: "block" },
    ],
    // ...
  };

  return (
    <main>
      <section className={style.featureDetailContainer}>
        <div>
          {featureItemDetail?.loading ? (
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"4rem"}
              // sx={{ bgcolor: "black" }}
            />
          ) : (
            <h2>{featureItemDetail?.data?.data?.campaign_name}</h2>
          )}

          {featureItemDetail?.loading ? (
            <Skeleton variant="rectangular" width={"100%"} height={"56rem"} />
          ) : (
            <img src={featureItemDetail?.data?.data?.banner_image} alt="" />
          )}

          <div className={style.donationContainer}>
            {featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"4rem"}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              <p>
                Published by:{" "}
                <b>{featureItemDetail?.data?.data?.campaigns?.fullname}</b>
              </p>
            )}

            {featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"10rem"}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              <>
                <ProgressBar
                  raisedAmount={featureItemDetail?.data?.data?.raisedAmount}
                  targetAmount={featureItemDetail?.data?.data?.targetAmount}
                  percentageAchieved={
                    featureItemDetail?.data?.data?.percentageAchieved
                  }
                  donationCount={
                    featureItemDetail?.data?.data?.donationInfo?.length
                  }
                  currency={featureItemDetail?.data?.data?.country?.currency}
                  symbol={featureItemDetail?.data?.data?.country?.symbol}
                />

                <div className={style.linkContainer}>
                  <div>
                    <button>
                      <InstagramIcon />
                    </button>
                    <button>
                      <FacebookIcon />
                    </button>
                    <button>
                      <TwitterXIcon />
                    </button>
                    <button>
                      <WhatsappIcon />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      navigate("/checkout");
                    }}
                  >
                    DONATE
                  </button>
                </div>
              </>
            )}
          </div>

          <div>
            {featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"10rem"}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              <>
                <h2>Campaign Details</h2>
                <p>{featureItemDetail?.data?.data?.campaign_details}</p>
              </>
            )}
          </div>

          <div>
            {featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"10rem"}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              <>
                <h2>Raising fund description</h2>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  {convert(
                    featureItem?.description
                      .replace(/\\n/g, "")
                      ?.replace(/^"(.*)"$/, "$1"),
                    options
                  )}
                </p>
              </>
            )}
          </div>

          {/* <div>
            {featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"10rem"}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              <>
                <h2>Raising fund description</h2>
                <p>{featureItemDetail?.data?.data?.rasing_funds_decription}</p>
              </>
            )}
          </div> */}

          <div className={style.addGalleryContainer}>
            {featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"15rem"}
                // sx={{ bgcolor: "black" }}
              />
            ) : (
              featureItemDetail?.data?.data?.campaignsImages?.map(
                (item, index) => {
                  return <img key={item.id} src={item.image} alt="" />;
                }
              )
            )}
          </div>

          <div className={style.addsContainer}>
            <h2>Run Ads / Causes section</h2>
          </div>

          <div className={style.supporterContainer}>
            <h2>
              Supporters(
              {totalSupporterData})
            </h2>
            <div>
              {totalSupporters?.data?.data?.campaign?.donationInfo?.length >
                0 &&
                totalSupporters?.data?.data?.campaign?.donationInfo?.map(
                  (item, index) => {
                    return (
                      <div key={item.id} className={style.supporterItem}>
                        <div>
                          {index === 0 ? (
                            <img src={FirstMedal} alt="" />
                          ) : index === 1 ? (
                            <img src={SecondMedal} alt="" />
                          ) : index === 2 ? (
                            <img src={ThirdMedal} alt="" />
                          ) : (
                            <span></span>
                          )}

                          <div>
                            <h2>
                              {item.is_anonymous
                                ? "A"
                                : `${item?.first_name?.slice(
                                    0,
                                    1
                                  )}${item?.last_name?.slice(0, 1)}`}
                            </h2>
                          </div>
                        </div>

                        <div>
                          <h3>
                            {item.is_anonymous
                              ? "anonymous"
                              : `${item.first_name} ${item.last_name}`}
                          </h3>
                          {index === 0 ? (
                            <p>Top Contributor</p>
                          ) : index === 1 ? (
                            <p>Top Contributor</p>
                          ) : index === 2 ? (
                            <p>Top Contributor</p>
                          ) : (
                            <span />
                          )}
                        </div>

                        <div>
                          <h3>$ {item.total_amount}</h3>
                          <p>{moment(item?.createdAt).fromNow()}</p>
                        </div>
                      </div>
                    );
                  }
                )}

              <div className={style.supporterPaginationContainer}>
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
                  disabled={totalSupporters?.loading}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className={style.blogsContainer}>
        <div>
          <div>
            <h2>latest news and blog</h2>
            <button
              onClick={() => {
                navigate("/news-blog");
              }}
            >
              <span>MORE NEWS</span>
            </button>
          </div>

          <div className={style.blogCardContainer}>
            {latestArticles?.loading
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
                    />
                  );
                })
              : latestArticles?.data?.data?.nextArticles?.map((item, index) => {
                  return (
                    <BlogCard index={index} key={item.id} articleItem={item} />
                  );
                })}
          </div>

        </div>
      </section>
    </main>
  );
};

export default FeatureDetail;
