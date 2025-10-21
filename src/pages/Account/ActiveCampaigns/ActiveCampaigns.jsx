import React, { useEffect, useState } from "react";
import styles from "./ActiveCampaign.module.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import { useAuth } from "../../../context/AuthContext";
import { Skeleton } from "@mui/material";

const ActiveCampaigns = () => {

  const {
    userId
  } = useAuth()

  const navigate = useNavigate()

  const [activeCampaigns, setActiveCampaigns] = useState({
    loading: false,
    error: null,
    data: {},
  });

  useEffect(() => {
    if (userId) {
      const fetchActiveCampaigns = async () => {
        setActiveCampaigns((prev) => ({ ...prev, loading: true, error: null }));
        try {
          const { data } = await api.post("/get-campaigns", {
            userId: userId
          });

          if (data.code === 200) {
            setActiveCampaigns({ loading: false, error: null, data });
          } else {
            setActiveCampaigns({ loading: false, error: data.message, data: {} });
          }
        } catch (error) {
          setActiveCampaigns({ loading: false, error: error.message, data: {} });
        }
      }

      fetchActiveCampaigns()
    }

  }, [userId])


  console.log("activeCampaigns ", activeCampaigns)

  return (

    activeCampaigns?.loading ? (
      <>
        {
          [0, 1, 2].map((item) => {
            return (
              <Skeleton
                key={item}
                variant="rectangular"
                height={"25rem"}
                sx={{
                  width: {
                    xs: "100%", // mobile
                    sm: "100%", // tablet
                    md: "100%",  // desktop
                  },
                  marginBottom: "2rem"
                }}
              />
            )
          })
        }
      </>
    ) : activeCampaigns?.data?.data?.campaigns.length > 0 ? (
      <>
        {activeCampaigns?.data?.data?.campaigns?.map((item) => {
          return (
            <div className={styles.campaignCard} key={item}>
              <h2>{item?.campaign_name}</h2>

              <div className={styles.donationContainer}>
                <p>
                  Published by: <b>{item?.name}</b>
                </p>

                <ProgressBar
                  raisedAmount={item?.raisedAmount}
                  targetAmount={item?.targetAmount}
                  percentageAchieved={item?.percentageAchieved}
                  donationCount={item?.donationInfo?.length}
                  currency={item?.country?.currency}
                  symbol={item?.country?.symbol}
                />
              </div>

              <div>
                <button onClick={() => navigate("/cause")}>
                  view campaign
                </button>
                <button>promote campaign</button>
              </div>
            </div>
          );
        })}
      </>
    ) : (
      <div
        className={styles.noActiveCampaigns}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}>
        <div>
          <h1>No Active Campaigns</h1>
          <button
            onClick={() => {
              navigate("/start-campaign")
            }}>Start a campaign</button>
        </div>
      </div >
    )

    // true ? (
    // <div
    //   className={styles.noActiveCampaigns}
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100%"
    //   }}>
    //   <div>
    //     <h1>No Active Campaigns</h1>
    //     <button
    //       onClick={() => {
    //         navigate("/start-campaign")
    //       }}>Start a campaign</button>
    //   </div>
    // </div >
    // ) : (
    // <>
    //   {[1, 2, 3, 4].map((item) => {
    //     return (
    //       <div className={styles.campaignCard} key={item}>
    //         <h2>*Your Campaign Name*</h2>

    //         <div className={styles.donationContainer}>
    //           <p>
    //             Published by: <b>Arghya Ghosh</b>
    //           </p>
    //           <ProgressBar />
    //         </div>

    //         <div>
    //           <button onClick={() => navigate("/cause")}>
    //             view campaign
    //           </button>
    //           <button>promote campaign</button>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </>
    // )

  );
};

export default ActiveCampaigns;
