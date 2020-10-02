
import $ from 'jquery';
import { gsap, GSDevTools, SplitText, Power1, TimelineMax } from 'gsap/all';

gsap.registerPlugin(GSDevTools);

const customSliders = {
    slickSliderHero() {
        const slickSliderElement = document.querySelectorAll('.sliderHero');
        // // // Set greensock design/dev tools visibility
        // GSDevTools.create();

        const slideTitle = document.querySelectorAll('.slideTitle');
        const slideTitleSplitText = new SplitText(slideTitle);
        const titleAnimation = gsap.timeline({ });

        const slideDescription = document.querySelectorAll('.slideDescription');
        const slideDescriptionAnimation = gsap.timeline({ });

        const slideProductTitle = document.querySelectorAll('.slideProductTitle');
        const slideProductTitleAnimation = gsap.timeline({ });

        const slideImage = document.querySelectorAll('.slideImage');
        const slideImageAnimation = gsap.timeline({ });

        const slideBackground = document.querySelectorAll('.slideBackground');
        const slideBackgroundAnimation = gsap.timeline({ });

        const slideCtaWrapper = document.querySelectorAll('.slideCtaWrapper');
        const slideCtaWrapperdAnimation = gsap.timeline({ });

        const animationEasing = Power1.Elastic;

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
                x: 200
            })
            .to(slideImage, {
                opacity: 1,
                x: 0
            });

        slideProductTitleAnimation
            .from(slideProductTitle, {
                opacity: 0,

            })
            .to(slideProductTitle, {
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
            // onStart: enterLoader,
            // onComplete: leaveLoader
        });
        sliderMasterTimeline
            .add(titleAnimation, 0)
            .add(slideProductTitleAnimation, 0.75)
            .add(slideDescriptionAnimation, 1.25)
            .add(slideBackgroundAnimation, 0.75)
            .add(slideImageAnimation, 1.25)
            .add(slideCtaWrapperdAnimation, 1.25);

        // manipulates global animation speed
        sliderMasterTimeline
            .timeScale(1);

        function createSlick() {
            $('.sliderHero').slick({
                dots: true,
                // autoplay: true,
                // autoplaySpeed: 2000,
                pauseOnFocus: true,
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                touchMove: true,
                slidesToScroll: 1,
                draggable: true,
                responsive: [{
                    breakpoint: 500,
                    settings: {
                        dots: false,
                        arrows: false,
                        infinite: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }]
            })
                // .on('init', function () {
                //     sliderMasterTimeline.play();
                // })
                .on('afterChange', function () {
                    sliderMasterTimeline.play();
                })
                .on('beforeChange', function () {
                    sliderMasterTimeline.restart();
                });
        }
        if (slickSliderElement) {
            createSlick();
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
