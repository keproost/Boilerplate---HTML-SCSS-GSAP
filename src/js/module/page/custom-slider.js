
import $ from 'jquery';
import { gsap, GSDevTools, SplitText, Power1, TimelineMax, Power2, SlowMo } from 'gsap/all';

gsap.registerPlugin(GSDevTools);

const customSliders = {

    // On swipe event

    slickSliderHero() {
        $('.sliderHero').on('swipe', function (event, slick, direction) {
            slideTimeline();
        });

        // On edge hit
        $('.sliderHero').on('edge', function (event, slick, direction) {
            console.log('edge was hit');
        });

        // On before slide change
        $('.sliderHero').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            slideTimeline();
        });

        const slider = $('.sliderHero').slick({
            dots: true,
            // autoplay: true,
            // autoplaySpeed: 10000,
            // pauseOnFocus: false,
            infinite: false,
            arrows: true,
            // infinite: true,
            speed: 450,
            slidesToShow: 1,
            touchMove: true,
            // cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)',
            cssEase: 'linear',
            slidesToScroll: 1,
            centerMode: false,
            // waitForAnimate: false,
            // useTransform: true,
            // draggable: true,
            // vertical: true,
            // variableWidth: true,
            // responsive: [{
            //     breakpoint: 500,
            //     settings: {
            //         dots: false,
            //         arrows: false,
            //         infinite: false,
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //     }
            // }]
        });

        function slideTimeline() {
            const slideTitle = $('.slide-current > .slideTitle');
            // const slideTitle = document.querySelectorAll('.slideTitle');
            const slideTitleSplitText = new SplitText(slideTitle);
            const titleAnimation = gsap.timeline({ paused: true });

            const slideDescription = $('.slide-current > .slideDescription');
            // const slideDescription = document.querySelectorAll('.slideDescription');
            const slideDescriptionAnimation = gsap.timeline({ paused: true });

            const slideSubTitle = $('.slide-current > .slideSubTitle');
            // const slideSubTitle = document.querySelectorAll('.slideSubTitle');
            const slideSubTitleAnimation = gsap.timeline({ paused: true });

            const slideImage = $('.slide-current > .slideImage');
            // const slideImage = document.querySelectorAll('.slideImage');
            const slideImageAnimation = gsap.timeline({ paused: true });

            const stackItem = $('.slide-current > .stackItem');
            // const stackItem = document.querySelectorAll('.stackItem');
            const stackItemAnimation = gsap.timeline({ paused: true });

            const slideBackground = $('.slide-current > .sliderBackground');
            // const slideBackground = document.querySelectorAll('.sliderBackground');
            const slideBackgroundAnimation = gsap.timeline({ paused: true });

            const slideCtaWrapper = $('.slide-current > .slideCtaWrapper');
            // const slideCtaWrapper = document.querySelectorAll('.slideCtaWrapper');
            const slideCtaWrapperdAnimation = gsap.timeline({ paused: true });

            const backgroundImage = $('.slide-current > .backgroundImage');
            // const backgroundImage = document.querySelectorAll('.backgroundImage');
            const backgroundImageAnimation = gsap.timeline({ paused: true });

            const slideImageStackContainer = $('.slide-current > .imageStackSlider');
            // const slideImageStackContainer = document.querySelectorAll('.imageStackSlider');
            const slideImageStackAnimation = gsap.timeline({ paused: true });

            const slideLayers = $('.slide-current > .imageStackSlider');
            // const slideLayers = document.querySelectorAll('.slideLayer');
            const slideLayerAnimation = gsap.timeline({ });

            const animationEasing = Power1.Elastic;

            backgroundImageAnimation
                .from(backgroundImage, {
                    scale: 1.50,
                    opacity: 0,
                    ease: 'easeOut'
                })
                .to(backgroundImage, {
                    scale: 1,
                    opacity: 1,
                }, 1.5);

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
                    duration: 0.75,
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
                });

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
                paused: true
                // onStart: enterLoader,
                // onComplete: leaveLoader
            });


            // function sliderMaster() {
            sliderMasterTimeline
                .add(titleAnimation.play(), 0)
                .add(backgroundImageAnimation.play(), 0.5)
                .add(slideSubTitleAnimation.play(), 0.75)
                .add(slideDescriptionAnimation.play(), 1.25)
                .add(slideBackgroundAnimation.play(), 0.5)
                .add(stackItemAnimation.play(), 0.5)
                // .add(slideImageStackAnimation, 0.75)
                .add(slideLayerAnimation.play(), 1)
                .add(slideImageAnimation.play(), 1)
                .add(slideCtaWrapperdAnimation.play(), 1);
        }


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
    }
};

// const slickSliderElement = document.querySelectorAll('.sliderHero');
// // // Set greensock design/dev tools visibility
// GSDevTools.create();

// $(function bloat () {
//     $('.sliderHero').slick().on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//         // // Use the "nextSlide" variable to find the <img> in the next slide
//         // var nextSlideImg = $("#carousel [data-slick-index='" + nextSlide + "'] img");

//         // // Check if it has a custom "data-gif" attribute
//         // if (nextSlideImg.attr("data-gif")) {
//         //     var gifUrl = nextSlideImg.attr("data-gif");

//         //     // Set the placeholder image to the .gif so it plays from the beginning
//         //     nextSlideImg.attr("src", gifUrl);
//         // }
//         sliderMasterTimeline.play();
//     });
// });


// slider[0].slick.cssTransitions = false;

// $('.slick-active').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     $(".your-class").find('div').removeClass("current-slide");
//     $(".your-class").find('div').eq(nextSlide).addClass("current-slide");
// });

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
// slider.on('afterChange', function (event, slick) {
//     // slideTimeline();
//     setTimeout(function () { slideTimeline(); }, 1000);
//     // sliderMasterTimeline
//     //     .timeScale(1);
//     // }

//     // sliderMasterTimeline.play();


//     // slider.on('init', function () {
//     //     sliderMasterTimeline.play();
//     //     // if ($('.slick-active')) {
//     //     sliderMasterTimeline.reverse();
//     //     sliderMasterTimeline.play();
//     //     // }
//     // });
// });
// slider.on('change', function (event, slick) {
//     // slideTimeline();
//     setTimeout(function () { slideTimeline(); }, 1000);
//     // sliderMasterTimeline
//     //     .timeScale(1);
//     // }

//     // sliderMasterTimeline.play();


//     // slider.on('init', function () {
//     //     sliderMasterTimeline.play();
//     //     // if ($('.slick-active')) {
//     //     sliderMasterTimeline.reverse();
//     //     sliderMasterTimeline.play();
//     //     // }
//     // });
// });
// slider.on('beforeChange', function (event, slick) {
//     // slideTimeline();
//     setTimeout(function () { slideTimeline(); }, 1000);
//     // sliderMasterTimeline
//     //     .timeScale(1);
//     // }

//     // sliderMasterTimeline.play();


//     // slider.on('init', function () {
//     //     sliderMasterTimeline.play();
//     //     // if ($('.slick-active')) {
//     //     sliderMasterTimeline.reverse();
//     //     sliderMasterTimeline.play();
//     //     // }
//     // });
// });

// slider.on('change', function () {
//     // sliderMasterTimeline.play();
//     // if ($('.slick-active')) {
//     sliderMasterTimeline.play();
//     // }
// });
// slider.on('afterChange', function () {
//     // sliderMasterTimeline.play();
//     // if ($('.slick-active')) {
//     sliderMasterTimeline.play();
//     // }
// });
// slider.on('beforeChange', function () {
//     // sliderMasterTimeline.play();
//     // console.log('HEY IM PLAYING');
//     // if ($('.slick-current')) {
//     // sliderMasterTimeline.play();
//     // }
//     sliderMasterTimeline.reversed();
// });
export default customSliders;
