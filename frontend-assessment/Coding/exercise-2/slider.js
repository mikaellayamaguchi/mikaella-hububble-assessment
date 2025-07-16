const slides = document.querySelectorAll(".slide img");
let slideIndex = 0;
let intID = null;
function initSlider() {
  slides[slideIndex].classList.add("active");

}
initSlider()


function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"))
  slides[slideIndex].classList.add("active")
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}