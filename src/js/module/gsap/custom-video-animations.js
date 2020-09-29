import { ScrollTrigger, gsap } from 'gsap/all';


const videoAnimations = {
    videoStartOnEnterRewindOnLeave() {
        const elements = gsap.utils.toArray('.videoStartOnEnterRewindOnLeave');
        if (elements) {
            elements.forEach((element) => {
                function playVideo() {
                    element.play();
                    console.log('playing video');
                }
                function rewindVideo() {
                    element.pause();
                    element.currentTime = 0;
                    console.log('pause and rewind video');
                }
                ScrollTrigger.create({
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                    onToggle: self => (self.isActive ? playVideo() : rewindVideo()),
                    once: false,
                });
            });
        }
    },
    // videoScrollScrub() {
    //     const elements = gsap.utils.toArray('.videoScrollScrub');
    //     function goVideo() {
    //         elements.forEach((element) => {
    //             element.onloadedmetadata = function () {
    //                 const frameNumber = 0; // start video at frame 0
    //                 // lower numbers = faster playback
    //                 const playbackConst = 500;
    //                 // get page height from video duration
    //                 const setHeight = document.getElementById('set-height');
    //                 // select video element
    //                 // var vid = $('#v0')[0]; // jquery option

    //                 // dynamically set the page height according to video length
    //                 setHeight.style.height = `${Math.floor(element.duration) * playbackConst}px`;

    //                 function playVideo() {
    //                     element.play();
    //                     console.log('playing video');
    //                 }
    //                 function rewindVideo() {
    //                     element.pause();
    //                     element.currentTime = 0;
    //                     console.log('pause and rewind video');
    //                 }

    //                 // Use requestAnimationFrame for smooth playback
    //                 function scrollPlay() {
    //                     const frameNumber = element.pageYOffset / playbackConst;
    //                     element.currentTime = frameNumber;
    //                     window.requestAnimationFrame(scrollPlay);
    //                 }


    //                 const myAnimation = gsap.timeline({});
    //                 myAnimation
    //                     .to(element, 1, { currentTime: element.duration });

    //                 ScrollTrigger.create({
    //                     trigger: element,
    //                     animation: myAnimation,
    //                     start: 'top 90%',
    //                     end: 'bottom 100%',
    //                     scrub: 1,
    //                     force3D: true,
    //                     onToggle: self => (self.isActive ? window.requestAnimationFrame(scrollPlay) : rewindVideo()),
    //                     once: false,
    //                 });
    //             };
    //         });
    //     }
    //     if (elements) {
    //         gsap.ticker.add(goVideo);
    //         goVideo();
    //     }
    // }
    videoScrollScrub() {
        const elements = gsap.utils.toArray('.videoScrollScrub');
        function goVideo() {
            elements.forEach((element) => {
                element.onloadedmetadata = function () {
                    const myDuration = element.duration;
                    const myCurrentTime = element.currentTime;
                    console.log('myduration', myDuration);
                    console.log('mycurrentTime', myCurrentTime);

                    const myAnimation = gsap.timeline({});
                    myAnimation
                        .to(element, 1, { currentTime: element.duration });


                    // myAnimation
                    //     .from(element, {
                    //     }, 1, { currentTime: 0 })
                    //     .to(element, {
                    //     }, 1, { currentTime: element.duration });

                    ScrollTrigger.create({
                        trigger: element,
                        animation: myAnimation,
                        start: 'top 90%',
                        end: 'bottom -100%',
                        scrub: 1,
                        force3D: true,
                        once: false,
                    });
                };
            });
        }
        if (elements) {
            gsap.ticker.add(goVideo);
            goVideo();
        }
    }
};

export default videoAnimations;


// const frameNumber = 0; // start video at frame 0
// // lower numbers = faster playback
// const playbackConst = 500;
// // get page height from video duration
// const setHeight = document.getElementById('set-height');
// // select video element
// const vid = document.getElementById('v0');
// // var vid = $('#v0')[0]; // jquery option

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function () {
//     setHeight.style.height = `${Math.floor(vid.duration) * playbackConst}px`;
// });


// // Use requestAnimationFrame for smooth playback
// function scrollPlay() {
//     const frameNumber = window.pageYOffset / playbackConst;
//     vid.currentTime = frameNumber;
//     window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);


// element.onloadeddata = function () {
//     element.pause();
//     // TweenLite.to(video, 1, { currentTime: video.duration });

//     $(window).on('click', function () {
//         const duration = element.duration - element.currentTime;
//         TweenLite.to(element, duration, { currentTime: element.duration });
//     });

//     $(window).on('dblclick', function () {
//         const duration = element.currentTime;
//         TweenLite.to(element, duration, { currentTime: 0 });
//     });
// };

// video.src = "http://v2v.cc/~j/theora_testsuite/320x240.ogg";
// video.src = 'http://www.sharpness.be/projects/201512_luminus/luminus_boiler.mp4';


// function fadeIn(el) {
//     const tl = gsap.timeline()
//         .to(el, { autoAlpha: 1, duration: 2 }, '<');
//     return tl;
// }

// function fadeOut(el) {
//     const tl = gsap.timeline()
//         .to(el, { autoAlpha: 0, duration: 2 });
//     return tl;
// }

// function toggleVideo(id, play) {
//     const el = document.getElementById(id);
//     return function () {
//         const st = ScrollTrigger.getById('main');
//         if (st) {
//             if ((play && st.direction > 0) || (!play && st.direction < 0)) {
//                 el.play();
//                 console.log('play', id);
//             } else {
//                 el.pause();
//                 console.log('pause', id);
//             }
//         }
//     };
// }

// function animationOne() {
//     const tl = gsap.timeline()
//         .add(fadeIn('.header-one'), '>')
//         .add(fadeOut('.header-one'), '>1')
//         .call(toggleVideo('beach-waves', true))
//         .to('#beach-waves', { scale: 1.1, duration: 2 }, '>')
//         .call(toggleVideo('beach-waves', false))
//         .set('.container', { background: 'black' })
//         .add(fadeIn('.header-two'), '>')
//         .to('#beach-waves', { scale: 0, autoAlpha: 0, duration: 2 }, '>2')
//         .add(fadeOut('.header-two'), '>1');
//     return tl;
// }

// function animationTwo() {
//     const tl = gsap.timeline()
//         .to('.video-container.start-hidden', { autoAlpha: 1, duration: 2 }, '<')
//         .add(fadeIn('.header-three'), '>1')
//         .add(fadeOut('.header-three'), '>2')
//         .call(toggleVideo('bokeh', true))
//         .to('#bokeh', { scale: 1.1, duration: 2 }, '>')
//         .call(toggleVideo('bokeh', false))
//         .to('#bokeh', { scale: 0, autoAlpha: 0, duration: 2 }, '>2');
//     return tl;
// }

// const tl = gsap.timeline()
//     .add(animationOne(), '>')
//     .add(animationTwo(), '>-1');

// ScrollTrigger.create({
//     scrub: true,
//     markers: true,
//     trigger: '.container',
//     start: 'top top',
//     end: '+=500',
//     id: 'main',
//     animation: tl,
//     pin: true
// });
