var swiper = new Swiper(".container", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:  'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
    },
});
