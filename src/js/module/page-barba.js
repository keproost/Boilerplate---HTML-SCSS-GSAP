
import barba from '@barba/core';
// import $ from 'jquery';
import { gsap, ScrollToPlugin, ScrollTrigger, TimelineLite } from 'gsap/all';
// import ScrollTrigger from 'gsap/all';
import scrollAnimations from './gsap/custom-onscroll-animations';
import pageTransitions from './gsap/custom-page-transitions';
import pageLoaders from './gsap/custom-page-loaders';
import textEffects from './gsap/custom-text-effects';
// import filterEffects from './gsap/custom-filter-effects';
import smoothScrolling from './gsap/custom-smooth-scrolling';
// import parallaxAnimations from './gsap/custom-parallax-animations';
// import parallax3d from './gsap/custom-parallax-3d';
import videoAnimations from './gsap/custom-video-animations';
import customFormScripts from './page/custom-formscripts';
import customSliders from './page/custom-slider';
import navbarFullscreen from './page/custom-navbar-fullscreen';
// Barba
// document.addEventListener('DOMContentLoaded', function () {
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

// Fade in content set
// function init() {
//     const initAnimationBody = new TimelineLite({ repeat: 0 });
//     initAnimationBody
//         .from('body', { ease: 'linear', autoAlpha: 0 })
//         .to('body', { ease: 'linear', autoAlpha: 1 });
//     const initAnimationAppContent = new TimelineLite({ repeat: 0 });
//     initAnimationAppContent
//         .from('#app-content', { ease: 'linear', autoAlpha: 0 })
//         .to('#app-content', { ease: 'linear', autoAlpha: 1 });
//     // $('body').toggleClass('loaded');
//     // $('html').css({ 'overflow-x': 'hidden', 'overflow-y': 'auto' });
// }

// window.addEventListener('load', function () {
//     init();
// });


window.addEventListener('DOMContentLoaded', function () {
    // init();
    // window.addEventListener('scroll', function () {

    // });
    barba.init({
        debug: true,
        views: [{
            namespace: 'i3-home',
            beforeOnce: () => {
            },
            afterEnter: () => {
                // pageLoaders.i3logoReveal();
            }
        },
        {
            namespace: 'business',
            // afterEnter: () => {
            //     customSliders.slickSliderHero();
            // },
            // after: () => {
            //     customSliders.slickSliderHero();
            // }
        },
        {
            namespace: 'education',
            // afterEnter: () => {
            //     customSliders.slickSliderHero();
            // },
            // after: () => {
            //     customSliders.slickSliderHero();
            // }
        },
        {
            namespace: 'bookademo',
            beforeEnter: () => {
                customFormScripts.stepFormWizard();
                // customFormScripts.formValidator();
                // customFormScripts.formCheckboxHighlight();
            },
            afterEnter: () => {
                setTimeout(function () { customFormScripts.stepFormWizard(); }, 250);

                // customFormScripts.formValidator();
                // customFormScripts.formCheckboxHighlight();
            }
        },
        // {
        //     namespace: 'poc-parallax-scroll',
        //     afterEnter: () => {
        //         parallaxAnimations();
        //     }
        // },
        // {
        //     namespace: 'poc-panel-fullscreen',
        //     afterEnter: () => {
        //         // goToSection();
        //     }
        // },
        // {
        //     namespace: 'poc-parallax-3d',
        //     afterEnter: () => {
        //         setTimeout(function () { parallax3d(); }, 250);
        //     }
        // }
        ],
        transitions: [
            {
                sync: false,
                leave: ({ current }) => pageTransitions.fadeUpDownLeave(current.container.querySelector('#app')),
                once: ({ next }) => {
                    // pageTransitions.fadeUpDownEnter(next.container.querySelector('#app'));
                },
                enter: ({ next }) => {
                    // pageTransitions.fadeUpDownEnter(next.container.querySelector('#app'));
                },
                afterEnter: () => {
                },
            },
        ],
    });
    barba.hooks.beforeOnce(() => {
        // pageLoaders.i3logoReveal();
        navbarFullscreen.navbarFullscreenInit();
        smoothScrolling.smoothAnchorScroller();
        // pageLoaders.beforeOnceMaskFadeIn();
    });
    barba.hooks.after(() => {
        navbarFullscreen.navbarFullscreenInit();
        // setTimeout(function () { customSliders.slickSliderHero(); }, 250);
    });
    barba.hooks.afterEnter(() => {
        customSliders.slickSliderHero();
        // setTimeout(function () { customSliders.slickSliderHero(); }, 250);

        videoAnimations.videoStartOnEnterRewindOnLeave();
        textEffects.textEffect1();
        textEffects.scrollTextEffectWipeFromLeft();
        textEffects.scrollTextEffect1();
        textEffects.scrollTextEffect2();
        textEffects.scrollTextEffect3();
        textEffects.scrollTextEffect4();
        textEffects.imageStackAnimation();
        scrollAnimations.driftUp1();
        scrollAnimations.driftUp2();
        scrollAnimations.driftUp3();
        scrollAnimations.driftDown1();
        scrollAnimations.growInOnEnter();
        scrollAnimations.fadeInOnEnter();
        scrollAnimations.fadeOutOnLeave();
        scrollAnimations.slideInUpOnEnter();
        scrollAnimations.slideInRightOnEnter();
        // filterEffects.filterEffect1();
        // pageLoaders.beforeOnceMaskFadeIn();
    });
});

// barba.hooks.beforeEnter(() => {
//     navbarFullscreen.navbarFullscreenInit();
// });
// barba.hooks.beforeOnce(() => {
//     navbarFullscreen.navbarFullscreenInit();
// });
// barba.hooks.beforeOnce(() => {
//     // Fade in content upon content loaded
//     // window.addEventListener('load', function () {
//     //     init();
//     // });
//     // navbarFullscreen.navbarFullscreenInit();
//     // pageLoaders.i3logoReveal();
// });
// barba.hooks.once(() => {

// });

// barba.hooks.afterEnter(() => {
//     // scrollAnimations();
//     // ScrollTrigger.refresh(delayPromise(5000));
//     // parallaxAnimations();
//     // ScrollTrigger.refresh();
