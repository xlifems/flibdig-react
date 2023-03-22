import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";

import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import NavListDrawerResponsive from "./NavListDrawerResponsive";

import { NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/dashboard", icon: <InboxIcon /> },
  { title: "Contact", path: "/contact", icon: <InboxIcon /> },
  { title: "Register", path: "/sign-on", icon: <InboxIcon /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FlibDig
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((link) => (
              <Button key={link.title} sx={{ color: "#fff" }} to={link.path} component={NavLink} >
                {link.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {/*     <NavListDrawer /> */}
        <NavListDrawerResponsive
          onClick={() => setOpen(false)}
          navLinks={navLinks}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
