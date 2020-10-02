
import $ from 'jquery';


const navbarFullscreen = {
    navbarFullscreenInit() {
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
