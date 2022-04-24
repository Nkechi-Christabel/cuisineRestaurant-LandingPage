const bookingImg = document.querySelector(".bookings__video");
const carouselPrev = document.querySelector(".fa-chevron-circle-left");
const carouselNext = document.querySelector(".fa-chevron-circle-right");
const gifs = [
  "./images/Eggcellent.gif",
  "./images/pizza.gif",
  "./images/spaghetti.gif",
  "./images/shrimps.gif",
];

let counter = 0;

carouselPrev.addEventListener("click", prevSlide);
carouselNext.addEventListener("click", nextSlide);

function prevSlide() {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  if (counter === 0) {
    carouselPrev.style.pointerEvents = "none";
    carouselPrev.style.opacity = "0.3";
  } else {
    carouselNext.style.pointerEvents = "auto";
    carouselNext.style.opacity = "1";
  }
  bookingImg.style.backgroundImage = `url(${gifs[counter]})`;
}

function nextSlide() {
  counter++;

  if (counter > gifs.length - 1) {
    counter = gifs.length - 1;
  }
  if (counter === gifs.length - 1) {
    carouselNext.style.pointerEvents = "none";
    carouselNext.style.opacity = "0.3";
  } else {
    carouselPrev.style.pointerEvents = "auto";
    carouselPrev.style.opacity = "1";
  }
  bookingImg.style.backgroundImage = `url(${gifs[counter]})`;
}
