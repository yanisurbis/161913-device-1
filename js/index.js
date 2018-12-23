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


const updateClasses = (list, slideIndexToDisplay) => {
  list.forEach((slide, slideIndex) => {
    if (slideIndex === slideIndexToDisplay) {
      slide.classList.add("current");
    } else {
      slide.classList.remove("current");
    }
  })
}

const addToggleLogic = (controllers, slides) => {
  controllers.forEach((button, index) => {
    button.addEventListener("click", () => {
      updateClasses(controllers, index);
      updateClasses(slides, index);
    });
  })
}

const sliderControllers = document.querySelectorAll(".slider-controllers button");
const slides = document.querySelectorAll(".featured-products .product");

addToggleLogic(sliderControllers, slides);

const servicesControllers = document.querySelectorAll(".services button");
const servicesSlides = document.querySelectorAll(".services .service");

addToggleLogic(servicesControllers, servicesSlides);
