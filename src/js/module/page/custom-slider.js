
import $ from 'jquery';
import 'slick-carousel';
import { gsap, GSDevTools, SplitText, Power1, TimelineMax, Power2 } from 'gsap/all';

window.$ = $;
window.jQuery = $;

gsap.registerPlugin(GSDevTools);

const customSliders = {
    slickSliderHero() {
        const getAnimationSettings = function () {
            const easing = Power1.Elastic;
            return {
                easing
            };
        };

        const getAnimationItems = function () {
            // Find all items
            const slideTitle = document.querySelectorAll('slideTitle');
            const slideDescription = document.querySelectorAll('.slideDescription');
            const slideSubTitle = document.querySelectorAll('.slideSubTitle');
            const slideImage = document.querySelectorAll('.slideImage');
            const stackItem = document.querySelectorAll('.stackItem');
            const slideBackground = document.querySelectorAll('.backgroundImage');
            const slideCtaWrapper = document.querySelectorAll('.slideCtaWrapper');
            const slideImageStackContainer = document.querySelectorAll('.imageStackSlider');
            const slideLayers = document.querySelectorAll('.slideLayer');

            // // Merge all elements into one array
            const allSlidesAllElements = [
                slideTitle,
                slideDescription,
                slideSubTitle,
                slideImage,
                stackItem,
                slideBackground,
                slideCtaWrapper,
                slideImageStackContainer,
                slideLayers
            ];

            // Find active slide
            const activeSlide = $('.slick-slide.slick-current.slick-active');

            // Find items in current slide
            const activeSlideTitle = activeSlide.find('.slideTitle');
            const activeSlideDescription = activeSlide.find('.slideDescription');
            const activeSlideSubTitle = activeSlide.find('.slideSubTitle');
            const activeSlideImage = activeSlide.find('.slideImage');
            const activeStackItem = activeSlide.find('.stackItem');
            const activeSlideBackground = activeSlide.find('.backgroundImage');
            const activeSlideCtaWrapper = activeSlide.find('.slideCtaWrapper');
            const activeSlideImageStackContainer = activeSlide.find('.imageStackSlider');
            const activeSlideLayers = activeSlide.find('.slideLayer');


            const allActiveSlideAllElements = [
                activeSlideTitle,
                activeSlideDescription,
                activeSlideSubTitle,
                activeSlideImage,
                activeStackItem,
                activeSlideBackground,
                activeSlideCtaWrapper,
                activeSlideImageStackContainer,
                activeSlideLayers
            ];

            // Return allelements and active elements
            return {
                allActiveSlideAllElements,
                allSlidesAllElements,
                activeSlide,
                activeSlideTitle,
                activeSlideSubTitle,
                activeSlideDescription,
                activeSlideCtaWrapper,
                activeSlideImage,
                activeStackItem,
                activeSlideBackground,
                activeSlideImageStackContainer,
                activeSlideLayers,
            };
        };

        const setAnimationTimelines = function () {
            const animationItems = getAnimationItems();

            const titleTimeline = gsap.timeline({ paused: true });
            const activeSlideTitleSplitText = new SplitText(animationItems.activeSlideTitle);
            titleTimeline
                .from(activeSlideTitleSplitText.chars, {
                    duration: 0.50,
                    opacity: 0,
                    y: 100,
                    stagger: { amount: 1.5 },
                    overwrite: false
                });

            const slideSubTitleTimeline = gsap.timeline({ paused: true });
            slideSubTitleTimeline
                .from(animationItems.activeSlideSubTitle, {
                    opacity: 0,

                })
                .to(animationItems.activeSlideSubTitle, {
                    opacity: 1,
                }, 0.75);

            const slideDescriptionTimeline = gsap.timeline({ paused: true });
            slideDescriptionTimeline
                .from(animationItems.activeSlideDescription, {
                    opacity: 0,
                })
                .to(animationItems.activeSlideDescription, {
                    opacity: 1,
                });

            const slideCtaWrapperdTimeline = gsap.timeline({ paused: true });
            slideCtaWrapperdTimeline
                .from(animationItems.activeSlideCtaWrapper, {
                    opacity: 0,
                    y: 200
                })
                .to(animationItems.activeSlideCtaWrapper, {
                    opacity: 1,
                    y: 0
                });

            const slideImageTimeline = gsap.timeline({ paused: true });
            slideImageTimeline
                .from(animationItems.activeSlideImage, {
                    opacity: 0,
                    x: 100
                })
                .to(animationItems.activeSlideImage, {
                    opacity: 1,
                    x: 0,
                });

            const stackItemTimeline = gsap.timeline({ paused: true });
            stackItemTimeline
                .from(animationItems.activeStackItem, {
                    y: '+=20px',
                    yoyo: true,
                    duration: 1,
                    stagger: { amount: 0.5 },
                    opacity: 1,
                    repeat: -1,
                    paused: true,
                    ease: 'power2.easeOut',
                });

            const slideBackgroundTimeline = gsap.timeline({ paused: true });
            slideBackgroundTimeline
                .from(animationItems.activeSlideBackground, {
                    opacity: 0,
                    x: 200
                })
                .to(animationItems.activeSlideBackground, {
                    opacity: 1,
                    x: 0
                });

            const slideImageStackTimeline = gsap.timeline({ paused: true });
            slideImageStackTimeline
                .from(animationItems.activeSlideImageStackContainer, {
                // rotateY: 110,
                // rotateZ: 15,
                // ease: 'easeIn.out(2)',
                    opacity: 0
                })
                .to(animationItems.activeSlideImageStackContainer, {
                    opacity: 1
                });

            const slideLayerTimeline = gsap.timeline({ paused: true });
            slideLayerTimeline
                .from(animationItems.activeSlideLayers, {
                    // x: 500,
                    y: -500,
                    duration: 1,
                    stagger: { amount: 0.10 },
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 1,
                    force3D: true,
                    ease: 'easeIn.out(2)',
                    // transformOrigin: 'center center'
                });

            return {
                titleTimeline,
                slideDescriptionTimeline,
                slideSubTitleTimeline,
                slideImageTimeline,
                stackItemTimeline,
                slideBackgroundTimeline,
                slideCtaWrapperdTimeline,
                slideImageStackTimeline,
                slideLayerTimeline,
            };
        };

        const setSlideTimeline = function () {
            const animationItems = getAnimationItems();
            const animationItemsArray = gsap.utils.toArray(animationItems.allSlidesAllElements);
            animationItemsArray.forEach((animationItem) => {
                const slideTImeline = gsap.timeline({});
                slideTImeline
                    .set(animationItem, {
                        opacity: 0,
                    });
            });
        };

        const setMasterTimeline = function () {
            const animationSettings = getAnimationSettings();
            const animationTimelines = setAnimationTimelines();
            const sliderMasterTimeline = new TimelineMax({
                // delay: 0,
                ease: animationSettings.ease,
                autoAlpha: 0,
                paused: true,
                // onStart: enterLoader,
                // onComplete: leaveLoader
            });
            sliderMasterTimeline
                // .add(setSlideTimeline())
                .add(animationTimelines.titleTimeline.play(), 0)
                .add(animationTimelines.slideSubTitleTimeline.play(), 0.75)
                .add(animationTimelines.slideBackgroundTimeline.play(), 0.75)
                .add(animationTimelines.stackItemTimeline.play(), 0.75)
                .add(animationTimelines.slideDescriptionTimeline.play(), 1.25)
                .add(animationTimelines.slideImageStackTimeline.play(), 1)
                .add(animationTimelines.slideLayerTimeline.play(), 1)
                .add(animationTimelines.slideImageTimeline.play(), 1.25)
                .add(animationTimelines.slideCtaWrapperdTimeline.play(), 1.25);

            // manipulates global animation speed
            sliderMasterTimeline
                .timeScale(1);

            return sliderMasterTimeline;
        };


        // const hideElements = function () {
        //     const localAnimationItems = getAnimationItems();
        //     for (let index = 0; index < localAnimationItems.allSlidesAllElements.length; index++) {
        //         const list = localAnimationItems.allSlidesAllElements[index];
        //         for (let elementIndex = 0; elementIndex < list.length; elementIndex++) {
        //             const element = list[elementIndex];
        //             element.style.opacity = 0;
        //         }
        //     }
        // };

        // const showElements = function () {
        //     const localAnimationItems = getAnimationItems();
        //     for (let index = 0; index < localAnimationItems.allSlidesAllElements.length; index++) {
        //         const list = localAnimationItems.allSlidesAllElements[index];
        //         for (let elementIndex = 0; elementIndex < list.length; elementIndex++) {
        //             const element = list[elementIndex];
        //             element.style.opacity = 1;
        //         }
        //     }
        // };

        // const showActiveElements = function () {
        //     const localAnimationItems = getAnimationItems();
        //     for (let index = 0; index < localAnimationItems.allActiveSlideAllElements.length; index++) {
        //         const list = localAnimationItems.allActiveSlideAllElements[index];
        //         console.log('actieve lijst to show', list);
        //         for (let elementIndex = 0; elementIndex < list.length; elementIndex++) {
        //             const element = list[elementIndex];
        //             console.log('actief element to show', element);
        //             $(element).fadeTo(0, 1);
        //         }
        //     }
        // };

        // const hideActiveElements = function () {
        //     const localAnimationItems = getAnimationItems();
        //     for (let index = 0; index < localAnimationItems.allActiveSlideAllElements.length; index++) {
        //         const list = localAnimationItems.allActiveSlideAllElements[index];
        //         console.log('actieve lijst to hide', list);
        //         for (let elementIndex = 0; elementIndex < list.length; elementIndex++) {
        //             const element = list[elementIndex];
        //             console.log('actief element to hide', element);
        //             $(element).fadeTo(0, 0);
        //             // element.hide();
        //         }
        //     }
        // };

        // setSlideTimeline();
        // hideElements();

        // const setSlider = function () {
        // $(function () {
        $('.sliderHero').on('init', function () {
            // showActiveElements();
            // setInitialTimeline();
            // $(animationItems.allActiveSlideAllElements).show();
            const masterTimeline = setMasterTimeline();
            masterTimeline.play();
        });

        // const slider = $('.sliderHero').slick({
        const slider = $('.sliderHero').not('.slick-initialized').slick({
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
            .on('afterChange', function () {
                // showElements();
                // showActiveElements();
                // $(animationItems.allActiveSlideAllElements).show();
                const masterTimeline = setMasterTimeline();
                masterTimeline.play();
            })
            .on('beforeChange', function () {
                // hideElements();
                // hideActiveElements();
                //  $(animationItems.allActiveSlideAllElements).hide();
                const masterTimeline = setMasterTimeline();
                masterTimeline.restart();
            });

        // const timeline = createMasterTimeline();
        // timeline.seek(0);
        // hideActiveSlide();
        // sliderMasterTimeline.restart();
        // });
        // if ($('#sliderHero').hasClass('scrollNavigation')) {
        //     slider.on('wheel', (function (e) {
        //         e.preventDefault();

        //         if (e.originalEvent.deltaY < 0) {
        //             $(this).slick('slickPrev');
        //         } else {
        //             $(this).slick('slickNext');
        //         }ation
        //     }));
        // }
        // };

        // setSlider();


        // master timeline resets all progressBars to scaleX:0
        // masterTimeline.set(progressBars, {scaleX:0, transformOrigin:"left"})
        // .add(box1Timeline)
        // .add(box2Timeline)
        // .add(box3Timeline)


        // });
    }

    // slickSliderHero() {
    //     // const slickSliderElement = document.querySelectorAll('.sliderHero');
    //     // // // Set greensock design/dev tools visibility
    //     // GSDevTools.create();

    //     const hideActiveSlide = function () {
    //         const slide = $('.slick-slide.slick-current.slick-active');
    //         slide.hide();
    //     };


    //     const createTimeline = function () {
    //         const currentSlide = $('.slick-slide.slick-current.slick-active');
    //         currentSlide.show();
    //         console.log('mycurrentslider', currentSlide);

    //         const slideTitle = currentSlide.find('.slideTitle');
    //         const slideTitleSplitText = new SplitText(slideTitle);
    //         const titleAnimation = gsap.timeline({ paused: true });

    //         const slideDescription = currentSlide.find('.slideDescription');
    //         const slideDescriptionAnimation = gsap.timeline({ paused: true });
    //         console.log('description logged', slideDescriptionAnimation);

    //         const slideSubTitle = currentSlide.find('.slideSubTitle');
    //         const slideSubTitleAnimation = gsap.timeline({ paused: true });

    //         const slideImage = currentSlide.find('.slideImage');
    //         const slideImageAnimation = gsap.timeline({ paused: true });

    //         const stackItem = currentSlide.find('.stackItem');
    //         const stackItemAnimation = gsap.timeline({ paused: true });

    //         const slideBackground = currentSlide.find('.sliderBackground');
    //         const slideBackgroundAnimation = gsap.timeline({ paused: true });

    //         const slideCtaWrapper = currentSlide.find('.slideCtaWrapper');
    //         const slideCtaWrapperdAnimation = gsap.timeline({ paused: true });

    //         const slideImageStackContainer = currentSlide.find('.imageStackSlider');
    //         const slideImageStackAnimation = gsap.timeline({ paused: true });

    //         const slideLayers = currentSlide.find('.slideLayer');
    //         const slideLayerAnimation = gsap.timeline({ paused: true });

    //         const animationEasing = Power1.Elastic;

    //         slideLayerAnimation
    //             .staggerFrom(slideLayers, 1, {
    //             // x: 500,
    //                 y: -500,
    //                 scaleX: 0,
    //                 scaleY: 0,
    //                 opacity: 0,
    //                 force3D: true,
    //                 ease: 'easeIn.out(2)',
    //             // transformOrigin: 'center center'
    //             }, 0.10);

    //         slideImageStackAnimation
    //             .from(slideImageStackContainer, 0.50, {
    //             // rotateY: 110,
    //             // rotateZ: 15,
    //             // ease: 'easeIn.out(2)',
    //             });

    //         titleAnimation
    //             .from(slideTitleSplitText.chars, {
    //                 duration: 0.50,
    //                 opacity: 0,
    //                 y: 100,
    //                 stagger: { amount: 1.5 },
    //                 overwrite: 'auto'
    //             });

    //         slideDescriptionAnimation
    //             .from(slideDescription, {
    //                 opacity: 0,
    //             })
    //             .to(slideDescription, {
    //                 opacity: 1,
    //             });

    //         slideImageAnimation
    //             .from(slideImage, {
    //                 opacity: 0,
    //                 x: 100
    //             })
    //             .to(slideImage, {
    //                 opacity: 1,
    //                 x: 0,
    //             });

    //         stackItemAnimation
    //             .staggerFrom(stackItem, 1, {
    //                 y: '+=20px',
    //                 yoyo: true,
    //                 repeat: -1,
    //                 paused: true,
    //                 ease: Power2.easeOut,
    //             }, 0.5);

    //         slideSubTitleAnimation
    //             .from(slideSubTitle, {
    //                 opacity: 0,

    //             })
    //             .to(slideSubTitle, {
    //                 opacity: 1,
    //             }, 0.75);

    //         slideBackgroundAnimation
    //             .from(slideBackground, {
    //                 opacity: 0,
    //                 x: 200
    //             })
    //             .to(slideBackground, {
    //                 opacity: 1,
    //                 x: 0
    //             });

    //         slideCtaWrapperdAnimation
    //             .from(slideCtaWrapper, {
    //                 opacity: 0,
    //                 y: 200
    //             })
    //             .to(slideCtaWrapper, {
    //                 opacity: 1,
    //                 y: 0
    //             });

    //         const sliderMasterTimeline = new TimelineMax({
    //             delay: 0,
    //             autoAlpha: 0,
    //             ease: animationEasing,
    //             // onStart: enterLoader,
    //             // onComplete: leaveLoader
    //         });
    //         sliderMasterTimeline
    //             .add(titleAnimation.play(), 0)
    //             .add(slideSubTitleAnimation.play(), 0.75)
    //             .add(slideBackgroundAnimation.play(), 0.75)
    //             .add(stackItemAnimation.play(), 0.75)
    //             .add(slideDescriptionAnimation.play(), 1.25)
    //             // .add(slideImageStackAnimation, 0.75)
    //             .add(slideLayerAnimation.play(), 1)
    //             .add(slideImageAnimation.play(), 1.25)
    //             .add(slideCtaWrapperdAnimation.play(), 1.25);

    //         // manipulates global animation speed
    //         sliderMasterTimeline
    //             .timeScale(1);

    //         return sliderMasterTimeline;
    //     };

    //     // => slick slider aanmaken .slick()
    //     // op het resultaat van .click => events defineren => hebben animatietimeline nodig
    //     // => animatietimeline maken => elementen en animaties nodig
    //     // => elementen zijn bij page load dal beschikbaar
    //     // => queryselector op elementen werkt maar we kunnen niet active slide selecteren geen child support
    //     // => jquery wel child support maar vindt elementen niet (ofwel pas na jquery.ready)

    //     // $(function () {
    //     $('.sliderHero').on('init', function (event, slick) {
    //         const masterTimeline = createTimeline();
    //         masterTimeline.play();
    //     });

    //     const slider = $('.sliderHero').slick({
    //         // const slider = $('.sliderHero').not('.slick-initialized').slick({
    //         dots: true,
    //         // autoplay: true,
    //         // autoplaySpeed: 10000,
    //         pauseOnFocus: false,
    //         arrows: true,
    //         infinite: false,
    //         speed: 500,
    //         slidesToShow: 1,
    //         // touchMove: false,
    //         // cssEase: 'linear',
    //         slidesToScroll: 1,
    //         // centerMode: true,
    //         // waitForAnimate: false,
    //         // useTransform: false,
    //         // draggable: true,
    //         // variableWidth: true,
    //         // responsive: [{
    //         //     breakpoint: 500,
    //         //     settings: {
    //         //         dots: false,
    //         //         arrows: false,
    //         //         infinite: false,
    //         //         slidesToShow: 2,
    //         //         slidesToScroll: 2
    //         //     }
    //         // }]
    //     })
    //     // .on('change', function () {
    //     //     sliderMasterTimeline.play();
    //     // })
    //         .on('afterChange', function () {
    //             const masterTimeline = createTimeline();
    //             masterTimeline.restart();
    //             // const timeline = createTimeline();
    //             masterTimeline.play();
    //             // sliderMasterTimeline.play();
    //         })
    //         .on('beforeChange', function () {
    //             // const timeline = createTimeline();
    //             // timeline.seek(0);
    //             // hideActiveSlide();
    //             // sliderMasterTimeline.restart();
    //         });
    //     // });

    //     // if ($('#sliderHero').hasClass('scrollNavigation')) {
    //     //     slider.on('wheel', (function (e) {
    //     //         e.preventDefault();

    //     //         if (e.originalEvent.deltaY < 0) {
    //     //             $(this).slick('slickPrev');
    //     //         } else {
    //     //             $(this).slick('slickNext');
    //     //         }
    //     //     }));
    //     // }


    //     // const slideTitle = $('.slick-active > slideTitle');
    //     // console.log(slideTitle);
    //     // const activeSlide = $('.slick-active');
    //     // const slideTitle = $('.slideTitle').find(activeSlide);
    //     // const slideTitle = $('.slick-active < .slideTitle');
    //     // const slideTitle = $('#slick-slide00').children('.slideTitle');
    //     // alert(slideTitle.length);
    //     // const slideTitle = document.querySelectorAll('.slideTitle');
    //     // const brandWrapper = $('.brand-wrapper').hide();
    //     // console.log('brandWrapper', brandWrapper);

    //     // const slideTitle = slickCurrent.find('.slideTitle');
    //     // console.log('slideTitle', slideTitle);


    //     // const slideTitle = document.querySelectorAll('slideTitle');
    //     // const slideTitleSplitText = new SplitText(slideTitle);
    //     // const titleAnimation = gsap.timeline({ paused: true });

    //     // const slideDescription = document.querySelectorAll('.slideDescription');
    //     // const slideDescriptionAnimation = gsap.timeline({ paused: true });

    //     // const slideSubTitle = document.querySelectorAll('.slideSubTitle');
    //     // const slideSubTitleAnimation = gsap.timeline({ paused: true });

    //     // const slideImage = document.querySelectorAll('.slideImage');
    //     // const slideImageAnimation = gsap.timeline({ paused: true });

    //     // const stackItem = document.querySelectorAll('.stackItem');
    //     // const stackItemAnimation = gsap.timeline({ paused: true });

    //     // const slideBackground = document.querySelectorAll('.sliderBackground');
    //     // const slideBackgroundAnimation = gsap.timeline({ paused: true });

    //     // const slideCtaWrapper = document.querySelectorAll('.slideCtaWrapper');
    //     // const slideCtaWrapperdAnimation = gsap.timeline({ paused: true });

    //     // const slideImageStackContainer = document.querySelectorAll('.imageStackSlider');
    //     // const slideImageStackAnimation = gsap.timeline({ paused: true });

    //     // const slideLayers = document.querySelectorAll('.slideLayer');
    //     // const slideLayerAnimation = gsap.timeline({ paused: true });


    //     // Init master timesline


    //     // slider[0].slick.cssTransitions = false;


    //     // Slide on scrol

    //     // function scrollingSliderResponsive() {
    //     //     const viewportWidth = $(window).width();
    //     //     console.log(viewportWidth);
    //     //     if (viewportWidth <= 500) {
    //     //         // max-width 500px
    //     //         // actions here...
    //     //         // red();
    //     //     } else if (viewportWidth > 500 && viewportWidth <= ) {
    //     //         // max-width 850px
    //     //         // actions here...
    //     //         // orange();
    //     //     } else {

    //     //     }
    //     // }

    //     // if ($(window).width() >= 568) { // or any number you like

    //     // }


    //     // Now it will not throw error, even if called multiple times.
    //     // $(window).on('resize', createSlick);
    //     // On before slide change
    //     // $('.sliderHero').on('init', function (event, slick, currentSlide, nextSlide) {
    //     //     sliderMasterTimeline.play();
    //     // });


    //     // /SLICK SLIDER EXAMPLE WITH CUSTOM GSAP
    //     // const $slider = $('.sliderHero');

    //     // // const $slickTrack = $('.slick-track');
    //     // // const $slickCurrent = $('.slick-current');

    //     // const slideDuration = 600;

    //     // // RESET ANIMATIONS
    //     // // On init slide change
    //     // $slider.on('init', function () {
    //     //     TweenMax.to($('.slick-track'), 0.9, {
    //     //         marginLeft: 0
    //     //     });
    //     //     TweenMax.to($('.slick-active'), 0.9, {
    //     //         x: 0,
    //     //         zIndex: 2
    //     //     });
    //     // });
    //     // // On before slide change
    //     // $slider.on('beforeChange', function () {
    //     //     TweenMax.to($('.slick-track'), 0.9, {
    //     //         marginLeft: 0
    //     //     });
    //     //     TweenMax.to($('.slick-active'), 0.9, {
    //     //         x: 0
    //     //     });
    //     // });

    //     // // On after slide change
    //     // $slider.on('afterChange', function () {
    //     //     TweenMax.to($('.slick-track'), 0.9, {
    //     //         marginLeft: 0
    //     //     });
    //     //     $('.slick-slide').css('z-index', '1');
    //     //     TweenMax.to($('.slick-active'), 0.9, {
    //     //         x: 0,
    //     //         zIndex: 2
    //     //     });
    //     // });

    //     // // SLICK INIT
    //     // $slider.slick({
    //     //     speed: slideDuration,
    //     //     dots: true,
    //     //     waitForAnimate: true,
    //     //     useTransform: true,
    //     //     cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
    //     // });

    //     // // PREV
    //     // $('.slick-prev').on('mouseenter', function () {
    //     //     TweenMax.to($('.slick-track'), 0.6, {
    //     //         marginLeft: '180px',
    //     //         ease: Quad.easeOut
    //     //     });
    //     //     TweenMax.to($('.slick-current'), 0.6, {
    //     //         x: -100,
    //     //         ease: Quad.easeOut
    //     //     });
    //     // });

    //     // $('.slick-prev').on('mouseleave', function () {
    //     //     TweenMax.to($('.slick-track'), 0.4, {
    //     //         marginLeft: 0,
    //     //         ease: Sine.easeInOut
    //     //     });
    //     //     TweenMax.to($('.slick-current'), 0.4, {
    //     //         x: 0,
    //     //         ease: Sine.easeInOut
    //     //     });
    //     // });

    //     // // NEXT
    //     // $('.slick-next').on('mouseenter', function () {
    //     //     TweenMax.to($('.slick-track'), 0.6, {
    //     //         marginLeft: '-180px',
    //     //         ease: Quad.easeOut
    //     //     });
    //     //     TweenMax.to($('.slick-current'), 0.6, {
    //     //         x: 100,
    //     //         ease: Quad.easeOut
    //     //     });
    //     // });

    //     // $('.slick-next').on('mouseleave', function () {
    //     //     TweenMax.to($('.slick-track'), 0.4, {
    //     //         marginLeft: 0,
    //     //         ease: Quad.easeInOut
    //     //     });
    //     //     TweenMax.to($('.slick-current'), 0.4, {
    //     //         x: 0,
    //     //         ease: Quad.easeInOut
    //     //     });
    //     // });
    // }
};

export default customSliders;
