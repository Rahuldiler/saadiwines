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
import { MultilineTextField, TextFieldInput } from "../common/TextFieldInput";
import moment from "moment";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AiOutlineDelete } from "react-icons/ai";
import { list } from "postcss";
import { useEffect } from "react";
import NavigationSteps from "./NavigationSteps";
import { useFormik } from "formik";
import * as Yup from "yup";

function Step2Itinerary({
  itineraryLists,
  handleNext,
  activeStep,
  handleBack,
}) {
  const [valueDateTime, setValueDateTime] = useState();
  const addNewItinerary = (id) => {
    formik.setValues([
      ...formik.values,
      {
        arrayId: id + 1,
        functionName: "",
        details: "",
        address: "",
        mapsLocation: "",
        dateTime: "",
      },
    ]);

    setValueDateTime((prevData) => [...prevData, dayjs]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formik.values];
    list[index][name] = value;
    formik.setValues(list);
  };

  const formik = useFormik({
    initialValues: [
      {
        id: "",
        arrayId: 1,
        functionName: "",
        details: "",
        address: "",
        mapsLocation: "",
        dateTime: "",
      },
    ],
    validationSchema: Yup.array().of(
      Yup.object().shape({
        functionName: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
          .required("Required"),
        details: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        mapsLocation: Yup.string().required("Required"),
        dateTime: Yup.string().required("Required Date & Time"),
      })
    ),
    onSubmit: (values) => {
      handleNext(values);
    },
  });

  const handleDateTime = (newValue, index) => {
    // setValueDateTime(newValue);
    const list = [...formik.values];

    list[index].dateTime = String(moment(newValue?.$d).toISOString());

    const listOfDates = [...valueDateTime];
    listOfDates[index] = newValue;
    formik.setValues(list);
    setValueDateTime(listOfDates);
  };

  const deleteItinerary = (id) => {
    const updatedList = formik.values.filter((list) => list.arrayId !== id);
    formik.setValues(updatedList);
  };

  useEffect(() => {
    itineraryLists && formik.setValues(itineraryLists);
    let valueDate = [];

    for (let i = 0; i < itineraryLists.length; i++) {
      valueDate.push(dayjs(itineraryLists[i].dateTime));
    }

    setValueDateTime(valueDate);
  }, [itineraryLists]);

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
          onClick={() => addNewItinerary(formik.values.length)}
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
      <form onSubmit={formik.handleSubmit}>
        {formik.values.map((list, index) => {
          return (
            <Box
              key={index}
              sx={{
                mt: 4,
                width: "100%",
                borderBottom: "0.5px solid #BC812950",
                paddingBottom: 4,
              }}
            >
              <Box
                sx={{
                  display: "Flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1">Itinerary {index + 1}</Typography>
                {formik.values.length > 1 && (
                  <Button
                    onClick={() => deleteItinerary(list.arrayId)}
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
                label="Function Name *"
                name="functionName"
                type="text"
                value={list.functionName}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.functionName &&
              formik.errors[index]?.functionName ? (
                <div style={{ color: "Red" }}>
                  {formik.errors[index]?.functionName}
                </div>
              ) : null}
              <TextFieldInput
                id="mapsLocation"
                label="Location *"
                name="mapsLocation"
                type="text"
                value={list.mapsLocation}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.mapsLocation &&
              formik.errors[index]?.mapsLocation ? (
                <div style={{ color: "Red" }}>
                  {formik.errors[index]?.mapsLocation}
                </div>
              ) : null}
              <TextFieldInput
                id="details"
                label="Details *"
                name="details"
                type="text"
                value={list.details}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.details &&
              formik.errors[index]?.details ? (
                <div style={{ color: "Red" }}>
                  {formik.errors[index]?.details}
                </div>
              ) : null}
              <Box sx={{ mt: 2 }}>
                <MultilineTextField
                  name="address"
                  label="Address *"
                  value={list.address}
                  handleCh={(e) => handleChange(e, index)}
                />
              </Box>
              {formik.touched[index]?.address &&
              formik.errors[index]?.address ? (
                <div style={{ color: "Red" }}>
                  {formik.errors[index]?.address}
                </div>
              ) : null}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  disablePast
                  label="Pick a date and time"
                  name="valueDateTime"
                  value={valueDateTime ? valueDateTime[index] || "" : null}
                  onChange={(newValue) => handleDateTime(newValue, index)}
                  sx={{ mt: 2, width: "100%" }}
                />
                {formik.touched[index]?.dateTime &&
                formik.errors[index]?.dateTime ? (
                  <div style={{ color: "Red" }}>
                    {formik.errors[index]?.dateTime}
                  </div>
                ) : null}
              </LocalizationProvider>
            </Box>
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

export default Step2Itinerary;
