import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const elem = document.querySelector("#root");

const root = ReactDOM.createRoot(elem);
root.render(<App />);
