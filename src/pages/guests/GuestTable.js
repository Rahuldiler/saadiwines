// import React, { useEffect, useState, useCallback } from "react";
// import Grid from "@mui/material/Unstable_Grid2";
// import {
//   DataGrid,
//   useGridApiContext,
//   GridRowModes,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,
// } from "@mui/x-data-grid";
// import Chip from "@mui/material/Chip";

// const PAGE_SIZE = 10;

// const SERVER_OPTIONS = {
//   useCursorPagination: true,
// };

// const guestListColumns = [
//   {
//     field: "fullName",
//     headerName: "Name",
//     width: 200,
//     pos: "12%",
//     editable: false,
//   },
//   {
//     field: "nickName",
//     headerName: "Nick Name",
//     width: 160,
//     pos: "17%",
//     editable: false,
//   },
//   {
//     field: "family",
//     headerName: "Family Name",
//     width: 120,
//     pos: "24%",
//     editable: false,
//   },
//   {
//     field: "cohort",
//     headerName: "Cohort",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 100,
//     type: "singleSelect",
//     valueOptions: ["Family", "Friends", "Work", "Others"],
//     pos: "31%",
//     editable: false,
//   },
//   {
//     field: "contact",
//     headerName: "Phone Numbers",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     editable: false,
//     pos: "36%",
//     width: 250,
//     renderCell: (params) => (
//       <Grid
//         container
//         rowSpacing={0.5}
//         columnSpacing={{ xs: 0.5, sm: 1, md: 1.5 }}
//       >
//         {params.value
//           .split(",")
//           .splice(0, 2)
//           .map((val, index) => (
//             <Grid xs="auto">
//               <Chip
//                 variant="outlined"
//                 color={index == 1 ? "primary" : "success"}
//                 size="small"
//                 label={val}
//                 onDelete={handleDelete}
//               />
//             </Grid>
//           ))}
//       </Grid>
//     ),
//   },
//   {
//     field: "headCount",
//     headerName: "No. of Guests",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     editable: false,
//     pos: "49%",
//     width: 120,
//   },
//   {
//     field: "isInvitationSent",
//     headerName: "Wedding Invitation",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     editable: false,
//     type: "boolean",
//     pos: "55%",
//     width: 130,
//   },
// ];

// export default function GuestTable() {
//   const mapPageToNextCursor = React.useRef({});
//   const [paginationModel, setPaginationModel] = React.useState({
//     page: 0,
//     pageSize: PAGE_SIZE,
//   });

//   const queryOptions = React.useMemo(
//     () => ({
//       cursor: mapPageToNextCursor.current[paginationModel.page - 1],
//       pageSize: paginationModel.pageSize,
//     }),
//     [paginationModel]
//   );

//   const { isLoading, rows, pageInfo } = useQuery(queryOptions);

//   const handlePaginationModelChange = (newPaginationModel) => {
//     // We have the cursor, we can allow the page transition.
//     if (
//       newPaginationModel.page === 0 ||
//       mapPageToNextCursor.current[newPaginationModel.page - 1]
//     ) {
//       setPaginationModel(newPaginationModel);
//     }
//   };

//   React.useEffect(() => {
//     if (!isLoading && pageInfo?.nextCursor) {
//       // We add nextCursor when available
//       mapPageToNextCursor.current[paginationModel.page] = pageInfo?.nextCursor;
//     }
//   }, [paginationModel.page, isLoading, pageInfo?.nextCursor]);

//   // Some API clients return undefined while loading
//   // Following lines are here to prevent `rowCountState` from being undefined during the loading
//   const [rowCountState, setRowCountState] = React.useState(
//     pageInfo?.totalRowCount || 0
//   );

//   React.useEffect(() => {
//     setRowCountState((prevRowCountState) =>
//       pageInfo?.totalRowCount !== undefined
//         ? pageInfo?.totalRowCount
//         : prevRowCountState
//     );
//   }, [pageInfo?.totalRowCount, setRowCountState]);

//   return (
//     <Box
//       sx={{ height: "90%", width: "98%", marginLeft: "1%", marginTop: "6%" }}
//     >
//       <>
//         <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
//           <Button size="small" onClick={addRow}>
//             Add Guest
//           </Button>
//         </Stack>
//         <DataGrid
//           rows={guestListData}
//           columns={guestListColumns.concat(itineraryColumns)}
//           paginationModel={paginationModel}
//           pageSizeOptions={[10, 20, 50, 100]}
//           onPaginationModelChange={setPaginationModel}
//           rowsPerPageOptions={[10, 20, 100]}
//           paginationMode="server"
//           checkboxSelection
//           disableRowSelectionOnClick
//           disableColumnMenu={true}
//           getRowId={(row) => row.id}
//           rowHeight={40}
//           getRowHeight={() => "auto"}
//           slots={{
//             loadingOverlay: LinearProgress,
//             noRowsOverlay: CustomNoRowsOverLay,
//             toolbar: EditToolbar,
//           }}
//           slotProps={{
//             toolbar: { setGuestListData, setRowModesModel },
//           }}
//           loading={isLoading}
//           getEstimatedRowHeight={() => 40}
//         />
//       </>
//     </Box>
//   );
// }

import React from "react";

function GuestTable() {
  return <div>GuestTable</div>;
}

export default GuestTable;
