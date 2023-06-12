import React, { useState } from "react";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/Sign-up";

export default function Authenticate() {
  const [handle, setHandle] = useState(true);
  return (
    <>
      {handle ? (
        <Login setHandle={setHandle} />
      ) : (
        <SignUp setHandle={setHandle} />
      )}
    </>
  );
}
