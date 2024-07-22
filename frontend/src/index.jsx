import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./tailwind.css";

let rootContainer = document.getElementById("root");

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
