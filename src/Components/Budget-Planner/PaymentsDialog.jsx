import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Typography,
  Select,
  FormControl,
  MenuItem,
  Grid,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addTransaction } from "@/services/transaction/transaction";
import styled from "@emotion/styled";
import { COLORS } from "../utils/ConstantTheme";
import Modal from "./Modal";
import { useState } from "react";

const StyledTextField = styled(TextField)`
  textarea {
    resize: vertical;
    background-color: white;
  }
`;
export default function PaymentsDialog({
  open,
  setOpen,
  data,
  setNotifyChanges,
}) {
  const [errors, setErrors] = useState({});
  const style = {
    ml: -1,
    variant: "caption",
  };
  const fieldStyle = {
    border: 0,
    width: "100%",
    mb: 2,
    mt: 2,
    "& 	.MuiFormHelperText-root": {
      border: "none",
      borderRadius: "0px",
      background: "white",
      width: "100%",
    },
  };
  const [formData, setFormData] = React.useState({
    subCategoryId: 0,
    name: "",
    amount: 0,
    dateAdded: Date.now(),
    details: "",
    type: "CREDIT",
  });

  const formatDate = (dateString) => {
    return new Date(dateString);
    // const unixTimestamp = Math.floor(date.getTime() / 1000);
    // return unixTimestamp;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  const handleTypeChange = (e) => {
    console.log('------------------00000000000-------------------')
    const value =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    // setFormData({ ...formData, type: e.target.value });
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, dateAdded: formatDate(date) });
  };

  const handleTransaction = () => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.amount === 0) {
      newErrors.amount = "Amount is required";
    }
    if (formData.details === "") {
      newErrors.details = "Details is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      addTransaction({
        ...formData,
        subCategoryId: data.id,
      }).then((_) => setNotifyChanges((p) => !p));
    }
  };
  return (
    <Modal
      open={open}
      saveCallback={handleTransaction}
      title={"Sub Category"}
      setOpen={setOpen}
      fields={
        <>
          <TextField
            name="name"
            required
            error={!!errors.name}
            helperText={
              errors.name && (
                <Typography variant="caption" sx={{ mx: "-10px" }}>
                  {errors.name}
                </Typography>
              )
            }
            sx={fieldStyle}
            placeholder="Name"
            onChange={handleChange}
          />
          <Typography>Enter Amount</Typography>
          <TextField
            name="amount"
            required
            error={!!errors.amount}
            helperText={
              errors.amount && (
                <Typography variant="caption" sx={{ mx: "-10px" }}>
                  {errors.amount}
                </Typography>
              )
            }
            placeholder="Amount"
            type="number"
            sx={fieldStyle}
            onChange={handleChange}
          />
          <Grid container textAlign={"start"} py={0} width={"100%"}>
            <Grid item xs mr={1}>
              <Box>
                <Typography>Enter Date</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    format="DD/MM/YYYY"
                    required
                    error={!!errors.date}
                    helperText={
                      errors.date && (
                        <Typography variant="caption" sx={{ mx: "-10px" }}>
                          {errors.date}
                        </Typography>
                      )
                    }
                    onChange={handleDateChange}
                    sx={fieldStyle}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item xs>
              <Box>
                <Box>
                  <Typography>Type</Typography>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <Select
                      value={formData.type}
                      onChange={handleTypeChange}
                      sx={fieldStyle}
                    >
                      <MenuItem value={"CREDIT"}>Credit</MenuItem>
                      <MenuItem value={"DEBIT"}>Debit</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Typography>More Details</Typography>
          {/* <StyledForm noValidate autoComplete="off"> */}
          <StyledTextField
            required
            error={!!errors.details}
            helperText={
              errors.details && (
                <Typography variant="caption" sx={{ mx: "-10px" }}>
                  {errors.details}
                </Typography>
              )
            }
            sx={fieldStyle}
            name="details"
            placeholder="More details"
            minRows={3}
            multiline
            variant="outlined"
            onChange={handleChange}
          />
          {/* </StyledForm> */}
        </>
      }
    />
    // <div>
    /* <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle> Payments for {data.name}</DialogTitle>
        <Divider />

        <DialogContent>
          <Typography>Enter Name</Typography>
          <TextField
            name="name"
            placeholder="Name"
            sx={{
              background: "#FFF9F5",
              border: 0,
              width: "100%",
              mb: 2,
              mt: 2,
            }}
            onChange={handleChange}
          />
          <Typography>Enter Amount</Typography>
          <TextField
            name="amount"
            placeholder="Amount"
            type="number"
            sx={{
              background: "#FFF9F5",
              border: 0,
              width: "100%",
              mb: 2,
              mt: 2,
            }}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Typography mb={2}>Enter Date</Typography>
            <DesktopDatePicker
              format="DD/MM/YYYY"
              onChange={handleDateChange}
              sx={{ mb: 2 }}
              // renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Typography>More Details</Typography>
          <StyledForm noValidate autoComplete="off">
            <StyledTextField
              id="outlined-textarea"
              placeholder="More details"
              minRows={3}
              multiline
              variant="outlined"
              onChange={handleChange}
            />
          </StyledForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleTransaction}>Add Details</Button>
        </DialogActions>
      // </Dialog> */
    // </div>
  );
}

{
  /* <Modal
  open={open.dialogOpen}
  saveCallback={postSubCategory}
  title={"Sub Category"}
  setOpen={setOpen}
  fields={
    <Box>
      <TextField
        name="name"
        placeholder={"Name"}
        sx={{
          border: 0,
          mb: 2,
          mt: 2,
          width: "100%",
        }}
        onChange={handleChange}
      />
      <Typography>Enter Amount</Typography>
      <TextField
        name="expectedAmount"
        type="number"
        placeholder={"Amount"}
        sx={{
          background: "#FFF9F5",
          border: 0,
          mb: 2,
          width: "100%",
          mt: 2,
        }}
        onChange={handleChange}
      />
    </Box>
  }
/>; */
}
