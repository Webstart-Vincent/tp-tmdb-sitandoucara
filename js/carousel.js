//Slider carousel
import { getMovies } from "./tmdb.js";
const movies = await getMovies();

console.log("carousel.js > movies >", movies);
/** @type {HTMLElement}*/
const sliderContainers = document.querySelectorAll(".slider");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

/**
 * Description
 * @param {{title:string, poster_path: string}} movie
 * @returns {string}
 */

//Other
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
//const carouselItems = document.querySelectorAll(".carousel > article");

//const carouselLength = carouselItems.length;

/*const getSlide = (movie) => ` <article>
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
      alt = Affiche du film ${movie.title}/>
<h2>${movie.title}</h2>
</article>`;*/

//apps.120.design
const getSlide = (movie) => ` <div class= "api_img">
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
      sizes=(min-width: 750px)  alt = Affiche du film ${movie.title}/>
</div>`;

movies.forEach((movie) => {
  carousel.innerHTML += getSlide(movie);
});
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

let index = 0;

const moveCarousel = () => {
  carousel.style.transform = `translate(-${100 * index}vw)`;
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
  if (index < movies.length - 1) index++;
  console.log(index);
  moveCarousel();
  setControls();
});
