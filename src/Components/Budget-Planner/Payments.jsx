import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  Input,
  TextField,
  OutlinedInput,
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

import { BORDER, COLORS } from "../Utils/ConstantTheme";
import { CustomCell } from "./table-components/CustomCell";
import { CustomHeader } from "./table-components/CustomHeader";
import { useState } from "react";

export default function Payments({ data }) {
  const renderButton = () => {
    return <Button sx={{ color: COLORS.primary }}>Delete</Button>;
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

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <Box
      sx={{
        overflow: "auto",
        p: 6,
        m: 8,
        border: BORDER.primaryBorder,
        borderRadius: "7px",
      }}
    >
      {data.length == 0 ? (
        <CustomCircularProgress />
      ) : (
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

          <FormControl sx={{ m: 0, width: 300 }} disabled={selectedCategories.length ===0}>
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
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
              mt: 2,
            }}
          >
            <TableHead>
              <TableRow>
                <CustomHeader title={"Category"} />
                <CustomHeader title={"Amount"} />
                <CustomHeader title={"Sub Category"} />
                <CustomHeader title={"Sub Category Amount"} />
                <CustomHeader title={"Transaction Name"} />
                <CustomHeader title={"Date"} />
                <CustomHeader title={"Transaction Amount"} />
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
                      return (
                        <TableRow key={subCategory.id}>
                          <CustomCell title={category.name} />
                          <CustomCell title={category.expectedAmount} />
                          <CustomCell title={subCategory.name} />
                          <CustomCell title={subCategory.expectedAmount} />
                          <CustomCell title={""} />
                          <CustomCell title={""} />
                          <CustomCell title={""} />
                          <CustomCell title={""} />
                          <CustomCell title={renderButton()} />
                        </TableRow>
                      );
                    }
                    return subCategory.budgetTransaction.map((transaction) => {
                      return (
                        <TableRow key={subCategory.id}>
                          <CustomCell title={category.name} />
                          <CustomCell title={category.expectedAmount} />
                          <CustomCell title={subCategory.name} />
                          <CustomCell title={subCategory.expectedAmount} />
                          <CustomCell title={transaction.name} />
                          <CustomCell
                            title={covertDate(transaction.dateAdded)}
                          />
                          <CustomCell title={transaction.amount} />
                          <CustomCell title={"Credit"} />
                          <CustomCell title={renderButton()} />
                        </TableRow>
                      );
                    });
                  });
                })
              )}
            </TableBody>
          </Table>
        </>
      )}
    </Box>
  );
}

// const columns = [
//   renderColumn,
//   // {
//   //   field: "Category",
//   //   headerName: "Category Name",
//   //   width: 180,
//   //   disableColumnMenu: true,
//   //   filterable: false,
//   // },
//   {
//     field: "Amount",
//     headerName: "Amount",
//     width: 150,
//     disableColumnMenu: true,
//   },
//   {
//     field: "Sub_Category",
//     headerName: "Subcategory Name",
//     width: 200,
//     disableColumnMenu: true,
//   },
//   {
//     field: "subCategoryExpectedAmount",
//     whiteSpace: "nowrap",
//     headerName: "Subcategory Expected Amount",
//     width: 190,
//     disableColumnMenu: true,
//   },
//   {
//     field: "transactionName",
//     headerName: "Transaction Name",
//     width: 150,
//     disableColumnMenu: true,
//   },
//   {
//     field: "transactionAmount",
//     headerName: "Transaction Amount",
//     width: 120,
//     disableColumnMenu: true,
//   },
//   {
//     field: "transactionType",
//     headerName: "Transaction Type",
//     width: 140,
//     disableColumnMenu: true,
//     textAlign: "center",
//   },
//   {
//     field: "Delete",
//     disableColumnMenu: true,
//     width: 140,
//     renderCell: (cellValues) => {
//       return (
//         <Button
//           sx={{
//             color: COLORS.primary,
//           }}
//           onClick={(event) => {
//             handleClick(event, cellValues);
//           }}
//         >
//           Delete
//         </Button>
//       );
//     },
//   },
// ];

// <Table
//   aria-label="simple table"
//   sx={{
//     whiteSpace: "nowrap",
//     mt: 2,
//   }}
// >
//   <TableHead>
//     <TableRow>
//       {/* <TableCell>
//         <Typography variant="subtitle2" fontWeight={600}>
//           No.
//         </Typography>
//       </TableCell> */}
//       <TableCell>
//         <Typography variant="subtitle2" fontWeight={600}>
//           S No.
//         </Typography>
//       </TableCell>
//       <TableCell>
//         <Typography variant="subtitle2" fontWeight={600}>
//           DETAILS
//         </Typography>
//       </TableCell>
//       <TableCell>
//         <Typography
//           style={{ whiteSpace: "pre-line" }}
//           variant="subtitle2"
//           fontWeight={600}
//         >
//           DATE
//         </Typography>
//       </TableCell>

//       <TableCell>
//         <Typography variant="subtitle2" fontWeight={600}>
//           CATEGORY
//         </Typography>
//       </TableCell>
//       <TableCell>
//         <Typography variant="subtitle2" fontWeight={600}>
//           SUB-CATEGORY
//         </Typography>
//       </TableCell>
//       <TableCell>
//         <Typography
//           style={{ whiteSpace: "pre-line" }}
//           variant="subtitle2"
//           fontWeight={600}
//         >
//           ACTIONS
//         </Typography>
//       </TableCell>
//       {/* <TableCell>
//       <Typography variant="subtitle2" fontWeight={600}>
//         PROGRESS
//       </Typography>
//     </TableCell> */}
//     </TableRow>
//   </TableHead>
//   <TableBody>
//     {products.map((product, index) => (
//       <TableRow key={product.name}>
//         <TableCell>
//           <Typography
//             style={{ whiteSpace: "pre-line" }}
//             variant="body3"
//             fontWeight={500}
//           >
//             {index + 1}
//           </Typography>
//         </TableCell>
//         <TableCell>
//           <Typography
//             style={{ whiteSpace: "pre-line" }}
//             variant="body3"
//             fontWeight={500}
//           >
//             {product.name}
//           </Typography>
//         </TableCell>
//         <TableCell>
//           <Typography
//             variant="body3"
//             color="textSecondary"
//             // variant="subtitle2"
//             fontWeight={400}
//             style={{ whiteSpace: "pre-line" }}
//           >
//             {product.pname}
//           </Typography>
//         </TableCell>

//         <TableCell>
//           <Typography variant="body3">${product.budget}k</Typography>
//         </TableCell>
//         <TableCell>
//           <Typography variant="body3">${product.budget}k</Typography>
//         </TableCell>
//         <TableCell>
//           <Chip
//             sx={{
//               px: "4px",
//               backgroundColor: "#BC8129",
//               color: "#fff",
//             }}
//             size="small"
//             label={"Delete"}
//           ></Chip>
//         </TableCell>
//         {/* <TableCell>
//         <BorderLinearProgress variant="determinate" value={50} />
//       </TableCell> */}
//       </TableRow>
//     ))}
//   </TableBody>
// </Table>
