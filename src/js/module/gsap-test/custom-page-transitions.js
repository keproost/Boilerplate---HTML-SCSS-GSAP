import { gsap } from 'gsap/all';

const pageTransitionDuration = 0.50;
const pageTransitionStagger = 0.1;
const pageTransitionEase = 'power2.inOut';


export function fadeUpDownEnter(e) {
    const elementsFadeUpDown = e.querySelectorAll(
        '.gsap-pageTransition-fadeUpDown'
    );
    const elementsFadeInOut = e.querySelectorAll(
        '.gsap-pageTransition-fadeInOut'
    );
    console.log('PAGELOAD - ENTER - ELEMENTSFADEINOUT', elementsFadeInOut);
    console.log('PAGELOAD - ENTER - ELEMENTSFADEUPDOWN', elementsFadeUpDown);

    if (
        elementsFadeInOut
    && elementsFadeInOut.length > 0
    && elementsFadeUpDown
    && elementsFadeUpDown.length > 0
    ) {
        return new Promise((resolve) => {
            gsap.from(elementsFadeUpDown, {
                duration: pageTransitionDuration,
                y: 100,
                opacity: 0,
                ease: pageTransitionEase,
                stagger: pageTransitionStagger,
            });
            gsap
                .from(elementsFadeInOut, {
                    duration: pageTransitionDuration,
                    ease: pageTransitionEase,
                    opacity: 0,
                })
                .then(resolve());
        });
    }

    return new Promise((resolve) => {
        resolve();
    });
}

export function fadeUpDownLeave(e) {
    const elementsFadeUpDown = e.querySelectorAll(
        '.gsap-pageTransition-fadeUpDown'
    );
    const elementsFadeInOut = e.querySelectorAll(
        '.gsap-pageTransition-fadeInOut'
    );
    console.log('PAGELOAD - LEAVE - ELEMENTSFADEINOUT', elementsFadeInOut);
    console.log('PAGELOAD - LEAVE - ELEMENTSFADEUPDOWN', elementsFadeUpDown);

    if (
        elementsFadeInOut
        && elementsFadeInOut.length > 0
        && elementsFadeUpDown
        && elementsFadeUpDown.length > 0
    ) {
        return new Promise(async (resolve) => {
            await gsap.to(elementsFadeUpDown, {
                duration: pageTransitionDuration,
                y: 100,
                opacity: 0,
                ease: pageTransitionEase,
                stagger: pageTransitionStagger,
            });
            gsap
                .to(elementsFadeInOut, {
                    duration: pageTransitionDuration,
                    opacity: 0,
                    ease: pageTransitionEase,
                })
                .then();
            resolve();
        });
    }

    return new Promise((resolve) => {
        resolve();
    });
}
