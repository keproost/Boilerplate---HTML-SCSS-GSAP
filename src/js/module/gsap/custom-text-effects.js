import { gsap } from 'gsap/all';
import $ from 'jquery';


const textEffects = {
    textEffect1() {
        gsap.utils.toArray('.textEffect1').forEach(function (textEffect1Element) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: textEffect1Element,
                start: 'top 80%',
                end: 'bottom 10%',
                onToggle: self => gsap.to(textEffect1Element, { opacity: self.isActive ? 1 : 0 }),
                toggleActions: 'restart pause restart none',
                // markers: true
            }
            });

            const splitTitle = new SplitText(textEffect1Element);
            splitTimeline.from(splitTitle.chars, {
                duration: 1.5,
                opacity: 0,
                y: 100,
                stagger: { amount: 0.5 },
                ease: 'back.out(1)',
                overwrite: 'auto'
            });
        });
    },
    textEffect2() {
        gsap.utils.toArray('.textEffect2').forEach(function (textEffect2Element) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: textEffect2Element,
                start: 'top 80%',
                end: 'bottom 10%',
                onToggle: self => gsap.to(textEffect2Element, { opacity: self.isActive ? 1 : 0 }),
                toggleActions: 'restart pause restart none',
                // markers: true
            },
            });
            const splitTitle = new SplitText(textEffect2Element);
            const numChars = splitTitle.chars.length;
            for (let i = 0; i < numChars; i++) {
                // random value used as position parameter
                splitTimeline.from(splitTitle.chars[i], 5, { opacity: 0 }, Math.random() * 0.5);
            }
            // splitTimeline.from(splitTitle.chars, {
            //     duration: 1.5,
            //     opacity: 0,
            //     y: 100,
            //     stagger: { amount: 0.5 },
            //     ease: 'back.out(1)',
            //     overwrite: 'auto'
            // });
        });
    },
    textEffect3() {
        window.$ = $;
        window.jQuery = $;
        gsap.utils.toArray('.textEffect3').forEach(function (textEffect3Element) {
            const splitTimeline = gsap.timeline({ scrollTrigger: {
                trigger: textEffect3Element,
                start: 'top 80%',
                end: 'bottom 50%',
                onToggle: self => gsap.to(textEffect3Element, { opacity: self.isActive ? 1 : 0 }),
                toggleActions: 'restart pause restart none',
                // markers: true
            }
            });

            const splitTitle = new SplitText(textEffect3Element);
            $('.textEffect3').css('persspective', '400');
            splitTimeline.from(splitTitle.lines, {
                duration: 0.5,
                opacity: 0,
                rotationX: -120,
                force3D: true,
                transformOrigin: '50% 0% -150',
                stagger: 0.1
            });
        });
    }
};

export default textEffects;
