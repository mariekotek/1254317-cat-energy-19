var button = document.querySelector(".page-header__toggle");
var popup = document.querySelector(".main-nav");
var form = document.querySelector(".program-form");
var email = document.querySelector(".form-contact__email");
var tel = document.querySelector(".form-contact__tel");

popup.classList.add("main-nav-hide");
button.classList.add("page-header__toggle--burger");

button.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.toggle("main-nav-hide");
  if (button.classList.contains("page-header__toggle--burger")) {
    button.classList.remove("page-header__toggle--burger");
    button.classList.add("page-header__toggle--close");
  }
  else {
        button.classList.remove("page-header__toggle--close");
        button.classList.add("page-header__toggle--burger");
      }
});

form.addEventListener("submit", function (evt) {
    if (!email.value || !tel.value) {
      evt.preventDefault();
      form.offsetWidth = form.offsetWidth;
      console.log("Заполните контакты");
    }
  });
