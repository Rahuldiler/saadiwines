import { Box, Button, Chip, Typography } from "@mui/material";
import React from "react";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { COLORS } from "@/Components/utils/ConstantTheme";
import { useRouter } from "next/router";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import BorderLinearProgress from "../Progress";
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: theme.spacing(1),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const SubCategoriesAccordian = ({
  subCategory,
  isEditingSubCategory,
  setIsEditingSubCategory,
  setOpenDialog,
  setOpenPaymentDialog,
  openPaymentDialog,
}) => {
  const calculateFinalCost = (data) => {
    const totalAmount = data.budgetTransaction.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);

    return totalAmount;
  };
  // const router = useRouter();
  // for Edit sub category
  const handleClick = (e, subCategory) => {
    e.stopPropagation();
    // console.log("---");
    setIsEditingSubCategory({
      ...isEditingSubCategory,
      isEditing: true,
      subCategory: subCategory,
    });
    // setSelectedItemForDialog(subCat);
    setOpenDialog(true);
  };
  const handleTransaction = (id) => {
    setOpenPaymentDialog({
      ...openPaymentDialog,
      openDialog: true,
      subCategoryId: id,
    });
  };
  const calculateBudgetTransaction = (items) => {
    if (items) {
      let total = items.reduce((sum, item) => {
        return (sum += +item.amount);
      }, 0);

      return total;
    }
    return 0;
  };
  const calculateProgress = (estimatedBudget, final) => {
    // console.log(estimatedBudget, final);
    let percentageDifference;

    if (estimatedBudget === 0 && final === 0) {
      percentageDifference = 0; // Both values are 0, so the percentage difference is 0%
    } else if (estimatedBudget === 0) {
      percentageDifference = Infinity; // `a` is 0, so the percentage difference is infinity
    } else {
      percentageDifference = (final / estimatedBudget) * 100;
    }
    // console.log(percentageDifference);
    return percentageDifference;
  };
  return (
    <AccordionDetails sx={{ p: 1, m: 1, px: 2 }}>
      <Box display={"flex"} justifyContent={"space-between"} mb={1}>
        <Box display={"flex"}>
          <Typography
            fontWeight={500}
            fontFamily={"inherit"}
            variant="subtitle2"
          >
            {subCategory.name}
          </Typography>
          <DriveFileRenameOutlineIcon
            fontSize="small"
            sx={{
              cursor: "pointer",
              color: COLORS.primary,
              // ml: 0.5,
              // mt: 0.2,
            }}
            onClick={(e) => handleClick(e, subCategory)}
          />
        </Box>
        <Chip
          // To edit sub category.
          onClick={() => handleTransaction(subCategory.id)}
          sx={{
            px: 1,
            py: 1,
            // mt: 1,
            backgroundColor: COLORS.primary,
            color: COLORS.white,
            fontSize: 20,
          }}
          size="small"
          label={"+"}
        ></Chip>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
          <Box ml={0} width={"100px"}>
            <Typography
              color={COLORS.gray}
              variant="caption"
              ml={1}
              textAlign={"center"}
            >
              Cost: ₹ {subCategory.expectedAmount}
            </Typography>
            <BorderLinearProgress
              progress={calculateProgress(
                subCategory.expectedAmount,
                calculateBudgetTransaction(subCategory.budgetTransaction)
              )}
            />
          </Box>
        </Box>
        <Typography color={COLORS.gray} variant="caption" mt={2}>
          Paid: ₹ {subCategory && calculateFinalCost(subCategory)}
        </Typography>
      </Box>
    </AccordionDetails>
  );
};

export default SubCategoriesAccordian;
