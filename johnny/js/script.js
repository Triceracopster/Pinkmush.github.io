$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        slidesToShow: 1,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: true,
        appendArrows: $('.arrows1'),
        prevArrow: '<button id="prev" type="button" class="btn btn-outline-secondary btnSlider2 btnLeft" aria-pressed="false" autocomplete="on"><i class="fa fa-3x fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-outline-secondary btnSlider2 btnRight" aria-pressed="false" autocomplete="on"><i class="fa fa-3x fa-chevron-right" aria-hidden="true"></i></button>',
    });
});