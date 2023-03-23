import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const BookForm = () => {
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} component="form" autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Institucion</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Institucion"
                onChange={handleChange}
              >
                <MenuItem value={10}>Institucion 1</MenuItem>
                <MenuItem value={20}>Institucion 2</MenuItem>
                <MenuItem value={30}>Institucion 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-error-helper-text"
              label="Ano del libro"
              error={true}
              helperText={true && "Incorrect entry."}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              fullWidth
            />
          </Grid>
        </Grid>
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          loading={loading}
          sx={{ mt: 3, mb: 2, width: "25ch" }}
        >
          Enviar
        </LoadingButton>
      </Box>
    </>
  );
};

export default BookForm;
