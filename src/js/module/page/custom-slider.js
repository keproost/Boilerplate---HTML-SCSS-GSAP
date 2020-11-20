
import $ from 'jquery';
import 'slick-carousel';
import { gsap, GSDevTools, SplitText, Power1, TimelineMax, Power2 } from 'gsap/all';

window.$ = $;
window.jQuery = $;

gsap.registerPlugin(GSDevTools);

const customSliders = {
    slickSliderHero() {
        
        const createTimelines = function(slickSlideObjects) {
            const timelines = [];
            for (let i = 0; i < slickSlideObjects.length; i++) {
                timelines.push(createTimeline(slickSlideObjects[i]));
            }
            return timelines;
        }

        const createTimeline = function(slickSlideObj) {
            const slide = $(slickSlideObj)
            const slideTitle = slide.find('.slideTitle');
            const slideTitleTimeline = gsap.timeline({ paused: true });
            const titleSplitText = new SplitText(slideTitle);
            slideTitleTimeline
                .from(titleSplitText.chars, {
                    duration: 0.50,
                    opacity: 0,
                    y: 100,
                    stagger: { amount: 1.5 },
                    overwrite: false
                });

            const slideSubTitle = slide.find('.slideSubTitle');
            const slideSubTitleTimeline = gsap.timeline({ paused: true });
            slideSubTitleTimeline
                .from(slideSubTitle, {
                    opacity: 0,
                })
                .to(slideSubTitle, {
                    opacity: 1,
                }, 0.75);

            const slideDescription = slide.find('.slideDescription');
            const slideDescriptionTimeline = gsap.timeline({ paused: true });
            slideDescriptionTimeline
                .from(slideDescription, {
                    opacity: 0,
                })
                .to(slideDescription, {
                    opacity: 1,
                });

            const slideCtaWrapper = slide.find('.slideCtaWrapper');
            const slideCtaWrapperdTimeline = gsap.timeline({ paused: true });
            slideCtaWrapperdTimeline
                .from(slideCtaWrapper, {
                    opacity: 0,
                    y: 200
                })
                .to(slideCtaWrapper, {
                    opacity: 1,
                    y: 0
                });

            const slideImage = slide.find('.slideImage');
            const slideImageTimeline = gsap.timeline({ paused: true });
            slideImageTimeline
                .from(slideImage, {
                    opacity: 0,
                    x: 100
                })
                .to(slideImage, {
                    opacity: 1,
                    x: 0,
                });

            const stackItem = slide.find('.stackItem');
            const stackItemTimeline = gsap.timeline({ paused: true });
            stackItemTimeline
                .from(stackItem, {
                    y: '+=20px',
                    yoyo: true,
                    duration: 1,
                    stagger: { amount: 0.5 },
                    opacity: 1,
                    repeat: -1,
                    paused: true,
                    ease: 'power2.easeOut',
                });

            const slideBackgroundImage = slide.find('.backgroundImage');
            const slideBackgroundImageTimeline = gsap.timeline({ paused: true });
            slideBackgroundImageTimeline
                .from(slideBackgroundImage, {
                    opacity: 0,
                    x: 200
                })
                .to(slideBackgroundImage, {
                    opacity: 1,
                    x: 0
                });

            const slideImageStackSlider = slide.find('.imageStackSlider');
            const slideImageStackSliderTimeline = gsap.timeline({ paused: true });
            slideImageStackSliderTimeline
                .from(slideImageStackSlider, {
                    opacity: 0
                })
                .to(slideImageStackSlider, {
                    opacity: 1
                });

            const slideLayer = slide.find('.slideLayer');
            const slideLayerTimeline = gsap.timeline({ paused: true });
            slideLayerTimeline
                .from(slideLayer, {
                    y: -500,
                    duration: 1,
                    stagger: { amount: 0.10 },
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 1,
                    force3D: true,
                    ease: 'easeIn.out(2)',
                });

            const masterTimeline = new TimelineMax({
                ease: defaultEasing,
                autoAlpha: 0,
                paused: true,
            });

            masterTimeline
                .add(slideTitleTimeline.play(), 0)
                .add(slideSubTitleTimeline.play(), 0.75)
                .add(slideBackgroundImageTimeline.play(), 0.75)
                .add(stackItemTimeline.play(), 0.75)
                .add(slideDescriptionTimeline.play(), 1.25)
                .add(slideImageStackSliderTimeline.play(), 1)
                .add(slideLayerTimeline.play(), 1)
                .add(slideImageTimeline.play(), 1.25)
                .add(slideCtaWrapperdTimeline.play(), 1.25);

                masterTimeline
                .timeScale(1);

            return masterTimeline;
        }

        const defaultEasing = Power1.Elastic;

        let allTimelines = [];

        $('.sliderHero').on('init', function (event, slick) {
            allTimelines = createTimelines(slick.$slides);
            allTimelines[0].play();
        });

        const slider = $('.sliderHero').not('.slick-initialized').slick({
            dots: true,
            pauseOnFocus: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,

        })
            .on('afterChange', function (event, slick, currentSlide) {
                allTimelines[currentSlide].play();
            })
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                if (currentSlide !== nextSlide) {
                    allTimelines[nextSlide].seek(0);
                    allTimelines[nextSlide].pause();
                }
            });
    }
};

export default customSliders;
