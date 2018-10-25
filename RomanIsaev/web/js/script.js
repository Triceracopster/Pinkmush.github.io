$(document).ready(function () {
//Первый слайдер
    $('.slider1').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        cssEase: 'linear',
        appendArrows: $('.arrows1'),
        prevArrow: '<button id="prev" type="button" class="btn btn-outline-secondary btnLeft" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-outline-secondary btnRight" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider2').slick({
        centerMode: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        cssEase: 'linear',
        appendArrows: $('.arrows2'),
        prevArrow: '<button id="prev" type="button" class="btn btn-outline-secondary btnSlider2 btnLeft" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-outline-secondary btnSlider2 btnRight" aria-pressed="false" autocomplete="on"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});

jQuery(document).ready(function () {
    $("div.dropdown-menu a").mPageScroll2id();
});