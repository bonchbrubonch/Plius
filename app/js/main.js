const navOffset = document.querySelector('.header').offsetTop + 200;

window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;

  if (scrolled > navOffset) {
    document.querySelector('header').classList.add('sticky');
  } else if (scrolled < navOffset) {
    document.querySelector('header').classList.remove('sticky');
  }
});


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

$(".filter_by").select2({
  minimumResultsForSearch: -1,
  placeholder: "Current Number of Clients",
});


$(".category-listt__child-item").on("click", function () {
  $(this).toggleClass("open");
});

$(".category-listt__chek").on("click", function () {
  $(this).toggleClass("active");
});

$(".category-listt__title").on("click", function () {
  $(this).toggleClass("active");
});
