import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

const MatterForm = ({ openDialog, handleClose }) => {
  const [matters, setMatters] = useState([]);
  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Add Matters</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Agregar las materias y sus respectivas intensidades horarias al
            libro seleccionado.
          </DialogContentText>
          <Box
            sx={{ flexGrow: 1, mt: 2 }}
            component="form"
            autoComplete="off"
            onSubmit={() => {
              console.log("");
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Matter"
                  error={false}
                  helperText={false && "Incorrect entry."}
                  fullWidth
                  name="matter"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-error-helper-text"
                  label="IH"
                  error={false}
                  helperText={false && "Incorrect entry."}
                  fullWidth
                  name="ih"
                  type="number"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add More</Button>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MatterForm;
