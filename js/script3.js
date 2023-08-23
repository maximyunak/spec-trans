const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu__body");
const body = document.body;
const act = document.querySelector(".active-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("_active");
  menu.classList.toggle("active");
  body.classList.toggle("_lock");
  act.classList.toggle("active-menu");
});