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

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  getUsersAsync,
} from "./features/user/userSlice";
import Students from "./pages/Students";

const App = () => {
  const session = useSelector((state) => state.user.session);  
  const count = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar></Navbar>

      <Container sx={{ mt: 5 }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<Users />} />
          <Route path="/student" element={<Students />} />

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
