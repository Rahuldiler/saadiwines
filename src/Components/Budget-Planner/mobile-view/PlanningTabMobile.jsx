import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Category from "./Category";
import { COLORS } from "@/Components/utils/ConstantTheme";
import PaymentsMobile from "./PaymentsMobile";

const PlanningTabMobile = ({ category, loading, setTrackChanges }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    {
      label: "Expense",
      component: (
        <Category
          category={category}
          setTrackChanges={setTrackChanges}
          loading={loading}
        />
      ),
    },
    {
      label: "Payments",
      component: (
        <PaymentsMobile
          category={category}
          loading={loading}
          setTrackChanges={setTrackChanges}
        />
      ),
    },
  ];
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box>
      <Box>
        {tabs[activeTab].component}
        <Tabs
          value={activeTab}
          variant="fullWidth"
          onChange={handleTabChange}
          centered
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: COLORS.white,
            "& .MuiTabs-indicator": {
              top: 0,
              background: COLORS.primary,
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default PlanningTabMobile;
