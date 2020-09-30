import { gsap } from 'gsap/all';


const mouseEffects = {
    mouseFollowBall() {
        gsap.set('.ball', { xPercent: -50, yPercent: -50 });

        const ball = document.querySelector('.ball');
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.1;

        const fpms = 60 / 1000;

        const xSet = gsap.quickSetter(ball, 'x', 'px');
        const ySet = gsap.quickSetter(ball, 'y', 'px');

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        gsap.ticker.add((time, deltaTime) => {
            const delta = deltaTime * fpms;
            const dt = 1.0 - ((1.0 - speed) ** delta);

            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });
    }
};

export default mouseEffects;
