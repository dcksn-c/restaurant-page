const renderMenu = () => {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    content.appendChild(container);
    container.appendChild(menu);

    menu.appendChild(createMenuItem("Panipuri"));
    menu.appendChild(createMenuItem("Come and Get It"));
    menu.appendChild(createMenuItem("Sakura Mochi"));
    menu.appendChild(createMenuItem("Fruits of the Festival"));
}

const createMenuItem = (name) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemImage = document.createElement("img");
    itemImage.src = `./images/${adjustImageName(name)}.webp`

    const itemName = document.createElement("p");
    itemName.textContent = name;

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemName);

    return menuItem;
}

const adjustImageName = (name) => {
    name = name.replace(/\s+/g, "-").toLowerCase();
    return name;
}

export default renderMenu;