const hamburger = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-open");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("opened");
});