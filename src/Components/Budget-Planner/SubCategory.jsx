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
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import BorderLinearProgress from "./Progress";
import { editCategory } from "@/services/category/category";
import {
  addSubcategory,
  editSubcategory,
} from "@/services/subCategory/subCategory";
import PaymentsDialog from "./PaymentsDialog";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CustomCircularProgress from "./CustomCircularProgress";
import Modal from "./Modal";
import { BORDER, COLORS } from "../utils/ConstantTheme";

const SubCategory = ({ subCategory, setTrackChanges }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenCategory, setDialogOpenCategory] = useState(false);
  const [dialogOpenSubCategory, setDialogOpenSubCategory] = useState({
    dialogOpen: false,
    subCategory: {},
  });
  const [selectedItemForDialog, setSelectedItemForDialog] = useState(null);

  const calculateTotaEstimatedCost = (items) => {
    let total = items.reduce((sum, item) => {
      return (sum += +item.expectedAmount);
    }, 0);
    return total;
  };

  const calculateFinalCost = (data) => {
    let totalAmount = 0;

    for (const object of data) {
      let objectAmount = 0;

      if (object.budgetTransaction.length > 0) {
        for (const transaction of object.budgetTransaction) {
          objectAmount += transaction.amount;
        }
      }

      totalAmount += objectAmount;
    }

    return totalAmount;
  };

  // Calculataion inside PAID column->
  const calculateBudgetTransaction = (items) => {
    let total = items.reduce((sum, item) => {
      return (sum += +item.amount);
    }, 0);
    return total || 0;
  };

  const calculateProgress = (estimatedBudget, final) => {
    let percentageDifference;

    if (estimatedBudget === 0 && final === 0) {
      percentageDifference = 0; // Both values are 0, so the percentage difference is 0%
    } else if (estimatedBudget === 0) {
      percentageDifference = Infinity; // `a` is 0, so the percentage difference is infinity
    } else {
      percentageDifference = (final / estimatedBudget) * 100;
    }

    return percentageDifference;
  };

  const editeSubCategoryFun = (id, categoryId) => {};
  return (
    <Box
      sx={{
        overflow: "auto",
        p: 4,
        m: 0,
        border: BORDER.primaryBorder,
        borderRadius: "7px",
      }}
    >
      <Box textAlign={"end"}>
        <CloseIcon fontSize={"large"} />
      </Box>

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
              ₹ {subCategory.expectedAmount}
            </span>
          </Typography>
          <Typography variant="body3" mr={2}>
            Final Cost:{" "}
            <span style={{ fontWeight: "bold", color: COLORS.green }}>
              {" "}
              ₹{" "}
              {subCategory.subCategory &&
                calculateFinalCost(subCategory.subCategory)}
            </span>
          </Typography>
          <Typography variant="body3" sx={{ cursor: "pointer" }}>
            <DeleteOutlineIcon sx={{ color: COLORS.primary }} /> Remove
          </Typography>
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
                subCategory.subCategory.map((subCat) => (
                  <TableRow key={subCat.id} sx={{ textAlign: "center" }}>
                    <TableCell id="expense">
                      <Typography
                        style={{ whiteSpace: "pre-line" }}
                        variant="body3"
                        fontWeight={600}
                      >
                        {subCat.name}
                      </Typography>
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
                        {calculateBudgetTransaction(subCat.budgetTransaction)}
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
                          calculateBudgetTransaction(subCat.budgetTransaction)
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

  const postSubCategory = () => {
    if (formData.name && formData.expectedAmount) {
      addSubcategory({ ...formData, categoryId: categoryId }).then((res) => {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              placeholder={"Name"}
              sx={{
                border: 0,
                mb: 2,
                mt: 2,
              }}
              onChange={handleChange}
            />
            <Typography>Enter Amount</Typography>
            <TextField
              name="expectedAmount"
              type="number"
              placeholder={"Amount"}
              sx={{
                background: "#FFF9F5",
                border: 0,
                mb: 2,
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
