import { TextField } from "@mui/material";
import { useFormik, FormikProvider, Form, useField } from "formik";

export default function TextFieldResponsive({ ...inputProps }) {
  //   const {
  //     // name,
  //     // value,
  //     // onChange,
  //     // error,
  //     // errorText,
  //     // placeholder,
  //     // inputPropsPosition,
  //     ...input
  //   } = inputProps;
  //   const { label, helperText, ...props } = inputProps;
  const [field, meta] = useField(inputProps);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 0) || meta.touched;
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        error={error}
        helperText={errorText || helperText}
        onChange={onChange}
        onFocus={handleFocus}
        {...input}
        fullWidth
        id={column.accessorKey}
        key={column.accessorKey}
        type={column.type}
      />
      {showFeedback ? errorText || helperText : ""}
    </>
  );
}
