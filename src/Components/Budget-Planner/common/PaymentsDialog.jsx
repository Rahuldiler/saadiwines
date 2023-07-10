import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { COLORS } from "@/Components/utils/ConstantTheme";
import {
  addTransaction,
  editTransaction,
} from "@/services/transaction/transaction";
const PaymentsDialog = ({
  onClose,
  setTrackChanges,
  subCategoryId,
  isEditingTransaction,
}) => {
  const [formData, setFormData] = useState({
    name: isEditingTransaction?.transaction.name ?? "",
    amount: isEditingTransaction?.transaction.amount ?? 0,
    details: isEditingTransaction?.transaction.details ?? "",
    type: isEditingTransaction?.transaction.type ?? "CREDIT",
    subCategoryId: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const value =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const fieldStyle = {
    border: 0,
    width: "90%",
    mb: 0,
    mt: 0,

    "& 	.MuiFormHelperText-root": {
      border: "none",
      borderRadius: "0px",
      background: "white",
      width: "100%",
    },
  };
  const handleSubmit = () => {
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
      if (isEditingTransaction?.isEditing) {
        editTransaction(isEditingTransaction.transaction.id, {
          ...formData,
          subCategoryId: subCategoryId,
        }).then((_) => {
          setTrackChanges((p) => !p);
          onClose();
        });
      } else {
        console.log("ADDING ");
        addTransaction({
          ...formData,
          subCategoryId: subCategoryId,
        }).then((_) => setTrackChanges((p) => !p));
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
          Add Transaction
        </Typography>
        <Divider />
        <Box m={1}></Box>
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
          type="number"
          size="small"
          sx={{
            mx: 1,
            width: "95%",
          }}
          defaultValue={formData.amount}
          placeholder="Enter Amount"
          name="amount"
          variant="outlined"
          required
          error={!!errors.amount}
          helperText={
            errors.amount && (
              <Typography variant="caption" sx={{ mx: "-10px" }}>
                {errors.amount}
              </Typography>
            )
          }
          onChange={handleChange}
        />
        <Grid container textAlign={"start"} py={0} m={"auto"} width={"96%"}>
          <Grid item xs>
            <Box>
              <Box>
                <RenderHeading title={"Type"} />
                <FormControl fullWidth>
                  <Select
                    size="small"
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
          <Grid item xs mr={0}>
            {/* <Box>
              <RenderHeading title={"Date"} />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  slotProps={{ textField: { size: "small" } }}
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
            </Box> */}
          </Grid>
        </Grid>
        <RenderHeading title={"More Details"} />
        <Box display={"flex"} justifyContent={"center"}>
          <br />
          <TextField
            multiline={true}
            defaultValue={formData.details}
            name="details"
            onChange={handleChange}
            rows={3}
            sx={{ width: "96%" }}
            required
            error={!!errors.details}
            FormHelperTextProps={{ style: { fontSize: 2 } }}
            helperText={
              errors.details && (
                <Typography variant="caption" sx={{ mx: "-10px" }}>
                  {errors.details}
                </Typography>
              )
            }
          />
        </Box>
        <Button
          onClick={handleSubmit}
          // className={`bg-[${COLORS.primary}]`}
          // variant="contained"
          sx={{ width: "96%", m: 1, borderRadius: "5px", mt: 5 }}
        >
          Save{" "}
        </Button>
      </Box>
    </>
  );
};

export default PaymentsDialog;
