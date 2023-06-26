import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "@/Components/common/Header";
import YourTemplate from "@/Components/dashboard/YourTemplate";
import Notification from "@/Components/common/Notification";
import Loader from "@/Components/common/Loader";

function Dashboard() {
  const [navItems, setNavItems] = useState([
    { id: 1, title: "Templates", url: "/choose-template" },
    { id: 2, title: "Wedding Info", url: "/form" },
  ]);

  const [userPreferenceData, setUserPreferenceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUserPreferenceData = async () => {
    const response = await getUserPreference();
    setUserPreferenceData(response);
    setNavItems([
      ...navItems,
      response?.budgetPlanningEnabled && {
        id: 3,
        title: "Budget",
        url: "/budget-planner",
      },
      response?.guestListEnabled && { id: 4, title: "Guests", url: "/guests" },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    getUserPreferenceData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader message="Loading dashboard page" />
      ) : (
        <Box>
          <Header navItems={navItems} isHome={false} />
          <YourTemplate userPreferenceData={userPreferenceData} />
        </Box>
      )}
    </>
  );
}

export default Dashboard;
