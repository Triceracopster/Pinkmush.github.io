$(document).ready(function(){
    //Первый слайдер
    $('.slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
    });
    // Второй слайдер
    $('.slider2').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 500,
    });
    // Третий слайдер
    $('.slider3').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
    });
});
