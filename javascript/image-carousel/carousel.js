let slideIndex = 1;
let timeoutId;
showSlides(slideIndex);


const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
  plusSlides(1);
});

const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", () => {
  plusSlides(-1);
});

const dotButtons = document.querySelectorAll(".dot");
dotButtons.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    currentSlide(idx+1);
  });
});

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timeoutId);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timeoutId);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timeoutId = setTimeout(function () {
     plusSlides(1);
   }, 5000);
}