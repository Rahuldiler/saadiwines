import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import { COLORS } from "@/Components/utils/ConstantTheme";
import SubCategoriesAccordian from "../SubCategories";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  RenderDialogForPayment,
  RenderDialogForSubCategory,
} from "../../common/RenderDialog";
import { calculateTotaEstimatedCost } from "../../common/calculate";
import { deleteCategory } from "@/services/category/category";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export default function CustomAccordian({
  category,
  allCategory,
  handleClick,
  setIsEditingCategory,
  isEditingCategory,
  setTrackChanges,
  setIsEditingSubCategory,
  isEditingSubCategory,
}) {
  const { id, name, expectedAmount, subCategories } = category;
  const [openDialog, setOpenDialog] = useState(false);
  const [openPaymentDialog, setOpenPaymentDialog] = useState({
    openDialog: false,
    subCategoryId: 0,
  });
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setOpenPaymentDialog({ ...openPaymentDialog, openDialog: false });
  };
  const handleOpenDialog = () => {
    setIsEditingSubCategory({
      ...isEditingSubCategory,
      isEditing: false,
      subCategory: {},
    });
    setOpenDialog(true);
  };
  const handleCategoryEdit = () => {
    setIsEditingCategory({
      ...isEditingCategory,
      isEditing: true,
      categoryId: category.id,
    });
    handleClick();
  };
    // DELETE CATEGORY
    const handleCategoryDelete = (e,id) => {
      e.stopPropagation();
      deleteCategory(id).then(() => {
        setTrackChanges((p) => !p);
      });
    };
  return (
    <Box>
      <Accordion>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box width={"100%"}>
            <Box display={"flex"}>
              <Typography
                fontWeight={600}
                fontFamily={"inherit"}
                variant="subtitle1"
                fontSize={17}
              >
                {name}
              </Typography>
              <DriveFileRenameOutlineIcon
                fontSize="small"
                onClick={handleCategoryEdit}
                sx={{
                  cursor: "pointer",
                  color: COLORS.primary,
                  ml: 0.5,
                  mt: 0.2,
                }}
              />
              <DeleteOutlineIcon
                fontSize="small"
                sx={{
                  cursor: "pointer",
                  color: COLORS.primary,
                  ml: 0.5,
                  mt: 0.2,
                }}
                onClick={(e) => handleCategoryDelete(e,id)}
              />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Typography
                fontFamily={"inherit"}
                color={COLORS.gray}
                variant="caption"
              >
                Cost: ₹ {expectedAmount}
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        {subCategories.map((el) => (
          <SubCategoriesAccordian
            key={el.id}
            subCategory={el}
            categories={allCategory}
            setTrackChanges={setTrackChanges}
            setIsEditingSubCategory={setIsEditingSubCategory}
            isEditingSubCategory={isEditingSubCategory}
            setOpenDialog={setOpenDialog}
            setOpenPaymentDialog={setOpenPaymentDialog}
            openPaymentDialog={openPaymentDialog}
          />
        ))}
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mx={1}
        >
          {/*  SUB CATEGORY DIALOG */}
          <RenderDialogForSubCategory
            handleCloseDialog={handleCloseDialog}
            openDialog={openDialog}
            categoryId={id}
            category={category}
            setTrackChanges={setTrackChanges}
            isEditingSubCategory={isEditingSubCategory}
          />
          <RenderDialogForPayment
            handleCloseDialog={handleCloseDialog}
            openDialog={openPaymentDialog.openDialog}
            subCategoryId={openPaymentDialog.subCategoryId}
            setTrackChanges={setTrackChanges}
          />
          <Button
            onClick={handleOpenDialog}
            sx={{
              color: COLORS.primary,
              fontSize: "small",
              ml: 1,
              my: 0.5,
              fontWeight: "400",
            }}
            startIcon={<ControlPointIcon />}
          >
            Add Expense
          </Button>
        </Box>
      </Accordion>
    </Box>
  );
}
