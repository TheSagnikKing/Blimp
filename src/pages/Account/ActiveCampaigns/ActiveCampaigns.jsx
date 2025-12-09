import React, { useEffect, useState } from "react";
import styles from "./ActiveCampaign.module.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import { useAuth } from "../../../context/AuthContext";
import { Skeleton } from "@mui/material";

const ActiveCampaigns = () => {
  const { userId } = useAuth();

  const navigate = useNavigate();

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
            userId: userId,
          });

          if (data.code === 200) {
            setActiveCampaigns({ loading: false, error: null, data });
          } else {
            setActiveCampaigns({
              loading: false,
              error: data.message,
              data: {},
            });
          }
        } catch (error) {
          setActiveCampaigns({
            loading: false,
            error: error.message,
            data: {},
          });
        }
      };

      fetchActiveCampaigns();
    }
  }, [userId]);

  return activeCampaigns?.loading ? (
    <>
      {[0, 1, 2].map((item) => {
        return (
          <Skeleton
            key={item}
            variant="rectangular"
            height={"25rem"}
            sx={{
              width: {
                xs: "100%", // mobile
                sm: "100%", // tablet
                md: "100%", // desktop
              },
              marginBottom: "2rem",
            }}
          />
        );
      })}
    </>
  ) : activeCampaigns?.data?.data?.campaigns.length > 0 ? (
    <>
      {activeCampaigns?.data?.data?.campaigns?.map((item) => {
        return (
          <div className={styles.campaignCard} key={item.id}>
            <div>
              <h2>{item?.campaign_name}</h2>
              <p
                style={{
                  backgroundColor:
                    item?.is_approved === 0
                      ? "rgba(255, 213, 128, 0.25)" // warm amber
                      : item?.is_approved === 1
                      ? "rgba(140, 230, 150, 0.25)" // warm soft green
                      : "rgba(255, 120, 120, 0.25)", // warm soft red

                  color:
                    item?.is_approved === 0
                      ? "#b87900" // darker amber
                      : item?.is_approved === 1
                      ? "#2a8c44" // classy green
                      : "#c33333", // warm red
                }}
              >
                {item?.is_approved === 0
                  ? "pending"
                  : item?.is_approved === 1
                  ? "approved"
                  : "rejected"}
              </p>
            </div>
            <div className={styles.donationContainer}>
              <p>
                Published by: <b>{item?.name}</b>
              </p>

              <ProgressBar
                raisedAmount={item?.raisedAmount}
                targetAmount={item?.target_amount}
                percentageAchieved={item?.percentageAchieved}
                donationCount={item?.donationInfo?.length}
                currency={item?.country?.currency}
                symbol={item?.country?.symbol}
              />
            </div>

            <div>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/cause", {
                    state: item,
                  });
                }}
              >
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
        height: "100%",
      }}
    >
      <div>
        <h1>No Active Campaigns</h1>
        <button
          onClick={() => {
            navigate("/start-campaign");
          }}
        >
          Start a campaign
        </button>
      </div>
    </div>
  );
};

export default ActiveCampaigns;
