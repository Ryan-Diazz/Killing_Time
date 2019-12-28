const hamburger = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-open");
const main = document.querySelector(".main");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("opened");
});



const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const Latest = document.querySelector(".listLatest");
const popular = document.querySelector(".listpopular");
const recomended = document.querySelector(".listrecomended")

function start() {
    prevBtn.hide
}



function Scroller(Distance, element, direction) {
    if (direction == "Prev") {
        element.scrollBy(Distance, 0);
    } else {
        element.scrollBy(Distance, 0);
    }
}

start();