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
import NavigationSteps from "./NavigationSteps";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormErrorMessage from "../common/FormErrorMessage";
import Notification from "../common/Notification";
import { deleteContact } from "@/services/Contact/formContact";
function Step4Contact({
  contactDetails,
  handleNext,
  activeStep,
  handleBack,
  setFormLoading,
}) {
  const addNewContact = (id) => {
    formik.setValues([
      ...formik.values,
      {
        arrayId: id + 1,
        firstName: "",
        lastName: "",
        contactNumber: "",
        fromSide: "GROOM",
      },
    ]);
  };

  const formik = useFormik({
    initialValues: [
      {
        id: "",
        arrayId: 1,
        firstName: "",
        lastName: "",
        contactNumber: "",
        fromSide: "GROOM",
      },
    ],
    validationSchema: Yup.array().of(
      Yup.object().shape({
        firstName: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required"),
        lastName: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required"),
        contactNumber: Yup.number().required("Required"),
      })
    ),
    onSubmit: (values) => {
      handleNext(values);
      setFormLoading(true);
    },
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formik.values];
    list[index][name] = value;
    formik.setValues(list);
  };

  const deleteContactBox = async (arrayId, id) => {
    const updatedList = formik.values.filter(
      (list) => list.arrayId !== arrayId
    );
    formik.setValues(updatedList);
    id && (await deleteContact(id));
  };

  useEffect(() => {
    contactDetails && formik.setValues(contactDetails);
  }, [contactDetails]);

  return (
    <Box
      sx={{
        m: { lg: "20px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      {/* {contactDetails && (
        <Notification message="Contact Details Info Loaded" type="success" />
      )} */}
      <Box
        sx={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6"> Contact Details</Typography>
        <Button
          onClick={() => addNewContact(formik.values.length)}
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
      <form onSubmit={formik.handleSubmit}>
        {formik.values.map((contact, index) => {
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
                {formik.values.length > 1 && (
                  <Button
                    onClick={() =>
                      deleteContactBox(contact.arrayId, contact.id)
                    }
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
                label="First Name *"
                name="firstName"
                type="text"
                value={contact.firstName}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.firstName &&
              formik.errors[index]?.firstName ? (
                <FormErrorMessage
                  errorMessage={formik.errors[index]?.firstName}
                />
              ) : null}
              <TextFieldInput
                id="lastName"
                name="lastName"
                label="Last Name *"
                type="text"
                value={contact.lastName}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.lastName &&
              formik.errors[index]?.lastName ? (
                <FormErrorMessage
                  errorMessage={formik.errors[index]?.lastName}
                />
              ) : null}
              <TextFieldInput
                id="contactNumber"
                name="contactNumber"
                label="Contact Number *"
                type="Number"
                value={contact.contactNumber}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.contactNumber &&
              formik.errors[index]?.contactNumber ? (
                <FormErrorMessage
                  errorMessage={formik.errors[index]?.contactNumber}
                />
              ) : null}
            </FormControl>
          );
        })}
        <NavigationSteps
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </form>
    </Box>
  );
}

export default Step4Contact;
