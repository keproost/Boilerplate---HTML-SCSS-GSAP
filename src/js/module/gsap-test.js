import $ from 'jquery';

window.$ = $;
window.jQuery = $;

import { TweenLite, TimelineMax, ScrollTrigger, gsap, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const slideInUpOnEnter = gsap.utils.toArray('.gsap-slideInUpOnEnter');
slideInUpOnEnter.forEach((slideInUpOnEnterElement, i) => {
    const slideInUpOnEnterAnimation = gsap.timeline({});
    slideInUpOnEnterAnimation.from(slideInUpOnEnterElement, { y: 200, ease: 'Back.easeOut' })
        .to(slideInUpOnEnterElement, { y: 0 });

    ScrollTrigger.create({
        trigger: slideInUpOnEnterElement,
        animation: slideInUpOnEnterAnimation,
        start: '-100px bottom',
        end: '50% 40%',
        scrub: 1,
        once: false,
    });
});

const growInOnEnter = gsap.utils.toArray('.gsap-growInOnEnter');
growInOnEnter.forEach((growInOnEnterElement, i) => {
    const growInOnEnterAnimation = gsap.timeline({});
    growInOnEnterAnimation.from(growInOnEnterElement, { scale: 0, ease: 'Back.easeOut' })
        .to(growInOnEnterElement, { scale: 1 });

    ScrollTrigger.create({
        trigger: growInOnEnterElement,
        animation: growInOnEnterAnimation,
        start: '-100px bottom',
        end: '50% 40%',
        scrub: 1,
        once: false,
    });
});


const fadeOutOnLeaveOnEnter = gsap.utils.toArray('.gsap-fadeOutOnLeave');
fadeOutOnLeaveOnEnter.forEach((fadeOutOnLeaveOnEnterElement, i) => {
    const fadeOutOnLeaveOnEnterAnimation = gsap.timeline({});
    fadeOutOnLeaveOnEnterAnimation.from(fadeOutOnLeaveOnEnterElement, { opacity: 1, ease: 'Back.easeInOut' })
        .to(fadeOutOnLeaveOnEnterElement, { opacity: 0 });

    ScrollTrigger.create({
        trigger: fadeOutOnLeaveOnEnterElement,
        animation: fadeOutOnLeaveOnEnterAnimation,
        start: 'top 30%',
        end: 'bottom top',
        scrub: 1,
        once: false,
    });
});

$("body").on("click",function(){
const headerAnimation = gsap.timeline({});
headerAnimation.from(".gsap-loader", {opacity: 0, height: 0, width: 0, scale: 0})
.to(".gsap-loader", {opacity: 1, backgroundColor: "orange", height: "100%", width: "100%", scale: 1});
});
// const fadeOutOnLeave = gsap.utils.toArray('.gsap-fadeOutOnLeave');
// fadeOutOnLeave.forEach((fadeOutOnLeaveElement, i) => {
//     ScrollTrigger.create({
//         trigger: fadeOutOnLeaveElement,
//         animation: fadeOutOnLeaveAnimation,
//         start: 'center center',
//         end: 'top top',
//         toggleClass: 'active-fadeout',
//         markers: { startColor: 'blue', endColor: 'pink', fontSize: '12px' },
//         //pin: true,
//         scrub: 1,
//         once: false,
//     })
// })
//   snap: {
//     snapTo: 'labels', // snap to the closest label in the timeline
//     duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//     ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
//   }
