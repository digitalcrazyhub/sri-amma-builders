jQuery(document).ready(function () {
    jQuery('.rs-addon-slider-278230').each(function (index) {
        console.log('each function');
        var slider_id = jQuery(this).attr('id');
        var slider_conf = jQuery.parseJSON(jQuery(this).closest('.rsaddon-unique-slider').find('.rsaddon-slider-conf').attr('data-conf'));

        if (typeof (slider_id) != 'undefined' && slider_id != '') {
            jQuery('#' + slider_id).not('.slick-initialized').slick({
                slidesToShow: parseInt(slider_conf.col_lg),
                centerMode: (slider_conf.centerMode) == "true" ? true : false,
                dots: (slider_conf.sliderDots) == "true" ? true : false,
                arrows: (slider_conf.sliderNav) == "true" ? true : false,
                autoplay: (slider_conf.slider_autoplay) == "true" ? true : false,
                slidesToScroll: parseInt(slider_conf.slidesToScroll),
                centerPadding: '15px',
                rtl: false,
                autoplaySpeed: parseInt(slider_conf.autoplaySpeed),
                pauseOnHover: (slider_conf.pauseOnHover) == "true" ? true : false,
                loop: false,

                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: parseInt(slider_conf.col_md),
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: parseInt(slider_conf.col_sm),
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: parseInt(slider_conf.col_xs),
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            arrows: false,
                            slidesToShow: parseInt(slider_conf.col_mobile),
                        }
                    },
                ]
            });
        }

    });
    jQuery('#rsaddon-slick-slider-14921').each(function (index) {
        var slider_id = jQuery(this).attr('id');
        var slider_conf = jQuery.parseJSON(jQuery(this).closest('.rsaddon-unique-slider.uni-b2ffd58').find('.rsaddon-slider-conf').attr('data-conf'));

        if (typeof (slider_id) != 'undefined' && slider_id != '') {
            jQuery('#' + slider_id).not('.slick-initialized').slick({
                slidesToShow: parseInt(slider_conf.col_lg),
                centerMode: (slider_conf.centerMode) == "true" ? true : false,
                dots: (slider_conf.sliderDots) == "true" ? true : false,
                arrows: (slider_conf.sliderNav) == "true" ? true : false,
                autoplay: (slider_conf.slider_autoplay) == "true" ? true : false,
                slidesToScroll: parseInt(slider_conf.slidesToScroll),
                centerPadding: slider_conf.slider_centers_pad_xl,
                autoplaySpeed: parseInt(slider_conf.autoplaySpeed),
                pauseOnHover: (slider_conf.pauseOnHover) == "true" ? true : false,
                variableWidth: (slider_conf.variableWidth) == "true" ? true : false,
                infinite: true,
                loop: (slider_conf.slider_loop) == "true" ? true : false,
                rtl: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: parseInt(slider_conf.col_md),
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: parseInt(slider_conf.col_lg_2),
                        centerPadding: slider_conf.slider_centers_pad_xl,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: parseInt(slider_conf.col_sm),
                        slidesToScroll: 1,
                        centerPadding: slider_conf.slider_centers_pad_lg,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: parseInt(slider_conf.col_xs),
                        slidesToScroll: 1,
                        centerPadding: slider_conf.slider_centers_pad_md,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                }
                ]
            });
        }
    });

});

jQuery(document).ready(function ($) {
    $('.addon-slider-27439').each(function (index) {
        var slider_id = $(this).attr('id');
        var slider_conf = jQuery.parseJSON($(this).closest('.rsaddon-unique-slider').find('.rsaddon-slider-conf').attr('data-conf'));

        if (typeof (slider_id) != 'undefined' && slider_id != '') {
            jQuery('#' + slider_id).not('.slick-initialized').slick({
                slidesToShow: parseInt(slider_conf.col_lg),
                centerMode: (slider_conf.centerMode) == "true" ? true : false,
                dots: (slider_conf.sliderDots) == "true" ? true : false,
                arrows: (slider_conf.sliderNav) == "true" ? true : false,
                autoplay: (slider_conf.slider_autoplay) == "true" ? true : false,
                slidesToScroll: parseInt(slider_conf.slidesToScroll),
                centerPadding: slider_conf.slider_centers_pad_xl,
                autoplaySpeed: parseInt(slider_conf.autoplaySpeed),
                pauseOnHover: (slider_conf.pauseOnHover) == "true" ? true : false,
                infinite: (slider_conf.infinite) == "true" ? true : false,
                rtl: false,

                asNavFor: '.slider-nav-c80e7fd',

                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: parseInt(slider_conf.col_md),
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: parseInt(slider_conf.col_lg_2),
                            centerPadding: slider_conf.slider_centers_pad_xl,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: parseInt(slider_conf.col_sm),
                            slidesToScroll: 1,
                            centerPadding: slider_conf.slider_centers_pad_lg,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: parseInt(slider_conf.col_xs),
                            slidesToScroll: 1,
                            centerPadding: slider_conf.slider_centers_pad_md,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            slidesToScroll: 1,
                            centerPadding: '0px',
                        }
                    }
                ]
            });
        }
    });
    $('.slider-nav-c80e7fd').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for-c80e7fd',
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    });
});


jQuery(document).ready(function ($) {
    $('#rsaddon-slick-slider-2452').each(function (index) {
        var slider_id = jQuery(this).attr('id');
        var slider_conf = jQuery.parseJSON(jQuery(this).closest('.rsaddon-unique-slider').find('.rsaddon-slider-conf').attr('data-conf'));

        if (typeof (slider_id) != 'undefined' && slider_id != '') {
            jQuery('#' + slider_id).not('.slick-initialized').slick({
                slidesToShow: parseInt(slider_conf.col_lg),
                centerMode: (slider_conf.centerMode) == "true" ? true : false,
                dots: (slider_conf.sliderDots) == "true" ? true : false,
                arrows: (slider_conf.sliderNav) == "true" ? true : false,
                autoplay: (slider_conf.slider_autoplay) == "true" ? true : false,
                slidesToScroll: parseInt(slider_conf.slidesToScroll),
                centerPadding: '15px',
                autoplaySpeed: parseInt(slider_conf.autoplaySpeed),
                pauseOnHover: (slider_conf.pauseOnHover) == "true" ? true : false,
                loop: false,
                rtl: false,

                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: parseInt(slider_conf.col_md),
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: parseInt(slider_conf.col_sm),
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: parseInt(slider_conf.col_xs),
                        }
                    },
                ]
            });
        }
    });
    $('.social-trigger-btn.0d4f0a4').click(function () {
        $(this).closest('.team-inner-wrap').toggleClass('active');
    });
});