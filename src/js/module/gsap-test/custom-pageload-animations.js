import { gsap, ScrollTrigger } from 'gsap/all';
import barba from '@barba/core';
import scrollAnimations from './custom-onscroll-animations';

let pageTransitionDuration = 0.50;
let pageTransitionStagger = 0.10;
let pageTransitionEase = "power2.inOut"


//Delay function to waith on barba to initialize scrolltrigger
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Test pageload solution https://codepen.io/keproost/project/editor/ZjLrke
function leaveAnimation(e) {
    return new Promise(async resolve => {
      const elementsFadeUpDown = e.querySelectorAll(".gsap-pageTransition-fadeUpDown");
      const elementsFadeInOut = e.querySelectorAll(".gsap-pageTransition-fadeInOut");
      await gsap
        .to(elementsFadeUpDown, {
          duration: pageTransitionDuration,
          y: 100,
          opacity: 0,
          ease: pageTransitionEase,
          stagger: pageTransitionStagger
        });
        gsap
        .to(elementsFadeInOut, {
          duration: pageTransitionDuration,
          opacity: 0,
          ease: pageTransitionEase,
        })
        .then();
      resolve()
    });
  }
  
  function enterAnimation(e) {
    return new Promise(resolve => {
      const elementsFadeUpDown = e.querySelectorAll(".gsap-pageTransition-fadeUpDown");
      const elementsFadeInOut = e.querySelectorAll(".gsap-pageTransition-fadeInOut");
      gsap
        .from(elementsFadeUpDown, {
          duration: pageTransitionDuration,
          y: 100,
          opacity: 0,
          ease: pageTransitionEase,
          stagger: pageTransitionStagger
        });
      gsap
        .from(elementsFadeInOut, {
          duration: pageTransitionDuration,
          ease: pageTransitionEase,
          opacity: 0,
        })
        .then(resolve());
    });
  }
  
  barba.init({
    debug: true,
    transitions: [
      {
        sync: false,
        leave: ({ current }) => leaveAnimation(current.container.querySelector("main")),
        once: ({ next }) => enterAnimation(next.container.querySelector("main")),
        enter: ({ next }) => enterAnimation(next.container.querySelector("main"))
      }
    ]
  });

  scrollAnimations.scrollAnimationsCollection.scrollTrigger.kill();

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

