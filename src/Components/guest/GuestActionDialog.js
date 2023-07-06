import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Box,
  Typography,
  FormHelperText,
} from "@mui/material";
import { purple, green, lightGreen } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Unstable_Grid2";
import { isEmpty, get, has, isBoolean } from "lodash";
import { saveGuest, updateGuest } from "@/services/guests/guestService";
import * as yup from "yup";
import { useFormik } from "formik";

const prepareSaveGuestRequestData = (
  formData,
  guestColumns,
  itineraryColumns
) => {
  const requestData = {};
  const itineraryList = [];
  const contactList = [];
  itineraryColumns.map((column) => {
    if (
      has(formData, column.accessorKey) &&
      Boolean(formData[column.accessorKey])
    ) {
      itineraryList.push(column.id);
    }
  });
  if (!isEmpty(formData)) {
    guestColumns.map((column) => {
      if (has(formData, column.accessorKey)) {
        if (column.accessorKey === "headCount") {
          requestData[column.accessorKey] = parseInt(
            get(formData, column.accessorKey, null)
          );
        } else if (column.accessorKey === "contact") {
          contactList.push(get(formData, column.accessorKey, null));
        } else {
          requestData[column.accessorKey] = get(
            formData,
            column.accessorKey,
            null
          );
        }
      }
    });
  }
  requestData["contact"] = contactList;
  requestData["itineraryList"] = itineraryList;
  return requestData;
};

const validationSchema = yup.object().shape({
  fullName: yup
    .string("Enter your email")
    .min(1, "Please enter a name")
    .required("Name is required"),
  nickName: yup
    .string("Enter your password")
    .min(1, "Please enter valid nickname")
    .required("NickName is required"),
  family: yup
    .string("Enter your password")
    .min(1, "Please enter valid nickname")
    .required("Family is required"),
  cohort: yup
    .string("Enter your cohort")
    .min(1, "Please enter valid cohort")
    .required("Cohort is required"),
  contact: yup
    .number("Enter your contact")
    .min(1000000000, "10 digits")
    .max(9999999999, "10 digits")
    .required("Phone No. is required"),
  headCount: yup
    .number("Enter your headCount")
    .min(1, "Please enter valid headCount")
    .max(1000, "Please enter valid headCount")
    .required("No. of Guests is required"),
});

export default function GuestAcionDialog({
  data,
  guestColumns,
  itineraryColumns,
  open,
  isNewGuest,
  onClose,
  registerChange,
}) {
  const [values, setValues] = useState({});
  const [isFormInvalid, setIsFormInvalid] = useState(true);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isSaveError, setIsSaveError] = useState(false);

  const initNewGuest = (data) => {
    if (!open) {
      return {};
    }
    if (!isEmpty(data)) {
      Object.keys(data).forEach((key) => {
        if (
          isBoolean(data[key]) ||
          data[key] === "true" ||
          data[key] === "false"
        ) {
          data[key] = Boolean(get(data, key));
        }
      });
      return data;
    }
    const guestData = guestColumns.reduce((acc, column) => {
      if (column.accessorKey === "isInvitationSent") {
        acc[column.accessorKey] = false;
      } else {
        acc[column.accessorKey ?? ""] = "";
      }
      return acc;
    }, {});
    const itineraryData = itineraryColumns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = false;
      return acc;
    }, {});
    return { ...guestData, ...itineraryData };
  };

  const formik = useFormik({
    initialValues: initNewGuest(data),
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      handleSave(values);
    },
    onReset: () => {},
  });

  const handleClose = () => {
    formik.setTouched({}, false);
    onClose();
  };

  const handleSave = async (values) => {
    setIsFormLoading(true);
    const payload = prepareSaveGuestRequestData(
      values,
      guestColumns,
      itineraryColumns
    );
    try {
      if (isNewGuest) {
        await saveGuest(payload);
      } else {
        await updateGuest(values.id, payload);
      }
    } catch (error) {
      setIsSaveError(true);
      setIsFormLoading(false);
      return;
    }
    setIsFormLoading(false);
    registerChange();
    // formik.setTouched({}, false);
    if (document.activeElement.dataset.flag === "save") {
      onClose();
    } else {
      setIsReady(false);
      const newData = initNewGuest({});
      formik.setValues(newData);
      formik.setTouched({}, false);
      setIsReady(true);
    }
  };

  useEffect(() => {
    if (open) {
      setIsReady(false);
      // formik.setTouched({}, false);
      const formData = initNewGuest(data);
      formik.setValues(formData);
      // setValues(formData);
      setIsReady(true);
    }
  }, [data, open]);

  const getFormComponent = (column) => {
    switch (column.type) {
      case "checkBox":
        return (
          <FormControlLabel
            name={column.accessorKey}
            control={
              column.accessorKey === "isInvitationSent" ? (
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  color="secondary"
                  name={column.accessorKey}
                  type={"checkbox"}
                  checked={formik.values[column.accessorKey]}
                  defaultChecked={formik.values[column.accessorKey]}
                  onChange={(event) => {
                    formik.setValues({
                      ...formik.values,
                      [column.accessorKey]: event.target.checked,
                    });
                    // setValues({
                    //   ...formik.values,
                    //   [column.accessorKey]: event.target.checked,
                    // });
                  }}
                />
              ) : (
                <Checkbox
                  checked={formik.values[column.accessorKey]}
                  defaultChecked={formik.values[column.accessorKey]}
                  name={column.accessorKey}
                  type={"checkbox"}
                  onChange={(event) => {
                    formik.setValues({
                      ...formik.values,
                      [column.accessorKey]: event.target.checked,
                    });
                    // setValues({
                    //   ...formik.values,
                    //   [column.accessorKey]: event.target.checked,
                    // });
                  }}
                />
              )
            }
            label={column.header}
            labelPlacement="end"
          />
        );
      case "select":
        return (
          <FormControl
            fullWidth={true}
            error={
              formik.touched[column.accessorKey] &&
              Boolean(formik.errors[column.accessorKey])
            }
          >
            <InputLabel>{column.header}</InputLabel>
            <Select
              value={formik.values[column.accessorKey]}
              label={column.header}
              onChange={(e) => {
                formik.setValues({
                  ...formik.values,
                  [column.accessorKey]: e.target.value,
                });
                // setValues({
                //   ...formik.values,
                //   [column.accessorKey]: e.target.value,
                // });
              }}
            >
              <MenuItem value="Family">Family</MenuItem>
              <MenuItem value="Friends">Friends</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
            <FormHelperText>
              {formik.touched[column.accessorKey] &&
                formik.errors[column.accessorKey]}
            </FormHelperText>
          </FormControl>
        );
      default:
        return (
          <TextField
            fullWidth
            id={column.accessorKey}
            key={column.accessorKey}
            label={column.header}
            name={column.accessorKey}
            value={formik.values[column.accessorKey]}
            onChange={(e) => {
              formik.setValues({
                ...formik.values,
                [column.accessorKey]: e.target.value,
              });
              // setValues({
              //   ...formik.values,
              //   [column.accessorKey]: e.target.value,
              // });
            }}
            error={
              formik.touched[column.accessorKey] &&
              Boolean(formik.errors[column.accessorKey])
            }
            type={column.type}
            helperText={
              formik.touched[column.accessorKey] &&
              formik.errors[column.accessorKey]
            }
          />
        );
    }
  };

  return (
    <Dialog open={open} fullWidth={true} maxWidth={"sm"} scroll={"paper"}>
      {isReady && (
        <DialogContent sx={{ paddingTop: 2 }} dividers={scroll === "paper"}>
          <form
            onSubmit={formik.handleSubmit}
            enableReinitialize
            onReset={formik.handleReset}
          >
            <Typography
              sx={{ textAlign: "center", top: 0, paddingBottom: 2 }}
              variant="h5"
              component="h5"
              color={green[500]}
            >
              {isNewGuest ? "Create New Guest" : "Edit Guest"}
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Grid container spacing={2}>
                {guestColumns.map((column) => (
                  <Grid xs={6}>{getFormComponent(column)}</Grid>
                ))}
              </Grid>
            </Box>
            <Box
              sx={{
                width: "100%",
                minWidth: { xs: "300px", sm: "360px", md: "400px" },
                gap: "1.5rem",
                flexGrow: 1,
              }}
            >
              <Grid container spacing={2}>
                {itineraryColumns.map((column) => (
                  <Grid xs={6}>{getFormComponent(column)}</Grid>
                ))}
              </Grid>
            </Box>
            <Stack
              direction="row"
              container
              spacing={2}
              // useFlexGap
              // flexWrap="wrap"
              justifyContent={"flex-end"}
            >
              {isNewGuest && (
                <Button
                  style={{
                    backgroundColor: lightGreen[500],
                  }}
                  variant="contained"
                  type="submit"
                  data-flag="addMore"
                >
                  Add more
                </Button>
              )}

              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>

              <Button
                style={{ backgroundColor: green[500], mr: 1 }}
                type="submit"
                data-flag="save"
                variant="contained"
                // disabled={isFormInvalid}
              >
                Save
              </Button>
            </Stack>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
}
