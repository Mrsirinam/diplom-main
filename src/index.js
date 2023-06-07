import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);

reportWebVitals();
