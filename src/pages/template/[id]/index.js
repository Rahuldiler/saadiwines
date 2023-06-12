import { getTemplateData, getTemplateKey } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Template1 from "../1";

function Template() {
  const [formData, setFormData] = useState({});
  const [templateId, setTemplateId] = useState();

  const [componentTemplate, setComponentTemplate] = useState();

  useEffect(() => {
    getUserPreference().then((response) => {
      setTemplateId(response[0].id);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    getTemplateKey().then((response) => {
      getTemplateData(response.userIdKey).then((responseTemplate) => {
        setFormData(responseTemplate);
      });
    });
  }, [templateId]);

  useEffect(() => {
    switch (templateId) {
      case 1:
        setComponentTemplate(<Template1 formData={formData} />);
        break;
      case 2:
        setComponentTemplate(<Box>Template 2 </Box>);
        break;
      // default:
      //   componentTemplate = <Box>No template found</Box>;
    }
  }, [formData]);

  return <Box>{componentTemplate}</Box>;
}

export default Template;
