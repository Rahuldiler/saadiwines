import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Divider, Typography } from "@mui/material";
const Modal = ({ title, open, saveCallback, fields, setOpen }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent >
        <Typography>Enter Name</Typography>
        {fields}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={saveCallback}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
