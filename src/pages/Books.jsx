import { Typography } from "@mui/material";
import React from "react";
import BookForm from "../components/book/BookForm";
import BookList from "../components/book/BookList";

const Books = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Libros
      </Typography>
      <BookForm />
      <BookList></BookList>
    </>
  );
};

export default Books;
