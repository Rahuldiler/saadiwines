import { getTemplateData } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { templateInfoData } from "@/constants/1";
import { template2InfoData } from "@/constants/2";
import { template3InfoData } from "@/constants/3";
import { staticTemplateData } from "@/constants/template";
import Loader from "@/Components/common/Loader";
import { useRouter } from "next/router";
import Template3 from "@/Components/all-templates/Template3";
import Template2 from "@/Components/all-templates/Template2";
import Template1 from "@/Components/all-templates/Template1";
import Template4 from "@/Components/all-templates/Template4";
import { createRef } from "react";
import * as htmlToImage from "html-to-image";
import SEO from "@/Components/utils/seo";

function Template({
  singleTemplate,
  responseTemplateData,
  templateId,
  hostname,
}) {
  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;
  const ref = createRef();
  const [uploadThumbnail, setUploadThumbnail] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const getTemplate = (templateId) => {
    switch (templateId) {
      case 1:
        return (
          <Template1
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 2:
        return (
          <Template1
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 3:
        return (
          <Template1
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 4:
        return (
          <Template1
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 5:
        return (
          <Template2
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 6:
        return (
          <Template2
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 7:
        return (
          <Template2
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 8:
        return (
          <Template2
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 9:
        return (
          <Template3
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 10:
        return (
          <Template3
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 11:
        return (
          <Template3
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 12:
        return (
          <Template3
            templateData={responseTemplateData}
            staticTemplateData={singleTemplate[0]}
          />
        );
      case 13:
        return (
          <Template4
            templateData={responseTemplateData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[12]}
            images={staticTemplateData[12]}
          />
        );
      case 14:
        return (
          <Template4
            templateData={responseTemplateData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[13]}
            images={staticTemplateData[13]}
          />
        );
      case 15:
        return (
          <Template4
            templateData={responseTemplateData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[14]}
            images={staticTemplateData[14]}
          />
        );
      case 16:
        return (
          <Template4
            templateData={responseTemplateData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[15]}
            images={staticTemplateData[15]}
          />
        );

      default:
        return (
          <Box>
            {loading ? (
              <Loader message="Loading template" isLoading={loading} />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Typography variant="h5"> No template found </Typography>
              </Box>
            )}
          </Box>
        );
    }
  };

  const takeScreenShot = async (node) => {
    const dataURI = node && (await htmlToImage.toJpeg(node));
    setUploadThumbnail(dataURI);
    // return dataURI;
  };

  // const download = (image, { name = "img", extension = "jpg" } = {}) => {
  //   const a = document.createElement("a");
  //   console.log("img", image);
  //   a.href = image;
  //   // a.download = createFileName(extension, name);
  //   // a.click();
  // };

  useEffect(() => {
    if (id?.length > 3) {
      takeScreenShot(ref.current);
    }
  }, [ref]);

  useEffect(() => {
    responseTemplateData && setLoading(false);
  }, [responseTemplateData]);

  return (
    <Box>
      <SEO
        title={
          responseTemplateData
            ? responseTemplateData?.weddingInfo?.groom?.name +
              " weds " +
              responseTemplateData?.weddingInfo?.bride?.name +
              " | Shaadi Vines"
            : "Shaadi Vines"
        }
        description={responseTemplateData?.weddingInfo.thankYouMessage}
        keywords="Test1"
        url={`${hostname}/template/${templateId}`}
        ogImage={
          id?.length > 3
            ? responseTemplateData?.thumbnail
            : singleTemplate
            ? singleTemplate[0]?.socialImage
            : ""
        }
      />

      {loading && <Loader message="Loading template" isLoading={loading} />}
      <div ref={ref} style={{ height: "720px" }}>
        {getTemplate(templateId)}
      </div>
      {/* <button onClick={downloadScreenshot}>Download screenshot</button> */}
      {/* <img src={uploadThumbnail} style={{ width: "500px", height: "500px" }} /> */}
    </Box>
  );
}

export default Template;

// export async function getStaticPaths() {
//   const paths = staticTemplateData.map((template) => ({
//     params: { id: template.templateId.toString() },
//   }));

//   return { paths, fallback: true };
// }

// This also gets called at build time
export async function getServerSideProps({ params, req }) {
  const hostname = "https://" + req.headers.host;
  const encodeId = params.id?.replace("%2F", "/");
  let responseTemplateData;
  let templateId;
  let singleTemplate;
  if (params.id?.length > 3) {
    responseTemplateData = await getTemplateData(encodeId);
    templateId = Number(responseTemplateData.templateId);
    singleTemplate = staticTemplateData.filter(
      (template) =>
        template.templateId === Number(responseTemplateData.templateId)
    );
  } else {
    singleTemplate = staticTemplateData.filter(
      (template) => template.templateId === Number(params.id)
    );
    if (params.id >= 5 && params.id < 9) {
      responseTemplateData = template2InfoData;
    } else if (params.id >= 9) {
      responseTemplateData = template3InfoData;
    } else {
      responseTemplateData = templateInfoData;
    }
    templateId = Number(params.id);
  }

return {
    props: { singleTemplate, responseTemplateData, templateId, hostname },
  };
}
