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
    document.body.classList.toggle("bg-dark");
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

//добавляєио клас для бекграунду
if ($(window).width() > 992) {
  $('.header__has-child').on('mouseenter', function() {
    $('body').addClass('bg-dark');
  });

  $('.header__has-child').on('mouseleave', function() {
    $('body').removeClass('bg-dark');
  });
}



//
$('.header__has-child > span').on('click', function() {
  $(this).parent().toggleClass('open');
  $(this).siblings('.header__item-child').slideToggle();
});

//


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
  rating: 4,
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
$(".color2").select2({
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

// Додаємо клас "open" для першого елемента
$(".accordeon dl:first").addClass("open");
// Показуємо відповідний "dd" для першого елемента
$(".accordeon dl:first dd").show();
$(".accordeon dl:first dt").addClass("active");


const bottomTextElement = document.querySelector('.form__bottom-text');

// Функція для тогл класу 'active' для чексбоксу форми
function toggleActiveClass() {
  bottomTextElement.classList.toggle('active');
}
bottomTextElement.addEventListener('click', toggleActiveClass);



//селект для модалок 
function selectOption(option) {
  const dropdown = option.closest('.dropdown');
  const dropbtn = dropdown.querySelector('.dropbtn');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropbtn.textContent = option.textContent;

  const items = dropdownContent.querySelectorAll('li');
  items.forEach(item => item.classList.remove('choice'));

  option.classList.add('choice');

  dropdownContent.style.display = 'none';
}

document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function() {
    const dropdown = button.closest('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('click', function(event) {
  document.querySelectorAll('.dropdown-content').forEach(dropdownContent => {
    if (!dropdownContent.closest('.dropdown').contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});


