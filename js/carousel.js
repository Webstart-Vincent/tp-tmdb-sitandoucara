//Other
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");

//const carouselLength = carouselItems.length;

let index = 0;
const maxIndex = 2;

const moveCarousel = () => {
  carousel.style.transform = `translateX(-${index * 100}%)`;
};

const setControls = () => {
  if (index == 0 || index < 0) {
    nextBtn.style.opacity = "0.4";
  } else {
    nextBtn.style.opacity = "1";
  }
  if (index === movies.length - 1) {
    previousBtn.style.opacity = "0.4";
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
  if (index < maxIndex) index++;
  console.log(index);
  moveCarousel();
  setControls();
});
