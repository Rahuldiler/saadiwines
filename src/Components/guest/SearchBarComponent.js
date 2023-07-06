import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function SearchBarComponent() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ mb: 1 }}
      alignItems="center"
      justifyContent="flex-start"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Nick Name"
        variant="outlined"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Family Name"
        variant="outlined"
        size="small"
      />
      <TextField
        id="standard-basic"
        label="Phone Number"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Cohort"
        defaultValue=""
        size="small"
        sx={{ minWidth: 160 }}
      >
        {cohortOptions.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </TextField>
      <Button
        color="primary"
        startIcon={<ClearIcon />}
        // onClick={handleClick}
        sx={{ marginLeft: 10 }}
      >
        Clear
      </Button>
    </Stack>
  );
}
