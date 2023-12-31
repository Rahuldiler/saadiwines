import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BORDER, COLORS, BOXSHADOW } from "../utils/ConstantTheme";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function ChooseTemplateCard({
  template,
  setAllTemplates,
  setSelectedTemplate,
}) {
  // const [isSelected, setIsSelected] = useState(false);
  const handleSelect = (id, templateId) => {
    setAllTemplates((prevData) =>
      prevData.map((template) => {
        if (template.templateId === templateId && template.id === id) {
          return {
            ...template,
            isSelected: true,
          };
        } else {
          return {
            ...template,
            isSelected: false,
          };
        }
      })
    );
    setSelectedTemplate({ id: template.id, url: template.url, color:template?.theme?.bgColor, templateId: template.templateId });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          outline: template.isSelected && BORDER.pinkBorder,
          borderRadius: "7px",
          boxShadow: template.isSelected && BOXSHADOW.pinkShadow,
          position: "relative",
          cursor: "pointer",
          "&:hover": {
            boxShadow: BOXSHADOW.pinkShadow,
            outline: BORDER.pinkBorder,
            borderRadius: "7px",
          },
        }}
      >
        {template.isSelected && (
          <Box sx={{ position: "absolute", right: 10, top: 10 }}>
            <CheckCircleIcon sx={{ color: COLORS.pinkColor }} />
          </Box>
        )}
        <Image
          src={template.templateImage}
          alt="..."
          width={800}
          height={800}
          onClick={() => handleSelect(template.id, template.templateId)}
          style={{
            width: "512px",
            minHeight: "502px",
            objectFit: "cover",
            borderRadius: "7px",
          }}
        />
      </Box>
      <Typography variant="body1" sx={{ mt: 2, display: "flex" }}>
        Template
        <span
          style={{
            color: COLORS.primary,
            fontWeight: 500,
            paddingLeft: "10px",
          }}
        >
          {template.templateName}
        </span>
      </Typography>
    </Box>
  );
}

export default ChooseTemplateCard;
