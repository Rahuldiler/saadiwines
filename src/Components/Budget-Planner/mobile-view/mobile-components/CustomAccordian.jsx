// import React from "react";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Box,
//   Typography,
// } from "@mui/material";
// import { GridExpandMoreIcon } from "@mui/x-data-grid";
// import { BORDER, BOXSHADOW, COLORS } from "@/Components/utils/ConstantTheme";
// const CustomAccordian = ({ title, amount, subCategories }) => {
//   return (
//     <Accordion sx={{boxShadow: BOXSHADOW.grayShadow,border:BORDER.primaryBorder}}>
//       <AccordionSummary
//         expandIcon={<GridExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//       >
//         <Box>
//           <Typography variant="body2">{title}</Typography>
//           <Typography variant="caption">₹ {amount}</Typography>
//         </Box>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography variant="subtitle2">{subCategories}</Typography>
//       </AccordionDetails>
//     </Accordion>
//   );
// };

// export default CustomAccordian;

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
import { useRouter } from "next/router";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddAndEditSubCategoryDialog from "../AddAndEditSubCategoryDialog";
import DialogBox from "./DialogBoxMobile";
import PaymentsDialog from "../PaymentsDialogMobile";
import BorderLinearProgress from "../../Progress";

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
  // const router = useRouter();
  const { id, name, expectedAmount, subCategory } = category;
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
                onClick={() => {
                  console.log(category.id);
                  setIsEditingCategory({
                    ...isEditingCategory,
                    isEditing: true,
                    categoryId: category.id,
                  });
                  handleClick();
                }}
                sx={{
                  cursor: "pointer",
                  color: COLORS.primary,
                  ml: 0.5,
                  mt: 0.2,
                }}
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
        {subCategory.map((el) => (
          <SubCategoriesAccordian
            key={el.id}
            subCategory={el}
            categories={allCategory}
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
          <RenderDialog
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
          {/* <DriveFileRenameOutlineIcon
            height={20}
            onClick={() => {
              console.log(category.id);
              setIsEditingCategory({
                ...isEditingCategory,
                isEditing: true,
                categoryId: category.id,
              });
              handleClick();
            }}
            sx={{ cursor: "pointer", color: COLORS.primary }}
          /> */}
        </Box>
      </Accordion>
    </Box>
  );
}

function RenderDialog({
  openDialog,
  handleCloseDialog,
  categoryId,
  setTrackChanges,
  isEditingSubCategory,
}) {
  // console.log(isEditingSubCategory);
  //  const obj = category.find((item) => item.id == isEditingCategory.categoryId);
  return (
    <DialogBox open={openDialog} onClose={handleCloseDialog}>
      <AddAndEditSubCategoryDialog
        onClose={handleCloseDialog}
        setTrackChanges={setTrackChanges}
        categoryId={categoryId}
        isEditingSubCategory={isEditingSubCategory}
      />
    </DialogBox>
  );
}
// open,
// setOpen,
// data,
// CateId,
// setSubCategoryData,
function RenderDialogForPayment({
  openDialog,
  handleCloseDialog,
  subCategoryId,
  setTrackChanges,
}) {
  //  const obj = category.find((item) => item.id == isEditingCategory.categoryId);
  return (
    <DialogBox open={openDialog} onClose={handleCloseDialog}>
      <PaymentsDialog
        onClose={handleCloseDialog}
        setTrackChanges={setTrackChanges}
        subCategoryId={subCategoryId}
      />
    </DialogBox>
  );
}
// {
//   "name" : "Razor --pay",
//   "subCategoryId": 11,
//   "dateAdded": "1685277946",
//   "details": "some transaction done in --pay",
//   "type": "CREDIT",
//   "amount": 100
// }