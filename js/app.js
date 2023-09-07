// Slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Бургер меню
const iconMenu = document.querySelector('.burger__btn');
const menyBody = document.querySelector('.wrap__list');

iconMenu.addEventListener('click', (e) => {
  document.body.classList.toggle('_lock');

  iconMenu.classList.toggle('_active');
  menyBody.classList.toggle('_active');
});


// Drop-menu header

const iconBtn = document.getElementById('account_header');
const dropMenu = document.querySelector('.drop-menu');
const main = document.querySelector('body');

iconBtn.addEventListener('mouseover', show);
iconBtn.addEventListener('mouseout', hide);

function show(e) {
  e.preventDefault();
  dropMenu.classList.toggle('active');
}

function hide(e) {
  e.preventDefault();
  main.addEventListener('click', (e) => {
    dropMenu.classList.remove('active');
  });
}