import React, { useEffect, useState } from "react";
import style from "./Discover.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import {
  AnimalIcon,
  CommunityIcon,
  EducationIcon,
  EmergencyIcon,
  EnvironmentIcon,
  EventIcon,
  FamilyIcon,
  MedicalIcon,
  NonProfitIcon,
  SportIcon,
} from "../../icons";
import api from "../../api/api";
import Skeleton from "@mui/material/Skeleton";
import { useAuth } from "../../context/AuthContext";

const Discover = () => {
  const { user } = useAuth();

  const [campaignHistoryList, setCampaignHistoryList] = useState({
    loading: false,
    error: null,
    data: {},
  });

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Dummy data for campaigns
  const campaigns = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    title: `Campaign ${index + 1}`,
    description: "This is a dummy campaign description.",
  }));

  // Calculate total pages
  const totalPages = Math.ceil(campaigns.length / itemsPerPage);

  // Get items for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = campaigns.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const sortCardData = [
    { id: 1, icon: <MedicalIcon />, label: "Medical" },
    { id: 2, icon: <EmergencyIcon />, label: "Emergency" },
    { id: 3, icon: <AnimalIcon />, label: "Animals" },
    { id: 4, icon: <EducationIcon />, label: "Education" },
    { id: 5, icon: <NonProfitIcon />, label: "Non Profit" },

    { id: 6, icon: <EnvironmentIcon />, label: "Environment" },
    { id: 7, icon: <CommunityIcon />, label: "Community" },
    { id: 8, icon: <EventIcon />, label: "Event" },
    { id: 9, icon: <FamilyIcon />, label: "Family" },
    { id: 10, icon: <SportIcon />, label: "Sport" },
  ];

  useEffect(() => {
    if (user?.id) {
      const fetchCampaignHistory = async () => {
        setCampaignHistoryList((prev) => ({
          ...prev,
          loading: true,
          error: null,
        }));
        try {
          const { data } = await api.post("/get-discover-campaign", {
            userId: user.id,
          });
          if (data.code === 200) {
            setCampaignHistoryList({ loading: false, error: null, data });
          } else if (data.code === 400) {
            setCampaignHistoryList({
              loading: false,
              error: data.message,
              data: {},
            });
          }
        } catch (error) {
          setCampaignHistoryList({
            loading: false,
            error: error.message,
            data: {},
          });
        }
      };

      fetchCampaignHistory();
    }
    // get-discover-campaign
  }, [user]);


  return (
    <main>
      <section className={style.discoverSortContainer}>
        <div>
          <div>
            <h2>Discover</h2>
            <p>Find causes you truly care about</p>
          </div>

          <div>
            {sortCardData.map((item) => (
              <div key={item?.label} className={style.sortCardItem}>
                <div>
                  <div>{item?.icon}</div>
                  <p>{item?.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={style.featureContainer}>
        <div>
          <div className={style.featureCardContainer}>
            {campaignHistoryList?.loading
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
              : campaignHistoryList?.data?.data?.map((item) => (
                  <FeatureCard key={item.id} featureItem={item} />
                ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className={style.paginationContainer}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </section>
    </main>
  );
};

export default Discover;
