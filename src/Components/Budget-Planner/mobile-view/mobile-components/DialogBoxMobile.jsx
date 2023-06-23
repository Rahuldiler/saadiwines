import React from "react";
import { Dialog, DialogContent } from "@mui/material";

const style = {
  dialog: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        minWidth: "96%", // Set your width here
        height: '100%'
      },
    },
  },
  dialogDesktop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        // minWidth: "96%", // Set your width here
        // height: "100%",
      },
    },
  },
  dialogContent: {
    width: "100%",
    height: "100%",
    padding: 2,
  },
};

const DialogBox = ({ open, onClose, children,isDesktop = false }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={isDesktop ? style.dialogDesktop : style.dialog}
      //   className={classes.dialog}
    >
      <DialogContent sx={style.dialogContent}>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogBox;
