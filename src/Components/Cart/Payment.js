import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useSelector } from "react-redux";

const Payment = () => {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();
  const { items, cartTotal, emptyCart } = useCart();
  const user = useSelector(state => state.user.value);

  const handleCheckout = async () => {
  if (!method) {
    alert("Please select payment method");
    return;
  }

  var currentDate = new Date().toISOString().slice(0, 10);

  try {
    const response = await axios.post(API_BASE_URL + "placeOrder", {
      username: user.username,
      email: user.email,
      address: user.address,
      mobile: user.mobile,
      cakeName: items[0].cakeName,
      image: items[0].image,
      quantity: items[0].quantity,
      amount: cartTotal,
      weight: items[0].weight,
      flavour: items[0].flavour,
      basecolour: items[0].basecolour,
      bordercolour: items[0].bordercolour,
      borderdesign: items[0].borderdesign,
      caketext: items[0].caketext,
      type: items[0].type,
      currentDate: currentDate,
      orderStatus: "pending",
      paymentMethod: method
    });

    emptyCart();

    navigate("/success", {
      state: { orderId: response.data.orderId }
    });

  } catch (err) {
    alert("Order failed");
  }
};

  return (
  <Box sx={{ background: "#F1BDB0", minHeight: "100vh", pt: 8 }}>
    <Container>
      <Typography variant="h4" sx={{ mb: 4, color: "black" }}>
        Choose Payment Method
      </Typography>

      <RadioGroup
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <FormControlLabel
          value="cod"
          control={<Radio />}
          label="Cash On Delivery"
          sx={{ color: "black" }}
        />
        <FormControlLabel
          value="upi"
          control={<Radio />}
          label="UPI Payment"
          sx={{ color: "black" }}
        />
        <FormControlLabel
          value="card"
          control={<Radio />}
          label="Debit/Credit Card"
          sx={{ color: "black" }}
        />
      </RadioGroup>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          mt: 4
        }}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </Container>
  </Box>
);
};

export default Payment;
