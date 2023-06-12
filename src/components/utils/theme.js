import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#BC8129",
    },
    pinkColor: {
      main: "#E21A9E",
    },
  },
  boxShadow: {
    pinkShadow: "-1px 6px 25px #f8dcee",
    grayShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  border: {
    primaryBorder: "1px solid #BC8129 ",
    pinkBorder: "2px solid #E21A9E",
  },
});
