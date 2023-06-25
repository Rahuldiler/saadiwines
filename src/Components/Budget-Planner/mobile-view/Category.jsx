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
import CustomAccordian from "./mobile-components/CustomAccordian";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import DialogBox from "./mobile-components/DialogBoxMobile";
import AddCategoryDialog from "./AddCategoryDialog";
import { RenderDialogForCategory } from "./mobile-components/RenderDialog";
const Category = ({ categories, loading, setTrackChanges }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditingCategory, setIsEditingCategory] = useState({
    isEditing: false,
    categoryId: 0,
  });
  const [isEditingSubCategory, setIsEditingSubCategory] = useState({
    isEditing: false,
    subCategory: {},
  });
  const router = useRouter();
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
        {/* {isEditable && (
          <Button
            onClick={handleClick}
            sx={{ color: COLORS.primary, fontSize: "small" }}
          >
            Edit
          </Button>
        )} */}
      </Grid>
    );
  };
  const RenderGrayText = ({ title, amount }) => {
    return (
      <>
        <Typography
          as="span"
          fontFamily={"inherit"}
          variant="subtitle2"
          color={COLORS.gray}
          fontWeight={400}
        >
          {title}
        </Typography>
        <Typography
          as="span"
          fontFamily={"inherit"}
          variant="subtitle2"
          color={COLORS.gray}
          fontWeight={600}
        >
          {amount}
        </Typography>
      </>
    );
  };

  const calculateTotaEstimatedCost = (items) => {
    if (items) {
      let total = items.reduce((sum, item) => {
        return (sum += +item.expectedAmount);
      }, 0);

      return total;
    }
    return 0;
  };
  const calculateFinalCost = (items) => {
     if (items) {
      let total = items.reduce((sum, item) => {
        return (sum += +item.finalCost);
      }, 0);

      return total;
    }
    return 0;
  };
  const navigateToNewBudget = () => {
    // to add categories
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Box mb={8}>
      <Box
        display={"flex"}
        m={2}
        color={COLORS.gray}
        onClick={() => router.back()}
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
          onClick={() => {
            setIsEditingCategory({
              ...isEditingCategory,
              isEditing: false,
              categoryId: 0,
            });
            navigateToNewBudget();
          }}
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
              amount={calculateTotaEstimatedCost(categories)}
              handleClick={() => {}}
              isEditable={true}
            />
            <RenderDialogForCategory
              handleCloseDialog={handleCloseDialog}
              openDialog={openDialog}
              category={categories}
              setTrackChanges={setTrackChanges}
              isEditingCategory={isEditingCategory}
            />
            <Divider orientation="vertical" flexItem></Divider>
            <Grid item xs>
              <RenderGridItem
                icon={<CurrencyRupeeOutlinedIcon />}
                title="FINAL COST"
                amount={calculateFinalCost(categories)}
                handleClick={() => {}}
              />
            </Grid>
          </Grid>
          {categories.length == 0 && (
            <Typography textAlign={"center"} mt={5}>
              No categories. Please add one
            </Typography>
          )}
          {categories.map((item) => {
            // console.log(item)
            return (
              <CustomAccordian
                key={item.id}
                category={item}
                allCategory={categories}
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
