import $ from 'jquery';

import { Power2, TweenLite } from 'gsap/all';

window.$ = $;
window.jQuery = $;


export default function parallax3d() {
    $(document).ready(function () {
        let request = null;
        const mouse = { x: 0, y: 0 };
        let cx = window.innerWidth / 2;
        let cy = window.innerHeight / 2;

        function update() {
            const dx = mouse.x - cx;
            const dy = mouse.y - cy;

            const tiltx = (dy / cy);
            const tilty = -(dx / cx);
            const radius = Math.sqrt((tiltx ** 2) + (tilty ** 2));
            const degree = (radius * 20);
            console.log(dx);
            console.log(dy);
            console.log(tiltx);
            console.log(tilty);
            TweenLite.to('#container', 1, { transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`, ease: Power2.easeOut });
        }

        $('body').mousemove(function (event) {
            mouse.x = event.pageX;
            mouse.y = event.pageY;

            cancelAnimationFrame(request);
            request = requestAnimationFrame(update);
        });

        $(window).resize(function () {
            cx = window.innerWidth / 2;
            cy = window.innerHeight / 2;
        });
    });
}
