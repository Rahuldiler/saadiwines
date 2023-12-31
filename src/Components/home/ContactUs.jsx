import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { COLORS } from "../utils/ConstantTheme";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addContactUs } from "@/services/Contact/contact-us";
import Notification from "../common/Notification";

function ContactUs() {
  const [contactForm, setContactForm] = useState();
  const [isNotification, setIsNotification] = useState({
    type: "",
    message: "",
  });
  const contactInfo = [
    {
      title: "Write us at",
      value: "query@shaadivines.com",
      icon: <HiMail style={{ marginRight: 4 }} size={24} />,
    },
    {
      title: "Call us",
      value: "+91 88001 91621",
      icon: <FaPhone style={{ marginRight: 4 }} size={24} />,
    },
    {
      title: "Address",
      value: "Sector 137, Noida",
      icon: <ImLocation style={{ marginRight: 4 }} size={24} />,
    },
  ];
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
      } catch (err) {
        setIsNotification({
          type: "error",
          message: "Message not able to send",
        });
      }
    },
  });

  return (
    <section id="contact">
      <Notification
        message={isNotification.message}
        type={isNotification.type}
      />
      <Box>
        <Typography
          variant="h2"
          className="vibeFont"
          sx={{ color: "#bc8129", mt: 10, textAlign: "center" }}
        >
          Contact Us
        </Typography>
        <Grid
          container
          sx={{ my: { lg: 10, xs: "40px" }, px: { lg: 0, xs: "20px" } }}
          className="layoutMargin"
        >
          <Grid
            item
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "30px" }}>
              Have Questions? Feel Free to Write Us
            </Typography>
            <Typography variant="body1" sx={{ mr: 10, my: 2 }}>
              If you have any questions or inquiries, we are here to help! We
              value your feedback and are eager to assist you.
            </Typography>

            {contactInfo.map((contact, index) => {
              return (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mt: 2 }}
                >
                  <Box
                    sx={{
                      background: "#BC8129",
                      p: { lg: 3, xs: 2 },
                      mr: { lg: 4, xs: 2 },
                      borderRadius: "7px",
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    {contact.icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontSize: "16px" }}>
                      {contact.title}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "20px" }}>
                      {contact.value}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                border: "1px solid #BC8129",
                p: 4,
                borderRadius: "7px",
                mt: { lg: 0, xs: "40px" },
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  type="text"
                  name="name"
                  value={formik.values?.name || ""}
                  onChange={formik.handleChange}
                  placeholder="Name *"
                  sx={{ background: "#FFF9F5", border: 0, width: "100%" }}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: "Red" }}>{formik.errors.name}</div>
                ) : null}
                <TextField
                  type="number"
                  name="contactNumber"
                  value={formik.values?.contactNumber || ""}
                  onChange={formik.handleChange}
                  placeholder="Phone Number *"
                  sx={{
                    background: "#FFF9F5",
                    border: 0,
                    width: "100%",
                    mt: 4,
                    "&.MuiTextField-root": {
                      width: "100%",
                    },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                    "& input[type=number]::-webkit-outer-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    "& input[type=number]::-webkit-inner-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  }}
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <div style={{ color: "Red" }}>
                    {formik.errors.contactNumber}
                  </div>
                ) : null}
                <TextField
                  type="email"
                  name="fromMail"
                  value={formik.values?.fromMail || ""}
                  onChange={formik.handleChange}
                  placeholder="Email Address *"
                  sx={{
                    background: "#FFF9F5",
                    border: 0,
                    width: "100%",
                    mt: 4,
                  }}
                />
                {formik.touched.fromMail && formik.errors.fromMail ? (
                  <div style={{ color: "Red" }}>{formik.errors.fromMail}</div>
                ) : null}
                <TextField
                  type="text"
                  name="issueInfo"
                  value={formik.values?.issueInfo || ""}
                  onChange={formik.handleChange}
                  placeholder="Write Message *"
                  multiline
                  rows={5}
                  sx={{
                    background: "#FFF9F5",
                    border: 0,
                    width: "100%",
                    mt: 4,
                  }}
                />
                {formik.touched.issueInfo && formik.errors.issueInfo ? (
                  <div style={{ color: "Red" }}>{formik.errors.issueInfo}</div>
                ) : null}
                <Button
                  type="submit"
                  className={`bg-[${COLORS.primary}]`}
                  sx={{
                    backgroundColor: "#BC8129",
                    color: "#fff",
                    border: 0,
                    p: "7px 30px",
                    width: "100%",
                    mt: 4,
                    "&:hover": {
                      background: "#BC812990",
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default ContactUs;
