import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    {/* Inject MUI components styles first, tailwind later so I can use tailwind css inline styles */}
    <StyledEngineProvider injectFirst>
      <App></App>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
