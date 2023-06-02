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
import React, { useState } from "react";

import styles from "../../styles/Form.module.css";
import { MultilineTextField, TextFieldInput } from "../Common/TextFieldInput";
import { AiOutlineDelete } from "react-icons/ai";

function Step3FAQ({ faqLists, setFaqLists, setValidationBoolean }) {
  const addNewFAQ = () => {
    setValidationBoolean(false);

    setFaqLists((prevData) => [
      ...prevData,
      {
        id: prevData[prevData.length - 1].id + 1,
        question: "",
        answer: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...faqLists];
    list[index][name] = value;
    setFaqLists(list);
  };

  console.log(faqLists);

  const deleteFAQ = (id) => {
    setFaqLists((prevData) => prevData.filter((lists) => lists.id !== id));
  };
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
      {faqLists.map((faq, index) => {
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
              {faqLists.length > 1 && (
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
              id="question"
              label="Question"
              name="question"
              type="text"
              value={faq.question}
              onChange={(e) => handleChange(e, index)}
            />
            {(faq.question.match(/\W/) || /\d/.test(faq.question)) && (
              <Box sx={{ color: "red", fontSize: "14px" }}>
                Please don't add any special character and number
              </Box>
            )}
            <TextFieldInput
              id="answer"
              label="Answer"
              name="answer"
              type="text"
              value={faq.answer}
              onChange={(e) => handleChange(e, index)}
            />
            {(faq.answer.match(/\W/) || /\d/.test(faq.answer)) && (
              <Box sx={{ color: "red", fontSize: "14px" }}>
                Please don't add any special character and number
              </Box>
            )}
          </FormControl>
        );
      })}
    </Box>
  );
}

export default Step3FAQ;
