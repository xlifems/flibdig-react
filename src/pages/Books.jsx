import { Typography } from "@mui/material";
import React from "react";
import BookForm from "../components/BookForm";

const Books = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Libros
      </Typography>
      <BookForm />
    </>
  );
};

export default Books;
