// клас sticky для шапки при скроллі
const navOffset = document.querySelector('.header').offsetTop + 200;

window.addEventListener('scroll', function () {
  const scrolled = window.scrollY;

  if (scrolled > navOffset) {
    document.querySelector('.header').classList.add('sticky');
  } else {
    document.querySelector('.header').classList.remove('sticky');
  }
});

/* меню гамбургер */
const menuBtn = document.querySelector(".header__menu-btn");
const navMenu = document.querySelector(".header__nav");
const header = document.querySelector(".header");

if (menuBtn && navMenu && header) {
  menuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("open");
    document.body.classList.toggle("lock");
    header.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const categoryTitles = document.querySelectorAll(".header__nav");

  categoryTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

document.querySelectorAll('.header__has-child > span').forEach(span => {
  span.addEventListener('click', function () {
    const parent = this.closest('.header__has-child');
    const child = parent.querySelector('.header__item-child');
    if (child) {
      child.classList.toggle('open');
    }
  });
});

// filter
$(".category-listt__child-item").on("click", function () {
  $(this).toggleClass("open");
});

$(".category-listt__chek").on("click", function () {
  $(this).toggleClass("active");
});

$(".category-listt__title").on("click", function () {
  $(this).toggleClass("active");
  $(this).next().slideToggle(300);
});

$(".category-listt__close").on("click", function () {
  $(".category-listt").removeClass("open");
  $("body").removeClass("lock");
});

$(".filter-btn").on("click", function () {
  $(".category-listt").addClass("open");
  $("body").addClass("lock");
});

$(".form__input-show").on("click", function () {
  $(this).toggleClass("active");
});

  /*start cabinet-show=======*/
  $(".cabinet-show").on("click", function () {
    $("body").addClass("lock");
    $(".cabinet__left").addClass("open");
  });
  $(".cabinet-menu__close").on("click", function () {
    $("body").removeClass("lock");
    $(".cabinet__left").removeClass("open");
  });
  /*end cabinet-show=======*/

const productAdd = document.querySelector('.product__add');

if (productAdd) {
  productAdd.addEventListener('click', function() {
    this.classList.toggle('active');
  });
}

// toggle клас до блоку пошуку
document.addEventListener('DOMContentLoaded', () => {
  const searchIcons = document.querySelectorAll('.header__search-icon, .underfooter__search-icon');
  const closeButtons = document.querySelectorAll('.header__close, .underfooter__close');
  const searchContainers = document.querySelectorAll('.header__search, .underfooter__search');

  searchIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const targetContainer = document.querySelector(`.${icon.classList[0].split('__')[0]}__search`);
      targetContainer.classList.add('open');
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetContainer = document.querySelector(`.${button.classList[0].split('__')[0]}__search`);
      targetContainer.classList.remove('open');
    });
  });
});

// sliders
var swiper = new Swiper(".intro__slider", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-slider", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});

var swiper = new Swiper(".review__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});

var swiper = new Swiper(".product__slider-side", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,

  breakpoints: {
    767: {
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "vertical",
    },
  }
});

var swiper2 = new Swiper(".product__slider", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper,
  },
});

// rating star
$(".rateYo_reviews").rateYo({
  starWidth: "12px",
  ratedFill: "#FFC700",
  spacing: "2px",
  rating: 5,
  readOnly: true,
});
$(".rateYo_choice").rateYo({
  starWidth: "14px",
  ratedFill: "#FFC700",
  spacing: "2px",
  rating: 0,
});

// select
$(".filter_by").select2({
  minimumResultsForSearch: -1,
  placeholder: "Current Number of Clients",
});
$(".color").select2({
  minimumResultsForSearch: -1,
  placeholder: "Current Number of Clients",
});


//accordeon
$(".accordeon dd").hide().prev().click(function () {
  $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
  $("dl").removeClass("open");
  $(this).parent().toggleClass("open");
});

const bottomTextElement = document.querySelector('.form__bottom-text');

// Функція для тогл класу 'active' для чексбоксу форми
function toggleActiveClass() {
  bottomTextElement.classList.toggle('active');
}
bottomTextElement.addEventListener('click', toggleActiveClass);
