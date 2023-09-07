// Скролл к элементам
const links = document.querySelectorAll('.nav__list');
console.log(links);

for(let i = 0; i < links.length; i++){
  links[i].addEventListener('click', (e)=>{
    e.preventDefault();

    const blockId = e.currentTarget.getAttribute('href').substr(1);
    document.getElementById(blockId).scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  });
}


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


// Валидация формы
function validation(form){

  function removeError (input) {
    const inputField = input;
    const parent = input.parentNode;

    if(inputField.classList.contains('error')){
      parent.querySelector('.error-label').remove()
      inputField.classList.remove('error')
    }
  }


  function createError(input, text){
    const inputField = input;
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    inputField.classList.add('error');

    parent.append(errorLabel);
  }


  let result = true;

  const allInput = form.querySelectorAll('input');
  
  for (const input of allInput) {

    removeError(input)
    
    if(input.value == ''){

      
      createError(input, 'Поле не заполнено');
      result = false
    }
  }

  return result;
}


document.getElementById('add-form').addEventListener('submit', function(e){
  e.preventDefault();

  if (validation(this) == true){
    
  }
});