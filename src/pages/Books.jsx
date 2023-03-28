import { Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import BookForm from "../components/book/BookForm";
import BookList from "../components/book/BookList";

const Books = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = (data) => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Libros
      </Typography>
      <Button variant="contained" onClick={handleClickOpen}>
        Add new book
      </Button>
      <Divider sx={{ m: 1 }} />
      <BookForm handleClose={handleClose} openDialog={openDialog} />
      <BookList></BookList>
    </>
  );
};

export default Books;
