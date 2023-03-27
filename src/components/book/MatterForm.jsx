import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useAddBookMattersMutation } from "../../features/book/apiBookSlice";
import { LoadingButton } from "@mui/lab";

const MatterForm = ({ openDialog, handleClose }) => {
  const [matters, setMatters] = useState([]);
  const [hours, setHours] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [addBookMatters, response] = useAddBookMattersMutation();

  const selectedBook = useSelector((state) => state.book.selectedBook);

  const handleAdd = () => {
    const matter = {
      hours,
      name,
      book_id: selectedBook.id,
    };
    setMatters(matters.concat([matter]));
  };

  const handleChange = (event) => {
    if (event.target.name === "name") setName(event.target.value);
    if (event.target.name === "hours") setHours(event.target.value);
  };

  const save = () => {
    console.log(matters);
    setLoading(true)
    const payload = {
      matters,
    };
    addBookMatters(payload)
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {setLoading(false)});
  };

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
              <Grid item xs={10}>
                <TextField
                  size="small"
                  id="outlined-error-helper-text"
                  label="Matter"
                  error={false}
                  helperText={false && "Incorrect entry."}
                  fullWidth
                  name="name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  size="small"
                  id="outlined-error-helper-text"
                  label="Hours"
                  error={false}
                  helperText={false && "Incorrect entry."}
                  fullWidth
                  name="hours"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <List>
              {matters.map((matter, index) => (
                <div key={index}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={matter.name} />
                    <Typography sx={{ mr: 1 }}>{matter.hours}</Typography>
                  </ListItem>
                  <Divider light />
                </div>
              ))}
            </List>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>Add More</Button>
          <LoadingButton
            type="submit"
            loading={loading}
            onClick={save}
          >
            Enviar
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MatterForm;
