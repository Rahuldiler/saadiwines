import React, { useState } from "react";
import SignIn from "@/Components/my-account/Login";
import SignUp from "@/Components/my-account/Sign-up";

export default function Authenticate() {
  const [handle, setHandle] = useState(true);
  return (
    <>
      {handle ? (
        <SignIn setHandle={setHandle} />
      ) : (
        <SignUp setHandle={setHandle} />
      )}
    </>
  );
}
