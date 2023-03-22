import { Typography } from "@mui/material";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

export default function Users() {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Usuarios
      </Typography>
      <UserForm />
      <UserList/>
    </>
  );
}
