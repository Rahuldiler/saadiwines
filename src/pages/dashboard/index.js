import {getUserPreference} from "@/services/user-preference/userPreference";
import {Box} from "@mui/material";
import React, {useEffect, useState} from "react";
import Header from "@/Components/common/Header";
import YourTemplate from "@/Components/dashboard/YourTemplate";

function Dashboard() {
  const [navItems, setNavItems] = useState([
    { id: 1, title: "Templates", url: "/choose-template" },
    { id: 2, title: "Wedding Info", url: "/form" },
  ]);

  const [userPreferenceData, setUserPreferenceData] = useState([]);

  const getUserPreferenceData = async () => {
    const response = await getUserPreference();
    setUserPreferenceData(response);
    setNavItems([
      { id: 1, title: "Templates", url: "/choose-template" },
      { id: 2, title: "Wedding Info", url: "/form" },
      response[0].budgetPlanningEnabled && {
        id: 3,
        title: "Budget",
        url: "/",
      },
      response[0].guestListEnabled && { id: 4, title: "Guests", url: "/" },
    ]);
  };

  useEffect(() => {
    getUserPreferenceData();
  }, []);

  return (
    <Box>
      <Header navItems={navItems} isHome={false} />
      <YourTemplate />
    </Box>
  );
}

export default Dashboard;
