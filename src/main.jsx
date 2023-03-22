import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { BrowserRouter } from "react-router-dom";

import { SnackbarProvider } from "notistack";

import { Provider } from "react-redux";
import store from "./app/store";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#006FC9",
    },
    secondary: {
      main: "#f9a825",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
            <CssBaseline />
            <App></App>
          </SnackbarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
