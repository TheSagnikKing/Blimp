import React, { useEffect, useState } from "react";
import styles from "./DonationHistory.module.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import { Skeleton } from "@mui/material";

const DonationHistory = () => {

  const {
    userId
  } = useAuth()

  const navigate = useNavigate()

  const [donationHistory, setDonationHistory] = useState({
    loading: false,
    error: null,
    data: {},
  });


  useEffect(() => {
    if (userId) {
      const fetchDraftCampaigns = async () => {
        setDonationHistory((prev) => ({ ...prev, loading: true, error: null }));
        try {
          const { data } = await api.post("/stopped-campaign-history", {
            userId: userId
          });

          if (data.code === 200) {
            setDonationHistory({ loading: false, error: null, data });
          } else {
            setDonationHistory({ loading: false, error: data.message, data: {} });
          }
        } catch (error) {
          setDonationHistory({ loading: false, error: error.message, data: {} });
        }
      }

      fetchDraftCampaigns()
    }

  }, [userId])

  return (
    donationHistory?.loading ? (
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
    ) : donationHistory?.data?.data?.length > 0 ? (
      <>
        {donationHistory?.data?.data?.map((item) => {
          return (
            <div className={styles.campaignCard} key={item.id}>
              <h2>{item?.campaign_name}</h2>

              <div className={styles.donationContainer}>
                <p>
                  Published by: <b>{item?.name}</b>
                </p>

                <ProgressBar
                  raisedAmount={item?.raisedAmount || 0}
                  targetAmount={item?.targetAmount || 0}
                  percentageAchieved={item?.percentageAchieved || 0}
                  donationCount={item?.donationInfo?.length || 0}
                  currency={item?.country?.currency || ""}
                  symbol={item?.country?.symbol || ""}
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
        className={styles.noDonationHistory}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}>
        <div>
          <h1>No donation history</h1>
          <button
            onClick={() => {
              navigate("/start-campaign")
            }}>Start a campaign</button>
        </div>
      </div >
    )
  );
};

export default DonationHistory;
