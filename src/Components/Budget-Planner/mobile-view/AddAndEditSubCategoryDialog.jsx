import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { COLORS } from "@/Components/utils/ConstantTheme";
import {
  addSubcategory,
  editSubcategory,
} from "@/services/subCategory/subCategory";
const AddAndEditSubCategoryDialog = ({
  onClose,
  setTrackChanges,
  categoryId,
  isEditingSubCategory,
}) => {
  const [formData, setFormData] = useState({
    name: isEditingSubCategory.subCategory?.name ?? "",
    expectedAmount: isEditingSubCategory.subCategory?.expectedAmount ?? 0,
    categoryId: categoryId,
  });
  const [errors, setErrors] = useState({});
  const style = {
    color: COLORS.primary,
    ml: -1,
    variant: "caption",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.expectedAmount === 0) {
      newErrors.expectedAmount = "Amount is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      if (isEditingSubCategory.isEditing === false) {
        console.log("ADDING SUB CAT", formData, categoryId);
        addSubcategory({
          ...formData,
          categoryId: categoryId,
        }).then((_) => {
          setTrackChanges((prev) => !prev);
          onClose();
        });
      } else {
        const obj = isEditingSubCategory.subCategory;
        editSubcategory({
          ...obj,
          name: formData.name,
          expectedAmount: formData.expectedAmount,
          categoryId: categoryId,
        }).then((_) => {
          setTrackChanges((prev) => !prev);
          onClose();
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
  // const RenderInputField = ({ label, name, handleChange, value }) => {
  //   return (
  //     // <FormControl>
  //     <Input
  //       disableUnderline={true}
  //       sx={{
  //         border: `1px solid ${COLORS.lighGray}`,
  //         borderRadius: "5px",
  //         m: 1,
  //       }}
  //       name={name}
  //       value={value}
  //       onChange={handleChange}
  //       placeholder="0"
  //       startAdornment={
  //         <InputAdornment
  //           position="start"
  //           sx={{
  //             backgroundColor: COLORS.lighGray,
  //             height: "20px",
  //             py: 2,
  //             px: 1,
  //             borderRadius: "5px",
  //           }}
  //         >
  //           {label}
  //         </InputAdornment>
  //       }
  //     />
  //   );
  // };
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          m={2}
          color={COLORS.gray}
          onClick={() => onClose()}
        >
          <ArrowBackIosIcon fontSize="10px" sx={{ mt: 0.2 }} />
          <Typography
            variant="caption"
            fontWeight={400}
            fontFamily={"inherit"}
            ml={1}
          >
            BUDGET PLANNER
          </Typography>
        </Box>
        <Typography m={1} fontWeight={500} fontFamily={"inherit"} variant="h6">
          {/* {subId == 0 ? "Add New Category" : subCategoryData.name} */}
          Add Sub Category
        </Typography>
        <Divider />
        <Box m={1}></Box>
        {/* <RenderHeading title={"Category"} /> */}
        {/* <FormControl sx={{ p: 1, width: "100%" }} size="small">
              <Select
                name="category"
                value={selectedCategory}
                onChange={handleChangeCategory}
              >
                {categories.map((el) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
        <RenderHeading title={"Name"} />
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
          required
          error={!!errors.name}
          helperText={
            errors.name && (
              <Typography variant="caption" sx={{ mx: "-10px" }}>
                {errors.name}
              </Typography>
            )
          }
          onChange={handleChange}
        />
        <RenderHeading title={"Amount"} />
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
          required
          error={!!errors.expectedAmount}
          helperText={
            errors.expectedAmount && (
              <Typography variant="caption" sx={{ mx: "-10px" }}>
                {errors.expectedAmount}
              </Typography>
            )
          }
          // value={subCategoryData.name}
          onChange={handleChange}
        />
        {/* <Grid container textAlign={"start"} py={1}>
              <Grid item xs>
                <Box>
                  <RenderHeading title={"Estimated Cost"} />
                  <Input
                    type="number"
                    disableUnderline={true}
                    sx={{
                      border: `1px solid ${COLORS.lighGray}`,
                      borderRadius: "5px",
                      m: 1,
                    }}
                    name={"expectedAmount"}
                    value={subCategoryData.expectedAmount}
                    onChange={handleChange}
                    placeholder="0"
                    startAdornment={
                      <InputAdornment
                        position="start"
                        sx={{
                          backgroundColor: COLORS.lighGray,
                          height: "20px",
                          py: 2,
                          px: 1,
                          borderRadius: "5px",
                        }}
                      >
                        ₹
                      </InputAdornment>
                    }
                  />
                </Box>
              </Grid>
              <Grid item xs>
                <Box>
                  <Box>
                    <RenderHeading title={"Final Cost"} />
                    <Input
                      disabled
                      disableUnderline={true}
                      sx={{
                        border: `1px solid ${COLORS.lighGray}`,
                        borderRadius: "5px",
                        m: 1,
                      }}
                      // name={"finalCost"}
                      // value={formData.expectedAmount}
                      // onChange={handleChange}
                      placeholder="0"
                      startAdornment={
                        <InputAdornment
                          position="start"
                          sx={{
                            backgroundColor: COLORS.lighGray,
                            height: "20px",
                            py: 2,
                            px: 1,
                            borderRadius: "5px",
                          }}
                        >
                          ₹
                        </InputAdornment>
                      }
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid> */}
        <RenderHeading title={"Notes"} />
        <Box display={"flex"} justifyContent={"center"}>
          <br />
          <TextField multiline={true} disabled rows={3} sx={{ width: "96%" }} />
        </Box>
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

export default AddAndEditSubCategoryDialog;
