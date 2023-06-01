import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

import styles from "../../styles/Form.module.css";
import { MultilineTextField, TextFieldInput } from "../Common/TextFieldInput";

function Step4Contact({ setContactDetails, contactDetails }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  console.log(contactDetails);
  return (
    <Box
      sx={{
        m: { lg: "20px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Contact Details
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <TextFieldInput
          id="firstName"
          label="First Name"
          name="firstName"
          type="text"
          value={contactDetails.firstName}
          onChange={handleChange}
        />

        <TextFieldInput
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          value={contactDetails.lastName}
          onChange={handleChange}
        />

        <TextFieldInput
          id="contactNumber"
          name="contactNumber"
          label="Contact Number"
          type="Number"
          value={contactDetails.contactNumber}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
}

export default Step4Contact;
