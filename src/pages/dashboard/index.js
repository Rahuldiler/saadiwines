import Header from "@/Components/common/Header";
import { Box } from "@mui/material";
import React from "react";

function Dashboard() {
    const navItems = [
        { title: "Templates", url: "/choose-template" },
        { title: "Wedding Info", url: "/form" },
        { title: "Budget", url: "/" },
        { title: "Guests", url: "/" },
    ];

    return (
        <Box>
            <Header navItems={navItems} isHome={false} />
        </Box>
    );
}

export default Dashboard;
