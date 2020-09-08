import { gsap } from 'gsap/all';

const pageLoadDuration = 0.50;
const pageLoadEase = 'power2.inOut';


const pageLoaders = {
    zoomIntoDot(e) {
        const elementZoomInToDot = e.querySelectorAll('.page-loader');
        if (elementZoomInToDot) {
            return new Promise((resolve) => {
                gsap.from(elementZoomInToDot, {
                    duration: pageLoadDuration,
                    y: 800,
                    opacity: 1,
                    ease: pageLoadEase,
                });
                gsap
                    .to(elementZoomInToDot, {
                        duration: pageLoadDuration,
                        ease: pageLoadEase,
                        opacity: 0,
                        y: 0,
                    })
                    .then(resolve());
            });
        }
        return new Promise((resolve) => {
            resolve();
        });
    }
};

export default pageLoaders;
