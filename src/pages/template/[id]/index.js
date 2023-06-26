import { getTemplateData, getTemplateKey } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { templateInfoData } from "@/constants/templateInfo";
import { staticTemplateData } from "@/constants/template";
import TemplateOne from "@/Components/all-templates/TemplateOne";
import Loader from "@/Components/common/Loader";
import { useRouter } from "next/router";
import TemplateTwo from "@/Components/all-templates/TemplateTwo";

function Template() {
  const [formData, setFormData] = useState({});
  const [templateId, setTemplateId] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    async function fetchTemplate() {
      if (id?.length > 3) {
        const response = await getUserPreference();
        setTemplateId(response.templateId);
      } else {
        setTemplateId(Number(id));
      }
    }
    fetchTemplate();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (id?.length > 3) {
          console.log("f");
          const responseKey = await getTemplateKey();
          const responseTemplateData = await getTemplateData(
            responseKey.userIdKey
          );
          setFormData(responseTemplateData);
        } else {
          setFormData(templateInfoData);
        }
        setLoading(false);
      } catch (err) {}
    }
    id && fetchData();
  }, [id]);

  const getTemplate = (templateId) => {
    console.log(templateId, formData, "templateId");
    switch (templateId) {
      case 1:
        return (
          <TemplateOne
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[0]}
          />
        );

      case 2:
        return (
          <TemplateOne
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[1]}
          />
        );

      case 11:
        return (
          <TemplateTwo
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[2]}
          />
        );

      default:
        return <Box>No template found </Box>;
    }
  };

  return (
    <Box>
      {loading ? (
        <Loader message="Loading template" />
      ) : (
        getTemplate(templateId)
      )}
    </Box>
  );
}

export default Template;
