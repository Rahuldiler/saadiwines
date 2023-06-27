import { getTemplateData, getTemplateKey } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { templateInfoData } from "@/constants/templateInfo";
import { staticTemplateData } from "@/constants/template";
import Loader from "@/Components/common/Loader";
import { useRouter } from "next/router";
import Template3 from "@/Components/all-templates/Template3";
import Template2 from "@/Components/all-templates/Template2";
import Template1 from "@/Components/all-templates/Template1";

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
    const encodeId = id?.replace("%2F", "/");
    async function fetchData() {
      try {
        if (id?.length > 3) {
          const responseTemplateData = await getTemplateData(encodeId);
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
    switch (templateId) {
      case 1:
        return (
          <Template1
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[0]}
            images={staticTemplateData[0].images}
          />
        );

      case 2:
        return (
          <Template1
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[1]}
            images={staticTemplateData[1].images}
          />
        );

      case 11:
        return (
          <Template2
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[2]}
            images={staticTemplateData[2].images}
          />
        );
      case 21:
        return (
          <Template3
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[3]}
            images={staticTemplateData[3].images}
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
