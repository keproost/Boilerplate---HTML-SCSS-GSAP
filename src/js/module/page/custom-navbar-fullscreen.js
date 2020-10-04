import { TimelineLite, Power1 } from 'gsap/all';
import $ from 'jquery';


const navbarFullscreen = {
    navbarFullscreenInit() {
        // Togglefullscreen
        $('#hamburger').click(function () {
            $(this).toggleClass('active');
            $('#topnav').toggleClass('navbar-open');
            $('.navbar-fullscreen').toggleClass('navbar-open');
            $('body').toggleClass('navbar-open');
            $('#hamburger-fullscreen').toggleClass('active');
            $('html').addClass('no-overflow');
        });

        $('#hamburger-fullscreen').click(function () {
            $(this).toggleClass('active');
            $('#topnav').toggleClass('navbar-open');
            $('.navbar-fullscreen').toggleClass('navbar-open');
            $('body').toggleClass('navbar-open');
            $('html').removeClass('no-overflow');
            $('#hamburger').toggleClass('active');
        });

        $('.navbar-fullscreen .nav-item').click(function () {
            $('.navbar-fullscreen').toggleClass('navbar-open');
            $('#hamburger-fullscreen').toggleClass('active');
            $('#hamburger').toggleClass('active');
        });

        // Hide navbar when scrolling down, show when up
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function () {
            const menuArea = document.getElementById('topnav');
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                menuArea.classList.remove('navbar-scrolled');
                menuArea.classList.add('navbar-scrollstyling');
            } else {
                menuArea.classList.add('navbar-scrolled');
                menuArea.classList.remove('navbar-scrollstyling');
            }
            prevScrollPos = currentScrollPos;

            if (currentScrollPos < 10) {
                menuArea.classList.remove('navbar-scrollstyling');
            }
        };

        // Animate brand

        function animateBrand() {
            const brandSymbolNavbar = document.querySelector('.brand-symbol-navbar');
            const brandWordmarkNavbar = document.querySelector('.brand-wordmark-navbar');

            const brandSymbolNavbarAnimation = new TimelineLite({ repeat: 0 });
            const brandWordmarkNavbarAnimation = new TimelineLite({ repeat: 0 });
            const animationEasing = Power1.Elastic;


            brandSymbolNavbarAnimation
                .from(brandSymbolNavbar, {
                    transformOrigin: 'center center',
                    scaleX: 0,
                    ease: animationEasing,
                    // scaleY: 0
                })
                .to(brandSymbolNavbar, {
                    transformOrigin: 'center center',
                    scaleX: 1,
                    ease: animationEasing,
                    // scaleY: 1
                });

            brandWordmarkNavbarAnimation
                .from(brandWordmarkNavbar, {
                    transformOrigin: 'center center',
                    x: 5,
                    ease: animationEasing,
                    scaleY: 0
                })
                .to(brandWordmarkNavbar, {
                    transformOrigin: 'center center',
                    ease: animationEasing,
                    x: 0,
                });

            const brandAnimationNavTimeline = new TimelineLite({
                delay: 0,
                // onStart: enterLoader,
                // onComplete: leaveLoader
            });

            brandAnimationNavTimeline
                .add(brandSymbolNavbarAnimation, 0)
                .add(brandWordmarkNavbarAnimation, 0);

            brandAnimationNavTimeline
                .timeScale(1);
        }

        animateBrand();

        // $(document).ready(function () {
        //     $('body').toggleClass('loaded');
        // });


        // if ($('body').hasClass('bg-home')) {
        //     $('#topnav').addClass('bg-transparent');
        //     $('#topnav').removeClass('bg-secondary');
        // }
    }
};


export default navbarFullscreen;
