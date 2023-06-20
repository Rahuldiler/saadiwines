import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { COLORS } from "@/Components/utils/ConstantTheme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import { useRouter } from "next/router";
import {
  addSubcategory,
  editSubcategory,
} from "@/services/subCategory/subCategory";
import { getCategories } from "@/services/category/category";

export default function MobileExpense() {
  const [subCategoryData, setSubCategoryData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  let { subId } = router.query; //0 || 1,2

  const [categories, setCategories] = React.useState(
    JSON.parse(localStorage.getItem("editSubCat"))
  );
  useEffect(() => {
    findSubCategoryById(subId);
  }, []);

  const findSubCategoryById = (subCategoryId) => {
    for (const category of categories) {
      const subCategory = category.subCategory.find(
        (subCat) => subCat.id == subCategoryId
      );
      if (subCategory) {
        setSubCategoryData(subCategory);
        setSelectedCategory(subCategory.categoryId);
        return;
      }
    }
    setSubCategoryData((prevFormData) => ({
      ...prevFormData,
      name: "",
      expectedAmount: 0,
    }));
    console.log("SubCategory not found");
  };

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].categoryId || 1
  );

  const handleChangeCategory = (e) => {
    setIsEditing(true);
    setSelectedCategory(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubCategoryData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const postSubCategory = (formData) => {
    if (formData.name && formData.expectedAmount) {
      if (subId == 0) {
        addSubcategory({ ...formData, categoryId: selectedCategory }).then(
          (_) => {
            console.log("ADDING");
            router.back();
          }
        );
      } else {
        console.log("Editing");
        editSubcategory({ ...formData, categoryId: selectedCategory }).then(
          (_) => {
            router.back();
            // setNotifyChanges((prev) => !prev);
          }
        );
      }
    }
  };
  const handleSubmit = () => {
    postSubCategory(subCategoryData);
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
      {subCategoryData == null && subId !== 0 ? (
        <CircularProgress />
      ) : (
        <Box>
          <Box
            display={"flex"}
            m={2}
            color={COLORS.gray}
            onClick={() => router.back()}
          >
            <ArrowBackIosIcon fontSize="10px" sx={{ mt: 0.2 }} />
            <Typography
              variant="caption"
              fontWeight={400}
              fontFamily={"inherit"}
            >
              BUDGET PLANNER
            </Typography>
          </Box>
          <Typography
            m={1}
            fontWeight={500}
            fontFamily={"inherit"}
            variant="h6"
          >
            {subId == 0 ? "Add New Expenses" : subCategoryData.name}
          </Typography>
          <Divider />
          
          <Box m={1}></Box>
          <RenderHeading title={"Category"} />
          <FormControl sx={{ p: 1, width: "100%" }} size="small">
            <Select
              name="category"
              value={selectedCategory}
              onChange={handleChangeCategory}
            >
              {categories.map((el) => (
                <MenuItem value={el.id}>{el.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <RenderHeading title={"Expense"} />
          <TextField
            size="small"
            sx={{
              m: 1,
              width: "95%",
            }}
            // defaultValue={}
            placeholder="Name of expense"
            name="name"
            variant="outlined"
            value={subCategoryData.name}
            onChange={handleChange}
          />
          <Grid container textAlign={"start"} py={1}>
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
          </Grid>
          <RenderHeading title={"Notes"} />
          <Box display={"flex"} justifyContent={"center"}>
            <br />
            <TextField
              multiline={true}
              disabled
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
      )}
    </>
  );
}
