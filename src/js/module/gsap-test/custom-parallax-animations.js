import { ScrollTrigger, gsap } from 'gsap/all';

export default function parallaxAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    const parallaxHero = gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            id: 'parallaxAnimationID',
            markers: { startColor: 'blue', endColor: 'pink', fontSize: '12px' },
            scrub: true
        }
    });

    const layers = gsap.utils.toArray('.parallax');
    console.log('MYPARALLAXELEMENTS', layers);
    if (layers) {
        layers.forEach((layer) => {
            const { depth } = layer.dataset;
            const movement = -(layer.offsetHeight * depth);
            parallaxHero.to(layer, { y: movement, ease: 'none' }, 0);
        });
    }

    // gsap.utils.toArray('.parallax').forEach((layer) => {
    //     console.log('MYPARALLAXELEMENTS', layer);
    //     const { depth } = layer.dataset;
    //     const movement = -(layer.offsetHeight * depth);
    //     parallaxHero.to(layer, { y: movement, ease: 'none' }, 0);
    // });
}

// export default function parallaxAnimations() {
//     gsap.registerPlugin(ScrollTrigger);
//     const parallaxSection = gsap.timeline({ y: 0 });
//     const layers = gsap.utils.toArray('.parallax');
//     console.log('MYPARALLAXELEMENTS', layers);
//     ScrollTrigger.create({
//         trigger: '#hero',
//         start: 'top top',
//         end: 'bottom top',
//         markers: { startColor: 'blue', endColor: 'pink', fontSize: '12px' },
//         scrub: true
//     });
//     if (layers) {
//         layers.forEach((layer) => {
//             const { depth } = layer.dataset;
//             const movement = -(layer.offsetHeight * depth);
//             parallaxSection.to(layer, { y: movement, ease: 'none' });
//         });
//     }
// }
