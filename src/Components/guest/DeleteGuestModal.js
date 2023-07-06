import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function DeleteGuestModal({
  open,
  onClose,
  selectedCount,
  handleDelete,
}) {
  const guestTitle = selectedCount == 1 ? "Guest" : "Guests";

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">
        <Typography variant="h5" component="h5">
          Delete {selectedCount} Selected {guestTitle}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Box
            sx={{
              flexGrow: 1,
            }}
          ></Box>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          color="error"
          style={{ backgroundColor: red[900] }}
          onClick={handleDelete}
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
