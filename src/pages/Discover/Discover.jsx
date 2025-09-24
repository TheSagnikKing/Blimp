import React, { useState } from "react";
import style from "./Discover.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { AnimalIcon, CommunityIcon, EducationIcon, EmergencyIcon, EnvironmentIcon, EventIcon, FamilyIcon, MedicalIcon, NonProfitIcon, SportIcon } from "../../icons";

const Discover = () => {
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
  ]

  return (
    <main>
      {/* <section className={style.discoverBannerContainer}>
        <div>
          <h2>Discover</h2>
          <p>Find causes you truly care about</p>

          <div className={style.filterWrapper}>
            <div>
              <p>Show me</p>
              <input type="text" />
            </div>

            <div>
              <p>Campaign's</p>
              <input type="text" />
            </div>

            <div>
              <p>Sorted by</p>
              <input type="text" />
            </div>
          </div>
        </div>
      </section> */}

      <section className={style.discoverSortContainer}>
        <div>
          <div>
            <h2>Discover</h2>
            <p>Find causes you truly care about</p>
          </div>

          <div>
            {
              sortCardData.map((item) => (
                <div key={item} className={style.sortCardItem}>
                  <div>
                    <div>{item?.icon}</div>
                    <p>{item?.label}</p>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </section>

      <section className={style.featureContainer}>
        <div>
          <div className={style.featureCardContainer}>
            {currentItems.map((item) => (
              <FeatureCard
                key={item.id}
                image={
                  "https://www.comece.eu/wp-content/uploads/sites/2/2025/02/shutterstock-gaza-people.jpg"
                }
                id={item.id}
              />
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
