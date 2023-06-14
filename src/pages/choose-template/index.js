import ChooseTemplateCard from "@/components/template-selection/ChooseTemplateCard";
import { COLORS } from "@/components/utils/ConstantTheme";
import {
  getUserPreference,
  updateUserPreference,
} from "@/services/user-preference/userPreference";
import {
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
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
  const theme = useTheme();
  const [allTemplates, setAllTemplates] = useState(templateData);
  const [selectedTemplate, setSelectedTemplate] = useState({
    id: templateData[0].id,
    url: templateData[0].url,
  });
  const [userPreferenceData, setUserPreferenceData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChooseTemplate = () => {
    // router.push(selectedTemplate);
    const updatedData = {
      id: userPreferenceData[0].id,
      userId: userPreferenceData[0].userId,
      templateId: selectedTemplate.id,
      rsvpEnabled: userPreferenceData[0].rsvpEnabled,
      budgetPlanningEnabled: userPreferenceData[0].budgetPlanningEnabled,
      guestListEnabled: userPreferenceData[0].guestListEnabled,
    };
    updateUserPreference(updatedData);
    handleOpen();
  };

  useEffect(() => {
    getUserPreference().then((response) => {
      setUserPreferenceData(response);
    });
  }, []);

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
          <Link href={selectedTemplate.url} target="_blank">
            <Button
              style={{
                border: theme.border.primaryBorder,
                color: COLORS.primary,
                marginLeft: "16px",
                padding: "7px 16px",
              }}
            >
              View Template
            </Button>
          </Link>
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
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ p: 0, background: "#fff" }}>
          <Typography variant="h5" sx={{ px: 4, py: 2 }}>
            Heading
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ px: 4, py: 2 }}>
            Our team will get in touch with you shortly
          </Typography>
          <Divider />
          <Button
            onClick={handleClose}
            sx={{
              px: 4,
              py: 2,
              float: "right",
              fontSize: "16px",
              color: COLORS.primary,
            }}
          >
            Okay
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}

export default ChooseTemplate;
