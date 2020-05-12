var link = document.querySelectorAll(".basket-js");
var popup = document.querySelector(".modal-basket");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-basket__show");
    overlay.classList.add("overlay__show")
  })
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-basket__show")) {
      popup.classList.remove("modal-basket__show");
      overlay.classList.remove("overlay__show");
    }
  }
});

overlay.addEventListener("click", function () {
  popup.classList.remove("modal-basket__show");
  overlay.classList.remove("overlay__show");
});

/*

var link = document.querySelector(".product__btn, .");
var popup = document.querySelector(".modal-basket");
var overlay = document.querySelector(".overlay");
var menuButton = document.querySelector(".main-nav__toggle");//кнопка
var menuList = document.querySelectorAll(".main-nav__list--hide");//повторяющийся класс

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay__show");
  popup.classList.add("modal-basket__show");
});

overlay.addEventListener("click", function (evt) {
  overlay.classList.remove("overlay__show");
  popup.classList.remove("modal-basket__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-basket__show")) {
      popup.classList.remove("modal-basket__show");
      overlay.classList.remove("overlay__show");
    }
  }
});

menuButton.addEventListener("click", function (evt) {
  menuButton.classList.toggle("main-nav__toggle--close");
  for (var i = 0; i < menuList.length; i++) {
    menuList[i].classList.toggle("main-nav__list--show");
  };
});
*/
