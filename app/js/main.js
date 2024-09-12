
//toggle клас до блоку пошуку
document.addEventListener('click', function (event) {
  const searchIcon = document.querySelector('.header__search-icon');
  const searchInner = document.querySelector('.header__search');

  if (searchIcon.contains(event.target)) {
    searchInner.classList.toggle('open');
  }
  else if (!searchInner.contains(event.target)) {
    searchInner.classList.remove('open');
  }
});


//sliders
var swiper = new Swiper(".intro__slider", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".review__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(".rateYo_reviews").rateYo({
  starWidth: "12px",
  ratedFill: "#FFC700",
  spacing: "2px",
  rating: 5,
  readOnly: true,
});
