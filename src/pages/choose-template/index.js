import ChooseTemplateCard from "@/Components/ChooseTemplate/ChooseTemplateCard";
import { BOXSHADOW, COLORS } from "@/Components/Utils/ConstantTheme";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

function ChooseTemplate() {
  const templateData = [
    {
      id: 1,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: true,
    },
    {
      id: 2,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/2",
      isSelected: false,
    },
    {
      id: 3,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: false,
    },
    {
      id: 4,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: false,
    },
    {
      id: 5,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: false,
    },
    {
      id: 6,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: false,
    },
    {
      id: 7,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: false,
    },
  ];
  const router = useRouter();

  const [allTemplates, setAllTemplates] = useState(templateData);
  const [selectedTemplate, setSelectedTemplate] = useState(templateData[0].url);

  console.log(selectedTemplate);

  const handleChooseTemplate = () => {
    router.push(selectedTemplate);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography
          variant="h2"
          // className="vibeFont"
          sx={{ color: "#bc8129", mt: { lg: 0, xs: "20px" } }}
        >
          What do you want your Invitation to look like?
        </Typography>
        <Typography variant="body1" sx={{ color: "#000", fontSize: "18px" }}>
          View all invitation templates and select a specific style to customize
        </Typography>
      </Box>
      <Box className="layoutMargin" sx={{ mt: 4, mb: 14 }}>
        <Grid container>
          {allTemplates.map((template) => {
            return (
              <Grid lg={4} key={template.id} item>
                <ChooseTemplateCard
                  template={template}
                  setAllTemplates={setAllTemplates}
                  setSelectedTemplate={setSelectedTemplate}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          background: "#fff",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          p: 3,
        }}
      >
        <Box
          className="layoutMargin"
          sx={{ display: "flex", justifyContent: "flex-end", pr: 4 }}
        >
          <Button
            style={{
              color: COLORS.primary,
            }}
          >
            Choose Later
          </Button>
          <Button
            onClick={handleChooseTemplate}
            style={{
              backgroundColor: COLORS.pinkColor,
              color: "#fff",
              marginLeft: "16px",
              padding: "7px 16px",
            }}
          >
            Choose Template
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ChooseTemplate;
