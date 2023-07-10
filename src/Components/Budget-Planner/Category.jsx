import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, Paper } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomCircularProgress from "./common/CustomCircularProgress";
import { BORDER, COLORS } from "../utils/ConstantTheme";
import { RenderDialogForCategory } from "./common/RenderDialog";

const Category = ({
  categories,
  selectedRow,
  setSelectedRow,
  loading,
  setTrackChanges,
}) => {
  const handleRowClick = (rowIndex, id) => {
    setSelectedRow({ ...selectedRow, rowIndex: rowIndex, rowId: id });
  };
  const [isEditingCategory, setIsEditingCategory] = useState({
    isEditing: false,
    categoryId: 0,
  });
  const [dialogOpenCategory, setDialogOpenCategory] = useState(false);
  const handleDialogOpen = () => {
    setIsEditingCategory({
      ...isEditingCategory,
      isEditing: false,
      categoryId: 0,
    });
    setDialogOpenCategory(true);
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
        <RenderDialogForCategory
          openDialog={dialogOpenCategory}
          handleCloseDialog={() => setDialogOpenCategory(false)}
          category={categories}
          setTrackChanges={setTrackChanges}
          isEditingCategory={isEditingCategory}
          isDesktop={true}
        />
        <Box
          sx={{ display: "flex", pt: "20px", cursor: "pointer" }}
          onClick={handleDialogOpen}
        >
          <AddCircleOutlineIcon
            sx={{ mt: "0px", mr: "5px", color: COLORS.primary }}
          />{" "}
          {"  "}
          <Typography variant="body3" mb={2} fontWeight={400}>
            New Category
          </Typography>
        </Box>

        <Table sx={{ width: "100%" }} aria-label="simple table">
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
                  <TableCell sx={{ width: "100%" }}>
                    <Typography
                      style={{ whiteSpace: "pre-line" }}
                      variant="body3"
                      fontWeight={600}
                    >
                      {category.name}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Box display={"flex"} justifyContent={"end"}>
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

export default Category;
