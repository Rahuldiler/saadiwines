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

function Template() {
  const [formData, setFormData] = useState({});
  const [templateId, setTemplateId] = useState();

  const [componentTemplate, setComponentTemplate] = useState(
    <Box>Template 2 </Box>
  );

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

  console.log("formData", formData, templateId);
  console.info("--------------------");
  // console.info('staticTemplateData[templateId]?.color', staticTemplateData[templateId]?.color )
  console.info("--------------------");

  // useEffect(() => {
  //   switch (templateId) {
  //     case 0:
  //       setComponentTemplate(<Template0 formData={formData} templateId={templateId} color={staticTemplateData[templateId]?.color} />);
  //       break;
  //     case 1:
  //       setComponentTemplate(<Template1 formData={formData} color={staticTemplateData[templateId]?.color} />);
  //       break;
  //     case 2:
  //       setComponentTemplate(<Box>Template 2 </Box>);
  //       break;
  //     default:
  //       setComponentTemplate(<Box>No template found56987252153465465 </Box>);
  //   }

  // }, [formData]);

  const getTemplate = (templateId) => {
    switch (templateId) {
      case 0:
        return (
          <Template0
            formData={formData}
            templateId={templateId}
            color={staticTemplateData[templateId]?.theme?.bgColor}
          />
        );

      case 1:
        return (
          <Template1
            formData={formData}
            templateId={templateId}
            color={staticTemplateData[templateId]?.theme?.bgColor}
          />
        );

      case 2:
        return <Box>Template 2 </Box>;

      default:
        return <Box>No template found56987252153465465 </Box>;
    }
  };
  return (
    <Box>
      {templateId ? getTemplate(templateId) : <Box>No template found </Box>}
    </Box>
  );
}

export default Template;
