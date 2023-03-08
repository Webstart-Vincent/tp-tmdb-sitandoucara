//Slider carousel
import { getPopularMovies } from "./tmdb.js";
console.log(getPopularMovies);
/** @type {HTMLElement}s*/
const sliderContainers = document.querySelectorAll(".slider");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

sliderContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//Other
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const carouselItems = document.querySelectorAll(".carousel > article");

const carouselLength = carouselItems.length;

let index = 0;

const moveCarousel = () => {
  carousel.style.transform = `translate(-${100 * index}vw)`;
};

const setControls = () => {
  if (index == 0 || index < 0) {
    nextBtn.style.opacity = "0.5";
  } else {
    nextBtn.style.opacity = "1";
  }
  if (index === carouselLength - 1) {
    previousBtn.style.opacity = "0.5";
  } else {
    previousBtn.style.opacity = "1";
  }
};
nextBtn.addEventListener("click", () => {
  if (index > 0) index--;
  console.log(index);
  moveCarousel();
  setControls();
});

previousBtn.addEventListener("click", () => {
  if (index < carouselLength - 1) index++;

  console.log(index);
  moveCarousel();
  setControls();
});
