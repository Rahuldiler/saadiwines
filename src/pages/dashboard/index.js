import Header from "@/Components/Common/Header";
import { getTemplateKey } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React, { useEffect } from "react";

function Dashboard() {
  const navItems = [
    { title: "Templates", url: "/choose-template" },
    { title: "Wedding Info", url: "/form" },
    { title: "Budget", url: "/" },
    { title: "Guests", url: "/" },
  ];

  useEffect(() => {
    getTemplateKey().then((response) => {
      // localStorage.setItem("templateKey", response.userIdKey);
    });

    getUserPreference().then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Box>
      <Header navItems={navItems} isHome={false} />
    </Box>
  );
}

export default Dashboard;
