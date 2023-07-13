import React, { useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineDelete } from "react-icons/ai";

import { deleteFamilyMember } from "@/services/familyMember/formFamilyMember";
import NavigationSteps from "./NavigationSteps";
import { TextFieldInput } from "../common/TextFieldInput";
import FormErrorMessage from "../common/FormErrorMessage";
import FormUploadImageSection from "../common/FormUploadImageSection";

function Step5Family({
  familyMemberLists,
  setFamilyMemberLists,
  handleNext,
  activeStep,
  handleBack,
  setFormLoading,
}) {
  const formFields = {
    name: "",
    relation: "",
  };
  const addNewFamilyMember = (id) => {
    formik.setValues([
      ...formik.values,
      {
        arrayId: id + 1,
        ...formFields,
      },
    ]);
  };

  const nameSchema = Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "No special characters allowed")
    .required("Required");

  const formik = useFormik({
    initialValues: [
      {
        id: "",
        arrayId: 1,
        ...formFields,
      },
    ],
    validationSchema: Yup.array().of(
      Yup.object().shape({
        name: nameSchema,
        relation: nameSchema,
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

  const handleImgChange = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result;
      const list = [...formik.values];
      list[index]["image"] = base64Data;
      formik.setValues(list);
    };

    reader.readAsDataURL(file);
  };

  // const handleImgChange = (base64, index) => {
  //   const list = [...formik.values];
  //   list[index]["image"] = base64;
  //   formik.setValues(list);
  // };

  const deleteFamilyMemberBox = async (arrayId, id) => {
    if (arrayId !== 1) {
      const updatedList = formik.values.filter(
        (list) => list.arrayId !== arrayId
      );
      formik.setValues(updatedList);
    } else {
      formik.resetForm();
      setFamilyMemberLists([]);
    }

    id && (await deleteFamilyMember(id));
  };

  useEffect(() => {
    if (familyMemberLists.length !== 0) {
      formik.setValues(familyMemberLists);
    } else {
      formik.setValues([
        {
          arrayId: 1,
          ...formFields,
        },
      ]);
    }
  }, [familyMemberLists]);

  return (
    <Box
      sx={{
        m: { lg: "20px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      {/* {familyMemberLists && (
        <Notification message="Family Member Info Loaded" type="success" />
      )} */}
      <Box
        sx={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6"> Family Member Details</Typography>
        <Button
          onClick={() => addNewFamilyMember(formik.values.length)}
          className="bg-[#BC8129]"
          sx={{
            backgroundColor: "#BC8129",
            color: "#fff",
            "&:hover": {
              background: "#BC812990",
            },
          }}
        >
          + Add Family Member
        </Button>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        {formik.values.map((family, index) => {
          return (
            <Box
              sx={{
                mt: 4,
                width: "100%",
                borderBottom: "0.5px solid #BC812950",
                paddingBottom: 4,
              }}
              key={index}
            >
              <Box
                sx={{
                  display: "Flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1">Member {index + 1}</Typography>
                <Button
                  onClick={() =>
                    deleteFamilyMemberBox(family.arrayId, family.id)
                  }
                  sx={{
                    color: "#BC8129",
                  }}
                >
                  <AiOutlineDelete size={20} />
                </Button>
              </Box>
              <TextFieldInput
                id="name"
                label="Name *"
                name="name"
                type="text"
                value={family.name}
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.name && formik.errors[index]?.name ? (
                <FormErrorMessage errorMessage={formik.errors[index]?.name} />
              ) : null}
              <TextFieldInput
                id="relation"
                name="relation"
                value={family.relation}
                label="Relation *"
                type="text"
                onChange={(e) => handleChange(e, index)}
              />
              {formik.touched[index]?.relation &&
              formik.errors[index]?.relation ? (
                <FormErrorMessage
                  errorMessage={formik.errors[index]?.relation}
                />
              ) : null}
              <FormUploadImageSection
                formikImg={formik.values[index]?.image}
                handleImgChange={handleImgChange}
                index={index}
              />
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

export default Step5Family;
