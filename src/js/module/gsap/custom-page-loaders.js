import { gsap, TimelineLite, Elastic, Power1, GSDevTools, SplitText } from 'gsap/all';

import drawSVG from 'gsap/DrawSVGPlugin';
import $ from 'jquery';

gsap.registerPlugin(drawSVG);
gsap.registerPlugin(GSDevTools);


const pageLoaders = {
    beforeOnceFadeIn() {
        window.$ = $;
        window.jQuery = $;
        const pageLoadDuration = 2;
        const pageLoadEase = 'power5';
        const elementFadeIn = gsap.utils.toArray('page-loader');
        console.log('pageloaderelement', elementFadeIn);
        if (elementFadeIn) {
            return new Promise((resolve) => {
                $('body').toggleClass('loader');
                gsap.from(elementFadeIn, {
                    duration: pageLoadDuration,
                    y: 0,
                    opacity: 1,
                    ease: pageLoadEase,
                });
                gsap
                    .to(elementFadeIn, {
                        duration: pageLoadDuration,
                        ease: pageLoadEase,
                        opacity: 0,
                        y: 0,
                        display: 'none',
                    });
                gsap
                    .to('main', {
                        opacity: 1
                    })
                    .then(resolve());
            });
        }
        return new Promise((resolve) => {
            resolve();
        });
    },
    beforeOnceMaskFadeIn() {
        window.$ = $;
        window.jQuery = $;
        const pageLoadDuration = 1;
        const pageLoadEase = 'power3';
        $('main').addClass('loader page-loader-mask');
        gsap.from('.page-loader-mask', {
            duration: pageLoadDuration,
            y: 0,
            opacity: 0,
            ease: pageLoadEase,
        });
        gsap.to('.page-loader-mask', {
            duration: pageLoadDuration,
            ease: pageLoadEase,
            opacity: 1,
            maskImage: 'radial-gradient(ellipse closest-side,rgba(0,0,0,1), rgba(0,0,0,1))',
            y: 0,
            onComplete() {
                $('.page-loader-mask').toggleClass('loader page-loader-mask');
            }
        });
        gsap.from('main', {
            duration: pageLoadDuration,
            y: 0,
            opacity: 0,
            ease: pageLoadEase,
        });
        gsap.to('main', {
            duration: pageLoadDuration,
            ease: pageLoadEase,
            opacity: 1,
            y: 0,
        });
    },
    i3logoReveal() {
        window.addEventListener('load', function () {
            // Set greensock design/dev tools visibility
            // GSDevTools.create();

            // Get Maincontent container
            const mainContent = document.querySelector('.main-content');

            // Get logoreveal container
            const logoRevealContainer = document.querySelector('.logoreveal');

            // Get progress bar inner
            const progressBarInner = document.querySelector('.revealprogress');

            // Get progress bar container
            const progressBarOutter = document.querySelector('.progress');

            // Get brand container
            const brandContainer = document.querySelector('.brand-wrapper');

            // Get brandSymbol container
            const brandSymbol = document.querySelector('.brand-symbol');

            // Get brandwwordmark container
            const brandWordmark = document.querySelector('.brand-wordmark');

            // Split brandwordmark
            const brandWordmarkSplitText = new SplitText(brandWordmark);

            // Get brandsymbol stroke elements
            const stripePrimaryStroke = document.querySelector('#stripe-primary-stroke');
            const dotPrimaryStroke = document.querySelector('#dot-primary-stroke');
            const stripeSecondaryStroke = document.querySelector('#stripe-secondary-stroke');
            const dotSecondaryStroke = document.querySelector('#dot-secondary-stroke');
            const stripeTertiaryStroke = document.querySelector('#stripe-tertiary-stroke');
            const dotTertiaryStroke = document.querySelector('#dot-tertiary-stroke');

            // Get brandsymbolfill elements
            const stripePrimaryFill = document.querySelector('#stripe-primary-fill');
            const dotPrimaryFill = document.querySelector('#dot-primary-fill');
            const stripeSecondaryFill = document.querySelector('#stripe-secondary-fill');
            const dotSecondaryFill = document.querySelector('#dot-secondary-fill');
            const stripeTertiaryFill = document.querySelector('#stripe-tertiary-fill');
            const dotTertiaryFill = document.querySelector('#dot-tertiary-fill');

            // Init child timelines
            const loadingEnterAnimation = new TimelineLite({ repeat: 0 });
            const mainContentAnimation = new TimelineLite({ repeat: 0 });
            const strokeAnimation = new TimelineLite({ repeat: 0 });
            const strokeEnterAnimation = new TimelineLite({ repeat: 0 });
            const fillAnimation = new TimelineLite({ repeat: 0 });
            const brandWordmarkAnimation = new TimelineLite({ repeat: 0 });
            const logoBounceAnimation = new TimelineLite({ repeat: 0 });
            const progressAnimation = new TimelineLite({ repeat: 0 });
            const brandOutAnimation = new TimelineLite({ repeat: 0 });
            const loadingLeaveAnimation = new TimelineLite({ repeat: 0 });
            const progressOutAnimation = new TimelineLite({ repeat: 0 });

            function enterLoader() {
                // $('body').addClass('loader');
                $('#app-content').addClass('loading');
                $('.logoreveal').toggleClass('invisible');
                console.log('logoreveal animation starting');
            }

            function leaveLoader() {
                $('#app-content').removeClass('loading');
                $('.logoreveal').addClass('d-none');
                // $('#app-content').addClass('d-flex');
                console.log('logoreveal animation ended');
            }
            // Init master timesline
            const masterTimeline = new TimelineLite({
                delay: 0,
                onStart: enterLoader,
                onComplete: leaveLoader
            });
            masterTimeline
                .add(loadingEnterAnimation)
                .add(progressAnimation, masterTimeline.duration())
                .add(strokeEnterAnimation, 0)
                .add(strokeAnimation, 0)
                .add(fillAnimation, 0.5)
                .add(brandWordmarkAnimation, 1.75)
                .add(logoBounceAnimation, 2)
                .add(progressOutAnimation, 3)
                .add(brandOutAnimation, 3)
                .add(loadingLeaveAnimation, 3.50);
            // .add(mainContentAnimation, 3.85);

            // manipulates global animation speed
            masterTimeline
                .timeScale(1.5);

            // Define global easing
            const animationEasing1 = Elastic.easeInOut.config(1, 1);
            const animationEasing2 = Power1.Elastic;

            // Define child timelines
            loadingEnterAnimation
                .staggerFromTo(logoRevealContainer, 1, {
                    opacity: 1,
                }, {
                    opacity: 1,
                });

            strokeAnimation
                .staggerFromTo([
                    stripePrimaryStroke,
                    dotPrimaryStroke,
                    stripeSecondaryStroke,
                    dotSecondaryStroke,
                    stripeTertiaryStroke,
                    dotTertiaryStroke], 0.8, {
                    opacity: 0,
                    drawSVG: '0%',
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    ease: animationEasing2,
                }, 0.15);

            strokeEnterAnimation
                .staggerFromTo([
                    stripePrimaryStroke,
                    dotPrimaryStroke,
                    stripeSecondaryStroke,
                    dotSecondaryStroke,
                    stripeTertiaryStroke,
                    dotTertiaryStroke], 1, {

                    scale: 0.2,
                    y: -20,
                    rotate: -45,
                }, {
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    ease: animationEasing2,
                });

            fillAnimation
                .staggerFromTo([
                    stripePrimaryFill,
                    dotPrimaryFill,
                    stripeSecondaryFill,
                    dotSecondaryFill,
                    stripeTertiaryFill,
                    dotTertiaryFill], 2.75, {
                    opacity: 0,
                    // scaleX: 0,
                    scaleY: 0,
                    transformOrigin: 'center center',
                }, {
                    opacity: 1,
                    // scaleX: 1,
                    scaleY: 1,
                    ease: animationEasing1,
                    transformOrigin: 'center center',
                }, 0.070);

            logoBounceAnimation
                .from(brandSymbol, {
                    y: -20,

                })
                .to(brandSymbol, {
                    y: 0,
                    ease: animationEasing1,
                });

            progressAnimation
                .staggerFromTo(progressBarInner, 5, {
                    scaleX: 0,
                    transformOrigin: 'center center'
                }, {
                    scaleX: 1,
                    transformOrigin: 'center center',
                    ease: 'slowmo',
                }, 0.010);

            brandWordmarkAnimation
                .from(brandWordmarkSplitText.chars, {
                    duration: 0.75,
                    opacity: 0,
                    y: 100,
                    stagger: { amount: 0.2 },
                    ease: animationEasing2,
                    overwrite: 'auto'
                });

            brandOutAnimation
                .from(brandContainer, {
                })
                .to(brandContainer, {
                    scale: 0,
                    opacity: 0,
                    ease: 'expo',
                });

            progressOutAnimation
                .from(progressBarOutter, {
                    transformOrigin: 'center center',
                    // width: 150,
                    height: 3,
                })
                .to(progressBarOutter, {
                // y: 50,
                    opacity: 0,
                    scaleX: 2,
                    // scaleY: 13000,
                    // ease: 'power1',
                    transformOrigin: 'center center',
                });

            loadingLeaveAnimation
                .from(logoRevealContainer, {
                    opacity: 1,
                })
                .to(logoRevealContainer, {
                    opacity: 0,
                    ease: animationEasing2
                });


            mainContentAnimation
                .to(mainContent, {
                    opacity: 1,
                });

            // // Function hide loader and reveal content
            // function showMainContent() {
            //     gsap.to(mainContent, {
            //         opacity: 1,
            //     });
            // }
            // // Leave function
        });
    }
};

export default pageLoaders;
