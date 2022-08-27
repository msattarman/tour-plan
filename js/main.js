const hotelSlider = new Swiper('.hotel-slider', {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
});

const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
   console.log('click');
   document
   .querySelector(".navbar-bottom")
   .classList.toggle('navbar-bottom--visible')
});