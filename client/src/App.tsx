import "./App.css";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import BoardEditor from "./pages/BoardEditor";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/board-editor" element={<BoardEditor />} />
        </Routes>
    );
}

export default App;
