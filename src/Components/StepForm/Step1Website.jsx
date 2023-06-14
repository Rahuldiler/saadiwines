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
function Step1Website({ websiteForm, setWebsiteForm }) {
    // const [valueTime, setValueTime] = React.useState(dayjs("2022-04-17T15:30"));
    // const [valueDate, setValueDate] = React.useState(dayjs("2022-04-17T15:30"));
    const [valueDateTime, setValueDateTime] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWebsiteForm((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

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
                <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
                    <Box sx={{ width: "50%" }}>
                        <TextFieldInput
                            id="groom"
                            label="Groom Name"
                            name="groom"
                            type="text"
                            value={websiteForm?.groom}
                            onChange={handleChange}
                        />
                        {(websiteForm?.groom.match(/\W/) ||
                            /\d/.test(websiteForm?.groom)) && (
                            <Box sx={{ color: "red", fontSize: "14px" }}>
                                Please don't add any special character and
                                number
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <TextFieldInput
                            id="bride"
                            label="Bride Name"
                            name="bride"
                            type="text"
                            value={websiteForm?.bride}
                            onChange={handleChange}
                        />
                        {(websiteForm?.bride.match(/\W/) ||
                            /\d/.test(websiteForm?.bride)) && (
                            <Box sx={{ color: "red", fontSize: "14px" }}>
                                Please don't add any special character and
                                number
                            </Box>
                        )}
                    </Box>
                </Box>
                <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
                    <Box sx={{ width: "50%" }}>
                        <TextFieldInput
                            id="motherName"
                            label="Mother Name"
                            name="motherName"
                            type="text"
                            value={websiteForm?.motherName}
                            onChange={handleChange}
                        />
                        {(websiteForm?.motherName.match(/\W/) ||
                            /\d/.test(websiteForm?.motherName)) && (
                            <Box sx={{ color: "red", fontSize: "14px" }}>
                                Please don't add any special character and
                                number
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <TextFieldInput
                            id="fatherName"
                            label="Father Name"
                            name="fatherName"
                            type="text"
                            value={websiteForm?.fatherName}
                            onChange={handleChange}
                        />
                        {(websiteForm?.fatherName.match(/\W/) ||
                            /\d/.test(websiteForm?.fatherName)) && (
                            <Box sx={{ color: "red", fontSize: "14px" }}>
                                Please don't add any special character and
                                number
                            </Box>
                        )}
                    </Box>
                </Box>
                <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
                    <Box sx={{ width: "50%" }}>
                        <TextFieldInput
                            id="grandMotherName"
                            label="Grand Mother Name"
                            name="grandMotherName"
                            type="text"
                            value={websiteForm?.grandMotherName}
                            onChange={handleChange}
                        />
                        {(websiteForm?.grandMotherName.match(/\W/) ||
                            /\d/.test(websiteForm?.grandMotherName)) && (
                            <Box sx={{ color: "red", fontSize: "14px" }}>
                                Please don't add any special character and
                                number
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <TextFieldInput
                            id="grandFatherName"
                            label="Grand Father Name"
                            name="grandFatherName"
                            type="text"
                            value={websiteForm?.grandFatherName}
                            onChange={handleChange}
                        />
                        {(websiteForm?.grandFatherName.match(/\W/) ||
                            /\d/.test(websiteForm?.grandFatherName)) && (
                            <Box sx={{ color: "red", fontSize: "14px" }}>
                                Please don't add any special character and
                                number
                            </Box>
                        )}
                    </Box>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <MultilineTextField
                        name="thankYouMessage"
                        label="Thank You Message"
                        value={websiteForm.thankYouMessage}
                        handleCh={(e) => handleChange(e)}
                    />
                    {(websiteForm?.thankYouMessage.match(/\W/) ||
                        /\d/.test(websiteForm?.thankYouMessage)) && (
                        <Box sx={{ color: "red", fontSize: "14px" }}>
                            Please don't add any special character and number
                        </Box>
                    )}
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Pick a date"
                        name="valueDateTime"
                        value={valueDateTime}
                        disablePast
                        onChange={(newValue) => handleDateTime(newValue)}
                        sx={{ mt: 2 }}
                    />
                </LocalizationProvider>
                {/* <Box sx={{ display: "flex", gap: 4 }}>
          <Box>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              sx={{ width: "100%" }}
            >
              <DatePicker
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                  },
                }}
                label="Pick a date"
                name="valueDate"
                value={valueDate}
                onChange={(newValue) => handleDate(newValue)}
                // slotProps={{
                //   textField: {
                //     helperText: "MM/DD/YYYY",
                //   },
                // }}
              />
            </LocalizationProvider>
          </Box>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                  },
                }}
                label="Pick a time"
                name="valueTime"
                value={valueTime}
                onChange={(newValue) => handleTime(newValue)}
              />
            </LocalizationProvider>
          </Box>
        </Box> */}
                <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ fontWeight: 500, mt: 2 }}
                >
                    Add Images
                </FormLabel>
                <Box
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
                </Box>
            </FormControl>
        </Box>
    );
}

export default Step1Website;
