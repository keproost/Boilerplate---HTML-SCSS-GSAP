
import barba from '@barba/core';
// import $ from 'jquery';
import { gsap, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
// import ScrollTrigger from 'gsap/all';
// import pageTransitions from './gsap/custom-page-transitions';
// import parallaxAnimations from './gsap/custom-parallax-animations';
// import parallax3d from './gsap/custom-parallax-3d';
import scrollAnimations from './gsap/custom-onscroll-animations';
import pageLoaders from './gsap/custom-page-loaders';
import textEffects from './gsap/custom-text-effects';
// import filterEffects from './gsap/custom-filter-effects';
import smoothScrolling from './gsap/custom-smooth-scrolling';
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
    barba.init({
        debug: true,
        views: [{
            namespace: 'i3-home',
            beforeOnce: () => {

            },
            afterEnter: () => {

            }
        },
        {
            namespace: 'business',
            afterEnter: () => {

            },
            after: () => {

            }
        },
        {
            namespace: 'education',
            afterEnter: () => {

            },
            after: () => {

            }
        },
        {
            namespace: 'bookademo',
            beforeEnter: () => {
                customFormScripts.stepFormWizard();
            },
            afterEnter: () => {
                // customFormScripts.formValidator();
                customFormScripts.formCheckboxHighlight();
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
                leave: ({ current }) => {
                // pageTransitions.fadeUpDownLeave(current.container.querySelector('#app'));
                },
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
        pageLoaders.i3logoReveal();
        navbarFullscreen.navbarFullscreenInit();
    });
    barba.hooks.after(() => {
        navbarFullscreen.navbarFullscreenInit();
    });
    barba.hooks.before(() => {
    });
    barba.hooks.afterEnter(() => {
        customSliders.slickSliderHero();
        smoothScrolling.smoothAnchorScroller();
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
        pageLoaders.beforeOnceMaskFadeIn();
    });
});
