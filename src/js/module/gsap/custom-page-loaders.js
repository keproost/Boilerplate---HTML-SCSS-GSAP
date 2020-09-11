import { gsap, TimelineLite, Elastic, Power1 } from 'gsap/all';

import drawSVG from 'gsap/DrawSVGPlugin';
import $ from 'jquery';

gsap.registerPlugin(drawSVG);


const pageLoaders = {
    beforeOnceFadeIn() {
        window.$ = $;
        window.jQuery = $;
        const pageLoadDuration = 2;
        const pageLoadEase = 'power5';
        const elementFadeIn = gsap.utils.toArray('page-loader');
        console.log('pageloaderelement', elementFadeIn);
        if (elementFadeIn) {
            return new Promise((resolve) => {
                $('body').toggleClass('loader');
                gsap.from(elementFadeIn, {
                    duration: pageLoadDuration,
                    y: 0,
                    opacity: 1,
                    ease: pageLoadEase,
                });
                gsap
                    .to(elementFadeIn, {
                        duration: pageLoadDuration,
                        ease: pageLoadEase,
                        opacity: 0,
                        y: 0,
                        display: 'none',
                    });
                gsap
                    .to('main', {
                        opacity: 1
                    })
                    .then(resolve());
            });
        }
        return new Promise((resolve) => {
            resolve();
        });
    },
    beforeOnceMaskFadeIn() {
        window.$ = $;
        window.jQuery = $;
        const pageLoadDuration = 1;
        const pageLoadEase = 'power3';
        $('main').addClass('loader page-loader-mask');
        gsap.from('.page-loader-mask', {
            duration: pageLoadDuration,
            y: 0,
            opacity: 0,
            ease: pageLoadEase,
        });
        gsap.to('.page-loader-mask', {
            duration: pageLoadDuration,
            ease: pageLoadEase,
            opacity: 1,
            maskImage: 'radial-gradient(ellipse closest-side,rgba(0,0,0,1), rgba(0,0,0,1))',
            y: 0,
            onComplete() {
                $('.page-loader-mask').toggleClass('loader page-loader-mask');
            }
        });
        gsap.from('main', {
            duration: pageLoadDuration,
            y: 0,
            opacity: 0,
            ease: pageLoadEase,
        });
        gsap.to('main', {
            duration: pageLoadDuration,
            ease: pageLoadEase,
            opacity: 1,
            y: 0,
        });
    },
    i3logoReveal() {
        // Get logoreveal container
        const logoRevealContainer = document.querySelector('.logoreveal');

        // Get stroke elements
        const stripePrimaryStroke = document.querySelector('#stripe-primary-stroke');
        const dotPrimaryStroke = document.querySelector('#dot-primary-stroke');
        const stripeSecondaryStroke = document.querySelector('#stripe-secondary-stroke');
        const dotSecondaryStroke = document.querySelector('#dot-secondary-stroke');
        const stripeTertiaryStroke = document.querySelector('#stripe-tertiary-stroke');
        const dotTertiaryStroke = document.querySelector('#dot-tertiary-stroke');

        // Get fill elements
        const stripePrimaryFill = document.querySelector('#stripe-primary-fill');
        const dotPrimaryFill = document.querySelector('#dot-primary-fill');
        const stripeSecondaryFill = document.querySelector('#stripe-secondary-fill');
        const dotSecondaryFill = document.querySelector('#dot-secondary-fill');
        const stripeTertiaryFill = document.querySelector('#stripe-tertiary-fill');
        const dotTertiaryFill = document.querySelector('#dot-tertiary-fill');

        // Leave function
        function leaveLoader() {
            gsap.to(logoRevealContainer, {
                opacity: 0,
            });
            $('body').toggleClass('loader');
        }


        // Init child timelines
        const strokeAnimation = new TimelineLite({ repeat: 0 });
        const strokeEnterAnimation = new TimelineLite({ repeat: 0 });
        const fillAnimation = new TimelineLite({ repeat: 0 });
        const loadingEnterAnimation = new TimelineLite({ repeat: 0 });
        // const loadingLeaveAnimation = new TimelineLite({ repeat: 0 });

        // Init master timesline
        const masterTimeline = new TimelineLite({ onComplete: leaveLoader() });
        masterTimeline.add(loadingEnterAnimation)
            .add(strokeAnimation, 0.2)
            .add(strokeEnterAnimation, 0.4)
            .add(fillAnimation, 1.35)
            .from('#progress', masterTimeline.duration(), { scaleX: 0, transformOrigin: 'center center' }, 3);


        masterTimeline.timeScale(2); // manipulates global animation speed

        // const start = Math.random() * 100;
        // const end = Math.random() * 100;
        const animationEasing1 = Elastic.easeInOut.config(1, 1);
        // const animationEasing2 = Bounce.easeInOut;
        const animationEasing3 = Power1.easeInOut;

        $('body').toggleClass('loader');

        loadingEnterAnimation
            .staggerFromTo(logoRevealContainer, 1, {
                opacity: 0,
            }, {
                opacity: 1,
            });

        strokeAnimation
            .staggerFromTo([
                stripePrimaryStroke,
                dotPrimaryStroke,
                stripeSecondaryStroke,
                dotSecondaryStroke,
                stripeTertiaryStroke,
                dotTertiaryStroke], 3, {
                opacity: 0,
                drawSVG: '0%',
            }, {
                drawSVG: '100%',
                opacity: 1,
                ease: animationEasing3,
            }, 0.15);
        strokeEnterAnimation
            .staggerFromTo([
                stripePrimaryStroke,
                dotPrimaryStroke,
                stripeSecondaryStroke,
                dotSecondaryStroke,
                stripeTertiaryStroke,
                dotTertiaryStroke], 3, {

                scale: 0.2,
                y: -20,
                rotate: -45,
            }, {
                y: 0,
                scale: 1,
                rotate: 0,
                ease: animationEasing1,
            });
        fillAnimation
            .staggerFromTo([
                stripePrimaryFill,
                dotPrimaryFill,
                stripeSecondaryFill,
                dotSecondaryFill,
                stripeTertiaryFill,
                dotTertiaryFill], 4, {
                opacity: 0,
                scaleY: 0,
                transformOrigin: 'center center',

            }, {
                opacity: 1,
                scaleY: 1,
                ease: animationEasing1,
                transformOrigin: 'center center',
            }, 0.10);


        // loadingLeaveAnimation
        //     .staggerFromTo(logoRevealContainer, 1, {
        //         opacity: 1,
        //     }, {
        //         opacity: 0,
        //         ease: animationEasing1,
        //     }, 0.15);

        // staggerAnimation
        //     .staggerFromTo([
        //         stripePrimaryStroke,
        //         dotPrimaryStroke,
        //         stripeSecondaryStroke,
        //         dotSecondaryStroke,
        //         stripeTertiaryStroke,
        //         dotTertiaryStroke], 0.75, {
        //         opacity: 0,
        //         scale: 0.2,
        //         y: -70,
        //         rotate: -90,
        //         rotationX: 75,
        //         rotationY: 90,
        //     }, {
        //         opacity: 1,
        //         y: 0,
        //         scale: 1,
        //         rotate: 0,
        //         rotationX: 20,
        //         rotationY: 90,
        //         ease: Elastic.easeInOut.config(1, 0.75),
        //     }, 0.125);
    }
    // i3logoReveal() {
    //     // Init timeslines
    //     const strokeAnimation = new TimelineLite({ repeat: 0 });
    //     const strokeEnterAnimation = new TimelineLite({ repeat: 0 });
    //     const fillAnimation = new TimelineLite({ repeat: 0 });
    //     const loadingEnterAnimation = new TimelineLite({ repeat: 0 });
    //     const loadingLeaveAnimation = new TimelineLite({ repeat: 0 });

    //     // Get logoreveal container
    //     const logoRevealContainer = document.querySelector('.logoreveal');

    //     // Get stroke elements
    //     const stripePrimaryStroke = document.querySelector('#stripe-primary-stroke');
    //     const dotPrimaryStroke = document.querySelector('#dot-primary-stroke');
    //     const stripeSecondaryStroke = document.querySelector('#stripe-secondary-stroke');
    //     const dotSecondaryStroke = document.querySelector('#dot-secondary-stroke');
    //     const stripeTertiaryStroke = document.querySelector('#stripe-tertiary-stroke');
    //     const dotTertiaryStroke = document.querySelector('#dot-tertiary-stroke');

    //     // Get fill elements
    //     const stripePrimaryFill = document.querySelector('#stripe-primary-fill');
    //     const dotPrimaryFill = document.querySelector('#dot-primary-fill');
    //     const stripeSecondaryFill = document.querySelector('#stripe-secondary-fill');
    //     const dotSecondaryFill = document.querySelector('#dot-secondary-fill');
    //     const stripeTertiaryFill = document.querySelector('#stripe-tertiary-fill');
    //     const dotTertiaryFill = document.querySelector('#dot-tertiary-fill');


    //     // const start = Math.random() * 100;
    //     // const end = Math.random() * 100;
    //     const animationEasing1 = Elastic.easeInOut.config(0.1, 250);
    //     const animationEasing2 = Elastic.easeInOut.config(2, 3.75);

    //     $('body').toggleClass('loader');

    //     loadingEnterAnimation
    //         .staggerFromTo(logoRevealContainer, 1, {
    //             opacity: 0,
    //         }, {
    //             opacity: 1,
    //             ease: animationEasing1,
    //         }, 0.15);

    //     strokeAnimation
    //         .staggerFromTo([
    //             stripePrimaryStroke,
    //             dotPrimaryStroke,
    //             stripeSecondaryStroke,
    //             dotSecondaryStroke,
    //             stripeTertiaryStroke,
    //             dotTertiaryStroke], 1, {
    //             opacity: 0,
    //             drawSVG: '0%',
    //         }, {
    //             drawSVG: '100%',
    //             opacity: 1,
    //             ease: animationEasing1,
    //         }, 0.15);
    //     strokeEnterAnimation
    //         .staggerFromTo([
    //             stripePrimaryStroke,
    //             dotPrimaryStroke,
    //             stripeSecondaryStroke,
    //             dotSecondaryStroke,
    //             stripeTertiaryStroke,
    //             dotTertiaryStroke], 1, {

    //             scale: 0.2,
    //             y: -70,
    //             rotate: -135,
    //         }, {
    //             y: 0,
    //             scale: 1,
    //             rotate: 0,
    //             ease: animationEasing2,
    //         }, 0.15);
    //     fillAnimation
    //         .delay(1)
    //         .staggerFromTo([
    //             stripePrimaryFill,
    //             dotPrimaryFill,
    //             stripeSecondaryFill,
    //             dotSecondaryFill,
    //             stripeTertiaryFill,
    //             dotTertiaryFill], 1, {
    //             opacity: 0,
    //             y: 250,
    //         }, {
    //             opacity: 1,
    //             y: 0,
    //             ease: animationEasing2,
    //         }, 0.15);

    //     // loadingLeaveAnimation
    //     //     .staggerFromTo(logoRevealContainer, 1, {
    //     //         opacity: 1,
    //     //     }, {
    //     //         opacity: 0,
    //     //         ease: animationEasing1,
    //     //     }, 0.15);

    //     // staggerAnimation
    //     //     .staggerFromTo([
    //     //         stripePrimaryStroke,
    //     //         dotPrimaryStroke,
    //     //         stripeSecondaryStroke,
    //     //         dotSecondaryStroke,
    //     //         stripeTertiaryStroke,
    //     //         dotTertiaryStroke], 0.75, {
    //     //         opacity: 0,
    //     //         scale: 0.2,
    //     //         y: -70,
    //     //         rotate: -90,
    //     //         rotationX: 75,
    //     //         rotationY: 90,
    //     //     }, {
    //     //         opacity: 1,
    //     //         y: 0,
    //     //         scale: 1,
    //     //         rotate: 0,
    //     //         rotationX: 20,
    //     //         rotationY: 90,
    //     //         ease: Elastic.easeInOut.config(1, 0.75),
    //     //     }, 0.125);
    // }
    // logoReveal() {
    //     const tl = new TweenMax();
    //     // $('body').toggleClass('loader');
    //     // gsap.from('#stripe-tertiary', 1, { drawSVG: 0 });
    //     // gsap.from('#stripe-secondary', 1, { drawSVG: 0 });
    //     // gsap.from('#stripe-primary', 1, { drawSVG: 0 });
    //     // gsap.from('#dot-tertiary', 1, { drawSVG: 0 });
    //     // gsap.from('#dot-secondary', 1, { drawSVG: 0 });
    //     // gsap.from('#dot-primary', 1, { drawSVG: 0 });
    //     tl.set(['#stripe-tertiary-fill'], { drawSVG: '0% 50%' });
    //     tl.set(['#stripe-secondary-fill'], { drawSVG: '50% 50%' });
    //     // gsap.from('#stripe-tertiary-fill', 3, { drawSVG: '100%' }, { drawSVG: true });
    //     // gsap.fromTo('#stripe-secondary-fill', 3, { drawSVG: 0 }, { drawSVG: true });
    //     // gsap.fromTo('#stripe-primary-fill', 3, { drawSVG: 0 }, { drawSVG: true });
    //     // gsap.from('#dot-tertiary-fill', 1, { drawSVG: 100 }, { drawSVG: true });
    //     // gsap.fromTo('#dot-secondary-fill', 3, { drawSVG: 0 }, { drawSVG: true });
    //     // gsap.from('#dot-primary-fill', 3, { drawSVG: 0 }, { drawSVG: true });
    //     tl.duration(10).play();
    //     return new Promise((resolve) => {
    //         resolve();
    //     });
    // }
    // beforeOnceMaskFadeIn() {
    //     window.$ = $;
    //     window.jQuery = $;
    //     const pageLoadDuration = 2;
    //     const pageLoadEase = 'power5';
    //     const elementMaskFadeIn = gsap.utils.toArray('loader page-loader-mask');
    //     if (elementMaskFadeIn) {
    //         return new Promise((resolve) => {
    //             gsap.from(elementMaskFadeIn, {
    //                 duration: pageLoadDuration,
    //                 y: 0,
    //                 opacity: 1,
    //                 ease: pageLoadEase,
    //             });
    //             gsap
    //                 .to(elementMaskFadeIn, {
    //                     duration: pageLoadDuration,
    //                     ease: pageLoadEase,
    //                     opacity: 0,
    //                     y: 0,
    //                     onComplete() {
    //                         $('body').toggleClass('loader page-loader-mask');
    //                     }
    //                 })
    //                 .then(resolve());
    //         });
    //     }
    //     return new Promise((resolve) => {
    //         resolve();
    //     });
    // }
};

export default pageLoaders;
