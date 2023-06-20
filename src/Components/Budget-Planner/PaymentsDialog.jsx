import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addTransaction } from "@/services/transaction/transaction";
import { getCategoriesById } from "@/services/category/category";

export default function PaymentsDialog({
  open,
  setOpen,
  data,
  setNotifyChanges,
}) {
  const [formData, setFormData] = React.useState({
    subCategoryId: 0,
    amount: 0,
    dateAdded: Date.now(),
    details: "",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return unixTimestamp;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, dateAdded: formatDate(date) });
  };

  const handleTransaction = () => {
    if (formData.amount && formData.details && formData.dateAdded) {
      addTransaction({
        ...formData,
        type: "CREDIT",
        subCategoryId: data.id,
      }).then((_) => setNotifyChanges((p) => !p));
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
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

              // renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {/* {selectedDate && <Box>{formatDate(selectedDate)}</Box>} */}

          <TextField
            name="details"
            onChange={handleChange}
            placeholder="More details"
            multiline
            sx={{ background: "#FFF9F5", border: 0, width: "100%", mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleTransaction}>Add Details</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
