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
import Skeleton from '@mui/material/Skeleton';
import api from "../../api/api";
import Pagination from "@mui/material/Pagination";

const FeatureDetail = () => {

  const navigate = useNavigate()

  const location = useLocation();
  const featureItem = location.state

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

  const [pageNo, setPageNo] = useState(1)


  useEffect(() => {
    if (featureItem.id) {
      const fetchCampaignDetails = async () => {
        try {
          setFeatureItemDetail((prev) => ({ ...prev, loading: true, error: null }));
          const { data } = await api.post("/view-campaign-history", { id: featureItem.id });
          if (data.code === 200) {
            setFeatureItemDetail({ loading: false, error: null, data });
          } else if (data.code === 400) {
            setFeatureItemDetail({ loading: false, error: data.message, data: {} });
          }
        } catch (error) {
          setFeatureItemDetail({ loading: false, error: error.message, data: {} });
        }
      }

      const fetchTotalSupporters = async () => {
        try {
          setTotalSupporters((prev) => ({ ...prev, loading: true, error: null }));
          const { data } = await api.post("/total-supporters", {
            id: featureItem.id,
            limit: 10,
            page: pageNo
          });

          if (data.code === 200) {
            setTotalSupporters({ loading: false, error: null, data });
          } else if (data.code === 400) {
            setTotalSupporters({ loading: false, error: data.message, data: {} });
          }

        } catch (error) {
          setTotalSupporters({ loading: false, error: error.message, data: {} });
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

      fetchCampaignDetails()
      fetchTotalSupporters()
      fetchLatestArticles()
    }
  }, [featureItem.id, pageNo])

  return (
    <main>
      <section className={style.featureDetailContainer}>
        <div>
          {
            featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"4rem"}
              // sx={{ bgcolor: "black" }}
              />
            ) : (
              <h2>{featureItemDetail?.data?.data?.campaign_name}</h2>
            )
          }

          {
            featureItemDetail?.loading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"56rem"}
              />
            ) : (
              <img src={featureItemDetail?.data?.data?.banner_image} alt="" />
            )
          }


          <div className={style.donationContainer}>
            {
              featureItemDetail?.loading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"4rem"}
                // sx={{ bgcolor: "black" }}
                />
              ) : (
                <p>
                  Published by: <b>{featureItemDetail?.data?.data?.campaigns?.fullname}</b>
                </p>
              )
            }

            {
              featureItemDetail?.loading ? (
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
                    percentageAchieved={featureItemDetail?.data?.data?.percentageAchieved}
                    donationCount={featureItemDetail?.data?.data?.donationInfo?.length}
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

                    <button onClick={() => {
                      navigate("/checkout")
                    }}>Donate</button>
                  </div>
                </>
              )
            }

          </div>

          <div>
            {
              featureItemDetail?.loading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"10rem"}
                // sx={{ bgcolor: "black" }}
                />
              ) : (
                <>
                  <h2>Campaign Details</h2>
                  <p>
                    {featureItemDetail?.data?.data?.campaign_details}
                  </p>
                </>
              )
            }

          </div>

          <div>
            {
              featureItemDetail?.loading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"10rem"}
                // sx={{ bgcolor: "black" }}
                />
              ) : (
                <>
                  <h2>Description</h2>
                  <p>
                    {featureItemDetail?.data?.data?.description}
                  </p>
                </>
              )
            }

          </div>

          <div>
            {
              featureItemDetail?.loading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"10rem"}
                // sx={{ bgcolor: "black" }}
                />
              ) : (
                <>
                  <h2>Raising fund description</h2>
                  <p>
                    {featureItemDetail?.data?.data?.rasing_funds_decription}
                  </p>
                </>
              )
            }

          </div>

          {/* <div>
            <p>
              Vivamus a dignissim nulla ornare sit aliquam elementum blandit. Leo
              in sem pellentesque viverra malesuada viverra eget aliquam:
            </p>
          </div>

          <ul>
            <li>
              <b>Nunc tortor et a ornare et placerat.</b> Tellus in ultricies
              risus accumsan turpis id nam. Maecenas proin sodales diam vel mauris
              facilisis arcu semper. Mi accumsan gravida dignissim turpis
              sollicitudin. At auctor sed facilisi massa amet. Est morbi aliquam
              sed orci.
            </li>

            <li>
              <b>Pulvinar aliquam sed egestas tempus aliquet sollicitudin.</b>{" "}
              Lectus et rhoncus venenatis interdum lectus nam. Amet curabitur
              cursus pulvinar nisl id morbi adipiscing. Nunc eget arcu enim ac
              pellentesque integer bibendum augue. Ut amet tortor auctor
              hendrerit. Massa at amet nisl mauris vulputate.
            </li>

            <li>
              <b>Accumsan quis vel habitasse arcu nisi sed.</b> Pharetra malesuada
              velit iaculis urna eu. Luctus lobortis lacus metus nec ullamcorper.
              Arcu nisl odio elit nunc. Arcu amet imperdiet cras volutpat.
              Facilisis euismod bibendum urna eu feugiat. Et morbi mauris ultrices
              massa tellus purus suspendisse nec. Magnis tempor aliquam elementum
              imperdiet posuere. Quis arcu ultricies id quisque leo pulvinar augue
              sit.
            </li>

            <li>
              <b>
                Arcu ultricies malesuada lectus nulla est nunc integer
                pellentesque magna.
              </b>{" "}
              Egestas malesuada faucibus arcu nunc elit leo quis interdum. Ac vel
              in commodo accumsan mollis cras massa posuere eget. Condimentum
              posuere velit cras velit tortor ridiculus sit. Lectus augue libero
              etiam sed nisl.
            </li>
          </ul> */}

          <div className={style.addGalleryContainer}>
            {
              featureItemDetail?.loading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"15rem"}
                // sx={{ bgcolor: "black" }}
                />
              ) : (
                featureItemDetail?.data?.data?.campaignsImages?.map((item, index) => {
                  return (
                    <img
                      key={item.id}
                      src={item.image}
                      alt=""
                    />
                  )
                })
              )

            }


          </div>

          <div className={style.addsContainer}>
            <h2>Run Ads / Causes section</h2>
          </div>

          <div className={style.supporterContainer}>
            <h2>Supporters({totalSupporters?.data?.data?.campaign?.donationInfo.length})</h2>
            <div>
              {totalSupporters?.data?.data?.campaign?.donationInfo?.length > 0 && totalSupporters?.data?.data?.campaign?.donationInfo?.map((item, index) => {
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
                        <h2>{item.is_anonymous ? "A" : `${item?.first_name?.slice(0, 1)}${item?.last_name?.slice(0, 1)}`}</h2>
                      </div>
                    </div>

                    <div>
                      <h3>{item.is_anonymous ? "anonymous" : `${item.first_name} ${item.last_name}`}</h3>
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
              })}

              <div className={style.supporterPaginationContainer}>
                <Pagination
                  count={10}
                  size="large"
                  sx={{
                    "& .MuiPaginationItem-page": {
                      fontSize: "1.4rem",
                    },
                  }}
                  value={pageNo}
                  onChange={(event, value) => setPageNo(value)}
                />
              </div>


              {/* <div className={style.supporterPaginationContainer}>
                <button style={{ backgroundColor: "#000" }}></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className={style.blogsContainer}>

        <div>
          <div>
            <h2>latest news and blog</h2>
            <button onClick={() => {
              navigate("/news-blog")
            }}>
              <span>more news</span>
            </button>
          </div>

          <div className={style.blogCardContainer}>
            {
              latestArticles?.loading ? (
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
                latestArticles?.data?.data?.nextArticles?.map((item, index) => {
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
        </div>
      </section>
    </main>
  );
};

export default FeatureDetail;

