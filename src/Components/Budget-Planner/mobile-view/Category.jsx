import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { COLORS } from "@/Components/utils/ConstantTheme";
import CustomAccordian from "./common/CustomAccordian";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { RenderDialogForCategory } from "../common/RenderDialog";
import { calculateTotaEstimatedCost } from "../common/calculate";
const Category = ({ category, loading, setTrackChanges }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditingCategory, setIsEditingCategory] = useState({
    isEditing: false,
    categoryId: 0,
  });
  const [isEditingSubCategory, setIsEditingSubCategory] = useState({
    isEditing: false,
    subCategory: {},
  });
  const handleAddCategory = () => {
    setIsEditingCategory({
      ...isEditingCategory,
      isEditing: false,
      categoryId: 0,
    });
    setOpenDialog(true);
  };
  const RenderGridItem = ({ icon, title, amount, handleClick }) => {
    return (
      <Grid item xs mt={2}>
        {icon}
        <Typography
          letterSpacing={"1.3"}
          variant="subtitle1"
          fontWeight={"300"}
        >
          {title}
        </Typography>
        <Typography fontWeight={"600"} variant="button" mt="2">
          ₹ {amount}
        </Typography>
        <br />
      </Grid>
    );
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const navigateToNewBudget = () => {
    setOpenDialog(true);
  };
  return (
    <Box mb={8}>
      <Box
        display={"flex"}
        m={2}
        color={COLORS.gray}
        onClick={handleCloseDialog}
      >
        <ArrowBackIosIcon fontSize="10px" sx={{ mt: 0.3 }} />
        <Typography variant="caption" fontWeight={400} fontFamily={"inherit"}>
          BUDGET PLANNER
        </Typography>
      </Box>
      <Box display={"flex"} mx={2} my={1} justifyContent={"space-between"}>
        <Typography
          variant="h5"
          color="initial"
          fontFamily={"inherit"}
          fontWeight={500}
        >
          Budget
        </Typography>
        <Button
          sx={{ color: COLORS.primary, fontSize: "small" }}
          startIcon={<ControlPointIcon fontSize="small" />}
          onClick={handleAddCategory}
        >
          ADD Category
        </Button>
      </Box>
      <Divider />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container textAlign={"center"} py={1}>
            <RenderGridItem
              icon={<AccountBalanceWalletOutlinedIcon />}
              title="ESTIMATED COST"
              amount={category[0]?.expectedAmount || 0}
              handleClick={() => {}}
              isEditable={true}
            />
            <RenderDialogForCategory
              handleCloseDialog={handleCloseDialog}
              openDialog={openDialog}
              category={category}
              setTrackChanges={setTrackChanges}
              isEditingCategory={isEditingCategory}
            />
            <Divider orientation="vertical" flexItem></Divider>
            <Grid item xs>
              <RenderGridItem
                icon={<CurrencyRupeeOutlinedIcon />}
                title="FINAL COST"
                amount={category[0]?.finalCost || 0}
                handleClick={() => {}}
              />
            </Grid>
          </Grid>
          {category.length == 0 && (
            <Typography textAlign={"center"} mt={5}>
              No categories. Please add one
            </Typography>
          )}
          {category.map((item) => {
            return (
              <CustomAccordian
                key={item.id}
                category={item}
                allCategory={category}
                handleClick={navigateToNewBudget}
                setIsEditingCategory={setIsEditingCategory}
                isEditingCategory={isEditingCategory}
                setTrackChanges={setTrackChanges}
                setIsEditingSubCategory={setIsEditingSubCategory}
                isEditingSubCategory={isEditingSubCategory}
              />
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Category;
