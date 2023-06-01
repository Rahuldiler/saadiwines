import React from "react";
import { TextField, FormLabel } from "@mui/material";

const TextFieldInput = ({
  label,
  type,
  value,
  onChange,
  name,
  id,
  autoComplete,
}) => {
  return (
    <TextField
      sx={{
        // background: "#FFF9F5",
        border: 0,
        width: "100%",
        "&.MuiTextField-root": {
          width: "100%",
        },
        "& input[type=number]": {
          "-moz-appearance": "textfield",
        },
        "& input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      }}
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

const MultilineTextField = ({ name, value, handleCh, label }) => {
  return (
    <TextField
      sx={{
        // background: "#FFF9F5",
        border: 0,
        width: "100%",
      }}
      label={label}
      multiline
      rows={3}
      name={name}
      value={value}
      onChange={handleCh}
    />
  );
};

const FormLabelCustom = ({ label }) => {
  <FormLabel
    id="demo-radio-buttons-group-label"
    sx={{ fontWeight: 500, mt: 2, color: "#000" }}
  >
    {label}
  </FormLabel>;
};

export { TextFieldInput, MultilineTextField, FormLabelCustom };
