import { getTemplateData, getTemplateKey } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Template1 from "../1";
import { templateInfoData } from "@/constants/templateInfo";
import NewTemplate from "../2";

function Template() {
  const [formData, setFormData] = useState({});
  const [templateId, setTemplateId] = useState();

  const [componentTemplate, setComponentTemplate] = useState();

  useEffect(() => {
    async function fetchTemplate() {
      const response = await getUserPreference();
      setTemplateId(response[0]?.templateId);
    }
    fetchTemplate();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const responseKey = await getTemplateKey();
      const responseTemplateData = await getTemplateData(responseKey.userIdKey);
      setFormData(responseTemplateData);
    }
    fetchData();
  }, [templateId]);

  useEffect(() => {
    switch (templateId) {
      case 1:
        setComponentTemplate(<Template1 formData={formData} />);
        break;
      case 2:
        setComponentTemplate(<NewTemplate formData={formData} />);
        break;
      // default:
      //   componentTemplate = <Box>No template found</Box>;
    }
  }, [formData]);
  return <Box>{componentTemplate}</Box>;
}

export default Template;
