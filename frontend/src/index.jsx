import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

let rootContainer = document.getElementById("root");

if (rootContainer) {
  ReactDOM.createRoot(rootContainer).render(<App />);
}
