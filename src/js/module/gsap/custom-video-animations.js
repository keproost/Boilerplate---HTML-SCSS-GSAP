import { ScrollTrigger, gsap } from 'gsap/all';

function fadeIn(el) {
    const tl = gsap.timeline()
        .to(el, { autoAlpha: 1, duration: 2 }, '<');
    return tl;
}

function fadeOut(el) {
    const tl = gsap.timeline()
        .to(el, { autoAlpha: 0, duration: 2 });
    return tl;
}

function toggleVideo(id, play) {
    const el = document.getElementById(id);
    return function () {
        const st = ScrollTrigger.getById('main');
        if (st) {
            if ((play && st.direction > 0) || (!play && st.direction < 0)) {
                el.play();
                console.log('play', id);
            } else {
                el.pause();
                console.log('pause', id);
            }
        }
    };
}

function animationOne() {
    const tl = gsap.timeline()
        .add(fadeIn('.header-one'), '>')
        .add(fadeOut('.header-one'), '>1')
        .call(toggleVideo('beach-waves', true))
        .to('#beach-waves', { scale: 1.1, duration: 2 }, '>')
        .call(toggleVideo('beach-waves', false))
        .set('.container', { background: 'black' })
        .add(fadeIn('.header-two'), '>')
        .to('#beach-waves', { scale: 0, autoAlpha: 0, duration: 2 }, '>2')
        .add(fadeOut('.header-two'), '>1');
    return tl;
}

function animationTwo() {
    const tl = gsap.timeline()
        .to('.video-container.start-hidden', { autoAlpha: 1, duration: 2 }, '<')
        .add(fadeIn('.header-three'), '>1')
        .add(fadeOut('.header-three'), '>2')
        .call(toggleVideo('bokeh', true))
        .to('#bokeh', { scale: 1.1, duration: 2 }, '>')
        .call(toggleVideo('bokeh', false))
        .to('#bokeh', { scale: 0, autoAlpha: 0, duration: 2 }, '>2');
    return tl;
}

const tl = gsap.timeline()
    .add(animationOne(), '>')
    .add(animationTwo(), '>-1');

ScrollTrigger.create({
    scrub: true,
    markers: true,
    trigger: '.container',
    start: 'top top',
    end: '+=500',
    id: 'main',
    animation: tl,
    pin: true
});
