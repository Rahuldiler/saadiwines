import Header from "@/components/common/Header";
import YourTemplate from "@/components/dashboard/YourTemplate";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [navItems, setNavItems] = useState([
    { title: "Templates", url: "/choose-template" },
    { title: "Wedding Info", url: "/form" },
  ]);

  const [userPreferenceData, setUserPreferenceData] = useState([]);

  useEffect(() => {
    getUserPreference().then((response) => {
      setUserPreferenceData(response);
      setNavItems([
        { title: "Templates", url: "/choose-template" },
        { title: "Wedding Info", url: "/form" },
        response[0].budgetPlanningEnabled && { title: "Budget", url: "/" },
        response[0].guestListEnabled && { title: "Guests", url: "/" },
      ]);
    });
  }, []);

  return (
    <Box>
      <Header navItems={navItems} isHome={false} />
      <YourTemplate />
    </Box>
  );
}

export default Dashboard;
