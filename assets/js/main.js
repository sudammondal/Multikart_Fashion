$(document).ready(function() {
    // banner slider //
    ! function(e) {
        "use strict";
        $('.banner_slide').slick({
            autoplay: true,
            arrows: true,
            autoplaySpeed: 3000,
            speed: 3000,
            easing: 'linear'
        });
    }(jQuery)
    // banner slider //
    
    $('.slider_shop').slick({
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });
    $('.bolog_slidmain').slick({
        arrows: false,
        autoplay: false,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });
    $('.brand_slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            }
        ]
    });
    function isoTopActive() {
		// Iso top js
		$(".filtering_item_wrap").isotope({
			itemSelector: '.filter_item'
			, layoutMode: 'fitRows'
		});
		var isOacTive = $('.parteflo_button button').click(function () {
			$(".parteflo_button button").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".filtering_item_wrap").isotope({
				filter: selector
				, animationOptions: {
					duration: 750
					, easing: 'linear'
					, queue: false
				, }
			});
			return false;
		});
	}
	isoTopActive();
});