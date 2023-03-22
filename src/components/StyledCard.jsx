import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

const StyledCard = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img src="https://via.placeholder.com/200" alt="random" />
      <Box sx={{ flexGrow: 1 }}>
        <h2>Product Name</h2>
        <p>Product Description</p>
        <Button variant="contained">Add cart</Button>
      </Box>
      <Box component="p" sx={{ mr: 2 }}>
        $19.99
      </Box>
    </Paper>
  );
};

export default StyledCard;
