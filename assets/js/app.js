const worksPathItemMeasuring = document.querySelector('.works-path__item--measuring')
const worksPathItemProduction = document.querySelector('.works-path__item--production')
//Slider
new Swiper(".top__inner", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },

  initialSlide: 1,

  autoplay: {
    delay: 4000,
  },

  loop: true,

  speed:700,
});

//mixitup
var mixer = mixitup('.gallery__inner', {
  load: {
    filter:'.living'
  }
});

//adaptiv меняем местами блоки
if(window. innerWidth < 651){
  worksPathItemProduction.before(worksPathItemMeasuring)
}
