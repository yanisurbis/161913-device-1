const openContactUsModal = () => {
    console.log("opening modal");
};

const closeContactUsModal = () => {
    console.log("closing modal");
};

const openMapModal = () => {
    console.log("1");
};

const closeMapModal = () => {
    console.log("1");
};

const contactUsBtn = document.getElementById("contact-us");
const routeToUsBtn = document.querySelector("button.map");
const contactFormModal = document.querySelector(".modal.contact-form");
const routeToUsMapModal = document.querySelector(".modal.map");
contactUsBtn.addEventListener("click", () => contactFormModal.classList.toggle("hidden"))
routeToUsBtn.addEventListener("click", () => routeToUsMapModal.classList.toggle("hidden"))