import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Category from "./Category";
import SubCategory from "./SubCategory";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Payments from "./Payments";
import { getCategories } from "@/services/category/category";
import { COLORS } from "../utils/ConstantTheme";
import PlanningTabMobile from "./mobile-view/PlanningTabMobile";
import { useEffect } from "react";
import CustomCircularProgress from "@/Components/Budget-Planner/common/CustomCircularProgress";
export default function PlanningTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(0); // Budget planning and payments tabs
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [trackChange, setTrackChanges] = useState(false);
  const [selectedRow, setSelectedRow] = useState({
    rowIndex: 0,
    rowId: 0,
  });

  // const selectedSubCategoryData = (id) => {
  //   let data = [];
  //   if (id) {
  //     const found = categories.find((obj) => obj.id === id);
  //     if (found.subCategories.length == 0) {
  //       data.push({
  //         id: 52,
  //         name: "PORT --edited",
  //         expectedAmount: 12335565,
  //         categoryId: 53,
  //         amountPaid: 5000,
  //       });
  //     } else {
  //       data = found.subCategories;
  //     }
  //   }
  //   return data;
  // };

  useEffect(() => {
    setLoading(true);
    getCategories().then((category) => {
      setCategories(category.data);
      if (category.data.length > 0 && selectedRow.rowId == 0) {
        setSelectedRow({
          ...selectedRow,
          rowIndex: 0,
          rowId: category.data[0].id,
        });
      }
      setLoading(false);
    });
  }, [trackChange]);
  const tabs = [
    {
      label: "Budget Planning",
      component: (
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          p={4}
          columns={{ xs: 1, sm: 4, md: 8 }}
        >
          <Grid item xs={1} sm={4} md={2}>
            <Category
              categories={categories}
              setCategories={setCategories}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              loading={loading}
              setTrackChanges={setTrackChanges}
            />
          </Grid>
          <Grid item xs={1} sm={4} md={6}>
            {loading ? (
              <Box mt={20}>
                <CustomCircularProgress />
              </Box>
            ) : categories.length == 0 ? (
              <Box
                height={"50vh"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography>No Sub-Category Selected</Typography>
              </Box>
            ) : (
              <SubCategory
                subCategory={categories[selectedRow.rowIndex]}
                setTrackChanges={setTrackChanges}
                setSelectedRow={setSelectedRow}
                selectedRow={selectedRow}
              />
            )}
          </Grid>
        </Grid>
      ),
    },
    {
      label: "Payments",
      component: (
        <Payments
          data={categories}
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
      {isMobile ? (
        <PlanningTabMobile
          category={categories}
          setTrackChanges={setTrackChanges}
          loading={loading}
        />
      ) : (
        // Render table component for desktop view
        <Box mt={6}>
          <Tabs
            centered
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{ style: { background: COLORS.primary } }}
            // indicatorColor={'#BC8129'}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
          {tabs[activeTab].component}
        </Box>
      )}
    </Box>
  );
}
