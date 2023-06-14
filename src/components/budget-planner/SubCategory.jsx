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
import { useEffect, useState } from "react";
import BorderLinearProgress from "./Progress";
import { editCategory, getCategoriesById } from "@/services/category/category";
import {
  addSubcategory,
  editSubcategory,
} from "@/services/subCategory/subCategory";
import PaymentsDialog from "./PaymentsDialog";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CustomCircularProgress from "./CustomCircularProgress";
import Modal from "./Modal";
import { BORDER, COLORS } from "../utils/ConstantTheme";
import { CustomCell } from "./table-components/CustomCell";
import { CustomHeader } from "./table-components/CustomHeader";

const SubCategory = ({ CateId, setTrackChanges }) => {
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenCategory, setDialogOpenCategory] = useState(false);
  const [dialogOpenSubCategory, setDialogOpenSubCategory] = useState(false);
  const [notifyChanges, setNotifyChanges] = useState(false);
  const [selectedItemForDialog, setSelectedItemForDialog] = useState(null);

  useEffect(() => {
    getCategoriesById(CateId.rowId).then((categories) => {
      setSubCategoryData(categories.data);
    });
  }, [CateId, notifyChanges]);

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

  const editeSubCategoryFun = (data, name, expectedAmount) => {
    editSubcategory({
      ...data,
      ...(name && { name }),
      ...(expectedAmount && { expectedAmount }),
    }).then((_) => setNotifyChanges((prev) => !prev));
  };
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
            {subCategoryData.name}
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
              ₹ {subCategoryData.expectedAmount}
            </span>
          </Typography>
          <Typography variant="body3" mr={2}>
            Final Cost:{" "}
            <span style={{ fontWeight: "bold", color: COLORS.green }}>
              {" "}
              ₹{" "}
              {subCategoryData.subCategory &&
                calculateFinalCost(subCategoryData.subCategory)}
            </span>
          </Typography>
          <Typography variant="body3" sx={{ cursor: "pointer" }}>
            <DeleteOutlineIcon sx={{ color: COLORS.primary }} /> Remove
          </Typography>
        </Box>
        <Divider />
      </Box>

      {subCategoryData.length == 0 ? (
        <CustomCircularProgress />
      ) : (
        <>
          {selectedItemForDialog && (
            <PaymentsDialog
              data={selectedItemForDialog}
              open={dialogOpen}
              setOpen={setDialogOpen}
              CateId={CateId}
              setSubCategoryData={setSubCategoryData}
            />
          )}
          <CategoryDialog
            open={dialogOpenCategory}
            setOpen={setDialogOpenCategory}
            id={subCategoryData.id}
            userId={subCategoryData.userId}
            expectedAmount={subCategoryData.expectedAmount}
            name={subCategoryData.name}
            setNotifyChanges={setNotifyChanges}
            setTrackChanges={setTrackChanges}
          />
          <SubCategoryDialog
            open={dialogOpenSubCategory}
            setOpen={setDialogOpenSubCategory}
            expectedAmount={subCategoryData.expectedAmount}
            CateId={CateId}
            setNotifyChanges={setNotifyChanges}
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
                <CustomHeader title={"EXPENSE"} />
                <CustomHeader title={" ESTIMATED BUDGET"} />
                <CustomHeader title={" PAID"} />
                <CustomHeader title={" ADD TRANSACTION"} />
                <CustomHeader title={"   PROGRESS"} />
              </TableRow>
            </TableHead>
            <TableBody>
              {subCategoryData &&
                subCategoryData.length != 0 &&
                subCategoryData.subCategory.map((subCat) => (
                  <TableRow key={subCat.id} sx={{ textAlign: "center" }}>
                    <TableCell
                      contentEditable
                      sx={{ textAlign: "center" }}
                      suppressContentEditableWarning
                      id="expense"
                      onBlur={(e) =>
                        editeSubCategoryFun(
                          subCat,
                          e.target.innerText,
                          undefined
                        )
                      }
                    >
                      <Typography
                        style={{ whiteSpace: "pre-line", textAlign: "center" }}
                        variant="body3"
                        fontWeight={600}
                      >
                        {subCat.name}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{ whiteSpace: "pre-line", textAlign: "center" }}
                    >
                      <Typography
                        id="estimatedBudget"
                        variant="body3"
                        color="textSecondary"
                        fontWeight={400}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          editeSubCategoryFun(
                            subCat,
                            undefined,
                            e.target.innerText
                          )
                        }
                      >
                        {subCat.expectedAmount}
                      </Typography>
                    </TableCell>
                    <CustomCell
                      title={calculateBudgetTransaction(
                        subCat.budgetTransaction
                      )}
                    />
                    <CustomCell
                      title={
                        <Chip
                          onClick={() => {
                            setSelectedItemForDialog(subCat);
                            setDialogOpen(true);
                          }}
                          sx={{
                            px: "4px",
                            backgroundColor: COLORS.primary,
                            color: COLORS.white,
                          }}
                          size="small"
                          label={"Add Transaction"}
                        ></Chip>
                      }
                    />
                    <CustomCell
                      title={
                        <BorderLinearProgress
                          progress={calculateProgress(
                            subCat.expectedAmount,
                            calculateBudgetTransaction(subCat.budgetTransaction)
                          )}
                        />
                      }
                    />
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Box
            sx={{ display: "flex", cursor: "pointer", pt: "20px" }}
            onClick={() => setDialogOpenSubCategory(true)}
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

function CategoryDialog({
  open,
  setOpen,
  id,
  userId,
  expectedAmount,
  name,
  setNotifyChanges,
  setTrackChanges,
}) {
  const [formData, setFormData] = useState({
    id: id,
    userId: userId,
    name: "",
    expectedAmount: expectedAmount,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCateChange = () => {
    setFormData({
      ...formData,
      expectedAmount: expectedAmount,
      userId: userId,
      id: id,
    });

    editCategory(formData).then((res) => {
      setOpen(false);
      setNotifyChanges((prev) => !prev);
      setTrackChanges((prev) => !prev);
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
              placeholder={name}
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
  CateId,
  expectedAmount,
  setNotifyChanges,
}) {
  const [formData, setFormData] = useState({
    name: "",
    expectedAmount: expectedAmount,
  });

  const postSubCategory = () => {
    if (formData.name && formData.expectedAmount) {
      addSubcategory({ ...formData, categoryId: CateId.rowId }).then((res) => {
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
        open={open}
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
