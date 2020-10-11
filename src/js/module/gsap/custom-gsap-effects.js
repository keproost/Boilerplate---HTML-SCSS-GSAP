import { gsap, ScrollTrigger } from 'gsap/all';

const gsapEffects = {

    filterEffect1() {
        gsap.registerPlugin(ScrollTrigger);
        const effectStrenght = 100;
        const filterEffect1Elements = gsap.utils.toArray('.filterEffect1');
        const filterEffect1SvgFilter = document.getElementById('feBlur');
        filterEffect1SvgFilter.setAttribute('stdDeviation', effectStrenght);
        if (filterEffect1Elements) {
            filterEffect1Elements.forEach((filterEffect1Element) => {
                const filterEffect1Animation = gsap.timeline({});
                filterEffect1Animation
                    .from(filterEffect1SvgFilter, { attr: { stdDeviation: effectStrenght } })
                    .to(filterEffect1SvgFilter, { attr: { stdDeviation: 0 } });

                ScrollTrigger.create({
                    trigger: filterEffect1Element,
                    animation: filterEffect1Animation,
                    start: 'top bottom',
                    end: '+=500',
                    scrub: 1,
                    once: false,
                });
            });
        }
    }
};

gsapEffects.forEach((effect) => {
    gsap.registerEffect({
        name: effect.id,
        defaults: { duration: 1 },
        extendTimeline: true,
        effect(targets, config) {
            if (effect.animate === 'from') {
                return gsap.from(targets, { ...effect.props, ...config });
            }
            if (effect.animate === 'fromTo') {
                return gsap.fromTo(targets, { ...effect.props, ...config }, { ...effect.props2 });
            }

            return gsap.to(targets, { ...effect.props, ...config });
        }
    });
});

gsap.registerEffect({
    name: 'fadeOutOnLeave',
    defaults: { duration: 2 }, // defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            opacity: 1,
            ease: 'Back.easeInOut',
            scrollTrigger: {
                trigger: targets,
                start: 'top 15%',
                end: 'bottom 5%',
                scrub: 0,
                once: false,
                // scrub, etc.
            },
        });
    }
});


fadeOutOnLeave() {
    gsap.registerPlugin(ScrollTrigger);
    const fadeOutOnLeave = gsap.utils.toArray('.fadeOutOnLeave');
    // console.log('SCROLLANIMATION - FADEOUTONLEAVEELEMENTS', fadeOutOnLeave);
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
                start: 'top 15%',
                end: 'bottom 5%',
                scrub: 0,
                once: false,
            });
        });
    }





document.querySelectorAll('.box').forEach(function (box) {
    gsap.effects.fadeInView(box);
});

export default gsapEffects;
