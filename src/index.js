import { About } from "./about";
import Home from "./home";
import { Menu } from "./menu";

document.getElementById("home").addEventListener("click", () => {
    Home();
})

function showAbout() {
    About();
}

function showMenu() {
    Menu();
}