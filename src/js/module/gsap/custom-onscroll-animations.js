import { ScrollTrigger, gsap } from 'gsap/all';


const scrollAnimations = {
    fadeOutOnLeave() {
        gsap.registerPlugin(ScrollTrigger);
        const fadeOutOnLeave = gsap.utils.toArray('.gsap-scrollAnimation-fadeOutOnLeave');
        console.log('SCROLLANIMATION - FADEOUTONLEAVEELEMENTS', fadeOutOnLeave);
        if (fadeOutOnLeave) {
            fadeOutOnLeave.forEach((fadeOutOnLeaveElement) => {
                const fadeOutOnLeaveAnimation = gsap.timeline({});
                fadeOutOnLeaveAnimation
                    .from(fadeOutOnLeaveElement, {
                        opacity: 1,
                        ease: 'Back.easeInOut',
                    })
                    .to(fadeOutOnLeaveElement, { opacity: 0 });

                ScrollTrigger.create({
                    trigger: fadeOutOnLeaveElement,
                    animation: fadeOutOnLeaveAnimation,
                    start: 'top 40%',
                    end: 'bottom 10%',
                    scrub: 1,
                    once: false,
                });
            });
        }
    },

    slideInUpOnEnter() {
        const slideInUpOnEnter = gsap.utils.toArray('.gsap-scrollAnimation-slideInUpOnEnter');
        console.log('SCROLLANIMATION - SLIDEINUPONTERELEMENTS', slideInUpOnEnter);
        if (slideInUpOnEnter) {
            slideInUpOnEnter.forEach((slideInUpOnEnterElement) => {
                const slideInUpOnEnterAnimation = gsap.timeline({});
                slideInUpOnEnterAnimation
                    .from(slideInUpOnEnterElement, { y: 200, ease: 'Back.easeOut' })
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
        }
    },

    growInOnEnter() {
        const growInOnEnter = gsap.utils.toArray('.gsap-scrollAnimation-growInOnEnter');
        console.log('SCROLLANIMATION - GROWINONENTERELEMENTS', growInOnEnter);
        if (growInOnEnter) {
            growInOnEnter.forEach((growInOnEnterElement) => {
                const growInOnEnterAnimation = gsap.timeline({});
                growInOnEnterAnimation
                    .from(growInOnEnterElement, { scale: 0, ease: 'Back.easeOut' })
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
        }
    },

    driftUp() {
        const driftUp = gsap.utils.toArray('.driftUp');
        console.log('SCROLLANIMATION - DRIFTUPELEMENTS', driftUp);
        if (driftUp) {
            driftUp.forEach((driftUpElement) => {
                const driftUpAnimation = gsap.timeline({});
                driftUpAnimation
                    .from(driftUpElement, { y: 0, ease: 'Back.easeOut' })
                    .to(driftUpElement, { y: -100 });

                ScrollTrigger.create({
                    trigger: driftUpElement,
                    animation: driftUpAnimation,
                    start: '-100px bottom',
                    end: '50% 40%',
                    scrub: 1,
                    once: false,
                });
            });
        }
    }
};

export default scrollAnimations;


// export default function scrollAnimations() {
//     gsap.registerPlugin(ScrollTrigger);
//     const fadeOutOnLeave = gsap.utils.toArray('.gsap-scrollAnimation-fadeOutOnLeave');
//     console.log('SCROLLANIMATION - FADEOUTONLEAVEELEMENTS', fadeOutOnLeave);
//     if (fadeOutOnLeave) {
//         fadeOutOnLeave.forEach((fadeOutOnLeaveElement) => {
//             const fadeOutOnLeaveAnimation = gsap.timeline({});
//             fadeOutOnLeaveAnimation
//                 .from(fadeOutOnLeaveElement, {
//                     opacity: 1,
//                     ease: 'Back.easeInOut',
//                 })
//                 .to(fadeOutOnLeaveElement, { opacity: 0 });

//             ScrollTrigger.create({
//                 trigger: fadeOutOnLeaveElement,
//                 animation: fadeOutOnLeaveAnimation,
//                 start: 'top 40%',
//                 end: 'bottom 10%',
//                 scrub: 1,
//                 once: false,
//             });
//         });
//     }


//     const slideInUpOnEnter = gsap.utils.toArray('.gsap-scrollAnimation-slideInUpOnEnter');
//     console.log('SCROLLANIMATION - SLIDEINUPONTERELEMENTS', slideInUpOnEnter);
//     if (slideInUpOnEnter) {
//         slideInUpOnEnter.forEach((slideInUpOnEnterElement) => {
//             const slideInUpOnEnterAnimation = gsap.timeline({});
//             slideInUpOnEnterAnimation
//                 .from(slideInUpOnEnterElement, { y: 200, ease: 'Back.easeOut' })
//                 .to(slideInUpOnEnterElement, { y: 0 });

//             ScrollTrigger.create({
//                 trigger: slideInUpOnEnterElement,
//                 animation: slideInUpOnEnterAnimation,
//                 start: '-100px bottom',
//                 end: '50% 40%',
//                 scrub: 1,
//                 once: false,
//             });
//         });
//     }


//     const growInOnEnter = gsap.utils.toArray('.gsap-scrollAnimation-growInOnEnter');
//     console.log('SCROLLANIMATION - GROWINONENTERELEMENTS', growInOnEnter);
//     if (growInOnEnter) {
//         growInOnEnter.forEach((growInOnEnterElement) => {
//             const growInOnEnterAnimation = gsap.timeline({});
//             growInOnEnterAnimation
//                 .from(growInOnEnterElement, { scale: 0, ease: 'Back.easeOut' })
//                 .to(growInOnEnterElement, { scale: 1 });

//             ScrollTrigger.create({
//                 trigger: growInOnEnterElement,
//                 animation: growInOnEnterAnimation,
//                 start: '-100px bottom',
//                 end: '50% 40%',
//                 scrub: 1,
//                 once: false,
//             });
//         });
//     }

//     const driftUp = gsap.utils.toArray('.driftUp');
//     console.log('SCROLLANIMATION - DRIFTUPELEMENTS', driftUp);
//     if (driftUp) {
//         driftUp.forEach((driftUpElement) => {
//             const driftUpAnimation = gsap.timeline({});
//             driftUpAnimation
//                 .from(driftUpElement, { y: 0, ease: 'Back.easeOut' })
//                 .to(driftUpElement, { y: -100 });

//             ScrollTrigger.create({
//                 trigger: driftUpElement,
//                 animation: driftUpAnimation,
//                 start: '-100px bottom',
//                 end: '50% 40%',
//                 scrub: 1,
//                 once: false,
//             });
//         });
//     }
// }

//  Initial execution of scrollanimations when user lands directly on page with scroll animations
// scrollAnimations();

//  Execution of scrollanimations when user refreshes the page
// window.addEventListener('load', function () {
//     ScrollTrigger.refresh();
// });


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
//     duration: { min: 0.2, max: 3 },
// the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//     ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
//   }
