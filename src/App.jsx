import { Button, Container, Divider, Drawer } from "@mui/material";
import React, { useState } from "react";

import Navbar from "./components/nav/Navbar";

import Dashboard from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignIn";
import Protected from "./components/Protected";
import SignOn from "./pages/SignOn";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import Books from "./pages/Books";

import { useSelector } from "react-redux";
import Students from "./pages/Students";

const App = () => {
  const session = useSelector((state) => state.user.session);
  return (
    <>
      <Navbar></Navbar>

      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<Users />} />
          <Route path="/student" element={<Students />} />
          <Route path="/book" element={<Books />} />

          <Route
            path="/sign-on"
            element={
              <Protected isSignedIn={session}>
                <SignOn />
              </Protected>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
