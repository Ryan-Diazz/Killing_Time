const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

//serie slider
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const serieSlides = document.querySelector(".serie-slides");
const shows = document.querySelectorAll(".show");
var scrollDist = shows.length * 3;

prevBtn.onclick = previous;
nextBtn.onclick = next

function previous() {
    serieSlides.scrollLeft -= scrollDist;
}

function next() {
    serieSlides.scrollLeft += scrollDist;
}