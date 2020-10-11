
// import { gsap, TweenLite } from 'gsap/all';
import { gsap } from 'gsap/all';
// import $ from 'jquery';
// import Scrollbar from 'smooth-scrollbar';

const smoothScrolling = {
    smoothAnchorScroller() {
        function getSamePageAnchor(link) {
            if (
                link.protocol !== window.location.protocol
              || link.host !== window.location.host
              || link.pathname !== window.location.pathname
              || link.search !== window.location.search
            ) {
                return false;
            }

            return link.hash;
        }

        // Scroll to a given hash, preventing the event given if there is one
        function scrollToHash(hash, e) {
            const elem = hash ? document.querySelector(hash) : false;
            if (elem) {
                if (e) e.preventDefault();
                gsap.to(window, { scrollTo: elem, ease: 'easeInout', offsetY: -400 });
            }
        }

        function ahrefselect() {
            // If a link's href is within the current page, scroll to it instead
            document.querySelectorAll('a[href]').forEach((a) => {
                a.addEventListener('click', (e) => {
                    scrollToHash(getSamePageAnchor(a), e);
                });
            });
        }
        ahrefselect();
    },
    // Doesn't play well with smoothscroll and issues mobile
    // generalSmoothScrolling() {
    //     const html = document.documentElement;
    //     const { body } = document;

    //     const scroller = {
    //         target: document.querySelector('.main-content'),
    //         ease: 0.05, // <= scroll speed
    //         endY: 0,
    //         y: 0,
    //         resizeRequest: 1,
    //         scrollRequest: 0,
    //     };

    //     let requestId = null;

    //     TweenLite.set(scroller.target, {
    //         rotation: 0.01,
    //         force3D: true
    //     });

    //     function updateScroller() {
    //         const resized = scroller.resizeRequest > 0;

    //         if (resized) {
    //             const height = scroller.target.clientHeight;
    //             body.style.height = `${height}px`;
    //             scroller.resizeRequest = 0;
    //         }

    //         const scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    //         scroller.endY = scrollY;
    //         scroller.y += (scrollY - scroller.y) * scroller.ease;

    //         if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    //             scroller.y = scrollY;
    //             scroller.scrollRequest = 0;
    //         }

    //         TweenLite.set(scroller.target, {
    //             y: -scroller.y
    //         });

    //         requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    //     }
    //     function onScroll() {
    //         scroller.scrollRequest += 1;
    //         if (!requestId) {
    //             requestId = requestAnimationFrame(updateScroller);
    //         }
    //     }

    //     function onResize() {
    //         scroller.resizeRequest += 1;
    //         if (!requestId) {
    //             requestId = requestAnimationFrame(updateScroller);
    //         }
    //     }
    //     function onLoad() {
    //         updateScroller();
    //         window.focus();
    //         window.addEventListener('resize', onResize);
    //         document.addEventListener('scroll', onScroll);
    //     }
    //     window.addEventListener('load', onLoad);
    // }


    // GOOD LIBRARY CAN'T GET IT IMPLEMENTED
    // generalSmoothScrolling() {
    //     Scrollbar.initAll({
    //         damping: 0.04,
    //         thumbMinSize: 25,
    //         renderByPixels: true,
    //         alwaysShowTracks: true,
    //         continuousScrolling: false,

    //     });
    // }

    //   scrollToHash(window.location.hash);

    // Scroll to the element in the URL's hash on load
    //   scrollToHash(window.location.hash);
    // ahrefSmoothScroll() {
    //     // Add smooth scrolling to all links
    //     $('a').on('click', function (event) {
    //         // Make sure this.hash has a value before overriding default behavior
    //         if (this.hash !== '') {
    //         // Prevent default anchor click behavior
    //             event.preventDefault();

    //             // Store hash
    //             const { hash } = this;

    //             // Using jQuery's animate() method to add smooth page scroll
    //             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //             $('html, body').animate({
    //                 scrollTop: $(hash).offset().top
    //             }, 800, function () {
    //                 // Add hash (#) to URL when done scrolling (default click behavior)
    //                 window.location.hash = hash;
    //             });
    //         } // End if
    //     });
    // }
    // smoothScrollmMbile() {
    //     document.documentElement.style.setProperty('--scrollbar-size', `${getScrollbarSize()}px`);

    //     const scroller = new SmoothScroll({
    //         scrollBody: document.querySelector('.scroll-content'),
    //         scrollSpacer: document.querySelector('.spacer'),
    //         target: document.querySelector('.scroll-container'), // element container to scroll
    //         scrollEase: 0.05,
    //     });

    //     function getScrollbarSize() {
    //         const div = document.createElement('div');
    //         div.classList.add('scrollbar-test');
    //         document.body.appendChild(div);
    //         const size = div.offsetWidth - div.scrollWidth;
    //         document.body.removeChild(div);
    //         return size;
    //     }
    // }

    // Detect if a link's href goes to the current page
    // Detect if a link's href goes to the current page
};

export default smoothScrolling;
