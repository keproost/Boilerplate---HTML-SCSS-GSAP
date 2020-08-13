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

//title
var tl = new TimelineLite, 
    mySplitText = new SplitText("#text_1", {type:"words,chars"}), 
    chars = mySplitText.chars;

TweenLite.set("#text_1", {perspective:400});

tl.staggerFrom(chars, 3, {opacity:0, scale:0, y:80, rotationX:90, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.02, "+=0");
//adding glow color to title
TweenMax.to(text_1, 0.1, {
    textShadow:"5px 2px 15px rgba(145, 233, 0, 1)",             
    color:"#2EFEF7"
});


//Split by Char
var tl2 = new TimelineLite, 
    mySplitText = new SplitText("#text_2", {type:"chars, words"}), 
    chars = mySplitText.chars;

TweenLite.set("#text_2", {perspective:400});

tl2.staggerFrom(mySplitText.chars, 1, { delay:2, scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.05);


// Split by Lines

var tl3 = new TimelineLite, 
    mySplitText = new SplitText("#text_3", {type:"lines"}), 
    chars = mySplitText.chars;

TweenLite.set("#text_3", {perspective:400});

tl3.staggerFrom(mySplitText.lines, 0.5, {delay:4, opacity:0, rotationX:-180, transformOrigin:"top center -250"}, 0.5);
 
//Split mix

var tl4 = new TimelineLite, 
    mySplitText = new SplitText("#text_4", {type:"chars, words, lines"}), 
    chars = mySplitText.chars;

TweenLite.set("#text_4", {perspective:400});

tl4.staggerFrom(mySplitText.chars, 0.2, {delay:5,autoAlpha:0, scale:4}, 0.01, 0.5)
    .staggerTo(mySplitText.words, 0.1, {color:"#A9F5F2", scale:0.9}, 0.1, "words")
    .staggerTo(mySplitText.words, 0.2, {color:"white", scale:1}, 0.1, "words+=0.1");

TweenMax.to(text_4, 0.1, {
    textShadow:"5px 2px 15px rgba(145, 233, 0, 1)",             
    color:"#2EFEF7"});
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
