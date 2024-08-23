import { About } from "./about";
import Home from "./home";
import { Menu } from "./menu";

import "./styles.css";

//TODO: add clear content to remove old content which will be replaced.
document.getElementById("home").addEventListener("click", () => {
    Home();
})

function showAbout() {
    About();
}

function showMenu() {
    Menu();
}