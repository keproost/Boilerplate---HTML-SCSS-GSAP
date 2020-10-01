
import barba from '@barba/core';
// import $ from 'jquery';
import { gsap, ScrollToPlugin, ScrollTrigger, TimelineLite } from 'gsap/all';
// import ScrollTrigger from 'gsap/all';
import scrollAnimations from './gsap/custom-onscroll-animations';
import pageTransitions from './gsap/custom-page-transitions';
import pageLoaders from './gsap/custom-page-loaders';
import textEffects from './gsap/custom-text-effects';
import filterEffects from './gsap/custom-filter-effects';
import smoothScrolling from './gsap/custom-smooth-scrolling';
import parallaxAnimations from './gsap/custom-parallax-animations';
import parallax3d from './gsap/custom-parallax-3d';
import videoAnimations from './gsap/custom-video-animations';
import customFormScripts from './page/custom-formscripts';
import navbarFullscreen from './page/custom-navbar-fullscreen';

// Barba
// document.addEventListener('DOMContentLoaded', function () {
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

// Fade in content set
function init() {
    const initAnimation = new TimelineLite({ repeat: 0 });
    initAnimation
        .from('body', { ease: 'linear', autoAlpha: 0 })
        .to('body', { ease: 'linear', autoAlpha: 1 });
}

window.addEventListener('load', function () {
    init();
});

barba.init({
    debug: true,
    views: [{
        namespace: 'poc-panel-fullscreen',
        afterEnter: () => {
            // goToSection();
        }
    },
    {
        namespace: 'poc-parallax-3d',
        afterEnter: () => {
            setTimeout(function () { parallax3d(); }, 250);
        }
    },
    {
        namespace: 'business',
        afterEnter: () => {
            // textEffects.imageStackAnimation();
            videoAnimations.videoStartOnEnterRewindOnLeave();
            videoAnimations.videoScrollScrub();
            textEffects.scrollTextEffectWipeFromLeft();
            // filterEffects.filterEffect1();
            textEffects.scrollTextEffect1();
            textEffects.scrollTextEffect2();
            textEffects.scrollTextEffect3();
            textEffects.scrollTextEffect4();
            // textEffects.textEffect1();
            scrollAnimations.driftUp1();
            scrollAnimations.driftUp2();
            scrollAnimations.driftUp3();
            scrollAnimations.driftDown1();
            scrollAnimations.driftDown1();
            scrollAnimations.driftDown1();
            scrollAnimations.growInOnEnter();
            scrollAnimations.fadeInOnEnter();
            scrollAnimations.fadeOutOnLeave();
            // scrollAnimations.slideInUpOnEnter();
        }
    },
    {
        namespace: 'bookademo',
        beforeEnter: () => {
            // customFormScripts.formValidator();
            // customFormScripts.formCheckboxHighlight();
            customFormScripts.stepFormWizard();
        }
    },
    {
        namespace: 'i3-home',
        // beforeOnce: () => {
        //     // pageLoaders.i3logoReveal();
        //     window.addEventListener('load', function () {
        //         pageLoaders.i3logoReveal();
        //     });
        // },
        beforeOnce: () => {
            // pageLoaders.i3logoReveal();
            pageLoaders.i3logoReveal();
        },
        afterEnter: () => {
            filterEffects.filterEffect1();
            textEffects.scrollTextEffect1();
            textEffects.scrollTextEffect2();
            textEffects.scrollTextEffect3();
            textEffects.scrollTextEffect4();
            textEffects.textEffect1();
            scrollAnimations.driftUp1();
            scrollAnimations.driftUp2();
            scrollAnimations.driftUp3();
            scrollAnimations.driftDown1();
            scrollAnimations.driftDown1();
            scrollAnimations.driftDown1();
            scrollAnimations.growInOnEnter();
            scrollAnimations.fadeInOnEnter();
            scrollAnimations.fadeOutOnLeave();
            scrollAnimations.slideInUpOnEnter();
        }
    },
    {
        namespace: 'poc-parallax-scroll',
        afterEnter: () => {
            parallaxAnimations();
        }
    }
    ],
    transitions: [
        {
            sync: false,
            leave: ({ current }) => pageTransitions.fadeUpDownLeave(current.container.querySelector('main')),
            once: ({ next }) => {
                pageTransitions.fadeUpDownEnter(next.container.querySelector('main'));
            },
            enter: ({ next }) => {
                pageTransitions.fadeUpDownEnter(next.container.querySelector('main'));
            },
            // beforeOnce: () => {

            // },
            beforeOnce: () => {
            },
            // beforeEnter: () => {
            //     pageTransitions.fadeOutLeave();
            // },
            afterEnter: () => {
                textEffects.imageStackAnimation();
            },
            // beforeOnce: () => {
            //     // textEffects.imageStackAnimation();
            // }
        },
    ],
});

barba.hooks.afterEnter(() => {
    // pageLoaders.beforeOnceMaskFadeIn();
    navbarFullscreen.navbarFullscreenInit();
    smoothScrolling.smoothAnchorScroller();
});
// barba.hooks.beforeEnter(() => {
//     navbarFullscreen.navbarFullscreenInit();
// });
// barba.hooks.beforeOnce(() => {
//     navbarFullscreen.navbarFullscreenInit();
// });
barba.hooks.beforeOnce(() => {
    // Fade in content upon content loaded
    // window.addEventListener('load', function () {
    //     init();
    // });
    // navbarFullscreen.navbarFullscreenInit();
    // pageLoaders.i3logoReveal();
});
// barba.hooks.once(() => {

// });

// barba.hooks.afterEnter(() => {
//     // scrollAnimations();
//     // ScrollTrigger.refresh(delayPromise(5000));
//     // parallaxAnimations();
//     // ScrollTrigger.refresh();
// });


// PAGE transitions using barba.js
// barba.hooks.afterEnter(() => {
//     ScrollTrigger.getById('parallaxAnimationID').kill();
//     scrollAnimations();
//     parallaxAnimations();
// });

// barba.hooks.enter(() => {
//     scrollAnimations();
//     parallaxAnimations();
// });


// DONT MIND THESE, OLD EXAMPLES AND SAMPLES

// barba.init({
//   debug: true,
//   transitions: [
//     {
//       sync: false,
//       leave ({ current }) {
//         leaveAnimation(current.container.querySelector("main"));
//       },
//       once ({ next }) {
//         enterAnimation(next.container.querySelector("main"));
//       },
//       enter ({ next }) {
//         enterAnimation(next.container.querySelector("main"));
//       }
//     }
//   ]
// });

// scrollAnimations.scrollAnimationsCollection.scrollTrigger.kill();

// //Test solution https://github.com/Ihatetomatoes/page-transitions-tutorial
// function init(){

//     const loader = document.querySelector('.gsap-loader');

//     // reset position of the loading screen
//     gsap.set(loader, {
//         scaleX: 0,
//         rotation: 10,
//         xPercent: -5,
//         yPercent: -50,
//         transformOrigin: 'left center',
//         autoAlpha: 1
//     });

//     function loaderIn() {
//         // GSAP tween to stretch the loading screen across the whole screen
//         return gsap.fromTo(loader,
//             {
//                 rotation: 10,
//                 scaleX: 0,
//                 xPercent: -5
//             },
//             {
//                 duration: 0.8,
//                 xPercent: 0,
//                 scaleX: 1,
//                 rotation: 0,
//                 ease: 'Power4.inOut',
//                 transformOrigin: 'left center'
//             });
//     }

//     function loaderAway() {
//         // GSAP tween to hide the loading screen
//         return gsap.to(loader, {
//             duration: 0.8,
//             scaleX: 0,
//             xPercent: 5,
//             rotation: -10,
//             transformOrigin: 'right center',
//             ease: 'Power4.inOut'
//         });
//     }

//     // do something before the transition starts
//     barba.hooks.before(() => {

//         document.querySelector('html').classList.add('is-transitioning');
//         barba.wrapper.classList.add('is-animating');

//     });

//     // do something after the transition finishes
//     barba.hooks.after(() => {

//         document.querySelector('html').classList.remove('is-transitioning');
//         barba.wrapper.classList.remove('is-animating');

//     });

//     // scroll to the top of the page
//     barba.hooks.enter(() => {

//         window.scrollTo(0, 0);

//     });

//     barba.init({
//         transitions: [{
//             async leave() {
//                 await loaderIn();

//             },
//             enter() {
//                 loaderAway();
//             }
//         }]
//     });
// }

// window.addEventListener('load', function(){
//     init();
// });
