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
const routeToUsMapModalCloseBtn = document.querySelector(".modal.map button.modal-close");
const contactFormModalCloseBtn = document.querySelector(".modal.contact-form button.modal-close");
contactUsBtn.addEventListener("click", () => contactFormModal.classList.toggle("hidden"))
routeToUsBtn.addEventListener("click", () => routeToUsMapModal.classList.toggle("hidden"))
routeToUsMapModalCloseBtn.addEventListener("click", () => routeToUsMapModal.classList.toggle("hidden"));
contactFormModalCloseBtn.addEventListener("click", () => contactFormModal.classList.toggle("hidden"));