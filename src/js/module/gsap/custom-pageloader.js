import $ from 'jquery';
import { TweenLite, TimelineMax, Power1, Power4, Back, Linear } from 'gsap/all';
// import imagesLoaded from 'imagesloaded';

window.$ = $;
window.jQuery = $;

// load images
let loadedCount = 0; // current number of images
const imagesToLoad = $('.bcg').length; // number of slides with .bcg
let loadingProgress = 0; // timeline progress - starts at 0

// as the progress bar witdh updates and grows we put the precentage loaded in the screen
function progressUpdate() {
    // the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100);
    // we put the percentage in the screen
    $('.txt-perc').text(`${loadingProgress}%`);
}

// preloader out
const preloaderOutTl = new TimelineMax();


// force the playhead to jump to the end in order to pre-render all the tweens, then back to the start and pause.
preloaderOutTl.progress(1).pause(0);

function loadComplete() {
    preloaderOutTl.play();
}

// progress animation
const progressTl = new TimelineMax({ paused: true, onUpdate: progressUpdate, onComplete: loadComplete });

preloaderOutTl
    .to('.progress', 0.3, { y: 100, autoAlpha: 0, ease: Back.easeIn })
    .to('.txt-perc', 0.3, { y: 100, autoAlpha: 0, ease: Back.easeIn }, 0.1)
    .set('html', { className: '-=is-loading' })
    .set('#slide01', { className: '+=is-loaded' })
    .to('#preloader', 0.7, { yPercent: 100, ease: Power4.easeInOut })
    .set('#preloader', { className: '+=is-hidden' })
    .from('#slide01 h1', 1, { autoAlpha: 0, ease: Power1.easeOut }, '-=0.2')
    .from('#slide01 p', 0.7, { autoAlpha: 0, ease: Power1.easeOut }, '+=0.2');


progressTl
    // tween the progress bar width
    .to('.progress span', 1, { width: 100, ease: Linear.easeNone });


function loadProgress() {
    // one more image has been loaded
    loadedCount += 1;

    loadingProgress = (loadedCount / imagesToLoad);

    // GSAP timeline for our progress bar
    TweenLite.to(progressTl, 0.7, { progress: loadingProgress, ease: Linear.easeNone });
}

$('.bcg').imagesLoaded({
    background: true
}).progress(function () {
    loadProgress();
});

TweenLite.from('.txt-perc', 0.7, { autoAlpha: 0, y: '-150px' });
