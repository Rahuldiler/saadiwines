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
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import BorderLinearProgress from "./Progress";
import { deleteCategory, editCategory } from "@/services/category/category";
import { addSubcategory } from "@/services/subCategory/subCategory";
import PaymentsDialog from "./PaymentsDialog";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CustomCircularProgress from "./CustomCircularProgress";
import Modal from "./Modal";
import { BORDER, COLORS } from "../utils/ConstantTheme";
import { RenderDialogForSubCategory } from "./mobile-view/mobile-components/RenderDialog";
import {
  calculateBudgetTransaction,
  calculateFinalCost,
  calculateProgress,
  calculateTotaEstimatedCost,
} from "./calculate";

const SubCategory = ({
  subCategory,
  setTrackChanges,
  setSelectedRow,
  selectedRow,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenCategory, setDialogOpenCategory] = useState(false);
  const [dialogOpenSubCategory, setDialogOpenSubCategory] = useState({
    dialogOpen: false,
    subCategory: {},
  });
  const [selectedItemForDialog, setSelectedItemForDialog] = useState(null);

  // EDIT SUB CATEGORY DIALOG
  const [isEditingSubCategory, setIsEditingSubCategory] = useState({
    isEditing: false,
    subCategory: {},
  });
  const [openDialog, setOpenDialog] = useState(false);
  const handleClick = (e, subCategory) => {
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
              ₹ {calculateTotaEstimatedCost(subCategory.subCategory)}
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

      {subCategory.length == 0 ? (
        <CustomCircularProgress />
      ) : (
        <>
          {selectedItemForDialog && (
            <PaymentsDialog
              data={selectedItemForDialog}
              open={dialogOpen}
              setOpen={setDialogOpen}
              setNotifyChanges={setTrackChanges}
            />
          )}
          <CategoryDialog
            open={dialogOpenCategory}
            category={subCategory}
            setOpen={setDialogOpenCategory}
            setTrackChanges={setTrackChanges}
          />
          <SubCategoryDialog
            open={dialogOpenSubCategory}
            setOpen={setDialogOpenSubCategory}
            expectedAmount={subCategory.expectedAmount}
            categoryId={subCategory.id}
            setNotifyChanges={setTrackChanges}
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
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    color={COLORS.gray}
                  >
                    EXPENSE
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{ whiteSpace: "pre-line" }}
                    variant="subtitle2"
                    fontWeight={300}
                    color={COLORS.gray}
                  >
                    ESTIMATED BUDGET
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    color={COLORS.gray}
                  >
                    PAID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{ whiteSpace: "pre-line" }}
                    variant="subtitle2"
                    fontWeight={300}
                    color={COLORS.gray}
                  >
                    ADD TRANSACTION
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    color={COLORS.gray}
                  >
                    PROGRESS
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subCategory &&
                subCategory.length != 0 &&
                subCategory.subCategories.map((subCat) => (
                  <TableRow key={subCat.id} sx={{ textAlign: "center" }}>
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
                          onClick={(e) => handleClick(e, subCat)}
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        id="estimatedBudget"
                        variant="body3"
                        color="textSecondary"
                        fontWeight={400}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {subCat.expectedAmount}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body3">
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
                          px: "4px",
                          backgroundColor: COLORS.primary,
                          color: COLORS.white,
                        }}
                        size="small"
                        label={"Add Transaction"}
                      ></Chip>
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
            onClick={() =>
              setDialogOpenSubCategory({
                ...dialogOpenSubCategory,
                dialogOpen: true,
              })
            }
          >
            <AddCircleOutlineIcon
              sx={{ mt: "0px", mr: "5px", color: COLORS.primary }}
            />
            <Typography variant="body3" fontWeight={400}>
              New Sub-category
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

function CategoryDialog({ open, setOpen, setTrackChanges, category }) {
  const [formData, setFormData] = useState({
    name: category?.name || "",
    expectedAmount: category?.expectedAmount || 0,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCateChange = () => {
    editCategory({
      ...category,
      name: formData.name,
      expectedAmount: formData.expectedAmount,
    }).then((res) => {
      setTrackChanges((p) => !p);
      setOpen(false);
    });
  };
  return (
    <div>
      <Modal
        open={open}
        saveCallback={handleCateChange}
        title={"Category"}
        setOpen={setOpen}
        fields={
          <>
            <TextField
              name="name"
              defaultValue={formData.name}
              sx={{
                border: 0,
                width: "100%",
                mb: 2,
                mt: 2,
              }}
              onChange={handleChange}
            />
          </>
        }
      />
    </div>
  );
}
function SubCategoryDialog({
  open,
  setOpen,
  categoryId,
  expectedAmount,
  setNotifyChanges,
}) {
  const [formData, setFormData] = useState({
    name: "",
    expectedAmount: expectedAmount,
  });
  const [errors, setErrors] = useState({});

  const postSubCategory = () => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.expectedAmount === 0) {
      newErrors.expectedAmount = "Amount is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      addSubcategory({ ...formData, categoryId: categoryId }).then((_) => {
        setNotifyChanges((prev) => !prev);
        setOpen(false);
      });
      setFormData({
        name: "",
        expectedAmount: 0,
      });
    }
  };
  const handleChange = (e) => {
    const value =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal
        open={open.dialogOpen}
        saveCallback={postSubCategory}
        title={"Sub Category"}
        setOpen={setOpen}
        fields={
          <Box>
            <TextField
              name="name"
              required
              error={!!errors.name}
              helperText={
                errors.name && (
                  <Typography variant="caption" sx={{ mx: "-10px" }}>
                    {errors.name}
                  </Typography>
                )
              }
              placeholder={"Name"}
              sx={{
                border: 0,
                mb: 2,
                mt: 2,
                width: "100%",
              }}
              onChange={handleChange}
            />
            <Typography>Enter Amount</Typography>
            <TextField
              required
              error={!!errors.expectedAmount}
              helperText={
                errors.expectedAmount && (
                  <Typography variant="caption" sx={{ mx: "-10px" }}>
                    {errors.expectedAmount}
                  </Typography>
                )
              }
              name="expectedAmount"
              type="number"
              placeholder={"Amount"}
              sx={{
                border: 0,
                mb: 2,
                width: "100%",
                mt: 2,
              }}
              onChange={handleChange}
            />
          </Box>
        }
      />
    </div>
  );
}

export default SubCategory;
