import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F1BDB0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant="h3" sx={{ color: "white" }}>
        🎉 Thank You For Your Order!
      </Typography>

      <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
        Your cake will be delivered soon 🍰
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "black",color: "white" }}
          onClick={() => navigate("/")}
        >
          Back To Home
        </Button>

        {orderId && (
          <Button
            variant="contained"
            sx={{ backgroundColor: "green" }}
            onClick={() => navigate(`/tracking/${orderId}`)}
          >
            Track Order
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Success;