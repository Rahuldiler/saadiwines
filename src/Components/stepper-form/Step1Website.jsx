import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";
import moment from "moment";

import { useFormik } from "formik";
import * as Yup from "yup";

import { MultilineTextField, TextFieldInput } from "../common/TextFieldInput";
import NavigationSteps from "./NavigationSteps";
import FormErrorMessage from "../common/FormErrorMessage";

function Step1Website({
  websiteForm,
  setWebsiteForm,
  handleNext,
  activeStep,
  handleBack,
  setFormLoading,
}) {
  // const [valueTime, setValueTime] = React.useState(dayjs("2022-04-17T15:30"));
  // const [valueDate, setValueDate] = React.useState(dayjs("2022-04-17T15:30"));
  const [valueDateTime, setValueDateTime] = useState("");

  const nameSchema = Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
    .required("Name is required");

  const parentNameSchema = nameSchema
    .clone()
    .required("Parent name is required");

  const grandParentNameSchema = Yup.string().matches(
    /^[a-zA-Z\s]*$/,
    "No special characters allowed"
  );

  const descriptionSchema = Yup.string().required("Description is required");

  const personSchema = Yup.object({
    name: nameSchema,
    fatherName: parentNameSchema,
    motherName: parentNameSchema,
    grandFatherName: grandParentNameSchema,
    grandMotherName: grandParentNameSchema,
    description: descriptionSchema,
  });

  const formik = useFormik({
    initialValues: {
      groom: {
        name: "",
        fatherName: "",
        motherName: "",
        grandMotherName: "",
        grandFatherName: "",
        description: "",
      },
      bride: {
        name: "",
        fatherName: "",
        motherName: "",
        grandMotherName: "",
        grandFatherName: "",
        description: "",
      },
      functionDateTime: "",
      thankYouMessage: "",
    },
    validationSchema: Yup.object({
      groom: personSchema,
      bride: personSchema,
      functionDateTime: Yup.string().required("Date is required"),
      thankYouMessage: Yup.string().required("Thank You Message is required"),
    }),
    onSubmit: (values) => {
      handleNext(values);
      setFormLoading(true);
    },
  });

  const handleDateTime = (newValue) => {
    const dayjsFormat = dayjs(newValue).$d;
    setValueDateTime(newValue);
    formik.setFieldValue(
      "functionDateTime",
      dayjsFormat
        ? String(moment(dayjsFormat).format("YYYY-MM-DDT00:00:00[Z]"))
        : null
    );
  };

  useEffect(() => {
    if (websiteForm.id) {
      formik.setValues(websiteForm);
      setValueDateTime(dayjs(websiteForm?.functionDateTime));
    }
  }, [websiteForm]);

  return (
    <Box
      sx={{
        m: { lg: "20px 200px 0px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Website Details
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box
            sx={{
              paddingBottom: 4,
              width: "50%",
            }}
          >
            <Typography variant="body1">Groom Details</Typography>
            <Box sx={{ gap: 2 }}>
              <Box sx={{ width: "100%" }}>
                <TextFieldInput
                  id="name"
                  label="Groom Name *"
                  name="groom.name"
                  type="text"
                  value={formik.values?.groom?.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.groom?.name && formik.errors.groom?.name ? (
                  <FormErrorMessage errorMessage={formik.errors.groom?.name} />
                ) : null}
              </Box>
            </Box>
            <Box sx={{ width: "100%", gap: 2 }}>
              <Box>
                <TextFieldInput
                  id="fatherName"
                  label="Groom Father Name *"
                  name="groom.fatherName"
                  type="text"
                  value={formik.values?.groom?.fatherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.groom?.fatherName &&
                formik.errors.groom?.fatherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.groom?.fatherName}
                  />
                ) : null}
              </Box>
              <Box>
                <TextFieldInput
                  id="motherName"
                  label="Groom Mother Name *"
                  name="groom.motherName"
                  type="text"
                  value={formik.values?.groom?.motherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.groom?.motherName &&
                formik.errors.groom?.motherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.groom?.motherName}
                  />
                ) : null}
              </Box>
            </Box>
            <Box sx={{ width: "100%", gap: 2 }}>
              <Box>
                <TextFieldInput
                  id="grandFatherName"
                  label="Groom Grand Father Name (optional)"
                  name="groom.grandFatherName"
                  type="text"
                  required={false}
                  value={formik.values?.groom?.grandFatherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.groom?.grandFatherName &&
                formik.errors.groom?.grandFatherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.groom?.grandFatherName}
                  />
                ) : null}
              </Box>
              <Box>
                <TextFieldInput
                  id="grandMotherName"
                  label="Groom Grand Mother Name (optional)"
                  name="groom.grandMotherName"
                  type="text"
                  required={false}
                  value={formik.values?.groom?.grandMotherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.groom?.grandMotherName &&
                formik.errors.groom?.grandMotherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.groom?.grandMotherName}
                  />
                ) : null}
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <MultilineTextField
                name="groom.description"
                label="Groom Description *"
                value={formik.values?.groom?.description}
                handleCh={formik.handleChange}
              />
              {formik.touched.groom?.description &&
              formik.errors.groom?.description ? (
                <FormErrorMessage
                  errorMessage={formik.errors.groom?.description}
                />
              ) : null}
            </Box>
          </Box>
          {/* bride */}
          <Box
            sx={{
              paddingBottom: 4,
              width: "50%",
            }}
          >
            <Typography variant="body1">Bride Details</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ width: "100%" }}>
                <TextFieldInput
                  id="name"
                  label="Bride Name *"
                  name="bride.name"
                  type="text"
                  value={formik.values?.bride?.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.bride?.name && formik.errors.bride?.name ? (
                  <FormErrorMessage errorMessage={formik.errors.bride?.name} />
                ) : null}
              </Box>
            </Box>
            <Box sx={{ width: "100%", gap: 2 }}>
              <Box>
                <TextFieldInput
                  id="fatherName"
                  label="Bride Father Name *"
                  name="bride.fatherName"
                  type="text"
                  value={formik.values?.bride?.fatherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.bride?.fatherName &&
                formik.errors.bride?.fatherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.bride?.fatherName}
                  />
                ) : null}
              </Box>
              <Box>
                <TextFieldInput
                  id="motherName"
                  label="Bride Mother Name *"
                  name="bride.motherName"
                  type="text"
                  value={formik.values?.bride?.motherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.bride?.motherName &&
                formik.errors.bride?.motherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.bride?.motherName}
                  />
                ) : null}
              </Box>
            </Box>
            <Box sx={{ width: "100%", gap: 2 }}>
              <Box>
                <TextFieldInput
                  id="grandFatherName"
                  label="Bride Grand Father Name (optional)"
                  name="bride.grandFatherName"
                  type="text"
                  required={false}
                  value={formik.values?.bride?.grandFatherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.bride?.grandFatherName &&
                formik.errors.bride?.grandFatherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.bride?.grandFatherName}
                  />
                ) : null}
              </Box>
              <Box>
                <TextFieldInput
                  id="grandMotherName"
                  label="Bride Grand Mother Name (optional)"
                  name="bride.grandMotherName"
                  type="text"
                  required={false}
                  value={formik.values?.bride?.grandMotherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.bride?.grandMotherName &&
                formik.errors.bride?.grandMotherName ? (
                  <FormErrorMessage
                    errorMessage={formik.errors.bride?.grandMotherName}
                  />
                ) : null}
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <MultilineTextField
                name="bride.description"
                label="Bride Description *"
                value={formik.values?.bride?.description}
                handleCh={formik.handleChange}
              />
              {formik.touched.bride?.description &&
              formik.errors.bride?.description ? (
                <FormErrorMessage
                  errorMessage={formik.errors.bride?.description}
                />
              ) : null}
            </Box>
          </Box>
        </Box>
        <Box>
          <MultilineTextField
            name="thankYouMessage"
            label="Thank You Message *"
            value={formik.values?.thankYouMessage}
            handleCh={formik.handleChange}
          />
          {formik.touched.thankYouMessage && formik.errors.thankYouMessage ? (
            <FormErrorMessage errorMessage={formik.errors.thankYouMessage} />
          ) : null}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a date *"
              name="valueDateTime"
              value={valueDateTime || null}
              disablePast
              onChange={(newValue) => handleDateTime(newValue)}
              sx={{ mt: 2, width: "100%" }}
            />
            {formik.touched.functionDateTime &&
            formik.errors.functionDateTime ? (
              <div style={{ color: "Red" }}>
                {formik.errors.functionDateTime}
              </div>
            ) : null}
          </LocalizationProvider>
        </Box>
        <NavigationSteps
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </form>
    </Box>
  );
}

export default Step1Website;
