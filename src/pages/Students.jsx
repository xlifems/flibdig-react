import { Button, Typography } from "@mui/material";
import React from "react";
import StudentList from "../components/StudentList";
import { getStudentsAsync } from "../features/student/studentSlice";
import { useSelector, useDispatch } from "react-redux";

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  console.log("🚀 ~ file: Students.jsx:10 ~ Students ~ students:", students)
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

      <StudentList />
    </>
  );
};

export default Students;
