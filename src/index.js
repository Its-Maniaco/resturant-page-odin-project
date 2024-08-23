import { About } from "./about";
import Home from "./home";
import Menu from "./menu";
import "./styles.css";
 
document.getElementById("home").addEventListener("click", () => {
    clearContents();
    Home();
})

function showAbout() {
    clearContents();

    About();
}

document.getElementById("menu").addEventListener("click", () => {
    clearContents();
    Menu();
})

// clear content of 'content' element
function clearContents() {
    const content = document.getElementById("content");
    content.innerHTML = '';
}