var popup = document.getElementById("popup");
var closeBtn = document.querySelector(".close-btn");

function openPopup() {
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

closeBtn.addEventListener("click", closePopup);

function adjustPopupPosition() {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var popupHeight = popup.offsetHeight;
  var popupWidth = popup.offsetWidth;

  popup.style.bottom = "10px";
  popup.style.right = "10px";
}

window.addEventListener("resize", adjustPopupPosition);
