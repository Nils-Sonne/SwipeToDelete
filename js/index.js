
let jokeItem = document.querySelector(".jokeItem");
let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let deleteButtonWidth = (window.screen.width * 40) / 100;

document.querySelector(".deleteItem").addEventListener("click", () => {
  document.querySelector("section").classList.add("animate__fadeOutLeft");
  setTimeout(() => {
    document.querySelector("section").classList.add("collapsed");
  }, 800);
  setTimeout(() => {
    document.querySelector("section").remove();
  }, 900);
});

jokeItem.addEventListener("touchstart", (e) => {
  touchCordinateStart = e.touches[0].clientX;
});
jokeItem.addEventListener("touchmove", (e) => {
  touchCordinateMove = Math.floor(e.touches[0].clientX);
  if (
    touchCordinateMove < touchCordinateStart &&
    touchCordinateMove > touchCordinateStart - deleteButtonWidth
  ) {
    jokeItem.style.transform = `translateX(${
      touchCordinateMove - touchCordinateStart
    }px)`;
  }
});
jokeItem.addEventListener("touchend", (e) => {
  touchCordinateEnd = Math.floor(e.changedTouches[0].clientX);
  if (touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
    jokeItem.style.transform = `translateX(-${deleteButtonWidth}px)`;
  } else {
    jokeItem.style.transform = `translateX(${e.target.offsetLeft})`;
  }
});