import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { COLORS } from "@/Components/utils/ConstantTheme";
import { addCategory, editCategory } from "@/services/category/category";
const AddCategoryDialog = ({
  onClose,
  setTrackChanges,
  obj,
  isEditingCategory,
}) => {
  const [formData, setFormData] = useState({
    name: obj?.name ?? "",
    // expectedAmount: obj?.expectedAmount ?? 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      if (isEditingCategory.isEditing === false) {
        addCategory(formData).then(() => {
          onClose();
          setTrackChanges((p) => !p);
        });
      } else {
        editCategory(obj.id, {
          name: formData.name,
        }).then(() => {
          onClose();
          setTrackChanges((p) => !p);
        });
      }
    }
  };
  const RenderHeading = ({ title }) => {
    return (
      <Typography
        m={1}
        fontWeight={500}
        fontFamily={"inherit"}
        variant="subtitle2"
      >
        {title}
      </Typography>
    );
  };
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          m={2}
          color={COLORS.gray}
          onClick={() => onClose()}
        >
          <ArrowBackIosIcon
            fontSize="10px"
            sx={{ mt: 0.2, cursor: "pointer" }}
          />
          <Typography
            variant="caption"
            fontWeight={400}
            fontFamily={"inherit"}
            ml={1}
            sx={{ cursor: "pointer" }}
          >
            BUDGET PLANNER
          </Typography>
        </Box>
        <Typography m={1} fontWeight={500} fontFamily={"inherit"} variant="h6">
          Add Category
        </Typography>
        <Divider />
        <Box m={1}></Box>
        <RenderHeading title={"Category Name"} />
        <TextField
          size="small"
          sx={{
            m: 1,
            width: "95%",
          }}
          defaultValue={formData.name}
          placeholder="Enter Name"
          name="name"
          variant="outlined"
          error={!!errors.name}
          helperText={
            errors.name && (
              <Typography variant="caption" sx={{ mx: "-10px" }}>
                {errors.name}
              </Typography>
            )
          }
          // value={subCategoryData.name}
          onChange={handleChange}
        />
        {/* <RenderHeading title={"Amount"} />
        <TextField
          size="small"
          sx={{
            m: 1,
            width: "95%",
          }}
          defaultValue={formData.expectedAmount}
          placeholder="Enter Amount"
          name="expectedAmount"
          variant="outlined"
          onChange={handleChange}
        /> */}
        {/* <RenderHeading title={"Notes"} /> */}
        {/* <Box display={"flex"} justifyContent={"center"}>
          <br />
          <TextField multiline={true} disabled rows={3} sx={{ width: "96%" }} />
        </Box> */}
        <Button
          onClick={handleSubmit}
          sx={{ width: "96%", m: 1, borderRadius: "5px" }}
        >
          Save{" "}
        </Button>
      </Box>
    </>
  );
};

export default AddCategoryDialog;
