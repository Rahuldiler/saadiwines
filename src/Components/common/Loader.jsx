import useLoadingStore from "@/store/loadingStore";
import { Box, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Image from "next/image";
import React from "react";

function Loader() {
  const { loading, message } = useLoadingStore((state) => ({
    loading: state.loading,
    message: state.message,
  }));

  return (
    <Backdrop
      open={loading ?? false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#00000080",
        position: "fixed",
        // color: "#fff",
        zIndex: 1201,
      }}
    >
      {/* <Box sx={{ position: "relative" }}>
        <div className="lds-heart">
          <div></div>
        </div>
        <Box>
          <Image
            src="/assets/SHAADI-VINES-ICON-01.svg"
            alt="Shaadi Vines Logo"
            width={100}
            height={100}
            style={{ position: "absolute", top: "0", left: "0" }}
          />
        </Box>
      </Box> */}
      <Box sx={{ position: "relative" }}>
        <div className="lds-heart">
          <div></div>
        </div>
        <Box>
          <Image
            src="/assets/SHAADI-VINES-ICON-01.svg"
            alt="Shaadi Vines Logo"
            width={100}
            height={100}
          />
        </Box>
      </Box>
      <Typography
        variant="body1"
        // className="loading-text"
        sx={{ color: "#f41953", mt: 2, fontWeight: 500 }}
      >
        {message}
      </Typography>
    </Backdrop>
  );
}

export default Loader;
