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
  Button,
} from "@mui/material";
import { BORDER, COLORS } from "../Utils/ConstantTheme";
import CustomCircularProgress from "./CustomCircularProgress";
import { DataGrid } from "@mui/x-data-grid";

export default function Payments({ data }) {
  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };

  const columns = [
    {
      field: "Category",
      headerName: "Category Name",
      width: 180,
      disableColumnMenu: true,
      filterable: false,
    },
    {
      field: "Amount",
      headerName: "Amount",
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: "Sub_Category",
      headerName: "Subcategory Name",
      width: 200,
      disableColumnMenu: true,
    },
    {
      field: "subCategoryExpectedAmount",
      headerName: "Subcategory Expected Amount",
      width: 190,
      disableColumnMenu: true,
    },
    {
      field: "transactionName",
      headerName: "Transaction Name",
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: "transactionAmount",
      headerName: "Transaction Amount",
      width: 120,
      disableColumnMenu: true,
    },
    {
      field: "transactionType",
      headerName: "Transaction Type",
      width: 140,
      disableColumnMenu: true,
    },
    // {
    //   field: "delete",
    //   headerName: "Delete",
    //   width: 160,
    //   disableColumnMenu: true,
    // },
    {
      field: "Delete",
      disableColumnMenu: true,

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
  ];

  const rows = data.flatMap((category) =>
    category.subCategory.flatMap((subCategory) =>
      subCategory.budgetTransaction.map((transaction) => ({
        id: transaction.id,
        Category: category.name,
        Amount: category.expectedAmount,
        Sub_Category: subCategory.name,
        subCategoryExpectedAmount: subCategory.expectedAmount,
        transactionName: transaction.name,
        transactionAmount: transaction.amount,
        transactionType: transaction.type,
      }))
    )
  );
  return (
    <Box
      sx={{
        overflow: "auto",
        p: 4,
        m: 8,
        border: BORDER.primaryBorder,
        borderRadius: "7px",
      }}
    >
      <Box textAlign={"center"}>
        <Typography variant="h4" mb={4} fontWeight={"bold"}>
          Payments
        </Typography>
      </Box>
      {data.length == 0 ? (
        <CustomCircularProgress />
      ) : (
        <Box>
          <DataGrid
            hideFooterPagination
            isRowSelectable={false}
            hideFooterSelectedRowCount
            sx={{
              px: 5,
              fontWeight: "500",
              fontSize: "15px",
              ".MuiDataGrid-columnSeparator": {
                display: "none",
                fontWeight: "bold",
              },
              "&.MuiDataGrid-root": {
                border: "none",
                fontWeight: "bold",
              },
            }}
            rows={rows}
            columns={columns}
          />
        </Box>
      )}
    </Box>
  );
}

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
