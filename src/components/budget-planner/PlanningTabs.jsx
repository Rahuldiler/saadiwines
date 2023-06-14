import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Category from "./Category";
import SubCategory from "./SubCategory";
import { Grid, Typography } from "@mui/material";
import Payments from "./Payments";
import { getCategories } from "@/services/category/category";
import CustomCircularProgress from "./CustomCircularProgress";
import { COLORS } from "../utils/ConstantTheme";
export default function PlanningTabs() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [trackChange, setTrackChanges] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({
    rowIndex: 0,
    rowId: 0,
  });

  const selectedSubCategoryData = (id) => {
    let data = [];
    if (id) {
      const found = categories.find((obj) => obj.id === id);
      if (found.subCategory.length == 0) {
        data.push({
          id: 5,
          categoryId: 6,
          name: "Please enter a sub-category",
          expectedAmount: 0,
          budgetTransaction: [],
        });
      } else {
        data = found.subCategory;
      }
    }
    return data;
  };

  React.useEffect(() => {
    setLoading(true);
    getCategories().then((category) => {
      setCategories(category.data);
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
            />
          </Grid>
          <Grid item xs={1} sm={4} md={6}>
            {loading ? (
              <Box mt={20}>
                <CustomCircularProgress />
              </Box>
            ) : selectedSubCategoryData(selectedRow.rowId).length == 0 ? (
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
                CateId={selectedRow}
                setTrackChanges={setTrackChanges}
              />
            )}
          </Grid>
        </Grid>
      ),
    },
    { label: "Payments", component: <Payments data={categories} /> },
  ];
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
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
  );
}
