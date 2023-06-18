import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
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
function Step1Website({ websiteForm, setWebsiteForm, specialChars }) {
  // const [valueTime, setValueTime] = React.useState(dayjs("2022-04-17T15:30"));
  // const [valueDate, setValueDate] = React.useState(dayjs("2022-04-17T15:30"));
  const [valueDateTime, setValueDateTime] = useState();

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    setWebsiteForm((prevData) => {
      console.log(prevData.groom, ",,");
      if (type === "groom") {
        return {
          ...prevData,
          groom: {
            ...prevData.groom,
            [name]: value,
          },
        };
      } else if (type === "bride") {
        return {
          ...prevData,
          bride: {
            ...prevData.bride,
            [name]: value,
          },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  console.log(websiteForm, "websiteForm");

  // const handleTime = (newValue) => {
  //   setValueTime(newValue);
  //   setWebsiteForm((prevData) => {
  //     return {
  //       ...prevData,
  //       time: moment(newValue?.$d).format("LT"),
  //     };
  //   });
  // };

  // const handleDate = (newValue) => {
  //   setValueDate(newValue);
  //   setWebsiteForm((prevData) => {
  //     return {
  //       ...prevData,
  //       date: moment(newValue?.$d).format("L"),
  //     };
  //   });
  // };

  const handleDateTime = (newValue) => {
    setValueDateTime(newValue);
    setWebsiteForm((prevData) => {
      return {
        ...prevData,
        dateTime: String(moment(newValue?.$d).format()),
      };
    });
  };

  useEffect(() => {
    setValueDateTime(dayjs(websiteForm?.dateTime));
  }, [websiteForm.dateTime]);

  console.log("first", websiteForm);

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
      <FormControl sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: "0.5px solid #BC812950",
            paddingBottom: 4,
          }}
        >
          <Typography variant="body1">Groom</Typography>
          <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <TextFieldInput
                id="name"
                label="Groom Name"
                name="name"
                type="text"
                value={websiteForm?.groom.name}
                onChange={(e) => handleChange(e, "groom")}
              />
              {(websiteForm?.groom?.name.match(specialChars) ||
                /\d/.test(websiteForm?.groom.name)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="fatherName"
                label="Groom Father Name"
                name="fatherName"
                type="text"
                value={websiteForm?.groom.fatherName}
                onChange={(e) => handleChange(e, "groom")}
              />
              {(websiteForm?.groom?.fatherName.match(specialChars) ||
                /\d/.test(websiteForm?.groom.fatherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="motherName"
                label="Groom Mother Name"
                name="motherName"
                type="text"
                value={websiteForm?.groom?.motherName}
                onChange={(e) => handleChange(e, "groom")}
              />
              {(websiteForm?.groom?.motherName.match(specialChars) ||
                /\d/.test(websiteForm?.groom?.motherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="grandFatherName"
                label="Groom Grand Father Name"
                name="grandFatherName"
                type="text"
                value={websiteForm?.groom?.grandFatherName}
                onChange={(e) => handleChange(e, "groom")}
              />
              {(websiteForm?.groom?.grandFatherName.match(specialChars) ||
                /\d/.test(websiteForm?.groom?.grandFatherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="grandMotherName"
                label="Groom Grand Mother Name"
                name="grandMotherName"
                type="text"
                value={websiteForm?.groom?.grandMotherName}
                onChange={(e) => handleChange(e, "groom")}
              />
              {(websiteForm?.groom?.grandMotherName.match(specialChars) ||
                /\d/.test(websiteForm?.groom?.grandMotherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <MultilineTextField
              name="description"
              label="Groom Description"
              value={websiteForm?.groom?.description}
              handleCh={(e) => handleChange(e, "groom")}
            />
          </Box>
        </Box>
        {/* bride */}
        <Box
          sx={{
            borderBottom: "0.5px solid #BC812950",
            paddingBottom: 4,
            mt: 2,
          }}
        >
          <Typography variant="body1">Bride Details</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <TextFieldInput
                id="name"
                label="Bride Name"
                name="name"
                type="text"
                value={websiteForm?.bride?.name}
                onChange={(e) => handleChange(e, "bride")}
              />
              {(websiteForm?.bride?.name.match(specialChars) ||
                /\d/.test(websiteForm?.bride?.name)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="fatherName"
                label="Bride Father Name"
                name="fatherName"
                type="text"
                value={websiteForm?.bride.fatherName}
                onChange={(e) => handleChange(e, "bride")}
              />
              {(websiteForm?.bride?.fatherName.match(specialChars) ||
                /\d/.test(websiteForm?.bride?.fatherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="motherName"
                label="Bride Mother Name"
                name="motherName"
                type="text"
                value={websiteForm?.bride.motherName}
                onChange={(e) => handleChange(e, "bride")}
              />
              {(websiteForm?.bride?.motherName.match(specialChars) ||
                /\d/.test(websiteForm?.bride?.motherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="grandFatherName"
                label="Bride Grand Father Name"
                name="grandFatherName"
                type="text"
                value={websiteForm?.bride?.grandFatherName}
                onChange={(e) => handleChange(e, "bride")}
              />
              {(websiteForm?.bride?.grandFatherName.match(specialChars) ||
                /\d/.test(websiteForm?.bride.grandFatherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
            <Box sx={{ width: "50%" }}>
              <TextFieldInput
                id="grandMotherName"
                label="Bride Grand Mother Name"
                name="grandMotherName"
                type="text"
                value={websiteForm?.bride?.grandMotherName}
                onChange={(e) => handleChange(e, "bride")}
              />
              {(websiteForm?.bride?.grandMotherName.match(specialChars) ||
                /\d/.test(websiteForm?.bride?.grandMotherName)) && (
                <Box sx={{ color: "red", fontSize: "14px" }}>
                  Please don't add any special character and number
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <MultilineTextField
              name="description"
              label="Bride Description"
              value={websiteForm?.bride?.description}
              handleCh={(e) => handleChange(e, "bride")}
            />
          </Box>
        </Box>
        <Box>
          <MultilineTextField
            name="thankYouMessage"
            label="Thank You Message"
            value={websiteForm?.thankYouMessage}
            handleCh={(e) => handleChange(e)}
          />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Pick a date"
            name="valueDateTime"
            value={valueDateTime || ""}
            disablePast
            onChange={(newValue) => handleDateTime(newValue)}
            sx={{ mt: 2 }}
          />
        </LocalizationProvider>

        {/* <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{ fontWeight: 500, mt: 2 }}
        >
          Add Images
        </FormLabel> */}
        {/* <Box
          sx={{
            my: "20px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div className={styles.uploadBtnWrapper}>
            <button className={styles.btn}>+</button>
            <input type="file" name="myfile" />
          </div>

          <Image
            src="/assets/weddingimg1.jpg"
            alt=".."
            width={100}
            height={100}
            style={{ borderRadius: "5px" }}
          />
        </Box> */}
      </FormControl>
    </Box>
  );
}

export default Step1Website;
