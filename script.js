window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var navbarBrand = document.querySelector(".navbar-brand");
    var navbarImage = document.querySelector(".navbar-image");
    if (window.pageYOffset > 100) {
      navbar.classList.add("scrolled");
      navbarBrand.classList.add("scrolled");
      navbarImage.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      navbarBrand.classList.remove("scrolled");
      navbarImage.classList.remove("scrolled");
    }
  });  
  window.addEventListener("DOMContentLoaded", function () {
    moveImageUpAndDown("movingImage1");
    moveImageUpAndDown("movingImage2");
    moveImageUpAndDown("movingImage3");
    moveImageUpAndDown("movingImage4");
  });
  
  function moveImageUpAndDown(image) {
    var image = document.getElementById(image);
    var moveUp = true;
  
    setInterval(function () {
      if (moveUp) {
        image.classList.remove("move-up");
        moveUp = false;
      } else {
        image.classList.add("move-up");
        moveUp = true;
      }
    }, 1000);
  }
  // counter
  let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
// slider
// slider
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}