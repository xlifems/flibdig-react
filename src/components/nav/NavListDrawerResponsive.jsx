import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WcIcon from '@mui/icons-material/Wc';
import PersonIcon from '@mui/icons-material/Person';

import { NavLink } from "react-router-dom";

export default function NavListDrawerResponsive({ onClick, navLinks }) {
  return (
    <Box sx={{ width: 250 }} onClick={onClick}>
      <nav aria-label="main mailbox folders">
        <List sx={{ display: { xs: "block", sm: "none" } }}>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton to={item.path} component={NavLink}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/user">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/student">
              <ListItemIcon>
                <WcIcon />
              </ListItemIcon>
              <ListItemText primary="Estudiantes" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
