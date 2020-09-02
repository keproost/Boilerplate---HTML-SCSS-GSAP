
import barba from '@barba/core';
import { gsap, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
// import ScrollTrigger from 'gsap/all';
import scrollAnimations from './gsap/custom-onscroll-animations';
import pageTransitions from './gsap/custom-page-transitions';
import parallaxAnimations from './gsap/custom-parallax-animations';
import parallax3d from './gsap/custom-parallax-3d';
// import goToSection from './gsap/custom-fullpage-animations-2';
// import fullpageAnimation from './gsap/custom-fullpage-animations';
// import delayPromise from './utils';

// Barba
// document.addEventListener('DOMContentLoaded', function () {
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

barba.init({
    debug: true,
    views: [{
        namespace: 'panel-fullscreen',
        after: () => {
            // goToSection();
        }
    },
    {
        namespace: 'parallax-3d',
        after: () => {
            parallax3d();
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
                // parallaxAnimations();
                // ScrollTrigger.getById('parallaxAnimationID').kill();
                // ScrollTrigger.getById('parallaxAnimationID').refresh();
                // parallaxAnimations();
            },
            after: () => {
                parallaxAnimations();
                scrollAnimations();
            },
            afterEnter: () => {
                // ScrollTrigger.kill(delayPromise(5000));
                // ScrollTrigger.refresh(delayPromise(5000));
            }
        },
    ],
});
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
