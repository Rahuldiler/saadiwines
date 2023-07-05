import { getTemplateData } from "@/services/template/template";
import { getUserPreference } from "@/services/user-preference/userPreference";
import { Box } from "@mui/material";
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

const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

function Template() {
  const [formData, setFormData] = useState({});
  const [templateId, setTemplateId] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const encodeId = id?.replace("%2F", "/");
    async function fetchData() {
      try {
        if (id?.length > 3) {
          const responseTemplateData = await getTemplateData(encodeId);
          setFormData(responseTemplateData);
          setTemplateId(responseTemplateData.templateId);
        } else {
          if (id >= 5 && id < 9) {
            setFormData(template2InfoData);
          } else if (id >= 9) {
            setFormData(template3InfoData);
          } else {
            setFormData(templateInfoData);
          }
          setTemplateId(Number(id));
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
      case 3:
        return (
          <Template1
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[2]}
            images={staticTemplateData[2].images}
          />
        );
      case 4:
        return (
          <Template1
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[3]}
            images={staticTemplateData[3].images}
          />
        );
      case 5:
        return (
          <Template2
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[4]}
            images={staticTemplateData[4].images}
          />
        );
      case 6:
        return (
          <Template2
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[5]}
            images={staticTemplateData[5].images}
          />
        );
      case 7:
        return (
          <Template2
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[6]}
            images={staticTemplateData[6]}
          />
        );
      case 8:
        return (
          <Template2
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[7]}
            images={staticTemplateData[7]}
          />
        );
      case 9:
        return (
          <Template3
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[8]}
            images={staticTemplateData[8]}
          />
        );
      case 10:
        return (
          <Template3
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[9]}
            images={staticTemplateData[9]}
          />
        );
      case 11:
        return (
          <Template3
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[10]}
            images={staticTemplateData[10]}
          />
        );
      case 12:
        return (
          <Template3
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[11]}
            images={staticTemplateData[11]}
          />
        );
      case 13:
        return (
          <Template4
            templateData={formData}
            templateId={templateId}
            staticTemplateData={staticTemplateData[11]}
            images={staticTemplateData[11]}
          />
        );

      default:
        return <Box>No template found </Box>;
    }
  };
  const ref = createRef(null);
  const [thumbnail, setThumbnail] = useState(null);

  const takeScreenShot = async (node) => {
    const dataURI = node && (await htmlToImage.toJpeg(node));
    console.log(dataURI);
    setThumbnail(dataURI);
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
    takeScreenShot(ref.current);
  }, [ref]);

  return (
    <Box>
      <SEO
        title="Shaadi Vines"
        desc=""
        keywords=""
        url="https://stage.shaadivines.com/"
        socialImg={thumbnail}
      />
      {loading ? (
        <Loader message="Loading template" />
      ) : (
        <div ref={ref} style={{ height: "720px" }}>
          {getTemplate(templateId)}
        </div>
      )}
      {/* <button onClick={downloadScreenshot}>Download screenshot</button> */}
      {/* <img src={thumbnail} style={{ width: "500px", height: "500px" }} /> */}
    </Box>
  );
}

export default Template;
