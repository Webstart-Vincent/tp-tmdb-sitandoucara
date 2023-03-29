const navWrapper = document.querySelector(".nav-wrapper");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navWrapper.classList.toggle("open");
});
