import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

import {
  decrement,
  increment,
  getUsersAsync,
} from "../features/user/userSlice";

export default function Users() {
  const count = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Mouted')
  }, [])
  
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Usuarios
      </Typography>

      <Box sx={{mr: 2 , mb: 2}}>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <span>{count}</span>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </Box>
      <UserForm />
      <UserList />
    </>
  );
}
