import {
  TableHead,
  TableRow,
  Chip,
  Divider,
  Button,
  Input,
  TextField,
  OutlinedInput,
  TableBody,
  Table,
  Box,
  TableCell,
} from "@mui/material";

import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import CustomCircularProgress from "./common/CustomCircularProgress";

import { BORDER, COLORS } from "../utils/ConstantTheme";
import { CustomCell } from "./common/table-components/CustomCell";
import { CustomHeader } from "./common/table-components/CustomHeader";
import { useState } from "react";
import {
  deleteTransaction,
  editTransaction,
  fetchAllTransactions,
} from "@/services/transaction/transaction";
import { useEffect } from "react";
import { RenderDialogForPayment } from "./common/RenderDialog";

export default function Payments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trackChange, setTrackChanges] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchAllTransactions().then((transaction) => {
      setData(transaction.data);
      setLoading(false);
    });
  }, [trackChange]);
  const renderDeleteButton = (id) => {
    return (
      <Button
        onClick={() =>
          deleteTransaction(id).then(() => setTrackChanges((p) => !p))
        }
        sx={{ color: COLORS.primary }}
      >
        Delete
      </Button>
    );
  };
  // Edit transaction -->
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItemForDialog, setSelectedItemForDialog] = useState(null);
  const [isEditingTransaction, setIsEditingTransaction] = useState({
    isEditing: false,
    transaction: {},
  });
  const renderEditButton = (id, transaction) => {
    return (
      <Button
        onClick={() => {
          setIsEditingTransaction({
            ...isEditingTransaction,
            isEditing: true,
            transaction: transaction,
          });
          setSelectedItemForDialog(id);
          setDialogOpen(true);
        }}
        sx={{ color: COLORS.primary }}
      >
        Edit
      </Button>
    );
  };

  const covertDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <Box
      sx={{
        overflow: "auto",
        p: 6,
        p: 4,
        m: 8,
        border: BORDER.primaryBorder,
        borderRadius: "7px",
      }}
    >
      <>
        {selectedItemForDialog && (
          <RenderDialogForPayment
            handleCloseDialog={() => setDialogOpen(false)}
            openDialog={dialogOpen}
            subCategoryId={selectedItemForDialog}
            setTrackChanges={setTrackChanges}
            isEditingTransaction={isEditingTransaction}
            isDesktop
          />
        )}
        {loading ? (
          <Box m={4}>
            <CustomCircularProgress />
          </Box>
        ) : data.length == 0 ? (
          <Box display={"flex"} justifyContent={"center"}>
            No Transactions
          </Box>
        ) : (
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <CustomHeader title={"Category"} />
                <CustomHeader title={"Sub Category"} />
                <CustomHeader title={"Transaction Name"} />
                <CustomHeader title={"Date"} />
                <CustomHeader title={"Transaction Amount"} />
                <CustomHeader title={"Transaction Details"} />
                <CustomHeader title={"Transaction Type"} />
                <CustomHeader title={"Edit"} />
                <CustomHeader title={"Delete"} />
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <CircularProgress />
              ) : (
                data.map((el) => {
                  return (
                    <TableRow key={el.id}>
                      <CustomCell title={el.categoryName} />
                      <CustomCell title={el.subCategoryName} />
                      <CustomCell title={el.name} />
                      <CustomCell title={covertDate(el.createdDate)} />
                      <CustomCell title={el.amount} />
                      <CustomCell title={el.details} />
                      <CustomCell title={el.type} />
                      <CustomCell
                        title={renderEditButton(el.subCategoryId, el)}
                      />
                      <CustomCell title={renderDeleteButton(el.id)} />
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        )}
      </>
    </Box>
  );
}

{
  /* <TableBody>
  {data.length === 0 ? (
    <TableRow>
      <TableCell colSpan={4}>No results found.</TableCell>
    </TableRow>
  ) : (
    searchedData.map((category) => {
      return category.subCategory.map((subCategory) => {
        if (subCategory.budgetTransaction.length == 0) {
          return;
          // (
          //   <TableRow key={subCategory.id}>
          //     {/* <CustomCell title={category.name} /> */
}
//     {/* <CustomCell title={subCategory.name} /> */}
//     {/* <CustomCell title={""} />
//     <CustomCell title={""} />
//     <CustomCell title={""} />
//     <CustomCell title={""} />
//     <CustomCell title={""} />
//     <CustomCell title={""} />
//     <CustomCell title={""} /> */}
//     {/* <CustomCell title={renderButton()} /> */}
//   </TableRow>
// );
// }
// {
//   "id": 154,
//   "subCategoryId": 252,
//   "subCategoryName": "Vikas Sub-cat",
//   "categoryId": 253,
//   "categoryName": "Vikas",
//   "amount": 1000,
//   "name": "Raj Mandloi",
//   "type": "DEBIT",
//   "details": "This are the transaction"
// }
// return data.map((transaction) => {
//         return (
//           <TableRow key={subCategory.id}>
//             <CustomCell title={category.name} />
//             <CustomCell title={subCategory.name} />
//             <CustomCell title={transaction.name} />
//             <CustomCell title={covertDate(transaction.dateAdded)} />
//             <CustomCell title={transaction.amount} />
//             <CustomCell title={transaction.details} />
//             <CustomCell title={transaction.type} />
//             <CustomCell title={renderButton(transaction.id)} />
//           </TableRow>
//         );
//       });
//     });
//   })
// )

{
  /* <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          sx={{ mr: 2 }}
        />
        <FormControl sx={{ mr: 2, width: 300 }}>
          <InputLabel>Select Categories</InputLabel>
          <Select
            multiple
            input={<OutlinedInput label="Select Categories" />}
            value={selectedCategories}
            onChange={handleCategorySelection}
            renderValue={(selected) => selected.join(", ")}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                <Checkbox checked={selectedCategories.includes(category)} />
                <ListItemText primary={category} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 0, width: 300 }}
          disabled={selectedCategories.length === 0}
        >
          <InputLabel sx={{ mb: 4 }}>Select Subcategories</InputLabel>
          <Select
            placeholder="Select Subcategory"
            input={<OutlinedInput label="Select Subcategories" />}
            MenuProps={MenuProps}
            multiple
            value={selectedSubcategories}
            onChange={handleSubcategorySelection}
            renderValue={(selected) => selected.join(", ")}
          >
            {subcategories.map((subcategory) => (
              <MenuItem key={subcategory} value={subcategory}>
                <Checkbox
                  checked={selectedSubcategories.includes(subcategory)}
                />
                <ListItemText primary={subcategory} />
              </MenuItem>
            ))}
          </Select>
        </FormControl> */
}
