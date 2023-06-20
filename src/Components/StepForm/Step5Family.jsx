import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React, { useEffect } from "react";

import styles from "../../styles/Form.module.css";
import { MultilineTextField, TextFieldInput } from "../common/TextFieldInput";
import { AiOutlineDelete } from "react-icons/ai";

function Step5Family({
  familyMemberLists,
  setFamilyMemberLists,
  setValidationBoolean,
  specialChars,
}) {
  const selectList = ["Brother", "Sister", "Father", "Mother", "Other"];
  const addNewFamilyMember = () => {
    setFamilyMemberLists((prevData) => [
      ...prevData,
      {
        arrayId: prevData[prevData.length - 1].arrayId + 1,
        id: 0,
        userId: 0,
        name: "",
        relation: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...familyMemberLists];
    list[index][name] = value;
    setFamilyMemberLists(list);
  };

  const deleteFamilyMember = (id) => {
    setFamilyMemberLists((prevData) =>
      prevData.filter((lists) => lists.arrayId !== id)
    );
  };

  useEffect(() => {
    familyMemberLists[0].name
      ? setValidationBoolean(false)
      : setValidationBoolean(true);
  }, [familyMemberLists]);

  console.log(familyMemberLists);

  return (
    <Box
      sx={{
        m: { lg: "20px 200px", xs: "20px 20px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "Flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6"> Family Member Details</Typography>
        <Button
          onClick={addNewFamilyMember}
          className="bg-[#BC8129]"
          sx={{
            backgroundColor: "#BC8129",
            color: "#fff",
            "&:hover": {
              background: "#BC812990",
            },
          }}
        >
          + Add Family Member
        </Button>
      </Box>
      {familyMemberLists.map((family, index) => {
        return (
          <FormControl
            sx={{
              mt: 4,
              width: "100%",
              borderBottom: "0.5px solid #BC812950",
              paddingBottom: 4,
            }}
            key={index}
          >
            <Box
              sx={{
                display: "Flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Member {index + 1}</Typography>
              {familyMemberLists.length > 1 && (
                <Button
                  onClick={() => deleteFamilyMember(contact.arrayId)}
                  sx={{
                    color: "#BC8129",
                  }}
                >
                  <AiOutlineDelete size={20} />
                </Button>
              )}
            </Box>
            <TextFieldInput
              id="name"
              label="Name"
              name="name"
              type="text"
              value={family.name}
              onChange={(e) => handleChange(e, index)}
            />
            {(family.name.match(specialChars) || /\d/.test(family.name)) && (
              <Box sx={{ color: "red", fontSize: "14px" }}>
                Please don't add any special character and number
              </Box>
            )}
            <FormControl sx={{ mt: 2 }}>
              <InputLabel id="demo-simple-select-label">Relation</InputLabel>
              <Select
                id="relation"
                name="relation"
                value={family.relation}
                label="Relation"
                required
                onChange={(e) => handleChange(e, index)}
                sx={{
                  // background: "#FFF9F5",
                  border: 0,
                }}
              >
                {selectList.map((list, index) => {
                  return (
                    <MenuItem value={list} key={index}>
                      {list}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {/* <TextFieldInput
              id="relation"
              name="relation"
              label="Relation"
              type="text"
              value={family.relation}
              onChange={(e) => handleChange(e, index)}
            />
            {(family.relation.match(specialChars) ||
              /\d/.test(family.relation)) && (
              <Box sx={{ color: "red", fontSize: "14px" }}>
                Please don't add any special character and number
              </Box>
            )} */}
          </FormControl>
        );
      })}
    </Box>
  );
}

export default Step5Family;
