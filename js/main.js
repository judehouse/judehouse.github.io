const mobileTrigger = document.querySelector(".header-nav-trigger");
const body = document.body;
mobileTrigger.addEventListener("click", function () {
  body.classList.toggle("menu-active");
});
