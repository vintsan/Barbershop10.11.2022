var maplink = document.querySelector(".contacts-button-map, .footer-contacts" );
var mappopup = document.querySelector(".modal-map");
var mapclose = mappopup.querySelector(".modal-close");

maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mappopup.classList.contains("modal-show")) {
      mappopup.classList.remove("modal-show");
    }
  }
});

var footerlink = document.querySelector(".footer-contacts");
footerlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
  });