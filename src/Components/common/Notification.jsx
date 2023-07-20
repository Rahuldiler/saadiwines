import React, { use, useRef } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { useState } from "react";
import useNotificationStore from "@/store/notificationStore";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Notification = () => {
  const { notificationDetails } = useNotificationStore((state) => ({
    notificationDetails: state.notificationDetails,
  }));
  const notification = useNotificationStore((state) => state.notification);

  const ref = useRef(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    notification({ ...notificationDetails, open: false });
  };

  return (
    <Snackbar
      open={notificationDetails.open}
      ref={ref}
      className="custom-snackbar"
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={notificationDetails?.type}
        sx={{
          width: "100%",
          background: notificationDetails?.type === "info" && "#F7B011",
        }}
        onClose={handleClose}
      >
        {notificationDetails?.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
