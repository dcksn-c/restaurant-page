import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

const createHeader = () => {
    const content = document.getElementById("content");

    const header = document.createElement("header");
    header.classList.add("header");

    content.appendChild(header);
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Kiminami Restaurant";
  
    header.appendChild(restaurantName);
    header.appendChild(createNav());
  }

const createNav = () => {
    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("home-button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", () => {
        clearContent();
        renderHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-button");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", () => {
        clearContent();
        renderMenu();
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("contact-button");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", () => {
        clearContent();
        renderContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}
function clearContent() {
    const container = document.getElementById("content");
    const content = document.querySelector(".container");
    if (content) {
        container.removeChild(content)
    }
}
  
const loadPage = () => {
    createHeader();
    renderHome();
}

export default loadPage;