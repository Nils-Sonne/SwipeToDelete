"use strict";

var jokeItem = document.querySelector(".jokeItem");
var touchCordinateStart;
var touchCordinateMove;
jokeItem.addEventListener("touchstart", function (e) {
  touchCordinateStart = e.touches[0].clientX;
});
jokeItem.addEventListener("touchmove", function (e) {
  touchCordinateMove = Math.floor(e.touches[0].clientX);

  if (touchCordinateMove < touchCordinateStart) {
    jokeItem.style.transform = "translateX(".concat(touchCordinateMove - touchCordinateStart, "px)");
  }
});