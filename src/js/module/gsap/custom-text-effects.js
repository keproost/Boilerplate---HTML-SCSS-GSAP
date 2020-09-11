import { gsap, SplitText } from 'gsap/all';
import $ from 'jquery';


const textEffects = {
    scrollTextEffect1() {
        gsap.utils.toArray('.scrollTextEffect1').forEach(function (scrollTextEffect1Element) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: scrollTextEffect1Element,
                start: 'top bottom',
                end: '',
                // onToggle: self => gsap.to(scrollTextEffect1Element, { opacity: self.isActive ? 1 : 0 }),
                toggleActions: 'restart pause',
                // markers: true
            }
            });

            const splitTitle = new SplitText(scrollTextEffect1Element);
            splitTimeline.from(splitTitle.chars, {
                duration: 1.5,
                opacity: 0,
                y: 100,
                stagger: { amount: 0.5 },
                ease: 'back.out(1)',
                overwrite: 'auto'
            });
        });
    },
    scrollTextEffect2() {
        gsap.utils.toArray('.scrollTextEffect2').forEach(function (scrollTextEffect2Element) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: scrollTextEffect2Element,
                start: 'top 80%',
                end: 'bottom 10%',
                onToggle: self => gsap.to(scrollTextEffect2Element, { opacity: self.isActive ? 1 : 0 }),
                toggleActions: 'restart pause restart none',
                // markers: true
            },
            });
            const splitTitle = new SplitText(scrollTextEffect2Element);
            const numChars = splitTitle.chars.length;
            for (let i = 0; i < numChars; i++) {
                // random value used as position parameter
                splitTimeline.from(splitTitle.chars[i], 5, { opacity: 0 }, Math.random() * 0.5);
            }
            // splitTimeline.from(splitTitle.chars, {
            //     duration: 1.5,
            //     opacity: 0,
            //     y: 100,
            //     stagger: { amount: 0.5 },
            //     ease: 'back.out(1)',
            //     overwrite: 'auto'
            // });
        });
    },
    scrollTextEffect3() {
        window.$ = $;
        window.jQuery = $;
        gsap.utils.toArray('.scrollTextEffect3').forEach(function (scrollTextEffect3Element) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: scrollTextEffect3Element,
                start: 'top 80%',
                end: 'bottom 50%',
                onToggle: self => gsap.to(scrollTextEffect3Element, { opacity: self.isActive ? 1 : 0 }),
                toggleActions: 'restart pause restart none',
                // markers: true
            }
            });

            const splitTitle = new SplitText(scrollTextEffect3Element);
            $('.scrollTextEffect3').css('persspective', '400');
            splitTimeline.from(splitTitle.lines, {
                duration: 0.5,
                opacity: 0,
                rotationX: -120,
                force3D: true,
                transformOrigin: '50% 0% -150',
                stagger: 0.1
            });
        });
    },
    scrollTextEffect4() {
        window.$ = $;
        window.jQuery = $;
        gsap.utils.toArray('.scrollTextEffect4').forEach(function (scrollTextEffect4Element) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: scrollTextEffect4Element,
                start: 'top 80%',
                end: 'bottom 50%',
                // markers: true
            }
            });
            const splitTitle = new SplitText(scrollTextEffect4Element);
            splitTitle.split({ type: 'chars, words, lines' });
            splitTimeline.from(splitTitle.chars, { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 }, 0.5)
                .to(splitTitle.words, { duration: 0.1, color: 'rgba(237, 109, 5, 1)', scale: 0.9, stagger: 0.1 }, 'words')
                .to(splitTitle.words, { duration: 0.2, color: 'rgba(0,0,0,1)', scale: 1, stagger: 0.1 }, 'words+=0.1');
            // .to(splitTitle.lines, { duration: 0.5, x: 100, autoAlpha: 0, stagger: 0.2 });
        });
    },
    textEffect1() {
        gsap.utils.toArray('.textEffect1').forEach(function (scrollTextEffect1Element) {
            const splitTimeline = gsap.timeline({});
            const splitTitle = new SplitText(scrollTextEffect1Element);
            splitTimeline.from(splitTitle.chars, {
                duration: 0.8,
                delay: 1.5,
                opacity: 0,
                scaleX: 0,
                y: 20,
                transformOrigin: 'center center',
                stagger: { amount: 0.8 },
                ease: 'back.out(1)',
                overwrite: 'auto'
            });
        });
    },
    scrollTextEffectWipeFromLeft() {
        window.$ = $;
        window.jQuery = $;
        // function showOverlay() {
        //     $('scrollTextEffectWipeFromLeftElement').toggleClass('no-overflow');
        // }
        gsap.utils.toArray('.scrollTextEffectWipeFromLeft').forEach(function (scrollTextEffectWipeFromLeftElement) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: scrollTextEffectWipeFromLeftElement,
                start: 'top bottom',
                end: '+=500',
                scrub: true,
                // markers: true
            }
            });

            const splitTitle = new SplitText(scrollTextEffectWipeFromLeftElement);
            splitTimeline.from(splitTitle.chars, {
                duration: 3,
                opacity: 0,
                stagger: 0.25,
                x: -1000,
                ease: 'easeIn.out(1)',
            });
        });
    },
    imageStackAnimation() {
        window.$ = $;
        window.jQuery = $;
        const imageStackContainer = document.querySelector('.imageStackAnimation');
        gsap.utils.toArray('.imageStackAnimation').forEach(function (imageStackElement) {
            console.log('imageStackAnimations', imageStackElement);
            const imageStackAnimation = gsap.timeline({ scrollTrigger: {
                trigger: imageStackContainer,
                start: 'top bottom',
                end: 'bottom 80%',
                scrub: true,
                // markers: true
            }
            });
            imageStackAnimation.from(imageStackContainer, {
                duration: 1,
                rotateY: 90,
                ease: 'easeIn.out(1)',
            },);
        });
        // gsap.utils.toArray('.imageStackAnimation > .layers').forEach(function (layer) {
        //     console.log('layers', layer);
        //     const layerAnimation = gsap.timeline({ scrollTrigger: {
        //         trigger: imageStackContainer,
        //         start: 'top bottom',
        //         end: 'bottom 80%',
        //         scrub: true,
        //         // markers: true
        //     }
        //     });
        //     layerAnimation.from(imageStackContainer, {
        //         duration: 1,
        //         opacity: 0,
        //         ease: 'easeIn.out(1)',
        //     },);
        // });
    },
};

export default textEffects;
