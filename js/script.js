//свайпер - слайдер
new Swiper('.hero__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
        prevEl: '.hero__slider-btn_prev',
        nextEl: '.hero__slider-btn_next',
    },
    autoplay: {
        display: 3000,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        560:{
        spaceBetween: 8,
        }
    }
});



//калькулятор 
const calcForm = document.querySelector('.js-calc-form');
const totalSquare = document.querySelector('.js-square');
const totalPrice = document.querySelector('.js-total-price');
const resultWrapper = document.querySelector('.js-result-wrapper');
const btnSubmit = document.querySelector('.js-submit');


const tariff = {
    economy: 550,
    comfort: 1400,
    premium: 2700,
};
calcForm.addEventListener('input', (event) => {
    if (calcForm.width.value > 0 && calcForm.length.value > 0){
        btnSubmit.disabled = false
    } else{
        btnSubmit.disabled = true
    }
});

calcForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (calcForm.width.value > 0 && calcForm.length.value > 0){
        const square = calcForm.width.value * calcForm.length.value;
        const price = square * tariff[calcForm.tariff.value];

        resultWrapper.style.display = 'block';

        totalSquare.textContent = (square +  ' кв м');
        totalPrice.textContent =(price + ' руб');
    }
});

// модальное окно сайта
const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
const buttonElems = document.querySelectorAll(btnOpen);
const modalElem = document.querySelector(modal);
      
        modalElem.style.cssText = `
          display: flex;
          visibility: hidden;
          opacity: 0;
          transition: opacity ${time}ms ease-in-out;
        `;
      
        const closeModal = event => {
          const target = event.target;
      
          if (
            target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === 'Escape'
            ) {
      
            modalElem.style.opacity = 0;
      
            setTimeout(() => {
              modalElem.style.visibility = 'hidden';
            }, time);
      
            window.removeEventListener('keydown', closeModal);
          }
        }
      
        const openModal = () => {
          modalElem.style.visibility = 'visible';
          modalElem.style.opacity = 1;
          window.addEventListener('keydown', closeModal)
        };
      
        buttonElems.forEach(btn => {
          btn.addEventListener('click', openModal);
        });
      
        modalElem.addEventListener('click', closeModal);
      };
    
      modalController({
        modal: '.modal',
        btnOpen: '.js-order',
        btnClose: '.modal__close', 
      });

// маска формы модального окна
const phone = document.getElementById('phone');
const imPhone = new Inputmask('+375(99)999-99-99');
imPhone.mask(phone);




