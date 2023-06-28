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
import React, { useEffect, useState } from "react";

import styles from "../../styles/Form.module.css";
import { MultilineTextField, TextFieldInput } from "../common/TextFieldInput";
import { AiOutlineDelete } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import NavigationSteps from "./NavigationSteps";
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
      handleNext(values);
      setFormLoading(true);
    },
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formik.values];
    list[index][name] = value;
    formik.setValues(list);
  };

  const deleteMilestone = (id) => {
    const updatedList = formik.values.filter((list) => list.arrayId !== id);
    formik.setValues(updatedList);
  };

  useEffect(() => {
    milestoneLists && formik.setValues(milestoneLists);
  }, [milestoneLists]);

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
                {milestoneLists.length > 1 && (
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

              <TextFieldInput
                id="title"
                label="Title *"
                name="title"
                type="text"
                value={milestone.title}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.title && formik.errors[index]?.title ? (
                <div style={{ color: "Red" }}>
                  {formik.errors[index]?.title}
                </div>
              ) : null}
              <TextFieldInput
                id="description"
                label="Description *"
                name="description"
                type="text"
                value={milestone.description}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.description &&
              formik.errors[index]?.description ? (
                <div style={{ color: "Red" }}>
                  {formik.errors[index]?.description}
                </div>
              ) : null}
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
