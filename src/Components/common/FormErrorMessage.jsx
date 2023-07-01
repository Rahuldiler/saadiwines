import React from "react";
import Notification from "./Notification";

function FormErrorMessage({ errorMessage }) {
  return (
    <div style={{ color: "Red" }}>
      {errorMessage}
      <Notification type="error" message={errorMessage} />
    </div>
  );
}

export default FormErrorMessage;
