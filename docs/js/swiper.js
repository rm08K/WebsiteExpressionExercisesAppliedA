var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed: 600,
    slidesPerView: 1.8,
    spaceBetween:0,
    centeredSlides: true,
    direction: 'horizontal',
    effect: 'coverflow',
    coverflowEffect: {
        rotate:0,
        slidesShadows: false,
        depth: 0,
        modifier: 0,
    },
    autoplay: {
        delay: 4000, 
        stopOnLast: false,
        disableOnInteraction: true
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            autoplay: {
                delay: 2000
            }
        },
        1440: {
            slidesPerView: 1.5
        }
    }
})