import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

//import { createTheme } from "@material-ui/styles";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#d3002d",
      dark: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Main = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  return (
    <div className="Root">
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <svg
              width="148"
              height="26"
              viewBox="0 0 148 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M70.46 5.45V1.641H54.516v22.864h15.946v-3.812H58.337v-5.71h11.54v-3.81h-11.54V5.45h12.124M82.291 24.502V1.642h3.825v19.05h11.032v3.81H82.29M100.262 24.502V1.642h3.822v19.05h11.031v3.81h-14.853M74.475 24.502h3.818V1.638h-3.818zM6.773 7.446a8.09 8.09 0 0 0-2.38 5.73c0 2.242.91 4.25 2.38 5.723a8.085 8.085 0 0 0 5.745 2.379 8.074 8.074 0 0 0 5.746-2.38 8.036 8.036 0 0 0 2.377-5.723 8.074 8.074 0 0 0-2.377-5.73 8.114 8.114 0 0 0-5.746-2.362c-2.25 0-4.265.9-5.745 2.363M.57 13.176c0-6.579 5.347-11.902 11.947-11.909 6.6.007 11.948 5.33 11.948 11.909 0 6.577-5.348 11.908-11.948 11.908-6.6 0-11.947-5.33-11.947-11.909M36.284 11.17V5.45h7.705a2.868 2.868 0 0 1 2.866 2.86 2.875 2.875 0 0 1-2.866 2.86h-7.705zm9.62 3.527c2.761-.83 4.77-3.367 4.776-6.387a6.686 6.686 0 0 0-6.69-6.669H32.458v22.86h3.825v-9.519h5.331l5.762 9.52h4.461l-5.935-9.805zM29.752 4.075a2.81 2.81 0 0 1-2.814 2.805 2.808 2.808 0 0 1-2.814-2.804 2.81 2.81 0 0 1 2.814-2.808 2.813 2.813 0 0 1 2.814 2.808M132.163 1.641h-4.647l-5.886 8.49-5.885-8.49h-4.647l8.615 12.438v10.426h3.825V14.089l8.625-12.448M141.675 11.612c-2.791 0-5.048-2.255-5.048-5.027a5.043 5.043 0 0 1 5.048-5.041 5.049 5.049 0 0 1 5.045 5.04c0 2.773-2.267 5.028-5.045 5.028m0-11.017c-3.313 0-6.01 2.675-6.01 5.99 0 3.298 2.697 5.983 6.01 5.983 3.316 0 6.003-2.685 6.003-5.983a5.992 5.992 0 0 0-6.003-5.99"></path>
                <path d="M140.224 4.498h2.364c.424 0 .76.345.763.77a.76.76 0 0 1-.763.754h-2.364V4.498zm4.148.77c0-.994-.8-1.79-1.784-1.79H139.2v6.11h1.024V7.049h1.709l1.229 2.538h1.138l-1.262-2.6a1.77 1.77 0 0 0 1.334-1.719z"></path>
              </g>
            </svg>
          </Toolbar>
        </AppBar>
        <div className="MainContentArea">{props.children}</div>
      </ThemeProvider>
    </div>
  );
};

export default Main;
