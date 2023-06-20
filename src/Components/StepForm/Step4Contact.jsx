import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import styles from "../../styles/Form.module.css";
import { MultilineTextField, TextFieldInput } from "../common/TextFieldInput";
import { AiOutlineDelete } from "react-icons/ai";

function Step4Contact({
  setContactDetails,
  contactDetails,
  setValidationBoolean,
  specialChars,
}) {
  const addNewContact = () => {
    setContactDetails((prevData) => [
      ...prevData,
      {
        arrayId: prevData[prevData.length - 1].arrayId + 1,
        firstName: "",
        lastName: "",
        contactNumber: "",
        fromSide: "GROOM",
      },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...contactDetails];
    list[index][name] = value;
    setContactDetails(list);
  };

  const deleteContact = (id) => {
    setContactDetails((prevData) =>
      prevData.filter((lists) => lists.arrayId !== id)
    );
  };

  useEffect(() => {
    contactDetails[0].firstName
      ? setValidationBoolean(false)
      : setValidationBoolean(true);
  }, [contactDetails]);

  console.log(contactDetails);
  return (
    <Box
      sx={{
        m: { lg: "20px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6"> Contact Details</Typography>
        <Button
          onClick={addNewContact}
          className="bg-[#BC8129]"
          sx={{
            backgroundColor: "#BC8129",
            color: "#fff",
            "&:hover": {
              background: "#BC812990",
            },
          }}
        >
          + Add Contact
        </Button>
      </Box>
      {contactDetails.map((contact, index) => {
        return (
          <FormControl
            sx={{
              mt: 4,
              width: "100%",
              borderBottom: "0.5px solid #BC812950",
              paddingBottom: 4,
            }}
            key={index}
          >
            <Box
              sx={{
                display: "Flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Contact {index + 1}</Typography>
              {contactDetails.length > 1 && (
                <Button
                  onClick={() => deleteContact(contact.arrayId)}
                  sx={{
                    color: "#BC8129",
                  }}
                >
                  <AiOutlineDelete size={20} />
                </Button>
              )}
            </Box>
            <TextFieldInput
              id="firstName"
              label="First Name"
              name="firstName"
              type="text"
              value={contact.firstName}
              onChange={(e) => handleChange(e, index)}
            />
            {(contact?.firstName?.match(specialChars) ||
              /\d/.test(contact?.firstName)) && (
              <Box sx={{ color: "red", fontSize: "14px" }}>
                Please don't add any special character and number
              </Box>
            )}
            <TextFieldInput
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              value={contact.lastName}
              onChange={(e) => handleChange(e, index)}
            />
            {(contact?.lastName?.match(specialChars) ||
              /\d/.test(contact?.lastName)) && (
              <Box sx={{ color: "red", fontSize: "14px" }}>
                Please don't add any special character and number
              </Box>
            )}
            <TextFieldInput
              id="contactNumber"
              name="contactNumber"
              label="Contact Number"
              type="Number"
              value={contact.contactNumber}
              onChange={(e) => handleChange(e, index)}
            />
          </FormControl>
        );
      })}
    </Box>
  );
}

export default Step4Contact;
