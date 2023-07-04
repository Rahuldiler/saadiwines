import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BudgetCard from "../common/BudgetCard";

function Budget() {
  const budgetLists = [
    {
      title: "Let us do the math",
      info: "Enter your wedding budget and we’ll calculate estimated costs by category for you.",
      img: "/assets/icon/Let us do the math.svg",
    },
    {
      title: "Customise as needed",
      info: "Adjust your budget according to your wedding and create new categories as needed.",
      img: "/assets/icon/Customise as needed.svg",
    },
    {
      title: "Track your expenses",
      info: "Monitor your spending and get a breakdown of your wedding expenses.",
      img: "/assets/icon/Track your expenses.svg",
    },
  ];
  return (
    <section id="budget-planning" style={{ background: "#FBF8F8" }}>
      <Box
        sx={{ py: { lg: 16, xs: 10 }, px: { lg: 0, xs: "20px" } }}
        className="layoutMargin"
      >
        <Typography
          variant="h2"
          className="vibeFont"
          sx={{ color: "#bc8129", textAlign: "center" }}
        >
          Budget Planning
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#000", fontSize: "18px", mt: 2, textAlign: "center" }}
        >
          Failing to plan is planning to Fail! Our state of the art budget
          planner, keeps you informed about all the major expenses.
          <br></br>
          Decide your budget for all major preset categories, and keep your
          expenses in check by eliminating last minute miscellaneous expanses.
        </Typography>
        <Grid container spacing={{ lg: 8, xs: 0 }}>
          {budgetLists.map((budgetList, index) => {
            return (
              <Grid lg={4} item key={index}>
                <BudgetCard budgetList={budgetList} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
}

export default Budget;
