import { Box } from "@mui/material";
import PlanningTable from "@/Components/Budget-Planner/PlanningTabs";
import { useEffect } from "react";
import { getUserPreference } from "@/services/user-preference/userPreference";
const index = () => {
  useEffect(() => {
    getUserPreference();
  }, []);
  return (
    <Box>
      <PlanningTable />
    </Box>
  );
};

export default index;
