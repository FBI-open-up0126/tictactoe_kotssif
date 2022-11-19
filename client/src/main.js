import "./app.css";
import App from "./components/App.svelte";

function proxy() {
    if (import.meta.env.DEV) {
        return "http://localhost:8080";
    }

    return "";
}

export const PROXY = proxy();

const app = new App({
    target: document.getElementById("app"),
});

export default app;
