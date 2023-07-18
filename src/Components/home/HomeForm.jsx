import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import moment from "moment";

import { TextFieldInput } from "../common/TextFieldInput";
import { theme } from "../utils/theme";
import Notification from "../common/Notification";
import { addContactUs } from "@/services/Contact/contact-us";

const HomeForm = () => {
  const [valueDateTime, setValueDateTime] = useState();

  const [isNotification, setIsNotification] = useState({
    type: "",
    message: "",
  });
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      contactNumber: "",
      fromMail: "",
      issueInfo: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
        .required("Required"),
      contactNumber: Yup.string().matches(
        phoneRegExp,
        "Phone number is not valid"
      ),
      issueInfo: Yup.string().required("Required"),
      fromMail: Yup.string().required("Required").email(),
    }),
    onSubmit: async (values) => {
      try {
        await addContactUs(values);
        setIsNotification({
          type: "success",
          message: "Message send successfully",
        });
        formik.resetForm();
        setValueDateTime(null);
      } catch (err) {
        formik.resetForm();

        setIsNotification({
          type: "error",
          message: "Message not able to send",
        });
      }
    },
  });
  const handleDateTime = (newValue) => {
    const dayjsFormat = dayjs(newValue).$d;
    setValueDateTime(newValue);
    formik.setFieldValue(
      "issueInfo",
      String(moment(dayjsFormat).format("DD-MMM-YYYY"))
    );
  };

  return (
    <Box sx={{ mx: { lg: 10, xs: 4 }, mt: 2 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#BC8129",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: 600,
          fontSize: { lg: "30px", xs: "20px" },
          mt: 10,
          mb: 6,
        }}
      >
        Share below details to book a free DEMO!
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="contact-form-hero-section"
      >
        <Grid container spacing={2}>
          <Grid item xs={6} lg={3}>
            <FormLabel sx={{ color: "#BC8129" }}>Wedding Date *</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Pick a date *"
                name="valueDateTime"
                value={valueDateTime || null}
                disablePast
                onChange={(newValue) => handleDateTime(newValue)}
                sx={{ width: "100%" }}
              />
              {formik.touched.issueInfo && formik.errors.issueInfo ? (
                <div style={{ color: "Red" }}>{formik.errors.issueInfo}</div>
              ) : null}
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormLabel sx={{ color: "#BC8129" }}>Name *</FormLabel>

              <TextField
                type="text"
                name="name"
                value={formik.values?.name || ""}
                onChange={formik.handleChange}
                placeholder="Name *"
              />
            </Box>
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "Red" }}>{formik.errors.name}</div>
            ) : null}
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormLabel sx={{ color: "#BC8129" }}>Phone Number *</FormLabel>

              <TextField
                type="number"
                name="contactNumber"
                value={formik.values?.contactNumber || ""}
                onChange={formik.handleChange}
                placeholder="Phone Number *"
              />
            </Box>
            {formik.touched.contactNumber && formik.errors.contactNumber ? (
              <div style={{ color: "Red" }}>{formik.errors.contactNumber}</div>
            ) : null}
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormLabel sx={{ color: "#BC8129" }}>Email Address *</FormLabel>

              <TextField
                type="email"
                name="fromMail"
                value={formik.values?.fromMail || ""}
                onChange={formik.handleChange}
                placeholder="Email Address *"
              />
            </Box>
            {formik.touched.fromMail && formik.errors.fromMail ? (
              <div style={{ color: "Red" }}>{formik.errors.fromMail}</div>
            ) : null}
          </Grid>
        </Grid>

        <Button
          type="submit"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            padding: "16px 14px",
            marginTop: "20px",
            border: 0,
            width: { lg: "10%", xs: "100%" },
            height: "100%",
            "&:hover": {
              background: "#BC812990",
            },
          }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default HomeForm;
