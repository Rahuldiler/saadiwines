import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Divider, Typography } from "@mui/material";
import { COLORS } from "../utils/ConstantTheme";
const style = {
  dialogDesktop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "25%",
      },
    },
  },
};
const Modal = ({ title, open, saveCallback, fields, setOpen }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} sx={style.dialogDesktop}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>
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
