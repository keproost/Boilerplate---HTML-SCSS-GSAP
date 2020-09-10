import { gsap, ScrollTrigger } from 'gsap/all';

const filterEffects = {
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

export default filterEffects;


// var shockwaveFilter =  new PIXI.filters.ShockwaveFilter();
// someDisplayObject.filters = [shockwaveFilter];

// TweenMax.to(shockwaveFilter, 2, {
//   time: 2.5,
//   ease: Linear.easeNone
// });


// gsap.utils.toArray('.filterEffect1').forEach(function (filterEffect1Element) {
//     const imgSrc = filterEffect1Element;
//     const texture = PIXI.Texture.fromImage(imgSrc);
//     const aSprite = new PIXI.Sprite(texture);
//     gsap.timeline({ scrollTrigger: {
//         trigger: filterEffect1Element,
//         start: 'top 80%',
//         end: 'bottom 50%',
//         // markers: true
//     }
//     });
//     gsap.to(aSprite, { duration: 1, pixi: { blur: 20 } });
// });
