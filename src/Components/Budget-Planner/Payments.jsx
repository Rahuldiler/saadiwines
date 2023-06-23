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
import CustomCircularProgress from "./CustomCircularProgress";

import { BORDER, COLORS } from "../utils/ConstantTheme";
import { CustomCell } from "./table-components/CustomCell";
import { CustomHeader } from "./table-components/CustomHeader";
import { useState } from "react";
import { deleteTransaction } from "@/services/transaction/transaction";

export default function Payments({ data, loading, setTrackChanges }) {
  const renderButton = (id) => {
    console.log("TRANSACTION ID", id);
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
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        width: 140,
        renderCell: (cellValues) => {
          return (
            <Button
              sx={{
                color: "#BC8129",
              }}
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Delete
            </Button>
          );
        },
      },
    },
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

  // Logic of Category and SubCategory Selection
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const handleCategorySelection = (event) => {
    const { value } = event.target;
    setSelectedCategories(value);
    setSelectedSubcategories([]);
  };

  const handleSubcategorySelection = (event) => {
    const { value } = event.target;
    setSelectedSubcategories(value);
  };

  // Filter the data based on selected categories and subcategories
  const filteredData = data.filter((category) => {
    if (selectedCategories.length === 0 && selectedSubcategories.length === 0) {
      return true; // No filters selected, show all data
    }
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(category.name)
    ) {
      return false; // Filter by selected categories
    }
    if (selectedSubcategories.length > 0) {
      // console.log("SELECTED :::", selectedSubcategories);
      const matchingSubcategories = category.subCategory.filter(
        (subCategory) => {
          // console.log("NAME ::", subCategory.name);
          return selectedSubcategories.includes(subCategory.name);
        }
      );
      // console.log("MATCHING :::", matchingSubcategories);
      return matchingSubcategories.length > 0; // Filter by selected subcategories
    }
    // console.log("NOT FOUND :::", category);
    return true;
  });

  // Get unique categories from the data
  const categories = [...new Set(data.map((item) => item.name))];

  // Get subcategories based on selected categories
  let subcategories = [];
  if (selectedCategories.length > 0) {
    subcategories = data
      .filter((item) => selectedCategories.includes(item.name))
      .flatMap((item) => item.subCategory)
      .map((subCategory) => subCategory.name);
    subcategories = [...new Set(subcategories)];
    // console.log(selectedSubcategories)
  }

  // Search functions
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Perform search on filtered data
  const searchedData = filteredData.filter((item) => {
    // console.log("FILTERED DATA :::",filteredData)
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
        <TextField
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
        </FormControl>
        {loading ? (
          <CustomCircularProgress />
        ) : data.length == 0 ? (
          <Box>No Transactions</Box>
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
                <CustomHeader title={"Delete"} />
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length === 0 ? (
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
                      //     {/* <CustomCell title={category.name} /> */}
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
                    }
                    return subCategory.budgetTransaction.map((transaction) => {
                      return (
                        <TableRow key={subCategory.id}>
                          <CustomCell title={category.name} />
                          <CustomCell title={subCategory.name} />
                          <CustomCell title={transaction.name} />
                          <CustomCell
                            title={covertDate(transaction.dateAdded)}
                          />
                          <CustomCell title={transaction.amount} />
                          <CustomCell title={transaction.details} />
                          <CustomCell title={transaction.type} />
                          <CustomCell title={renderButton(transaction.id)} />
                        </TableRow>
                      );
                    });
                  });
                })
              )}
            </TableBody>
          </Table>
        )}
      </>
    </Box>
  );
}
