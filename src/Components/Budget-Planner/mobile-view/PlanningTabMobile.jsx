import React from "react";
import { useTheme, useMediaQuery, Tabs, Tab } from "@mui/material";
import Category from "./Category";
import { COLORS } from "@/Components/utils/ConstantTheme";
import PaymentsMobile from "./PaymentsMobile";

const PlanningTabMobile = ({ categories, transactions, setTrackChanges, loading }) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = React.useState(0);
  //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tabs = [
    {
      label: "Expense",
      component: (
        <Category categories={categories} setTrackChanges={setTrackChanges} loading={loading}/>
      ),
    },
    {
      label: "Payments",
      component: <PaymentsMobile transactions={transactions} loading={loading} setTrackChanges={setTrackChanges}/>,
    },
  ];
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <div>
      <div>
        {tabs[activeTab].component}
        <Tabs
          value={activeTab} // Set the initial active tab index
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
      </div>
    </div>
  );
};

export default PlanningTabMobile;
