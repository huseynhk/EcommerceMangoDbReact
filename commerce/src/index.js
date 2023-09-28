import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuhContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuhContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuhContextProvider>
);
