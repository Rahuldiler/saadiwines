import { useEffect, useState, useCallback, Fragment } from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Container,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import {
  getAllGuestsList,
  deleteGuests,
  updateGuestItinerary,
} from "@/services/guests/guestService";
import { getItineraryConfig } from "@/services/itinerary/formItinerary";
import Checkbox from "@mui/material/Checkbox";
import Header from "@/Components/common/Header";
import { useNavItemsStore } from "../../store";
import {
  MaterialReactTable,
  MRT_FullScreenToggleButton,
} from "material-react-table";
import GuestAcionDialog from "../../Components/guest/GuestActionDialog";
import DeleteGuestModal from "../../Components/guest/DeleteGuestModal";
import { isEmpty, debounce } from "lodash";

const cohortOptions = ["Family", "Friends", "Work", "Others"];

const guestHeaders = [
  {
    accessorKey: "fullName",
    header: "Name",
    size: 130,
    minSize: 130,
    maxSize: 130,
    filterFn: "startsWith",
    enableEditing: "false",
    type: "text",
    muiTableBodyCellProps: {
      display: "inline",
    },
  },
  {
    accessorKey: "nickName",
    header: "Nick Name",
    size: 130,
    minSize: 130,
    maxSize: 130,
    filterFn: "startsWith",
    enableEditing: "false",
    type: "text",
    muiTableBodyCellProps: {
      display: "inline",
    },
    muiTableHeadCellProps: {
      width: "80%",
    },
  },
  {
    accessorKey: "family",
    header: "Family Name",
    size: 140,
    minSize: 140,
    maxSize: 140,
    filterFn: "startsWith",
    enableEditing: "false",
    type: "text",
  },
  {
    accessorKey: "cohort",
    header: "Cohort",
    description: "This column has a value getter and is not sortable.",
    size: 130,
    type: "singleSelect",
    valueOptions: cohortOptions,
    filterVariant: "select",
    enableEditing: "false",
    filterSelectOptions: cohortOptions,
    type: "select",
  },
  {
    accessorKey: "contact",
    header: "Phone Numbers",
    description: "This column has a value getter and is not sortable.",
    enableSorting: false,
    enableEditing: "false",
    type: "number",
    size: 200,
    Cell: ({ cell }) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {cell
          .getValue()
          .split(",")
          .splice(0, 2)
          .map((val, index) => (
            <Chip
              variant="outlined"
              color={index == 0 ? "success" : "primary"}
              size="small"
              label={val}
              // onDelete={() => handlePhoneNumberDelete(val)}
            />
          ))}
      </Box>
    ),
  },
  {
    accessorKey: "headCount",
    header: "No. of Guests",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    enableEditing: "false",
    size: 140,
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "isInvitationSent",
    header: "Is Invited",
    description: "This column has a value getter and is not sortable.",
    size: 130,
    type: "checkBox",
    enableEditing: "false",
    filterVariant: "select",
    enableEditing: "false",
    filterSelectOptions: [
      { text: "Yes", value: "true" },
      { text: "No", value: "false" },
    ],
    Cell: ({ cell }) => <Checkbox disabled checked={cell.getValue()} />,
  },
];

function mapItinerary(itinerary) {
  var obj = {};
  obj[itinerary.functionName] = itinerary.isInvited;
  return obj;
}

function mapGuestDataRow(item) {
  var mergedItems = [];
  if (Array.isArray(item.iternaryList) && item.iternaryList.length) {
    const convertedItems = item.iternaryList.map((singleItem) =>
      mapItinerary(singleItem)
    );
    mergedItems = Object.assign(...convertedItems);
  }

  return {
    id: item.id,
    fullName: item.fullName,
    nickName: item.nickName,
    family: item.family,
    contact: item.contact.join(","),
    cohort: item.cohort,
    headCount: item.headCount,
    isInvitationSent: item.isInvitationSent,
    ...mergedItems,
  };
}

const mapAllGuestsData = (responseData) => {
  return responseData.allGuestsData?.map((data) => mapGuestDataRow(data));
};

const getGuestsRequestFilters = (columnFilters) => {
  const filterObj = {};
  if (!isEmpty(columnFilters)) {
    columnFilters.forEach((element) => {
      if (Object.keys(element).length === 2) {
        filterObj[element.id] = element.value;
      }
    });
  }
  return filterObj;
};

const fetchGuestsData = async (pagination, sorting, columnFilters) => {
  const search = getGuestsRequestFilters(columnFilters);
  const requestPayload = {
    limit: pagination.pageSize ? pagination.pageSize : 10,
    offset:
      pagination.pageIndex && pagination.pageSize
        ? pagination.pageIndex * pagination.pageSize
        : 0,
    sortDirection:
      sorting && sorting.length > 0 && !sorting[0].desc ? "ASC" : "DESC",
    sortColumn: sorting && sorting.length > 0 ? sorting[0].id : "name",
    ...search,
  };
  const response = await getAllGuestsList(requestPayload);
  return response;
};

export default function index() {
  //data and fetching state
  const [trackChange, setTrackChange] = useState(false);
  const [guestListData, setGuestListData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  // track change anywhere
  const registerChange = () =>
    setTrackChange((prevTrackChange) => !prevTrackChange);

  // Modal Data
  const [modalItem, setModalItem] = useState({});

  // Add new guest state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isNewGuest, setIsNewGuest] = useState(true);

  //table state
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState([
    {
      id: "fullName",
      desc: true,
    },
  ]);

  // pagination
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // guest table search filters
  const [columnFilters, setColumnFilters] = useState([]);
  // Delay search by 600ms
  const delayedGuestSearch = useCallback(
    debounce((searchValue) => {
      setPagination({ ...pagination, pageIndex: 0 });
      setColumnFilters(searchValue);
    }, 1000),
    []
  );

  const [itineraryColumns, setItineraryColumns] = useState([]);

  const navItems = useNavItemsStore((state) => state.navItems);

  const initNavItems = useNavItemsStore((state) => state.initNavItems);

  const deleteSelectedGuests = async (rowSelection) => {
    if (Object.keys(rowSelection).length > 0) {
      const guestIds = Object.keys(rowSelection);
      try {
        await deleteGuests(guestIds.toString());
      } catch (error) {
        setIsError(true);
        setDeleteModalOpen(false);
        setRowSelection({});
        return;
      }
      registerChange();
      setRowSelection({});
      setDeleteModalOpen(false);
    }
  };

  const handleUpdateGuestItinerary = async (
    guestId,
    itineraryId,
    isSelected
  ) => {
    const requestParams = {
      id: guestId,
      itemId: itineraryId,
      selected: isSelected,
    };
    try {
      await updateGuestItinerary(requestParams);
      registerChange();
    } catch (error) {}
  };

  function convertToTableColumnHeader(item) {
    return {
      id: item.id,
      accessorKey: item.functionName,
      header: item.functionName,
      sortable: false,
      type: "checkBox",
      size: 130,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ cell, row }) => (
        <Checkbox
          color="primary"
          checked={cell.getValue()}
          onChange={(event) =>
            handleUpdateGuestItinerary(
              row.original.id,
              item.id,
              event.target.checked
            )
          }
        />
      ),
    };
  }

  const getItineraryColumns = async () => {
    const response = await getItineraryConfig();
    return Array.isArray(response) && response.length
      ? response.map((col) => convertToTableColumnHeader(col))
      : [];
  };

  useEffect(() => {
    initNavItems();
    getItineraryColumns().then((response) => setItineraryColumns(response));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!guestListData.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }
      try {
        const response = await fetchGuestsData(
          pagination,
          sorting,
          columnFilters
        );
        setGuestListData(mapAllGuestsData(response));
        setRowCount(response.total);
      } catch (error) {
        setIsError(true);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    setRowSelection({});
    fetchData();
  }, [
    columnFilters,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
    trackChange,
  ]);

  return (
    <Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          boxSizing: "border-box",
          flexDirection: "column",
        }}
      >
        <Header navItems={navItems} isHome={false} />
        <Box
          sx={{
            height: "94%",
            width: "100%",
            overflow: "hidden",
            p: "1%",
            mt: "5rem",
            boxShadow: "border-box",
            overflowY: "hidden",
          }}
        >
          <MaterialReactTable
            columns={guestHeaders.concat(itineraryColumns)}
            data={guestListData}
            enablePinning
            enableRowSelection
            onRowSelectionChange={setRowSelection}
            enableColumnActions={false}
            // enableColumnFilters={false}
            positionToolbarAlertBanner="bottom"
            enableSortingRemoval={false}
            enableStickyHeader
            enableStickyFooter
            manualFiltering
            manualPagination
            manualSorting
            // enableExpanding={true}
            getRowId={(row) => row.id}
            initialState={{
              columnPinning: {
                left: [
                  "mrt-row-select",
                  "mrt-row-actions",
                  "internal",
                  "fullName",
                ],
              },
              showColumnFilters: true,
              density: "compact",
            }}
            muiToolbarAlertBannerProps={
              isError
                ? {
                    color: "error",
                    children: "Error loading data",
                  }
                : { color: "primary" }
            }
            muiTableProps={{
              sx: {
                tableLayout: "fixed",
              },
            }}
            muiTableHeadCellProps={{
              sx: (theme) => ({
                color: theme.palette.primary.main,
                fontSize: "15px",
                paddingLeft: "0.1",
                paddingRight: "0.1",
              }),
            }}
            muiTableBodyCellProps={{
              sx: {
                paddingLeft: "0.1",
                paddingRight: "0.1",
              },
            }}
            enableRowActions
            displayColumnDefOptions={{
              "mrt-row-select": {
                size: 13,
                muiTableHeadCellProps: {
                  paddingLeft: "0",
                  paddingRight: "0",
                },
                muiTableBodyCellProps: {
                  sx: {
                    paddingLeft: "0",
                    paddingRight: "0",
                  },
                },
              },
              "mrt-row-actions": {
                size: 15,
                align: "right",
                color: "primary",
                padding: "0",
                margin: "0",
                header: " ",
                Cell: ({ row, table }) => (
                  <Tooltip arrow placement="left" title="Edit">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => {
                        setModalItem(row.original);
                        setIsNewGuest(false);
                        setCreateModalOpen(true);
                      }}
                    >
                      <Edit fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                ),
                muiTableHeadCellProps: {
                  align: "center",
                  sx: {
                    paddingLeft: "0",
                    paddingRight: "0",
                  },
                },
                muiTableBodyCellProps: {
                  sx: {
                    paddingLeft: "0",
                    paddingRight: "0",
                  },
                },
              },
            }}
            enableFullScreenToggle={true}
            enableToolbarInternalActions={true}
            muiTableContainerProps={{ sx: { maxHeight: 500 } }}
            onColumnFiltersChange={delayedGuestSearch}
            onPaginationChange={setPagination}
            onSortingChange={setSorting}
            rowCount={rowCount}
            state={{
              columnFilters,
              isLoading,
              pagination,
              showAlertBanner: isError,
              showProgressBars: isRefetching || isLoading,
              sorting,
              rowSelection,
            }}
            muiTableHeadCellFilterTextFieldProps={{
              sx: { paddingInline: "1", pr: "1" },
              variant: "outlined",
              fullWidth: "true",
              margin: "dense",
              size: "small",
              placeholder: "",
              InputProps: {
                // endAdornment: (
                //   <InputAdornment position="end">
                //     <CloseIcon
                //       onClick={(column) => {
                //         column.setFilterValue({});
                //       }}
                //     />
                //   </InputAdornment>
                // ),
              },
            }}
            muiTablePaginationProps={{
              rowsPerPageOptions: [10, 20, 50, 100, 200],
              labelRowsPerPage: "Total",
            }}
            muiTablePaperProps={{
              elevation: 0, //change the mui box shadow
              //customize paper styles
              sx: {
                borderRadius: "0",
                border: "1px dashed #e0e0e0",
              },
            }}
            renderTopToolbarCustomActions={({ table }) => (
              <Stack
                direction="row"
                spacing={1}
                sx={{ width: "100%" }}
                justifyContent={"space-between"}
                useFlexGap
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ width: "60%" }}
                  justifyContent={"flex-start"}
                  useFlexGap
                >
                  <Fab
                    variant="extended"
                    size="medium"
                    onClick={() => {
                      setModalItem({});
                      setIsNewGuest(true);
                      setCreateModalOpen(true);
                    }}
                  >
                    <AddCircleOutlinedIcon
                      sx={{ color: green[500], mr: 0.5 }}
                    />
                    Add Guest
                  </Fab>
                  <div style={{ minWidth: "10px", maxWidth: "10px" }}></div>
                  <Fab
                    variant="extended"
                    size="medium"
                    onClick={() => setDeleteModalOpen(true)}
                    disabled={Object.entries(rowSelection).length <= 0}
                  >
                    <HighlightOffOutlinedIcon
                      sx={{ color: red[600], mr: 0.5 }}
                    />
                    Delete
                  </Fab>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ width: "38%" }}
                  justifyContent={"flex-end"}
                  useFlexGap
                >
                  <Button
                    disabled={isEmpty(columnFilters)}
                    onClick={() => {
                      setPagination({ ...pagination, pageIndex: 0 });
                      setColumnFilters([]);
                    }}
                  >
                    Clear All
                  </Button>
                  <MRT_FullScreenToggleButton table={table} sx={{ mr: 1 }} />
                </Stack>
              </Stack>
            )}
            renderToolbarInternalActions={({ table }) => (
              <Stack
                direction="row"
                spacing={1}
                sx={{ width: "100%" }}
                justifyContent={"space-between"}
                useFlexGap
              ></Stack>
            )}
          />
          <GuestAcionDialog
            data={modalItem}
            guestColumns={guestHeaders}
            itineraryColumns={itineraryColumns}
            open={createModalOpen}
            isNewGuest={isNewGuest}
            onClose={() => {
              setCreateModalOpen(false);
            }}
            registerChange={registerChange}
          />
          <DeleteGuestModal
            open={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            selectedCount={Object.keys(rowSelection).length}
            handleDelete={() => deleteSelectedGuests(rowSelection)}
          />
        </Box>
        {/* </Box> */}
      </Container>
    </Fragment>
  );
}
