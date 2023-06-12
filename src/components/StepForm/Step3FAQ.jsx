import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from "../../styles/Form.module.css";
import { MultilineTextField, TextFieldInput } from "../Common/TextFieldInput";
import { AiOutlineDelete } from "react-icons/ai";

function Step3FAQ({ setValidationBoolean, milestoneLists, setMilestoneLists }) {
  const addNewFAQ = () => {
    setValidationBoolean(false);

    setMilestoneLists((prevData) => [
      ...prevData,
      {
        arrayId: prevData[prevData.length - 1].id + 1,
        title: "",
        description: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...milestoneLists];
    list[index][name] = value;
    setMilestoneLists(list);
  };

  const deleteFAQ = (id) => {
    setMilestoneLists((prevData) =>
      prevData.filter((lists) => lists.id !== id)
    );
  };

  useEffect(() => {
    setValidationBoolean(false);
  }, [milestoneLists]);
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
        <Typography variant="h6">FAQ Details</Typography>
        <Button
          onClick={addNewFAQ}
          className="bg-[#BC8129]"
          sx={{
            backgroundColor: "#BC8129",
            color: "#fff",
            "&:hover": {
              background: "#BC812990",
            },
          }}
        >
          + Add FAQ
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      ></Box>
      {milestoneLists.map((faq, index) => {
        return (
          <FormControl
            key={index}
            sx={{
              mt: 4,
              width: "100%",
              borderBottom: "0.5px solid #BC812950",
              paddingBottom: 4,
            }}
          >
            <Box sx={{ display: "Flex", justifyContent: "space-between" }}>
              <Typography variant="body1">FAQ {index + 1}</Typography>
              {milestoneLists.length > 1 && (
                <Button
                  onClick={() => deleteFAQ(faq.id)}
                  sx={{
                    color: "#BC8129",
                  }}
                >
                  <AiOutlineDelete size={20} />
                </Button>
              )}
            </Box>

            <TextFieldInput
              id="title"
              label="Title"
              name="title"
              type="text"
              value={faq.title}
              onChange={(e) => handleChange(e, index)}
            />

            <TextFieldInput
              id="description"
              label="Description"
              name="description"
              type="text"
              value={faq.description}
              onChange={(e) => handleChange(e, index)}
            />
          </FormControl>
        );
      })}
    </Box>
  );
}

export default Step3FAQ;
