$(document).ready(function () {
//Первый слайдер
    $('.slider1').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 350,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        cssEase: 'linear',
        appendArrows: $('.arrows1'),
        prevArrow: '<button id="prev" type="button" class="btn btn-outline-secondary btnLeft" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-outline-secondary btnRight" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></button>',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    fade: true
                }
            }
        ]
    });
    $('.slider2').slick({
        infinite: true,
        speed: 350,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 2,
        cssEase: 'linear',
        appendArrows: $('.arrows2'),
        prevArrow: '<button id="prev" type="button" class="btn btn-outline-secondary btnSlider2 btnLeft" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-outline-secondary btnSlider2 btnRight" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></button>',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    fade: true
                }
            }
        ]
    });
    $('.slider3').slick({
        infinite: true,
        speed: 350,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        appendArrows: $('.arrows3'),
        prevArrow: '<button id="prev" type="button" class="btn btn-outline-secondary btnLeft" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-outline-secondary btnRight" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></button>',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    fade: true
                }
            }
        ]
    });
});

jQuery(document).ready(function () {
    $("a.nav-link").mPageScroll2id();
});