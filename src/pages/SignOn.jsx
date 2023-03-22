import { Alert, Box, Button, Snackbar } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useFetch, useGet, usePost } from "../hooks/useFetch";

function SignOn() {
  const [open, setOpen] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar("Product added to cart", {
      variant: "warning",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const {
    data: quote,
    loading,
    error,
  } = useGet({ path: "https://api.quotable.io/random", start: true });

  

  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => setOpen(true)} variant="contained">
        Open
      </Button>
     
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="warning" variant="filled">
          This is a warning alert — check it out!
        </Alert>
      </Snackbar>

      <Button variant="contained" onClick={handleClick}>
        Show snackbar with notistack
      </Button>

      <Box>
        {loading && <p>{loading}</p>}
        {quote && <p>"{quote}"</p>}
        {error && <p>{error}</p>}
      </Box>
    </>
  );
}

export default SignOn;
