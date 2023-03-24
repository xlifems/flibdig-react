import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WcIcon from "@mui/icons-material/Wc";
import PersonIcon from "@mui/icons-material/Person";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SchoolIcon from '@mui/icons-material/School';

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function NavListDrawerResponsive({ onClick, navLinks }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ width: 250 }}>
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
        <List
          sx={ {mt: 2} }
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={ {mb: 3} }>
              <Typography variant="h5">
               FlibDig
              </Typography>
            </ListSubheader>
          }
        >
          <ListItem disablePadding onClick={onClick}>
            <ListItemButton component={NavLink} to="/dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={onClick}>
            <ListItemButton component={NavLink} to="/user">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Usuario" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={onClick}>
            <ListItemButton component={NavLink} to="/student">
              <ListItemIcon>
                <WcIcon />
              </ListItemIcon>
              <ListItemText primary="Estudiante" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={onClick}>
            <ListItemButton component={NavLink} to="/school">
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Institucion" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={onClick}>
            <ListItemButton component={NavLink} to="/certificate">
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText primary="Certificado" />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Libro" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding onClick={onClick}>
              <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/book">
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Agregar" />
              </ListItemButton>
            </List>

            <List component="div" disablePadding onClick={onClick}>
              <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/book">
                <ListItemIcon>
                  <PrintIcon />
                </ListItemIcon>
                <ListItemText primary="Imprimir" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
