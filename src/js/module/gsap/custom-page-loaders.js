import { gsap } from 'gsap/all';
import $ from 'jquery';


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
    }
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
