import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

import EstilosGlobais from "./styles/styled-global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EstilosGlobais />
    <App />
  </React.StrictMode>
);
