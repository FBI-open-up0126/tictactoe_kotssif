import BoardEditor from "./pages/BoardEditor.svelte";
import MainPage from "./pages/MainPage.svelte";

export const routes = [
    {
        name: "/",
        component: MainPage,
    },
    {
        name: "board-editor",
        component: BoardEditor,
    },
];
