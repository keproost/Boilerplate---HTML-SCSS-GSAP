
import $ from 'jquery';
import 'slick-carousel';
import { gsap, GSDevTools, SplitText, Power1, TimelineMax, Power2 } from 'gsap/all';

window.$ = $;
window.jQuery = $;

gsap.registerPlugin(GSDevTools);

const customSliders = {
    slickSliderHero() {
        // const slickSliderElement = document.querySelectorAll('.sliderHero');
        // // // Set greensock design/dev tools visibility
        // GSDevTools.create();

        // const slideTitle = $('.slick-active > slideTitle');
        const activeSlide = $('.slick-active');
        const slideTitle = $('.slideTitle').find(activeSlide);
        // const slideTitle = $('.slick-active < .slideTitle');
        // const slideTitle = $('#slick-slide00').children('.slideTitle');
        // alert(slideTitle.length);
        // const slideTitle = document.querySelectorAll('.slideTitle');
        const slideTitleSplitText = new SplitText(slideTitle);
        const titleAnimation = gsap.timeline({ });

        const slideDescription = document.querySelectorAll('.slideDescription');
        const slideDescriptionAnimation = gsap.timeline({ });

        const slideSubTitle = document.querySelectorAll('.slideSubTitle');
        const slideSubTitleAnimation = gsap.timeline({ });

        const slideImage = document.querySelectorAll('.slideImage');
        const slideImageAnimation = gsap.timeline({ });

        const stackItem = document.querySelectorAll('.stackItem');
        const stackItemAnimation = gsap.timeline({ });

        const slideBackground = document.querySelectorAll('.sliderBackground');
        const slideBackgroundAnimation = gsap.timeline({ });

        const slideCtaWrapper = document.querySelectorAll('.slideCtaWrapper');
        const slideCtaWrapperdAnimation = gsap.timeline({ });

        const slideImageStackContainer = document.querySelectorAll('.imageStackSlider');
        const slideImageStackAnimation = gsap.timeline({ });

        const slideLayers = document.querySelectorAll('.slideLayer');
        const slideLayerAnimation = gsap.timeline({ });

        const animationEasing = Power1.Elastic;

        slideLayerAnimation
            .staggerFrom(slideLayers, 1, {
                // x: 500,
                y: -500,
                scaleX: 0,
                scaleY: 0,
                opacity: 0,
                force3D: true,
                ease: 'easeIn.out(2)',
                // transformOrigin: 'center center'
            }, 0.10);

        slideImageStackAnimation
            .from(slideImageStackContainer, 0.50, {
                // rotateY: 110,
                // rotateZ: 15,
                // ease: 'easeIn.out(2)',
            });

        titleAnimation
            .from(slideTitleSplitText.chars, {
                duration: 0.50,
                opacity: 0,
                y: 100,
                stagger: { amount: 1.5 },
                overwrite: 'auto'
            });

        slideDescriptionAnimation
            .from(slideDescription, {
                opacity: 0,
            })
            .to(slideDescription, {
                opacity: 1,
            });

        slideImageAnimation
            .from(slideImage, {
                opacity: 0,
                x: 100
            })
            .to(slideImage, {
                opacity: 1,
                x: 0,
            });

        stackItemAnimation
            .staggerFrom(stackItem, 1, {
                y: '+=20px',
                yoyo: true,
                repeat: -1,
                paused: true,
                ease: Power2.easeOut,
            }, 0.5);

        slideSubTitleAnimation
            .from(slideSubTitle, {
                opacity: 0,

            })
            .to(slideSubTitle, {
                opacity: 1,
            }, 0.75);

        slideBackgroundAnimation
            .from(slideBackground, {
                opacity: 0,
                x: 200
            })
            .to(slideBackground, {
                opacity: 1,
                x: 0
            });

        slideCtaWrapperdAnimation
            .from(slideCtaWrapper, {
                opacity: 0,
                y: 200
            })
            .to(slideCtaWrapper, {
                opacity: 1,
                y: 0
            });
        // Init master timesline
        const sliderMasterTimeline = new TimelineMax({
            delay: 0,
            ease: animationEasing,
            // onStart: enterLoader,
            // onComplete: leaveLoader
        });
        sliderMasterTimeline
            .add(titleAnimation, 0)
            .add(slideSubTitleAnimation, 0.75)
            .add(slideBackgroundAnimation, 0.75)
            .add(stackItemAnimation, 0.75)
            .add(slideDescriptionAnimation, 1.25)
            // .add(slideImageStackAnimation, 0.75)
            .add(slideLayerAnimation, 1)
            .add(slideImageAnimation, 1.25)
            .add(slideCtaWrapperdAnimation, 1.25);

        // manipulates global animation speed
        sliderMasterTimeline
            .timeScale(1);

        const slider = $('.sliderHero').slick({
        // const slider = $('.sliderHero').not('.slick-initialized').slick({
            dots: true,
            // autoplay: true,
            // autoplaySpeed: 10000,
            pauseOnFocus: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            // touchMove: false,
            // cssEase: 'linear',
            slidesToScroll: 1,
            // centerMode: true,
            // waitForAnimate: false,
            // useTransform: false,
            // draggable: true,
            // variableWidth: true,
            // responsive: [{
            //     breakpoint: 500,
            //     settings: {
            //         dots: false,
            //         arrows: false,
            //         infinite: false,
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //     }
            // }]
        })
            // .on('init', function () {
            //     sliderMasterTimeline.pause();
            // })
            .on('change', function () {
                sliderMasterTimeline.play();
            })
            .on('afterChange', function () {
                sliderMasterTimeline.play();
            })
            .on('beforeChange', function () {
                sliderMasterTimeline.restart();
            });
        // slider[0].slick.cssTransitions = false;


        // Slide on scrol

        // function scrollingSliderResponsive() {
        //     const viewportWidth = $(window).width();
        //     console.log(viewportWidth);
        //     if (viewportWidth <= 500) {
        //         // max-width 500px
        //         // actions here...
        //         // red();
        //     } else if (viewportWidth > 500 && viewportWidth <= ) {
        //         // max-width 850px
        //         // actions here...
        //         // orange();
        //     } else {

        //     }
        // }

        // if ($(window).width() >= 568) { // or any number you like

        // }

        if ($('#sliderHero').hasClass('scrollNavigation')) {
            slider.on('wheel', (function (e) {
                e.preventDefault();

                if (e.originalEvent.deltaY < 0) {
                    $(this).slick('slickPrev');
                } else {
                    $(this).slick('slickNext');
                }
            }));
        }


        // Now it will not throw error, even if called multiple times.
        // $(window).on('resize', createSlick);
        // On before slide change
        // $('.sliderHero').on('init', function (event, slick, currentSlide, nextSlide) {
        //     sliderMasterTimeline.play();
        // });


        // /SLICK SLIDER EXAMPLE WITH CUSTOM GSAP
        // const $slider = $('.sliderHero');

        // // const $slickTrack = $('.slick-track');
        // // const $slickCurrent = $('.slick-current');

        // const slideDuration = 600;

        // // RESET ANIMATIONS
        // // On init slide change
        // $slider.on('init', function () {
        //     TweenMax.to($('.slick-track'), 0.9, {
        //         marginLeft: 0
        //     });
        //     TweenMax.to($('.slick-active'), 0.9, {
        //         x: 0,
        //         zIndex: 2
        //     });
        // });
        // // On before slide change
        // $slider.on('beforeChange', function () {
        //     TweenMax.to($('.slick-track'), 0.9, {
        //         marginLeft: 0
        //     });
        //     TweenMax.to($('.slick-active'), 0.9, {
        //         x: 0
        //     });
        // });

        // // On after slide change
        // $slider.on('afterChange', function () {
        //     TweenMax.to($('.slick-track'), 0.9, {
        //         marginLeft: 0
        //     });
        //     $('.slick-slide').css('z-index', '1');
        //     TweenMax.to($('.slick-active'), 0.9, {
        //         x: 0,
        //         zIndex: 2
        //     });
        // });

        // // SLICK INIT
        // $slider.slick({
        //     speed: slideDuration,
        //     dots: true,
        //     waitForAnimate: true,
        //     useTransform: true,
        //     cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
        // });

        // // PREV
        // $('.slick-prev').on('mouseenter', function () {
        //     TweenMax.to($('.slick-track'), 0.6, {
        //         marginLeft: '180px',
        //         ease: Quad.easeOut
        //     });
        //     TweenMax.to($('.slick-current'), 0.6, {
        //         x: -100,
        //         ease: Quad.easeOut
        //     });
        // });

        // $('.slick-prev').on('mouseleave', function () {
        //     TweenMax.to($('.slick-track'), 0.4, {
        //         marginLeft: 0,
        //         ease: Sine.easeInOut
        //     });
        //     TweenMax.to($('.slick-current'), 0.4, {
        //         x: 0,
        //         ease: Sine.easeInOut
        //     });
        // });

        // // NEXT
        // $('.slick-next').on('mouseenter', function () {
        //     TweenMax.to($('.slick-track'), 0.6, {
        //         marginLeft: '-180px',
        //         ease: Quad.easeOut
        //     });
        //     TweenMax.to($('.slick-current'), 0.6, {
        //         x: 100,
        //         ease: Quad.easeOut
        //     });
        // });

        // $('.slick-next').on('mouseleave', function () {
        //     TweenMax.to($('.slick-track'), 0.4, {
        //         marginLeft: 0,
        //         ease: Quad.easeInOut
        //     });
        //     TweenMax.to($('.slick-current'), 0.4, {
        //         x: 0,
        //         ease: Quad.easeInOut
        //     });
        // });
    }
};


export default customSliders;
