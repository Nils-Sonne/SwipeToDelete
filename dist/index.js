"use strict";

var jokeItem = document.querySelector(".jokeItem");
var touchCordinateStart;
var touchCordinateMove;
var touchCordinateEnd;
var deleteButtonWidth = window.screen.width * 40 / 100;
document.querySelector(".deleteItem").addEventListener("click", function () {
  document.querySelector("section").classList.add("animate__fadeOutLeft");
  setTimeout(function () {
    document.querySelector("section").classList.add("collapsed");
  }, 800);
  setTimeout(function () {
    document.querySelector("section").remove();
  }, 900);
});
jokeItem.addEventListener("touchstart", function (e) {
  touchCordinateStart = e.touches[0].clientX;
});
jokeItem.addEventListener("touchmove", function (e) {
  touchCordinateMove = Math.floor(e.touches[0].clientX);

  if (touchCordinateMove < touchCordinateStart && touchCordinateMove > touchCordinateStart - deleteButtonWidth) {
    jokeItem.style.transform = "translateX(".concat(touchCordinateMove - touchCordinateStart, "px)");
  }
});
jokeItem.addEventListener("touchend", function (e) {
  touchCordinateEnd = Math.floor(e.changedTouches[0].clientX);

  if (touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
    jokeItem.style.transform = "translateX(-".concat(deleteButtonWidth, "px)");
  } else {
    jokeItem.style.transform = "translateX(".concat(e.target.offsetLeft, ")");
  }
});