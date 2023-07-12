import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import GuestListCard from "../common/GuestListCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { getTemplateKey } from "@/services/template/template";
import { staticTemplateData } from "@/constants/template/template";

function YourTemplate({ userPreferenceData }) {
  const theme = useTheme();
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [userIdKey, setUserIdKey] = useState();
  const [themeColor, setThemeColor] = useState("9CAB8D");

  const handleViewTemplate = async () => {
    router.push(`/template/${userIdKey}`);
  };

  useEffect(() => {
    async function fetchUserKey() {
      const response = await getTemplateKey();
      setUserIdKey(response.userIdKey.replace("/", "%2F"));
    }

    fetchUserKey();
  }, []);

  useEffect(() => {
    const id = userPreferenceData?.templateId;
    const filterTemplate = staticTemplateData.filter((item) => item.id === id);
    setSelectedTemplate(filterTemplate);
  }, [userPreferenceData]);

  return (
    <Box sx={{ mt: 14 }}>
      <Box sx={{ px: { lg: "100px", xs: "20px" } }}>
        <Typography variant="h3" sx={{ textAlign: "left", fontWeight: 500 }}>
          Your Templates
        </Typography>
        <Box>
          <Grid
            container
            sx={{ mt: 4 }}
            onClick={() => handleViewTemplate(selectedTemplate[0].id)}
          >
            {selectedTemplate?.map((templateData) => {
              return (
                <Grid item lg={3} key={templateData.id}>
                  {userPreferenceData.shouldShowTemplate ? (
                    <Box>
                      <Box
                        sx={{
                          boxShadow: theme.boxShadow.pinkShadow,
                          position: "relative",
                          "&:hover": {
                            outline: theme.border.primaryBorder,
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <a
                          href={`/template/${userIdKey}`}
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: 10,
                          }}
                        ></a>
                        <iframe
                          style={{
                            width: "100%",
                            minHeight: "560px",
                            objectFit: "cover",
                            borderRadius: "7px",
                            cursor: "pointer",
                            zIndex: 1,
                          }}
                          scrolling="no"
                          src={`/template/${userIdKey}`}
                        ></iframe>

                        {/* <Image
                          src={templateData.templateImage}
                          alt="..."
                          width={800}
                          height={900}
                          onClick={() => handleViewTemplate(templateData.id)}
                          style={{
                            width: "512px",
                            minHeight: "560px",
                            objectFit: "cover",
                            borderRadius: "7px",
                            cursor: "pointer",
                          }}
                        /> */}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ mt: 2, display: "flex" }}
                      >
                        Template
                        <span
                          style={{
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                            paddingLeft: "10px",
                          }}
                        >
                          {templateData.templateName}
                        </span>
                      </Typography>
                    </Box>
                  ) : (
                    <Box>
                      <Typography sx={{ color: "#00000060" }}>
                        Your template will be visible here, once ready.
                      </Typography>
                    </Box>
                  )}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default YourTemplate;
