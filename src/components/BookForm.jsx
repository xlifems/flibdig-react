import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useGetSchoolsQuery } from "../features/shool/apiSchoolSlice";

const BookForm = () => {
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    console.log(
      "🚀 ~ file: BookForm.jsx:21 ~ handleChange ~ event.target.value:",
      event.target.value
    );
    setAge(event.target.value);
  };

  const {
    data: schools,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetSchoolsQuery({ refetchOnMountOrArgChange: true });

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
                {isGetSuccess &&
                  schools.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
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
