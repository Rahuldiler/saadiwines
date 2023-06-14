import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import GuestListCard from "../common/GuestListCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { getTemplateKey } from "@/services/template/template";

function YourTemplate() {
  const theme = useTheme();
  const router = useRouter();
  const dummyData = [
    {
      id: 1,
      templateName: "Classic",
      templateImage: "/assets/placeholder.png",
      url: "/template/1",
      isSelected: true,
    },
  ];

  const handleViewTemplate = async () => {
    const response = await getTemplateKey();
    router.push(`/template/${response.userIdKey.replace(/\/$/, "%2F")}`);
  };
  return (
    <Box sx={{ mt: 14 }}>
      <Box sx={{ px: { lg: "100px", xs: "20px" } }}>
        <Typography variant="h3" sx={{ textAlign: "left", fontWeight: 500 }}>
          Your Templates
        </Typography>
        <Box>
          <Grid container sx={{ mt: 4 }}>
            {dummyData.map((templateData) => {
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
                      Template 1
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
