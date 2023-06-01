import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styles from "../../styles/Form.module.css";
import Image from "next/image";
import dayjs from "dayjs";
import moment from "moment";
import { FormLabelCustom, TextFieldInput } from "../Common/TextFieldInput";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function Step1Website({ websiteForm, setWebsiteForm }) {
  // const [valueTime, setValueTime] = React.useState(dayjs("2022-04-17T15:30"));
  // const [valueDate, setValueDate] = React.useState(dayjs("2022-04-17T15:30"));
  const [valueDateTime, setValueDateTime] = React.useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWebsiteForm((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  console.log(valueDateTime?.$d);

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
        <TextFieldInput
          id="groom"
          label="Groom Name"
          name="groom"
          type="text"
          value={websiteForm.groom}
          onChange={handleChange}
        />
        <TextFieldInput
          id="bride"
          label="Bride Name"
          name="bride"
          type="text"
          value={websiteForm.bride}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Pick a date"
            name="valueDateTime"
            // value={valueDateTime}
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
