import { createParagraph } from "./home";

const renderContact = () => {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");

    container.appendChild(contact);
    content.appendChild(container);

    const restaurantMap = document.createElement("img");
    restaurantMap.src = "./images/kiminami-restaurant-map.webp";

    const restaurantImage = document.createElement("img");
    restaurantImage.src = "./images/kiminami-restaurant.webp";

    contact.appendChild(createParagraph("Address:"));
    contact.appendChild(createParagraph("Hanamizaka, Inazuma City, Inazuma"));
    imageContainer.appendChild(restaurantMap);
    imageContainer.appendChild(restaurantImage);
    contact.appendChild(imageContainer);
}

export default renderContact;