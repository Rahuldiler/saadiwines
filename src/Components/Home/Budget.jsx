import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BudgetCard from "../Common/BudgetCard";

function Budget() {
  const budgetLists = [
    {
      title: "Let us do the math",
      info: "Enter your wedding budget and we’ll calculate estimated costs by category for you.",
      img: "/assets/OKBWRX1.png",
      mt: 20,
    },
    {
      title: "Customise as needed",
      info: "Adjust your budget according to your wedding and create new categories as needed.",
      img: "/assets/money.png",
    },
    {
      title: "Track your expenses",
      info: "Monitor your spending and get a breakdown of your wedding expenses.",
      img: "/assets/pie.png",
      mt: 20,
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
          Your Budget Planner will keep your budget and payment deadlines under
          control.
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
