import $ from 'jquery';
import { Power2, TweenLite } from 'gsap/all';

window.$ = $;
window.jQuery = $;

const parallax3dStrenght = 4;


export default function parallax3d() {
    const parallax3dBlocks = document.querySelectorAll('.parallaxblock');
    if (parallax3dBlocks) {
        parallax3dBlocks.forEach((parallax3dBlock) => {
            let request = null;
            const mouse = { x: 0, y: 0 };
            let parallax3dBlockWidth = $(parallax3dBlock).innerWidth() / parallax3dStrenght;
            let parallax3dBlockHeight = $(parallax3dBlock).innerHeight() / parallax3dStrenght;
            function update() {
                const dx = mouse.x - parallax3dBlockWidth;
                const dy = mouse.y - parallax3dBlockHeight;
                const tiltx = (dy / parallax3dBlockHeight);
                const tilty = -(dx / parallax3dBlockWidth);
                const radius = Math.sqrt((tiltx ** 2) + (tilty ** 2));
                const degree = (radius * 20);
                TweenLite.to('.parallax-3d-container > .content', 1, {
                    transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`, ease: Power2.easeOut
                });
            }
            $(parallax3dBlock).on('mousemove', (function (event) {
                mouse.x = event.pageX - this.offsetLeft;
                mouse.y = event.pageY - this.offsetTop;
                request = requestAnimationFrame(update);
            }));
            $(parallax3dBlock).on('mouseleave', (function () {
                console.log('mouseleave');
                cancelAnimationFrame(request);
                TweenLite.to('.parallax-3d-container > .content', 1, {
                    transform: 'rotate3d(0, 0, 0, 0deg)', ease: Power2.easeOut
                });
            }));

            // ScrollTrigger.create({
            //     trigger: parallax3dBlock,
            //     onEnter: parallaxOnEnter(),
            //     onLeave: parallaxOnLeave()
            // });

            $(window).resize(function () {
                parallax3dBlockWidth = $(parallax3dBlock).innerWidth() / parallax3dStrenght;
                parallax3dBlockHeight = $(parallax3dBlock).innerHeight() / parallax3dStrenght;
                console.log('PARALLAX3D-ELEMENT-CANVASHEIGHT', parallax3dBlockHeight);
                console.log('PARALLAX3D-ELEMENT-CANVASWIDTH', parallax3dBlockWidth);
            });
        });
    }
}

// export default function parallax3d() {
//     gsap.registerPlugin(ScrollTrigger);
//     const parallax3dBlocks = gsap.utils.toArray('.parallaxblock');
//     if (parallax3dBlocks) {
//         parallax3dBlocks.forEach((parallax3dBlock) => {
//             const parallax3dAnimation = gsap.timeline({});
//             let request = null;
//             const mouse = { x: 0, y: 0 };
//             let parallax3dBlockWidth = $(parallax3dBlock).innerWidth() / parallax3dStrenght;
//             let parallax3dBlockHeight = $(parallax3dBlock).innerHeight() / parallax3dStrenght;
//             function update() {
//                 const dx = mouse.x - parallax3dBlockWidth;
//                 const dy = mouse.y - parallax3dBlockHeight;
//                 const tiltx = (dy / parallax3dBlockHeight);
//                 const tilty = -(dx / parallax3dBlockWidth);
//                 const radius = Math.sqrt((tiltx ** 2) + (tilty ** 2));
//                 const degree = (radius * 20);
//                 parallax3dAnimation
//                     .to('.parallax-3d-container > .content', 1, {
//                         transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`, ease: Power2.easeOut
//                     });
//             }
//             $(parallax3dBlock).on('mousemove', (function (event) {
//                 mouse.x = event.pageX - this.offsetLeft;
//                 mouse.y = event.pageY - this.offsetTop;
//                 request = requestAnimationFrame(update);
//             }));
//             $(parallax3dBlock).on('mouseleave', (function () {
//                 console.log('mouseleave');
//                 cancelAnimationFrame(request);
//                 TweenLite.to('.parallax-3d-container > .content', 1, {
//                     transform: 'rotate3d(0, 0, 0, 0deg)', ease: Power2.easeOut
//                 });
//             }));

//             ScrollTrigger.create({
//                 trigger: parallax3dBlock,
//                 // onEnter: parallaxOnEnter(),
//                 // onLeave: parallaxOnLeave()
//             });

//             $(window).resize(function () {
//                 parallax3dBlockWidth = $(parallax3dBlock).innerWidth() / parallax3dStrenght;
//                 parallax3dBlockHeight = $(parallax3dBlock).innerHeight() / parallax3dStrenght;
//                 console.log('PARALLAX3D-ELEMENT-CANVASHEIGHT', parallax3dBlockHeight);
//                 console.log('PARALLAX3D-ELEMENT-CANVASWIDTH', parallax3dBlockWidth);
//             });
//         });
//     }
// }


// export default function parallax3d() {
//     const parallax3dBlocks = document.querySelectorAll('.parallaxblock');
//     console.log('PARALLAX3D-ELEMENT', parallax3dBlocks);
//     if (parallax3dBlocks) {
//         parallax3dBlocks.forEach((parallax3dBlock) => {
//             let request = null;
//             const mouse = { x: 0, y: 0 };
//             let parallax3dBlockWidth = $(parallax3dBlock).innerWidth() / parallax3dStrenght;
//             let parallax3dBlockHeight = $(parallax3dBlock).innerHeight() / parallax3dStrenght;
//             console.log('PARALLAX3D-BLOCKHEIGHT', parallax3dBlockHeight);
//             console.log('PARALLAX3D-BLOCKWIDTH', parallax3dBlockWidth);
//             // console.log('Mouse - Initial', mouse);
//             function update() {
//                 console.log('PARALLAX3D - Mouse - Initial', mouse);
//                 const dx = mouse.x - parallax3dBlockWidth;
//                 // console.log('PARALLAX3D - Mouse - Direction X', dx);
//                 const dy = mouse.y - parallax3dBlockHeight;
//                 // console.log('PARALLAX3D - Mouse - Direction Y', dy);
//                 const tiltx = (dy / parallax3dBlockHeight);
//                 // console.log('PARALLAX3D - Mouse - tiltx ', tiltx);
//                 const tilty = -(dx / parallax3dBlockWidth);
//                 // console.log('PARALLAX3D - Mouse - tilty ', tilty);
//                 const radius = Math.sqrt((tiltx ** 2) + (tilty ** 2));
//                 // console.log('PARALLAX3D - Mouse - radius ', radius);
//                 const degree = (radius * 20);
//                 // console.log('PARALLAX3D - Mouse - degree ', degree);
//                 TweenLite.to('.parallax-3d-container > .content', 1, {
//                     transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`, ease: Power2.easeOut
//                 });
//             }
//             $(parallax3dBlock).on('mousemove', (function (event) {
//                 request = requestAnimationFrame(update);
//                 mouse.x = event.pageX - this.offsetLeft;
//                 mouse.y = event.pageY - this.offsetTop;
//             }));
//             $(parallax3dBlock).on('mouseleave', (function () {
//                 console.log('mouseleave');
//                 cancelAnimationFrame(request);
//                 TweenLite.to('.parallax-3d-container > .content', 1, {
//                     transform: 'rotate3d(0, 0, 0, 0deg)', ease: Power2.easeOut
//                 });
//             }));
//             $(window).resize(function () {
//                 parallax3dBlockWidth = $(parallax3dBlock).innerWidth() / parallax3dStrenght;
//                 parallax3dBlockHeight = $(parallax3dBlock).innerHeight() / parallax3dStrenght;
//                 console.log('PARALLAX3D-ELEMENT-CANVASHEIGHT', parallax3dBlockHeight);
//                 console.log('PARALLAX3D-ELEMENT-CANVASWIDTH', parallax3dBlockWidth);
//             });
//         });
//     }
// }


// export default function parallax3d() {
//     let request = null;
//     const mouse = { x: 0, y: 0 };
//     let cx = window.innerWidth / 2;
//     let cy = window.innerHeight / 2;
//     console.log('PARALLAX3D-ELEMENT-CANVASHEIGHT', cy);
//     console.log('PARALLAX3D-ELEMENT-CANVASWIDTH', cx);
//     function update() {
//         const dx = mouse.x - cx;
//         console.log('Mouse - Direction X', dx);
//         const dy = mouse.y - cy;
//         console.log('Mouse - Direction Y', dy);
//         const tiltx = (dy / cy);
//         const tilty = -(dx / cx);
//         const radius = Math.sqrt((tiltx ** 2) + (tilty ** 2));
//         const degree = (radius * 20);
//         TweenLite.to('.parallax-3d-container > .content', 1, {
//             transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`, ease: Power2.easeOut
//         });
//     }

//     $('body').mousemove(function (event) {
//         mouse.x = event.pageX;
//         mouse.y = event.pageY;

//         cancelAnimationFrame(request);
//         request = requestAnimationFrame(update);
//     });

//     $(window).resize(function () {
//         cx = window.innerWidth / 2;
//         cy = window.innerHeight / 2;
//     });
// }

// export default function parallax3d() {
//     let request = null;
//     const mouse = { x: 0, y: 0 };
//     let canvasHeight = $('.parallaxblock').innerWidth() / 2;
//     let canvasWidth = $('.parallaxblock').innerHeight() / 2;
//     // console.log('Parallax-3d-Canvasheight', canvasHeight);
//     // console.log('Parallax-3D-Canvaswidth', canvasWidth);
//     function update() {
//         const dx = mouse.x - canvasWidth;
//         const dy = mouse.y - canvasHeight;
//         // console.log('PARALLAX3D-MOUSE dx', dx);
//         // console.log('PARALLAX3D-MOUSE dy', dy);
//         const tiltx = (dy / canvasHeight);
//         const tilty = -(dx / canvasWidth);
//         const radius = Math.sqrt((tiltx ** 2) + (tilty ** 2));
//         const degree = (radius * 20);
//         TweenLite.to('.parallax-3d-container', 1, {
//             transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`, ease: Power2.easeOut
//         });
//     }
//     const parallax3dElements = document.querySelectorAll('.parallax-3d-container');
//     console.log('PARALLAX3D-ELEMENT', parallax3dElements);
//     if (parallax3dElements) {
//         parallax3dElements.forEach((parallax3dElement) => {
//             $(parallax3dElement).mousemove(function (parallaxElement) {
//                 mouse.x = parallaxElement.offsetX;
//                 mouse.y = parallaxElement.offsetY;
//                 cancelAnimationFrame(request);
//                 request = requestAnimationFrame(update);
//                 $(window).resize(function () {
//                     canvasWidth = parallax3dElement.innerWidth() / 2;
//                     canvasHeight = parallax3dElement.innerHeight() / 2;
//                 });
//             });
//         });
//     }
// }
