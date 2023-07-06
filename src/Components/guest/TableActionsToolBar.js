import { GridRowModes, GridToolbarContainer } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { deleteGuest } from "../../services/guests/guestService";

export default function TableActionsToolBar({ selectedRowIds }) {
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

  const handleDeleteClick = () => {
    const ids =
      Array.isArray(selectedRowIds) && selectedRowIds.length > 0
        ? selectedRowIds.toString()
        : 0;
    deleteGuest(ids);
  };

  return (
    <GridToolbarContainer>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AddIcon />}
        // onClick={handleClick}
      >
        Add Guests
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<EditIcon />}
        // onClick={handleClick}
      >
        Edit Guest
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteClick}
      >
        Delete Guest
      </Button>
    </GridToolbarContainer>
  );
}
