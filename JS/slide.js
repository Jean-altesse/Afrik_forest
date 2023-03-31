var slider = document.getElementById("slider");
var slides = slider.getElementsByClassName("slide");
var current = 0;
var max = slides.length - 1;

function slide() {
  slides[current].classList.remove("active");
  current = (current === max) ? 0 : current + 1;
  slides[current].classList.add("active");
}

slides[current].classList.add("active");
setInterval(slide, 1000);
