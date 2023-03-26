import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useGetSchoolsQuery } from "../../features/shool/apiSchoolSlice";

const BookForm = () => {
  const [type, setType] = useState("qualitative");
  const [school, setSchool] = useState("");

  const [loading, setLoading] = useState(false);

  const bookTypes = [
    { value: "qualitative", label: "Cualitativo" },
    { value: "quantitative", label: "Cuantitativo" },
    { value: "both", label: "Ambos" },
  ];

  const handleChange = (event) => {
    if (event.target.name === "school") {
      setSchool(event.target.value);
    } else {
      setType(event.target.value);
    }
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
              <InputLabel id="school-label">Institucion</InputLabel>
              <Select
                labelId="school-label"
                id="school"
                name="school"
                value={school}
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
              label="Name"
              error={true}
              helperText={true && "Incorrect entry."}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="Year"
              helperText={false ? "Incorrect entry." : ""}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="book-type-label">Type</InputLabel>
              <Select
                labelId="book-type-label"
                id="book-type"
                value={type}
                label="Type"
                name="book-type"
                onChange={handleChange}
              >
                {bookTypes.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
