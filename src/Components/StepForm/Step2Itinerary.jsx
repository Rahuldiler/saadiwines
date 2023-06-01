import {
  Box,
  Button,
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
import { MultilineTextField, TextFieldInput } from "../Common/TextFieldInput";
import moment from "moment";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AiOutlineDelete } from "react-icons/ai";
import { list } from "postcss";

function Step2Itinerary({ itineraryLists, setItineraryLists }) {
  const [valueDateTime, setValueDateTime] = React.useState([
    dayjs("2022-04-17T15:30"),
  ]);
  const addNewItinerary = () => {
    // setValueTime((prevData) => [...prevData, dayjs("2022-04-17T15:30")]);
    setValueDateTime((prevData) => [...prevData, ""]);

    setItineraryLists((prevData) => [
      ...prevData,

      {
        id: prevData[prevData.length - 1].id + 1,
        functionName: "",
        details: "",
        address: "",
        mapsLocation: "",
        date: "",
        time: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...itineraryLists];
    list[index][name] = value;
    setItineraryLists(list);
  };

  // const handleTime = (newValue, index) => {
  //   setValueTime(newValue);
  //   const list = [...itineraryLists];
  //   list[index].itinerary.time = moment(newValue?.$d).format("LT");
  //   setItineraryLists(list);
  // };

  // const handleDate = (newValue, index) => {
  //   setValueDate(newValue);
  //   const list = [...itineraryLists];
  //   list[index].itinerary.date = moment(newValue?.$d).format("L");
  //   setItineraryLists(list);
  // };

  const handleDateTime = (newValue, index) => {
    setValueDateTime(newValue);
    const list = [...itineraryLists];
    list[index].dateTime = moment(newValue?.$d).format();
    setItineraryLists(list);
  };

  const deleteItinerary = (id) => {
    setItineraryLists((prevData) =>
      prevData.filter((lists) => lists.id !== id)
    );
  };

  return (
    <Box
      sx={{
        m: { lg: "20px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Itinerary Details</Typography>
        <Button
          onClick={addNewItinerary}
          className="bg-[#BC8129]"
          sx={{
            backgroundColor: "#BC8129",
            color: "#fff",
            "&:hover": {
              background: "#BC812990",
            },
          }}
        >
          + Add Itinerary
        </Button>
      </Box>
      {itineraryLists.map((list, index) => {
        return (
          <FormControl
            key={index}
            sx={{
              // boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              mt: 4,
              width: "100%",
              borderBottom: "0.5px solid #BC812950",
              paddingBottom: 4,
            }}
          >
            <Box sx={{ display: "Flex", justifyContent: "space-between" }}>
              <Typography variant="body1">Itinerary {index + 1}</Typography>
              {itineraryLists.length > 1 && (
                <Button
                  onClick={() => deleteItinerary(list.id)}
                  sx={{
                    color: "#BC8129",
                  }}
                >
                  <AiOutlineDelete size={20} />
                </Button>
              )}
            </Box>
            <TextFieldInput
              id="functionName"
              label="Function Name"
              name="functionName"
              type="text"
              value={list.functionName}
              onChange={(e) => handleChange(e, index)}
            />

            <TextFieldInput
              id="mapsLocation"
              label="Location"
              name="mapsLocation"
              type="text"
              value={list.mapsLocation}
              onChange={(e) => handleChange(e, index)}
              // value={credentials.email}
              // onChange={onLoginChange}
            />
            <TextFieldInput
              id="details"
              label="Details"
              name="details"
              type="text"
              value={list.details}
              onChange={(e) => handleChange(e, index)}
              // value={credentials.email}
              // onChange={onLoginChange}
            />
            <Box sx={{ mt: 2 }}>
              <MultilineTextField
                name="address"
                label="Address"
                value={list.address}
                handleCh={(e) => handleChange(e, index)}
              />
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Pick a date and time"
                name="valueDateTime"
                value={valueDateTime[index]}
                onChange={(newValue) => handleDateTime(newValue, index)}
                sx={{ mt: 2 }}
              />
            </LocalizationProvider>
            {/* <Box sx={{ display: "flex", gap: 4 }}>
              <Box>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontWeight: 500, mt: 2 }}
                >
                  Pick a date of marriage:
                </FormLabel>

               

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      "&.MuiTextField-root": {
                        width: "100%",
                      },
                    }}
                    name="valueDate"

                    // slotProps={{
                    //   textField: {
                    //     helperText: "MM/DD/YYYY",
                    //   },
                    // }}
                  />
                </LocalizationProvider>
              </Box>
              <Box>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontWeight: 500, mt: 2 }}
                >
                  Pick a time of marriage:
                </FormLabel>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    sx={{
                      "&.MuiTextField-root": {
                        width: "100%",
                      },
                    }}
                    name="valueTime"
                    value={valueTime[index]}
                    onChange={(newValue) => handleTime(newValue, index)}
                  />
                </LocalizationProvider>
              </Box>
            </Box> */}
          </FormControl>
        );
      })}
    </Box>
  );
}

export default Step2Itinerary;
