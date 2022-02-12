const swiper = new Swiper('.swiper', {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});