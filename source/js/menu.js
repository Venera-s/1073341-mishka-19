var menuBtn = document.querySelector(".main-nav__btn");
var menuItem = document.querySelectorAll(".main-nav__list--category, .main-nav__list--user");


menuBtn.classList.toggle("main-nav__btn--open");
for (var i = 0; i < menuItem.length; i++) {
  menuItem[i].classList.toggle("main-nav__list--hidden")
};


menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBtn.classList.toggle("main-nav__btn--close");
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.toggle("main-nav__list--hidden")
  };
});
