import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
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
import FormDialog from "./FormDialog";
import { useAddSchoolMutation } from "../features/shool/apiSchoolSlice";

const theme = createTheme();

export default function SchoolForm({ open, handleClickOpen }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const [addSchool, response] = useAddSchoolMutation();

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleClose = () => {
    handleClickOpen(false);
  };

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    const data = new FormData(event.currentTarget);
    const payload = {
      email: data.get("email"),
      address: data.get("address"),
      name: data.get("name"),
      department: data.get("department"),
      city: data.get("city"),
      phone: data.get("phone"),
      shield: data.get("shield"),
      dane_code: data.get("dane_code"),
      nit: data.get("nit"),
      resolution: data.get("resolution"),
    };

    addSchool(payload)
      .unwrap()
      .then((response) => {
        console.log(response);
        //dispatch(signIn({ ...response.data }));
        //navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        handleClose();
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Container component="main" maxWidth="md">
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Nuevo Usuario
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="department"
                      label="Department"
                      name="department"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="city"
                      label="City"
                      name="city"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="phone"
                      label="Phone"
                      id="phone"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={error.error}
                      helperText={error.message}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="shield"
                      label="Shield"
                      id="shield"
                      autoComplete="new-shield"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="dane_code"
                      label="Dane"
                      id="dane_code"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="nit"
                      label="Nit"
                      id="nit"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="resolution"
                      label="Resolution"
                      id="resolution"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button
                      onClick={handleClose}
                      color="error"
                      fullWidth
                      variant="outlined"
                    >
                      Cancelar
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button type="submit" fullWidth variant="contained">
                      Guardar
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
