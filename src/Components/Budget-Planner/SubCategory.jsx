import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Divider,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import BorderLinearProgress from "./common/Progress";
import { deleteCategory, editCategory } from "@/services/category/category";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { BORDER, COLORS } from "../utils/ConstantTheme";
import {
  RenderDialogForCategory,
  RenderDialogForPayment,
  RenderDialogForSubCategory,
} from "./common/RenderDialog";
import { calculateProgress } from "./common/calculate";
import { CustomHeader } from "./common/table-components/CustomHeader";
import { deleteSubCategory } from "@/services/subCategory/subCategory";
// edit category, edit and add sub category, add transactions reset the rowId to 0

const SubCategory = ({
  subCategory,
  setTrackChanges,
  setSelectedRow,
  selectedRow,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenCategory, setDialogOpenCategory] = useState(false);

  const [selectedItemForDialog, setSelectedItemForDialog] = useState(null);

  // EDIT SUB CATEGORY DIALOG
  const [isEditingSubCategory, setIsEditingSubCategory] = useState({
    isEditing: false,
    subCategory: {},
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditingCategory, setIsEditingCategory] = useState({
    isEditing: false,
    categoryId: 0,
  });
  const handleAddSubCategory = (e, subCategory) => {
    e.stopPropagation();
    setIsEditingSubCategory({
      ...isEditingSubCategory,
      isEditing: false,
      subCategory: {},
    });
    setOpenDialog(true);
  };
  const handleEditSubCategory = (e, subCategory) => {
    e.stopPropagation();
    setIsEditingSubCategory({
      ...isEditingSubCategory,
      isEditing: true,
      subCategory: subCategory,
    });
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // DELETE CATEGORY
  const handleCategoryDelete = (id) => {
    deleteCategory(id).then(() => {
      setTrackChanges((p) => !p);
      setSelectedRow({ ...selectedRow, rowId: 0, rowIndex: 0 });
    });
  };
  // Delete SubCategory
  const handleDeleteSubCategory = (id) => {
    deleteSubCategory(id).then(() => {
      setTrackChanges((p) => !p);
    });
  };

  return (
    <Box
      sx={{
        overflow: "auto",
        py: 6,
        px: 3,
        m: 0,
        border: BORDER.primaryBorder,
        borderRadius: "7px",
      }}
    >
      <Box textAlign={"center"}>
        <Box
          display={"flex"}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h4" fontWeight={"bold"} mr={1}>
            {subCategory.name}
          </Typography>
          <DriveFileRenameOutlineIcon
            height={20}
            onClick={() => {
              setIsEditingCategory({
                ...isEditingCategory,
                isEditing: true,
                categoryId: subCategory.id,
              });
              setDialogOpenCategory(true);
            }}
            sx={{ cursor: "pointer", color: COLORS.primary }}
          />
        </Box>

        <Box display={"flex"} justifyContent={"center"} mb={5}>
          <Typography variant="body3" mr={2}>
            Estimated budget:{" "}
            <span style={{ fontWeight: "bold", color: COLORS.primary }}>
              {" "}
              ₹ {subCategory.expectedAmount}
            </span>
          </Typography>
          <Typography variant="body3" mr={2}>
            Final Cost:{" "}
            <span style={{ fontWeight: "bold", color: COLORS.green }}>
              {" "}
              ₹ {subCategory.finalCost}
            </span>
          </Typography>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => handleCategoryDelete(subCategory.id)}
          >
            <DeleteOutlineIcon sx={{ color: COLORS.primary, mb: 0.4 }} />
            <Typography variant="body3">Remove</Typography>
          </Box>
        </Box>
        <Divider />
      </Box>

      {/* {subCategory.length == 0 ? (
        <CustomCircularProgress />
      ) : ( */}
      <>
        {selectedItemForDialog && (
          <RenderDialogForPayment
            handleCloseDialog={() => setDialogOpen(false)}
            openDialog={dialogOpen}
            subCategoryId={selectedItemForDialog.id}
            setTrackChanges={setTrackChanges}
            isDesktop
          />
        )}
        <RenderDialogForCategory
          openDialog={dialogOpenCategory}
          handleCloseDialog={() => setDialogOpenCategory(false)}
          category={subCategory}
          setTrackChanges={setTrackChanges}
          isEditingCategory={isEditingCategory}
          isDesktop={true}
        />
        <RenderDialogForSubCategory
          handleCloseDialog={handleCloseDialog}
          openDialog={openDialog}
          categoryId={subCategory.id}
          isDesktop
          setTrackChanges={setTrackChanges}
          isEditingSubCategory={isEditingSubCategory}
        />
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <CustomHeader title={"EXPENSE"} alignment={"start"} />
              <CustomHeader title={"ESTIMATED BUDGET"} alignment={"start"} />
              <CustomHeader title={"PAID"} alignment={"start"} />
              <CustomHeader title={"ADD TRANSACTION"} alignment={"start"} />
              <CustomHeader title={"DELETE"} alignment={"start"} />
              <CustomHeader title={"PROGRESS"} alignment={"start"} />
            </TableRow>
          </TableHead>
          <TableBody>
            {subCategory &&
              subCategory.length != 0 &&
              subCategory.subCategories.map((subCat) => (
                <TableRow key={subCat.id}>
                  <TableCell id="expense">
                    <Box display={"flex"}>
                      <Typography
                        style={{ whiteSpace: "pre-line" }}
                        variant="body3"
                        fontWeight={600}
                      >
                        {subCat.name}
                      </Typography>
                      <DriveFileRenameOutlineIcon
                        fontSize="small"
                        sx={{
                          cursor: "pointer",
                          color: COLORS.primary,
                          ml: 0.5,
                          mb: 0.2,
                        }}
                        onClick={(e) => handleEditSubCategory(e, subCat)}
                      />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ pl: 3 }}>
                    <Typography
                      variant="body3"
                      fontWeight={500}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {subCat.expectedAmount}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ pl: 3 }}>
                    <Typography variant="body3" fontWeight={500}>
                      {subCat.amountPaid}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      setSelectedItemForDialog(subCat);
                      setDialogOpen(true);
                    }}
                  >
                    <Chip
                      sx={{
                        px: 1,
                        ml: 1,
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                        cursor: "pointer",
                      }}
                      size="small"
                      label={"Add Transaction"}
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      handleDeleteSubCategory(subCat.id);
                    }}
                  >
                    <Chip
                      sx={{
                        px: 1,
                        // ml: -1,
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                        cursor: "pointer",
                      }}
                      size="small"
                      label={"Delete"}
                    />
                  </TableCell>
                  <TableCell>
                    <BorderLinearProgress
                      progress={calculateProgress(
                        subCat.expectedAmount,
                        subCat.amountPaid
                      )}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Box
          sx={{ display: "flex", cursor: "pointer", pt: "20px" }}
          onClick={handleAddSubCategory}
        >
          <AddCircleOutlineIcon
            sx={{ mt: "0px", mr: "5px", color: COLORS.primary }}
          />
          <Typography variant="body3" fontWeight={400}>
            New Sub-category
          </Typography>
        </Box>
      </>
      {/* )} */}
    </Box>
  );
};

export default SubCategory;
