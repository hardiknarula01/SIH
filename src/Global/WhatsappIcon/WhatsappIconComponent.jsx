import { IconButton } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsappIconComponent() {
  return (
    <a href="https://wa.me/your-whatsapp-number">
      <IconButton
        sx={{
          bgcolor: "#25d366",
          color: "#fff",
          width: "60px",
          height: "60px",
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: 2,
          borderRadius: "50%",
          "&:hover": {
            bgcolor: "#128C7E",
          },
        }}
        onClick={() => {
          window.open("https://wa.me/yourphonenumber", "_blank");
        }}
      >
        <WhatsAppIcon sx={{ fontSize: "2.5rem" }} />
      </IconButton>
    </a>
  );
}

export default WhatsappIconComponent;
