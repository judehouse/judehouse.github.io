const mobileTrigger = document.querySelector(".header-nav-trigger");
const mobileTrigger2 = document.querySelector(".mobile-menu-exit");
const body = document.body;
mobileTrigger.addEventListener("click", function () {
  body.classList.toggle("menu-active");
});

mobileTrigger2.addEventListener("click", function () {
  body.classList.toggle("menu-active");
});
