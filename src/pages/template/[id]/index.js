import { getTemplateData, getTemplateKey } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Template0 from "../0";
import Template1 from "../1";
import { templateInfoData } from "@/constants/templateInfo";
import { staticTemplateData } from "@/constants/template";
import NewTemplate from "../2";
import TemplateOne from "@/Components/all-templates/TemplateOne";

function Template() {
  const [formData, setFormData] = useState({});
  const [templateId, setTemplateId] = useState();

  useEffect(() => {
    async function fetchTemplate() {
      const response = await getUserPreference();
      setTemplateId(response.templateId);
    }
    fetchTemplate();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseKey = await getTemplateKey();
        const responseTemplateData = await getTemplateData(
          responseKey.userIdKey
        );
        setFormData(responseTemplateData);
      } catch (err) {}
    }
    fetchData();
  }, [templateId]);

  const getTemplate = (templateId) => {
    switch (templateId) {
      case 1:
        return (
          <TemplateOne
            formData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[0]}
          />
        );

      case 2:
        return (
          <TemplateOne
            formData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[1]}
          />
        );

      case 3:
        return <Box>Template 2 </Box>;

      default:
        return <Box>No template found </Box>;
    }
  };
  return (
    <Box>
      {templateId ? getTemplate(templateId) : <Box>No template found </Box>}
    </Box>
  );
}

export default Template;
