import { ScrollTrigger, gsap } from 'gsap/all';

export default function goToSection(i, anim) {
    gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1
    });

    if (anim) {
        anim.restart();
    }
}

gsap.to('.arrow', { y: 12, ease: 'power1.inOut', repeat: -1, yoyo: true });
gsap.utils.toArray('.panel-fullscreen').forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        onEnter: () => goToSection(i)
    });

    ScrollTrigger.create({
        trigger: panel,
        start: 'bottom bottom',
        onEnterBack: () => goToSection(i),
    });
});


// export default function fullPageScrollingAnimation(i) {
//     gsap.registerPlugin(ScrollToPlugin);
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(window, {
//         scrollTo: { y: i * innerHeight, autoKill: false },
//         duration: 1
//     });
// }

// gsap.utils.toArray('.panel-fullscreen').forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         onEnter: () => fullPageScrollingAnimation(i)
//     });

//     ScrollTrigger.create({
//         trigger: panel,
//         start: 'bottom bottom',
//         onEnterBack: () => fullPageScrollingAnimation(i),
//     });
// });
