import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const WhatsappFloatingIcon = () => {
  return (
    <Box
      className="whatsAppIcon"
      style={{
        position: "fixed",
        left: "10px",
        zIndex: "999999999",
        top: "auto",
        bottom: "7px",
        width: "60px",
      }}
    >
      <a
        target="_blank"
        href="https://wa.me/message/GIGZCF55W576F1"
        aria-label="Let's Connect"
      >
        <Image
          src="/assets/whatsapp.webp"
          alt="whatsapp"
          width={600}
          height={600}
        />
      </a>
    </Box>
  );
};
