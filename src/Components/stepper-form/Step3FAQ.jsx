import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from "../../styles/Form.module.css";
import { MultilineTextField, TextFieldInput } from "../common/TextFieldInput";
import { AiOutlineDelete } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import NavigationSteps from "./NavigationSteps";
import FormErrorMessage from "../common/FormErrorMessage";
import Notification from "../common/Notification";
import { faqsData } from "@/constants/faqData";
import { set } from "date-fns";
function Step3FAQ({
  setValidationBoolean,
  milestoneLists,
  setMilestoneLists,
  handleNext,
  activeStep,
  steps,
  handleBack,
  validationBoolean,
  setFormLoading,
}) {
  const [quesAnsData, setQuesAnsData] = useState(faqsData);
  const [removedQuesAnsData, setRemovedQuesAnsData] = useState([]);
  const addNewMilestone = (id) => {
    formik.setValues([
      ...formik.values,
      { arrayId: id + 1, title: "", description: "" },
    ]);
  };

  const formik = useFormik({
    initialValues: [
      {
        id: "",
        arrayId: 1,
        title: "",
        description: "",
      },
    ],
    validationSchema: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
      })
    ),
    onSubmit: (values) => {
      console.log(values, "values");
      handleNext(values);
      setFormLoading(true);
    },
  });

  const handleChange = (e, index, newValue, reason) => {
    const { name, value } = e.target;
    const list = [...formik.values];
    removedQuesAnsData.map((rmQna) => {
      if (formik.values[index].title) {
        if (rmQna?.title === formik.values[index]?.title) {
          setQuesAnsData((prevData) => [...prevData, rmQna]);
          setRemovedQuesAnsData((prevData) =>
            prevData.filter((qna) => qna?.title !== rmQna?.title)
          );
        }
      }
    });
    if (typeof newValue === "string") {
      list[index].title = newValue;
      const filteredData = quesAnsData.filter((faq) => faq.title === newValue);
      setRemovedQuesAnsData((prevData) => [...prevData, filteredData[0]]);
      list[index].description = filteredData[0].description;
      setQuesAnsData((prevData) => [
        ...prevData.filter((qna) => qna.title !== newValue),
      ]);
    }
    if (typeof value === "string") {
      list[index][name] = value;
    }

    if (reason === "clear") {
      removedQuesAnsData.map((rmQna) => {
        if (rmQna?.title === formik.values[index]?.title) {
          setQuesAnsData((prevData) => [...prevData, rmQna]);
          setRemovedQuesAnsData((prevData) =>
            prevData.filter((qna) => qna?.title !== rmQna?.title)
          );
        }
      });
      list[index].title = "";
      list[index].description = "";
    }

    // else if (newValue && newValue.inputValue) {
    //   setValue({
    //     title: newValue.inputValue,
    //   });
    //   console.log("if else", newValue);
    // } else {
    //   setValue(newValue);
    //   console.log("else", newValue);
    // }

    formik.setValues(list);
  };

  const deleteMilestone = (id) => {
    const updatedList = formik.values.filter((list) => list.arrayId !== id);
    formik.setValues(updatedList);
  };

  useEffect(() => {
    milestoneLists && formik.setValues(milestoneLists);

    for (let i = 0; i < milestoneLists.length; i++) {
      setQuesAnsData((prevData) =>
        prevData.filter((qna) => qna.title !== milestoneLists[i].title)
      );
      const filteredData = quesAnsData.filter(
        (faq) => faq.title === milestoneLists[i].title
      );
      setRemovedQuesAnsData((prevData) => [...prevData, filteredData[0]]);
    }
  }, [milestoneLists]);

  console.log(formik.values, "formik.values");

  return (
    <Box
      sx={{
        m: { lg: "20px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      {/* {milestoneLists && (
        <Notification message="Milestone  Lists Info Loaded" type="success" />
      )} */}
      <Box
        sx={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Milestone Details</Typography>
        <Button
          onClick={() => addNewMilestone(formik.values.length)}
          className="bg-[#BC8129]"
          sx={{
            backgroundColor: "#BC8129",
            color: "#fff",
            "&:hover": {
              background: "#BC812990",
            },
          }}
        >
          + Add Milestone
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      ></Box>
      <form onSubmit={formik.handleSubmit}>
        {formik.values.map((milestone, index) => {
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
                <Typography variant="body1">Milestone {index + 1}</Typography>
                {formik.values.length > 1 && (
                  <Button
                    onClick={() => deleteMilestone(milestone.arrayId)}
                    sx={{
                      color: "#BC8129",
                    }}
                  >
                    <AiOutlineDelete size={20} />
                  </Button>
                )}
              </Box>

              <Autocomplete
                name="title"
                label="Title *"
                value={milestone.title}
                onChange={(e, newValue, reason) => {
                  handleChange(e, index, newValue, reason);
                }}
                freeSolo
                options={quesAnsData.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    multiline
                    rows={2}
                    type="text"
                    id="title"
                    label="Title *"
                    name="title"
                    value={milestone.title}
                    onChange={(e, newValue, reason) =>
                      handleChange(e, index, newValue, reason)
                    }
                  />
                )}
              />
              {/* <TextFieldInput
                id="title"
                label="Title *"
                name="title"
                type="text"
                value={milestone.title}
                onChange={(e) => handleChange(e, index)}
              /> */}
              {formik.touched[index]?.title && formik.errors[index]?.title ? (
                <FormErrorMessage errorMessage={formik.errors[index]?.title} />
              ) : null}
              <Box sx={{ mt: 2 }}>
                <MultilineTextField
                  id="description"
                  label="Description *"
                  name="description"
                  type="text"
                  value={milestone.description}
                  onChange={(e) => handleChange(e, index)}
                />
                {formik.touched[index]?.description &&
                formik.errors[index]?.description ? (
                  <FormErrorMessage
                    errorMessage={formik.errors[index]?.description}
                  />
                ) : null}
              </Box>
            </Box>
          );
        })}
        <NavigationSteps
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          validationBoolean={validationBoolean}
        />
      </form>
    </Box>
  );
}

export default Step3FAQ;
