import React, { useState } from "react";
import SignIn from "@/Components/my-account/Login";
import SignUp from "@/Components/my-account/Sign-up";
import { Box } from "@mui/material";

export default function Authenticate() {
  const [handle, setHandle] = useState(true);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {handle ? (
        <SignIn setHandle={setHandle} />
      ) : (
        <SignUp setHandle={setHandle} />
      )}
    </Box>
  );
}
