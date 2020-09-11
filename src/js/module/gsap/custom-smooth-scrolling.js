
import { gsap } from 'gsap/all';

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
