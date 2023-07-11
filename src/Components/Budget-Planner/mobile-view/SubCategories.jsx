import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { COLORS } from "@/Components/utils/ConstantTheme";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderLinearProgress from "../common/Progress";
import { calculateProgress } from "../common/calculate";
import { deleteSubCategory } from "@/services/subCategory/subCategory";
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
  setTrackChanges
}) => {
  // for Edit sub category
  const handleClick = (e, subCategory) => {
    e.stopPropagation();
    setIsEditingSubCategory({
      ...isEditingSubCategory,
      isEditing: true,
      subCategory: subCategory,
    });
    // setSelectedItemForDialog(subCat);
    setOpenDialog(true);
  };
  // Delete SubCategory
  const handleDeleteSubCategory = (e,id) => {
    deleteSubCategory(id).then(() => {
      setTrackChanges((p) => !p);
    });
  };
  const handleTransaction = (id) => {
    setOpenPaymentDialog({
      ...openPaymentDialog,
      openDialog: true,
      subCategoryId: id,
    });
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
              mx: 1,
            }}
            onClick={(e) => handleClick(e, subCategory)}
          />
          <DeleteOutlineIcon
            fontSize="small"
            sx={{
              cursor: "pointer",
              color: COLORS.primary,
            }}
            onClick={(e) => handleDeleteSubCategory(e, subCategory.id)}
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
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
          <Box ml={0} maxWidth={"100px"} overflow={"clip"}>
            <Typography
              color={COLORS.gray}
              variant="caption"
              // ml={1}
              textAlign={"center"}
            >
              Cost: ₹ {subCategory.expectedAmount}
            </Typography>
            <BorderLinearProgress
              progress={calculateProgress(
                subCategory.expectedAmount,
                subCategory.amountPaid
              )}
            />
          </Box>
        </Box>
        <Typography color={COLORS.gray} variant="caption" mt={2}>
          Paid: ₹ {subCategory && subCategory.amountPaid}
        </Typography>
      </Box>
    </AccordionDetails>
  );
};

export default SubCategoriesAccordian;
