import {
  Box,
  BoxLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styles from "../../styles/Form.module.css";
import Image from "next/image";
import dayjs from "dayjs";
import moment from "moment";
import {
  FormLabelCustom,
  MultilineTextField,
  TextFieldInput,
} from "../common/TextFieldInput";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import NavigationSteps from "./NavigationSteps";
import Loader from "../common/Loader";
import CustomCircularProgress from "../Budget-Planner/CustomCircularProgress";
import Notification from "../common/Notification";
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
  const [valueDateTime, setValueDateTime] = useState();

  const formik = useFormik({
    initialValues: {
      id: "",
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
      dateTime: "",
      thankYouMessage: "",
      pics: ["D", "E", "F"],
      placesToVisit: ["Dont know", "Don know 2"],
    },
    validationSchema: Yup.object({
      groom: Yup.object({
        name: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required groom name"),
        fatherName: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required groom father Name"),
        motherName: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required groom mother Name"),
        description: Yup.string().required("Required groom description "),
      }),
      bride: Yup.object({
        name: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required bride name"),
        fatherName: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required bride father Name"),
        motherName: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required bride mother Name"),
        description: Yup.string().required("Required bride description "),
      }),
      dateTime: Yup.string().required("Required Date"),
      thankYouMessage: Yup.string().required("Required Thank You Message"),
    }),
    onSubmit: (values) => {
      handleNext(values);
      setFormLoading(true);
    },
  });

  useEffect(() => {
    websiteForm && formik.setValues(websiteForm);
  }, [websiteForm]);

  const handleDateTime = (newValue) => {
    setValueDateTime(newValue);
    formik.setFieldValue(
      "dateTime",
      String(moment(newValue?.$d).toISOString())
    );
  };

  useEffect(() => {
    setValueDateTime(dayjs(websiteForm?.dateTime));
  }, [websiteForm.dateTime]);
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
                  <div style={{ color: "Red" }}>
                    {formik.errors.groom?.name}
                    <Notification
                      type="error"
                      message={formik.errors.groom?.name}
                    />
                  </div>
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
                  value={formik.values?.groom.fatherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.groom?.fatherName &&
                formik.errors.groom?.fatherName ? (
                  <div style={{ color: "Red" }}>
                    {formik.errors.groom?.fatherName}
                    <Notification
                      type="error"
                      message={formik.errors.groom?.fatherName}
                    />
                  </div>
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
                  <div style={{ color: "Red" }}>
                    {formik.errors.groom?.motherName}
                  </div>
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
                  <div style={{ color: "Red" }}>
                    {formik.errors.groom?.grandFatherName}
                  </div>
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
                  <div style={{ color: "Red" }}>
                    {formik.errors.groom?.grandMotherName}
                  </div>
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
                <div style={{ color: "Red" }}>
                  {formik.errors.groom?.description}
                </div>
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
                  <div style={{ color: "Red" }}>
                    {formik.errors.bride?.name}
                  </div>
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
                  value={formik.values?.bride.fatherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.bride?.fatherName &&
                formik.errors.bride?.fatherName ? (
                  <div style={{ color: "Red" }}>
                    {formik.errors.bride?.fatherName}
                  </div>
                ) : null}
              </Box>
              <Box>
                <TextFieldInput
                  id="motherName"
                  label="Bride Mother Name *"
                  name="bride.motherName"
                  type="text"
                  value={formik.values?.bride.motherName}
                  onChange={formik.handleChange}
                />
                {formik.touched.bride?.motherName &&
                formik.errors.bride?.motherName ? (
                  <div style={{ color: "Red" }}>
                    {formik.errors.bride?.motherName}
                  </div>
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
                  <div style={{ color: "Red" }}>
                    {formik.errors.bride?.grandFatherName}
                  </div>
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
                  <div style={{ color: "Red" }}>
                    {formik.errors.bride?.grandMotherName}
                  </div>
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
                <div style={{ color: "Red" }}>
                  {formik.errors.bride?.description}
                </div>
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
            <div style={{ color: "Red" }}>{formik.errors.thankYouMessage}</div>
          ) : null}
          <LocalizationProvider required dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a date *"
              name="valueDateTime"
              value={valueDateTime || ""}
              disablePast
              onChange={(newValue) => handleDateTime(newValue)}
              sx={{ mt: 2, width: "100%" }}
            />
            {formik.touched.dateTime && formik.errors.dateTime ? (
              <div style={{ color: "Red" }}>{formik.errors.dateTime}</div>
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
