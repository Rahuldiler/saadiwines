import React, { useState } from "react";
import Login from "../Components/my-account/Login";
import SignUp from "../Components/my-account/Sign-up";

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
