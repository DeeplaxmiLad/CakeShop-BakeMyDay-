import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";

const Footer = () => {
  
const openMap = () => {
  const address = "Your Cake Shop Address Bangalore"; 
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  window.open(url, "_blank");
};
  return (
    <div
      style={{
        paddingBlock: "100px",
        backgroundColor: "#F16A6A",
        marginTop: "auto"
      }}
      id="section-5"
    >
      <button
  onClick={openMap}
  style={{
    padding: "10px 20px",
    backgroundColor: "#ff4081",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }}
>
  📍 Find Us on Google Maps
</button>
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <FacebookIcon sx={{ color: "white", fontSize: "40px" }} />
        <WhatsAppIcon sx={{ color: "white", fontSize: "40px" }} />
        <TwitterIcon sx={{ color: "white", fontSize: "40px" }} />
        <ShareIcon sx={{ color: "white", fontSize: "40px" }} />
      </Box>
      <Typography
        variant="h6"
        sx={{ textTransform: "capitalize", textAlign: "center", m: 3 }}
      >
        @2023 MAQ | All Rights Reserved
      </Typography>
    </div>
  );
};

export default Footer;
