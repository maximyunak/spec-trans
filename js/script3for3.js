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

const tabsTitle = document.querySelectorAll(".tab__title");
const tabsContent = document.querySelectorAll(".tab__content");

tabsTitle.forEach(item => item.addEventListener('click', event => {
  const tabsTitleTarget = event.target.getAttribute('data-tab')

  tabsTitle.forEach(el => el.classList.remove('active-tab'))

  tabsContent.forEach(el => el.classList.add('hidden-tab-content'))

  item.classList.add('active-tab')

  document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content')

}))

document.querySelector('[data-tab="tab-3"]').classList.add('active-tab')
document.querySelector('#tab-3').classList.remove('hidden-tab-content')