import React, { useEffect } from "react";

import { Box, FormControl, Button, Typography } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

import { deleteContact } from "@/services/Contact/formContact";
import NavigationSteps from "./NavigationSteps";
import { TextFieldInput } from "../common/TextFieldInput";
import FormErrorMessage from "../common/FormErrorMessage";
import FormUploadImageSection from "../common/FormUploadImageSection";

function Step4Contact({
  contactDetails,
  handleNext,
  activeStep,
  handleBack,
  setFormLoading,
  setContactDetails,
}) {
  const formFields = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    fromSide: "GROOM",
  };
  const addNewContact = (id) => {
    formik.setValues([
      ...formik.values,
      {
        arrayId: id + 1,
        ...formFields,
      },
    ]);
  };

  const nameSchema = Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
    .required("Required");

  const formik = useFormik({
    initialValues: [
      {
        id: "",
        arrayId: 1,
        ...formFields,
      },
    ],
    validationSchema: Yup.array().of(
      Yup.object().shape({
        firstName: nameSchema,
        lastName: nameSchema,
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
  const handleImgChange = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result;
      const list = [...formik.values];
      list[index]["image"] = base64Data;
      formik.setValues(list);
    };

    reader.readAsDataURL(file);
  };
  // const handleImgChange = (base64, index) => {
  //   const list = [...formik.values];
  //   list[index]["image"] = base64;
  //   formik.setValues(list);
  // };

  const deleteContactBox = async (arrayId, id) => {
    if (arrayId !== 1) {
      const updatedList = formik.values.filter(
        (list) => list.arrayId !== arrayId
      );
      formik.setValues(updatedList);
    } else {
      formik.resetForm();
      setContactDetails([]);
    }

    id && (await deleteContact(id));
  };

  useEffect(() => {
    if (contactDetails.length !== 0) {
      formik.setValues(contactDetails);
    } else {
      formik.setValues([
        {
          arrayId: 1,
          ...formFields,
        },
      ]);
    }
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
                <Button
                  onClick={() => deleteContactBox(contact.arrayId, contact.id)}
                  sx={{
                    color: "#BC8129",
                  }}
                >
                  <AiOutlineDelete size={20} />
                </Button>
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
              <FormUploadImageSection
                formikImg={formik.values[index]?.image}
                handleImgChange={handleImgChange}
                index={index}
              />
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
