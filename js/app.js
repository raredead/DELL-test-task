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

  iconMenu.addEventListener('click', (e)=>{
    document.body.classList.toggle('_lock');

    iconMenu.classList.toggle('_active');
    menyBody.classList.toggle('_active');
  });