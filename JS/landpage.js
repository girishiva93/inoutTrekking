// Hero Slider Start from Here 
$(document).ready(function(){
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        speed: 1500 ,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },      
    })
     // Swiper Event
    mySwiper.on('slideChangeTransitionStart ', function() { 
            anime({
                targets: '.swiper-slide-active .slide-right img',
                scaleX: [0, 1],
                opacity:[0,1],
                easing: 'easeInOutQuart',
                speed: 2000
              });
              anime({
                targets: '.swiper-slide-active .slide-left .element',
                translateY: [50, 0],
                opacity:[0,1],
                delay: anime.stagger(150, {start:500}),
                easing: 'easeInOutQuart'
              });
    });
    anime({
        targets: 'nav',
        scaleX: [0, 1],
        translateX: [-400, 0],
        opacity:[0,1],
        easing: 'easeInOutQuart',
        speed: 2000
    });
    anime({
        targets: '.logo',
        rotate: 360,
        opacity:[0,1],
        delay: 500,
    });
    anime({
        targets: 'nav ul li',
        translateY: [50, 0],
        opacity:[0,1],
        delay: anime.stagger(200, {start:700}),
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.slide-right img',
        scale: [1,2,1],
        opacity:[0,1],
        delay: anime.stagger(200, {start:1000}),
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-slide-active .slide-left .element',
        translateY: [50, 0],
        scale: [1,2,1],
        opacity:[0,1],
        delay: anime.stagger(250, {start:1700}),
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-button-prev',
        translateY: [-100, 0],
        opacity:[0,1],
        delay: 3000,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-button-next',
        translateY: [100, 0],
        opacity:[0,1],
        delay: 3000,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.about-section',
       
    });
})

AOS.init({
    duration: 1000,
    offset:400,
});
AOS.init({
    targets: '.fade-right',
    duration: 1000,
    offset:400,
});

