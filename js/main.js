const myChannelSlider = new Swiper('.my-chennel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1400: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 3
    },
    760: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }  
  },
  // Navigation arrows
  navigation: {
    nextEl: '.my-chennel-button-next',
    prevEl: '.my-chennel-button-prev',
  },
});
const recommendedSlider = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 2
    },
    760: {
      slidesPerView: 1
    }  
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },
});
const foodSlider = new Swiper('.food-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1400: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 5
    },
    992: {
      slidesPerView: 3
    },
    760: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }  
  },
  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },
});
const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', ()=> {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 540) {
  myChannelSlider.destroy();
  recommendedSlider.destroy();
  foodSlider.destroy();
}