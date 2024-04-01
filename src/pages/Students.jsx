import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

import StudentList from "../components/StudentList";
import { getStudentsAsync } from "../features/student/studentSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import StudentForm from "../components/student/StudentForm";

const Student = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);  

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Estidiantes
      </Typography>

      <Button
        onClick={() => dispatch(getStudentsAsync())}
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
      >
        Consultar
      </Button>

      <Button variant="contained" sx={{ mt: 2, mb: 2 }}>
        Agregar Nuevo
      </Button>

      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <StudentList />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <StudentForm />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="warning" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained"  sx={{ mt: 2, mb: 2 }}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Student;
