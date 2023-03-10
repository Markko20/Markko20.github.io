new Swiper(".contact-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    enabled:true
  },

  slidesPerView: 1,
  slidesPerGroup:1,
  initialSlide: 1,
  loop: true,
  speed:700,

  breakpoints: {
    500: {
      scrollbar: {
        enabled: true
      },
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 17,
    },

    650: {
      scrollbar: {
        enabled: true
      },
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 17
    },

    768: {
      scrollbar: {
        enabled: true
      }
    },

    800: {
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 17
    },

    950: {
      slidesPerView: 5,
      slidesPerGroup:5,
      spaceBetween: 17
    },

    1200: {
      slidesPerView: 6,
      slidesPerGroup:6,
      spaceBetween: 17
    },

    1350: {
      slidesPerView: 7,
      slidesPerGroup:7,
      spaceBetween: 17
    },
    
    1500: {
      slidesPerView: 8,
      slidesPerGroup:8,
      spaceBetween: 17
    },

    1650: {

      slidesPerView: 9,
      slidesPerGroup:9,
      spaceBetween: 17
    },

    1800: {
      slidesPerView: 10,
      slidesPerGroup:10,
      spaceBetween: 17
    },

  }
});