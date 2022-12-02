import "../index.css";
import JSIcon from "../assets/js.png";

const jsImageHTML = document.createElement("img");
jsImageHTML.src = JSIcon;

const h1 = document.createElement("h1");
h1.className = "h1-text";
h1.textContent = "I love JavaScript";

document.body.append(h1, jsImageHTML);

console.log("Hello World!!!");
