import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";  // pastikan App.jsx sudah berisi komponen App yang benar

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
