import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const elem = document.querySelector("#root")!;

const root = ReactDOM.createRoot(elem);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
