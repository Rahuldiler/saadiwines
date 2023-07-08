import { Box, Button, FormControl, Link, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import React, { useState } from "react";
import { TextFieldInput } from "../common/TextFieldInput";
import { theme } from "../utils/theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import moment from "moment";
import Notification from "../common/Notification";
import { addContactUs } from "@/services/Contact/contact-us";

function HeroSection() {
  const [contactForm, setContactForm] = useState();
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
      console.log(values);
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
  console.log(formik.values);
  const handleDateTime = (newValue) => {
    const dayjsFormat = dayjs(newValue).$d;
    setValueDateTime(newValue);
    formik.setFieldValue(
      "issueInfo",
      String(moment(dayjsFormat).format("YYYY-MM-DDTHH:MM:SS[Z]"))
    );
  };
  return (
    <Box>
      <Notification
        message={isNotification.message}
        type={isNotification.type}
      />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            backgroundColor: "rgb(0, 0, 0)",
            zIndex: 3,
            opacity: 0.5,
          }}
        ></Box>
        <Box
          sx={{
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "center",
            alignContent: "center",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            height: "100vh",
            width: "100vw",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            className="vibeFont"
            sx={{ color: "#fff", fontSize: { lg: "6rem", xs: " 4rem" } }}
          >
            Creating memories, forever.
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff", fontSize: "18px" }}>
            Your special day deserves a special invitation.
            <br></br>
            With WEDsite
            {/* <sup>TM</sup> */}, creating a digital invitation is something
            your near and
            <br></br>
            dear ones will never forget.
          </Typography>
          <Box sx={{ marginTop: "40px" }}>
            <Button
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                marginLeft: "10px",
                padding: "7px 26px",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#E21A9E",
                  border: "1px solid #E21A9E",
                },
              }}
            >
              <Link
                href="#services"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Explore
              </Link>
            </Button>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: "18px",
              mx: { lg: 40, xs: 0 },
              mt: { lg: 6, xs: 2 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            iste sed, ex error delectus doloribus eaque molestiae veniam et
            voluptate!
          </Typography>
          <Box sx={{ mx: { lg: 10, xs: 4 }, mt: 2 }}>
            <form
              onSubmit={formik.handleSubmit}
              className="contact-form-hero-section"
            >
              {/* <TextFieldInput
                type="text"
                label="Question"
                name="question"
                value={formik.values?.question || ""}
                onChange={formik.handleChange}
                placeholder="Write Message *"
                bg="#FFFFFF"
              />
              {formik.touched.question && formik.errors.question ? (
                <div style={{ color: "Red" }}>{formik.errors.question}</div>
              ) : null} */}
              <Box
                sx={{
                  display: "flex",

                  width: "100%",
                  gap: { lg: "20px", xs: "10px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: { lg: "20px", xs: "10px" },
                  }}
                >
                  <LocalizationProvider required dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Wedding Date"
                      name="valueDateTime"
                      value={valueDateTime || ""}
                      disablePast
                      onChange={(newValue) => handleDateTime(newValue)}
                      sx={{
                        mt: 2,
                        width: "100%",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "7px",
                      }}
                    />
                    {formik.touched.issueInfo && formik.errors.issueInfo ? (
                      <div style={{ color: "Red" }}>
                        {formik.errors.issueInfo}
                      </div>
                    ) : null}
                  </LocalizationProvider>
                </Box>
                <TextFieldInput
                  type="text"
                  name="name"
                  label="Name"
                  value={formik.values?.name || ""}
                  onChange={formik.handleChange}
                  placeholder="Name *"
                  bg="#FFFFFF"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: "Red" }}>{formik.errors.name}</div>
                ) : null}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: { lg: "20px", xs: "10px" },
                }}
              >
                <TextFieldInput
                  type="number"
                  name="contactNumber"
                  label="Phone Number"
                  value={formik.values?.contactNumber || ""}
                  onChange={formik.handleChange}
                  placeholder="Phone Number *"
                  bg="#FFFFFF"
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <div style={{ color: "Red" }}>
                    {formik.errors.contactNumber}
                  </div>
                ) : null}
                <TextFieldInput
                  type="email"
                  name="fromMail"
                  label="Email Address"
                  value={formik.values?.fromMail || ""}
                  onChange={formik.handleChange}
                  placeholder="Email Address *"
                  bg="#FFFFFF"
                />
                {formik.touched.fromMail && formik.errors.fromMail ? (
                  <div style={{ color: "Red" }}>{formik.errors.fromMail}</div>
                ) : null}
              </Box>

              <Button
                type="submit"
                className={`bg-[${theme.palette.primary.main}]`}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  padding: "16px 14px",
                  marginTop: "10px",
                  border: 0,
                  width: { lg: "50%", xs: "100%" },
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
        </Box>
        {/* <Box style={{ width: "100vw", height: "100vh", objectFit: "cover" }}>
          <video
            src="https://download-video.akamaized.net/2/playback/9a87984f-dbd2-44c2-a0a6-1c85a286fa80/94779c32-673baa53?__token__=st=1684926149~exp=1684940549~acl=%2F2%2Fplayback%2F9a87984f-dbd2-44c2-a0a6-1c85a286fa80%2F94779c32-673baa53%2A~hmac=5704c4cef8aca0638d5c93f024f7f8ec06315677f9f4565740b515b50b106712&r=dXMtZWFzdDE%3D"
            loop=""
            autoplay=""
            preload="auto"
            poster=""
            playsinline=""
            style={{
              width: "100vw",
              height: "100vh",
            }}
          ></video>
        </Box> */}
        <Image
          alt="img"
          width={1000}
          height={1000}
          src="/assets/weddingimg1.jpg"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />

        <Image
          alt="img"
          width={1000}
          height={1000}
          src="/assets/whitepaper.svg"
          style={{
            position: "absolute",
            zIndex: 4,
            bottom: -20,
            width: "100%",
            height: "auto",
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
