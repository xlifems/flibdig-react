import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Student from "../../models/Student";
import { useAddStudentMutation } from "../../features/student/apiStudentSlice";

export default function StudentForm() {
  const [student, setStudent] = useState(new Student());
  const [addStudent, response] = useAddStudentMutation();

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailValidation(student.email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    const data = new FormData(event.currentTarget);

    addStudent(student)
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                  value={student.first_name}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="family-name"
                value={student.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={error.error}
                helperText={error.message}
                value={student.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone"
                id="phone"
                value={student.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                value={student.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="date_of_birth"
                label="Date of Birth"
                id="date_of_birth"
                type="date"
                value={student.date_of_birth}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={student.gender}
                  label="Gender"
                  onChange={handleChange}
                  name="gender"
                >
                  <MenuItem value={"male"}>Female</MenuItem>
                  <MenuItem value={"female"}>Male</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Button
                fullWidth
                variant="outlined"
                color="warning"
                sx={{ mt: 3, mb: 2 }}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
