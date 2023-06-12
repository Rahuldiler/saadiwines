import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, Paper, TextField } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomCircularProgress from "./CustomCircularProgress";
import { addCategory, getCategories } from "@/services/category/category";
import { BORDER, COLORS } from "../Utils/ConstantTheme";
import Modal from "./Modal";

const Category = ({
  categories,
  setCategories,
  selectedRow,
  setSelectedRow,
  loading,
}) => {
  const handleRowClick = (rowIndex, id) => {
    setSelectedRow({ ...selectedRow, rowIndex: rowIndex, rowId: id });
  };
  const [dialogOpenCategory, setDialogOpenCategory] = useState(false);
  const finishEditing = (name, expectedAmount) => {
    if (name && expectedAmount) {
      addCategory({ name, expectedAmount }).then(() =>
        getCategories().then((category) => {
          console.log(categories.data)
          setCategories(category.data);
          setDialogOpenCategory(false);
        })
      );
    }
  };

  return (
    <Box
      sx={{
        border: BORDER.primaryBorder,
        p: 4,
        borderRadius: "7px",
      }}
    >
      <TableContainer>
        {loading && <CustomCircularProgress />}
        {!loading && categories.length === 0 && (
          <Typography variant="body3" fontWeight={400}>
            No Categories, Please Add One
          </Typography>
        )}
        <CategoryDialog
          open={dialogOpenCategory}
          setOpen={setDialogOpenCategory}
          saveCallback={finishEditing}
        />
        <Box
          sx={{ display: "flex", pt: "20px", cursor: "pointer" }}
          onClick={() => setDialogOpenCategory(true)}
        >
          <AddCircleOutlineIcon
            sx={{ mt: "0px", mr: "5px", color: COLORS.primary }}
          />{" "}
          {"  "}
          <Typography variant="body3" mb={2} fontWeight={400}>
            New Category
          </Typography>
        </Box>

        <Table
          sx={{ width: "100%",}}
          aria-label="simple table"
        >
          <TableBody>
            {categories &&
              categories.map((category, index) => (
                <TableRow
                  key={category.id}
                  sx={{
                    cursor: "pointer",
                    borderRight:
                      selectedRow.rowId === category.id
                        ? `2px solid ${COLORS.primary}`
                        : "2px solid white",
                    "&:hover": {
                      borderRight:
                        !selectedRow.rowId === category.id &&
                        "2px solid #BEBEBE",
                    },
                  }}
                  onClick={(e) => {
                    handleRowClick(index, category.id);
                  }}
                  component={selectedRow.rowId === category.id ? Paper : ""}
                  elevation={selectedRow.rowId === category.id ? 1 : 0}
                >
                  <TableCell sx={{width:"100%"}}>
                    <Typography
                      style={{ whiteSpace: "pre-line", }}
                      variant="body3"
                      fontWeight={600}
                    >
                      {category.name}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Box display={"flex"}>
                      <Typography
                        style={{ whiteSpace: "pre-line" }}
                        variant="body3"
                        fontWeight={600}
                      >
                        {category.expectedAmount}
                      </Typography>
                      <ArrowForwardIosIcon
                        fontSize="15px"
                        sx={{ mt: "3px", ml: "5px", color: "gray" }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

function CategoryDialog({ open, setOpen, saveCallback }) {
  const [formData, setFormData] = useState({
    name: "",
    expectedAmount: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal
        open={open}
        saveCallback={() =>
          saveCallback(formData.name, formData.expectedAmount)
        }
        title={"Category"}
        setOpen={setOpen}
        fields={
          <>
            <TextField
              name="name"
              placeholder={"Enter Name"}
              sx={{
                border: 0,
                mb: 2,
                mt: 2,
              }}
              onChange={handleChange}
            />
            <br />
            <Typography>Enter Amount</Typography>
            <TextField
              name="expectedAmount"
              placeholder={"Enter Amount"}
              sx={{
                border: 0,
                mb: 2,
                mt: 2,
              }}
              onChange={handleChange}
            />
          </>
        }
      />
    </div>
  );
}
export default Category;
