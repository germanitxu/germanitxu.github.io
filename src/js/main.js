import { React, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "../components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/montserrat";
import "@fontsource/roboto";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../i18n";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
