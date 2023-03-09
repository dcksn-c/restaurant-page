const renderHome = () => {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");

    const home = document.createElement("div");
    home.classList.add("home");

    const owner = document.createElement("img");
    owner.src = "./images/anna.jpeg";
    owner.classList.add("owner-img")

    content.appendChild(container);
    container.appendChild(home);
    
    home.appendChild(owner);
    home.appendChild(createParagraph("Bringing you delicacies from all corners of Teyvat,"));
    home.appendChild(createParagraph("even during times of Sakoku Decree!"));
}

const createParagraph = (text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

export default renderHome;
export {createParagraph};