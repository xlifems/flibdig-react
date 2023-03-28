import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useGetSchoolsQuery } from "../../features/shool/apiSchoolSlice";
import { useAddBookMutation } from "../../features/book/apiBookSlice";

const BookForm = ({ openDialog, handleClose }) => {
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

  const [addBook, response] = useAddBookMutation();

  const handleSend = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const payload = {
      school_id: school,
      name: data.get("name"),
      year: data.get("year"),
      type,
    };

    addBook(payload)
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };

  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Add Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Agregar nuevo libro a la institucion
          </DialogContentText>
          <Box
            sx={{ flexGrow: 1, mt: 4 }}
            component="form"
            autoComplete="off"
            
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="school-label">School</InputLabel>
                  <Select
                    labelId="school-label"
                    id="school"
                    name="school"
                    value={school}
                    label="School"
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
              <Grid item xs={12}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Name"
                  error={false}
                  helperText={false && "Incorrect entry."}
                  fullWidth
                  name="name"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={false}
                  id="outlined-error-helper-text"
                  label="Year"
                  helperText={false ? "Incorrect entry." : ""}
                  type="number"
                  name="year"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="book-type-label">Type</InputLabel>
                  <Select
                    labelId="book-type-label"
                    id="type"
                    value={type}
                    label="Type"
                    name="type"
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button>Add More</Button>
          <LoadingButton
            type="submit"
            variant="text"
            loading={loading}
            sx={{ mr: 2 }}
            onClick={handleSend}
          >
            Enviar
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookForm;
