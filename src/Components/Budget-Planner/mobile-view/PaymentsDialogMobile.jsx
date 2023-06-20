import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { COLORS } from "@/Components/utils/ConstantTheme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { addTransaction } from "@/services/transaction/transaction";
const PaymentsDialog = ({ onClose, setTrackChanges, subCategoryId }) => {
  // console.log(subCategoryId);
  const [formData, setFormData] = useState({
    name: "",
    amount: 0,
    details: "",
  });
  const [valueDateTime, setValueDateTime] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleDateTime = (newValue) => {
    setValueDateTime(newValue);
  };
  const handleSubmit = () => {
    // console.log(formData);
    if (formData.name && formData.amount && formData.details) {
      addTransaction({
        ...formData,
        type: "CREDIT",
        dateAdded: valueDateTime,
        subCategoryId: subCategoryId,
      }).then((_) => setTrackChanges(p => !p));
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
          Add Transaction
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
            mx: 1,
            width: "95%",
          }}
          defaultValue={formData.name}
          placeholder="Enter Name"
          name="name"
          variant="outlined"
          // value={subCategoryData.name}
          onChange={handleChange}
        />
        <RenderHeading title={"Amount"} />
        <TextField
          size="small"
          sx={{
            mx: 1,
            width: "95%",
          }}
          defaultValue={formData.expectedAmount}
          placeholder="Enter Amount"
          name="amount"
          variant="outlined"
          // value={subCategoryData.name}
          onChange={handleChange}
        />
        <RenderHeading title={"Date"} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            // label="Pick a date"
            name="valueDateTime"
            value={valueDateTime}
            disablePast
            format="DD/MM/YYYY"
            onChange={(newValue) => handleDateTime(newValue)}
            sx={{ mx: 1, width: "96%" }}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
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
        <RenderHeading title={"More Details"} />
        <Box display={"flex"} justifyContent={"center"}>
          <br />
          <TextField
            multiline={true}
            name="details"
            onChange={handleChange}
            rows={3}
            sx={{ width: "96%" }}
          />
        </Box>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ color: "red", width: "96%", m: 1, borderRadius: "5px" }}
        >
          Save{" "}
        </Button>
      </Box>
    </>
  );
};

export default PaymentsDialog;
