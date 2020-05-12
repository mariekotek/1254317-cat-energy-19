var button = document.querySelector(".page-header__toggle");
var popup = document.querySelector(".main-nav");
var close = document.querySelector(".close");
var menu = document.querySelector(".menu");
popup.classList.add("main-nav-hide");

button.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.toggle("main-nav-hide");
  /*close.classList.toggle("page-header__toggle-hide");
  menu.classList.toggle("page-header__toggle-hide");*/
});
