import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { ItemCard } from "./itemCard";
import { useSelector } from "react-redux";
import Contact from "../Footer/Footer";
import Navbar from "../Navbar/Home";
import Success from "./success";
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
  const { isEmpty, totalUniqueItems, cartTotal, emptyCart, items } = useCart();
  const [successstate, setsuccessstate] = useState(false);
  const user = useSelector(state => state.user.value);
  const navigate = useNavigate(); // ✅ ADDED

  return (
    <Box sx={{ background: "#F1BDB0" }}>
      <Navbar />
      <br />

      {successstate ? (
        <Success />
      ) : isEmpty ? (
        <Box sx={{ textAlign: "center", height: "20vh" }}>
          <Typography variant="h4" sx={{ color: "black" }}>
            YOUR CART IS EMPTY
          </Typography>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", pb: 3 }}>
          <Typography variant="h4" sx={{ color: "black" }}>
            YOUR CART
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        {items.map((e, index) => (
          <ItemCard
            key={index}
            id={e.id}
            quantity={e.quantity}
            cakeName={e.cakeName}
            price={e.price}
            description={e.description}
            image={e.image}
            weight={e.weight}
            flavour={e.flavour}
            basecolour={e.basecolour}
            bordercolour={e.bordercolour}
            borderdesign={e.borderdesign}
            caketext={e.caketext}
            type={e.type}
          />
        ))}
      </Box>

      {!isEmpty && (
        <Stack spacing={3} sx={{ textAlign: "right", p: 3 }}>
          <Typography variant="h5" sx={{ color: "black" }}>
            Total Items : {totalUniqueItems}
          </Typography>

          <Typography variant="h5" sx={{ color: "black" }}>
            Cart Total : ₹ {cartTotal}
          </Typography>

          <Box sx={{ display: "flex", gap: "10px", justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={() => emptyCart()}
              sx={{
                background: "black",
                color: "white",
                ":hover": { background: "green" }
              }}
            >
              Clear Cart
            </Button>

            {/* ✅ UPDATED CHECKOUT BUTTON */}
            <Button
              variant="contained"
              onClick={() => navigate("/payment")}
              sx={{
                background: "black",
                color: "white",
                ":hover": { background: "green" }
              }}
            >
              Proceed To Payment
            </Button>
          </Box>
        </Stack>
      )}

      <Contact />
    </Box>
  );
};

export default Cartpage;
