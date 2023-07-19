import React, { use, useRef } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Notification = ({ type, message, open }) => {
  const [openNotification, setOpenNotification] = useState(false);

  const ref = useRef(null);
  const handleClick = () => {
    // setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenNotification(false);
  };

  useEffect(() => {
    setOpenNotification(open);
  }, [open]);

  return (
    <Snackbar
      open={openNotification}
      ref={ref}
      className="custom-snackbar"
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={type}
        sx={{ width: "100%", background: type === "info" && "#F7B011" }}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
