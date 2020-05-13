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
