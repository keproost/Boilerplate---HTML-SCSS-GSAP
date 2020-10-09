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

export default gsapEffects;
