import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import GuestListCard from "../common/GuestListCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { getTemplateKey } from "@/services/template/template";
import { staticTemplateData } from "@/constants/template";

function YourTemplate({ userPreferenceData }) {
  const theme = useTheme();
  const router = useRouter();
  const dummyData = [
    {
      id: 1,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: true,
      colors: ['#F21F3C', '#FA3991', '#BC8129']
    },
  ];
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [themeColor, setThemeColor] = useState("9CAB8D")

  const handleViewTemplate = async () => {
    const response = await getTemplateKey();
    // router.push(`/template/${response.userIdKey.replace("/", "%2F")}`);
    router.push(`/template/1?color=${themeColor}`);
  };

  useEffect(() => {
    const id = userPreferenceData.templateId;
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
          <Grid container sx={{ mt: 4 }}>
            {selectedTemplate?.map((templateData) => {
              return (
                <Grid item lg={3} key={templateData.id}>
                  <Box
                    sx={{
                      boxShadow: theme.boxShadow.pinkShadow,
                      "&:hover": {
                        outline: theme.border.primaryBorder,
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <Image
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
                    />
                  </Box>
                  <Typography variant="body1" sx={{ mt: 2, display: "flex" }}>
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
                  <Typography variant="body1" sx={{ mt: 2, display: "flex" }}>
                    Colors
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                        paddingLeft: "10px",
                        display: 'flex',
                        alignItems: 'center',
                      }}

                    >
                      {['F21F3C', 'FA3991', 'BC8129'].map(item => <div style={{ height: "30px", width: '30px', borderRadius: "50%", background: `#${item}`, margin: "0 3px", cursor: 'pointer', border: themeColor === item ? '2px solid #000' : 'none', }} onClick={() => setThemeColor(item)}></div>)}
                    </span>
                  </Typography>
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
