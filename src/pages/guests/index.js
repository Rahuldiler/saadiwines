import React, { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  useGridApiContext,
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CustomNoRowsOverLay from "./CustomNoRowsOverLay";
import GuestAcionDialog from "./GuestActionDialog";
import { getAllGuestsList } from "@/services/guests/guestService";
import { getItineraryConfig } from "@/services/itinerary/formItinerary";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Fab from "@mui/material/Fab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TablePagination from "@mui/material/TablePagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";
import { boolean } from "yup";
import { CancelOutlined } from "@mui/icons-material";
import Header from "@/Components/common/Header";
import { useNavItemsStore } from "../../store";

const table = {
  minWidth: 750,
};
const sticky = {
  position: "sticky",
  background: "white",
  zIndex: "100",
};
const stickyHeader = {
  position: "sticky",
  zIndex: "101",
};

const guestListColumns = [
  {
    ...GRID_CHECKBOX_SELECTION_COL_DEF,
    width: 50,
  },
  {
    field: "fullName",
    headerName: "Name",
    width: 200,
    pos: "12%",
    editable: false,
  },
  {
    field: "nickName",
    headerName: "Nick Name",
    width: 160,
    pos: "17%",
    editable: false,
  },
  {
    field: "family",
    headerName: "Family Name",
    width: 120,
    pos: "24%",
    editable: false,
  },
  {
    field: "cohort",
    headerName: "Cohort",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    type: "singleSelect",
    valueOptions: ["Family", "Friends", "Work", "Others"],
    pos: "31%",
    editable: false,
  },
  {
    field: "contact",
    headerName: "Phone Numbers",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    pos: "36%",
    width: 250,
    renderCell: (params) => (
      <Grid
        container
        rowSpacing={0.5}
        columnSpacing={{ xs: 0.5, sm: 1, md: 1.5 }}
      >
        {params.value &&
          params.value
            .split(",")
            .splice(0, 2)
            .map((val, index) => (
              <Grid xs="auto">
                <Chip
                  variant="outlined"
                  color={index == 1 ? "primary" : "success"}
                  size="small"
                  label={val}
                  onDelete={handleDelete}
                />
              </Grid>
            ))}
      </Grid>
    ),
  },
  {
    field: "headCount",
    headerName: "No. of Guests",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    pos: "49%",
    width: 120,
  },
  {
    field: "isInvitationSent",
    headerName: "Wedding Invitation",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    type: "boolean",
    pos: "55%",
    width: 130,
  },
];

function convertToTableColumnHeader(item) {
  return {
    field: item.functionName,
    headerName: item.functionName,
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    type: "boolean",
    width: 130,
    renderCell: (params) => (
      <Checkbox
        style={{ width: 25 }}
        color="primary"
        checked={params.value}
        inputProps={{ "aria-label": "select all desserts" }}
      />
    ),
  };
}

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};

const cohortOptions = ["Family", "Friends", "Work", "Others"];

const actions = [
  {
    field: "actions",
    type: "actions",
    width: 80,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Delete"
        onClick={deleteGuest(params.id)}
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={deleteGuest(params.id)}
      />,
    ],
  },
];

function EditToolbar(props) {
  const { setGuestListData, setRowModesModel } = props;

  const newRow = {
    id: 0,
    fullName: "",
    nickName: "",
    family: "",
    contact: "",
    cohort: "",
    headCount: 1,
    isInvitationSent: false,
  };

  const handleClick = () => {
    const id = 0;
    setGuestListData((oldRows) => [...oldRows, newRow, newRow, newRow]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "fullName" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Add Guests
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<EditIcon />}
        onClick={handleClick}
      >
        Edit Guest
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<DeleteIcon />}
        onClick={handleClick}
      >
        Delete Guest
      </Button>
    </GridToolbarContainer>
  );
}

function deleteGuest(id) {}

function mapItinerary(itinerary) {
  var obj = {};
  obj[itinerary.functionName] = itinerary.isInvited;
  return obj;
}

function convertToGuestData(item) {
  var mergedItems = [];
  if (Array.isArray(item.iternaryList) && item.iternaryList.length) {
    const convertedItems = item.iternaryList.map((singleItem) =>
      mapItinerary(singleItem)
    );
    mergedItems = Object.assign(...convertedItems);
  }

  return {
    id: item.id,
    fullName: item.salutation + " " + item.fullName,
    nickName: item.nickName,
    family: item.family,
    contact: item.contact.join(","),
    cohort: item.cohort,
    headCount: item.headCount,
    isInvitationSent: item.isInvitationSent,
    ...mergedItems,
  };
}

export default function index() {
  const [nbRows, setNbRows] = React.useState(3);

  const [page, setPage] = React.useState(0);

  const [isLoading, setIsLoading] = React.useState(true);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [guestListData, setGuestListData] = useState([]);

  const [rowModesModel, setRowModesModel] = React.useState({});

  const [itineraryColumns, setItineraryColumns] = useState([]);

  const navItems = useNavItemsStore((state) => state.navItems);

  console.log("Header nav items");
  console.log(navItems);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 0,
  });

  const addRow = () => setNbRows((x) => Math.min(100, x + 1));

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const getItineraryColumns = async () => {
    const response = await getItineraryConfig();
    const fetchedItineraryColumns =
      Array.isArray(response) && response.length
        ? response.map((col) => convertToTableColumnHeader(col))
        : [];
    setItineraryColumns(fetchedItineraryColumns);
  };

  const getGuestListData = async () => {
    const requestPayload = {
      limit: 20,
      offset: 0,
      sortDirection: "DESC",
      sortColumn: "name",
    };
    const response = await getAllGuestsList(requestPayload);
    setGuestListData(
      response.allGuestsData.map((data) => convertToGuestData(data))
    );
  };
  const initNavItems = useNavItemsStore((state) => state.initNavItems);

  useEffect(() => {
    setIsLoading(true);
    getGuestListData();
    getItineraryColumns();
    initNavItems();
    setIsLoading(false);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "absolute",
        overflow: "hidden",
        p: "1%",
        paddingTop: "6%",
        // mt: "4%",
        boxShadow: "border-box",
        overflowY: "hidden",
      }}
    >
      <Header navItems={navItems} isHome={false} />
      <Stack
        direction="row"
        spacing={1}
        sx={{ mb: 1 }}
        alignItems="center"
        justifyContent="flex-start"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="filled-basic"
          label="Nick Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="filled-basic"
          label="Family Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="standard-basic"
          label="Phone Number"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Cohort"
          defaultValue=""
          size="small"
          sx={{ minWidth: 160 }}
        >
          {cohortOptions.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <Button
          color="primary"
          startIcon={<ClearIcon />}
          // onClick={handleClick}
          sx={{ marginLeft: 10 }}
        >
          Clear
        </Button>
      </Stack>
      <Box sx={{ height: "92%", width: "100%" }}>
        <DataGrid
          rows={guestListData}
          columns={guestListColumns.concat(itineraryColumns).concat(actions)}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowsPerPageOptions={[10, 20, 100]}
          paginationMode="server"
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnMenu={true}
          getRowId={(row) => row.id}
          rowHeight={40}
          getRowHeight={() => "auto"}
          sx={{}}
          slots={{
            loadingOverlay: LinearProgress,
            noRowsOverlay: CustomNoRowsOverLay,
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setGuestListData, setRowModesModel },
          }}
          loading={isLoading}
          getEstimatedRowHeight={() => 40}
        />
      </Box>
    </Box>
  );
}
