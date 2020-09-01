import $ from 'jquery';
import gsap from 'gsap/all';

window.$ = $;
window.jQuery = $;

function onStart() {
    document.body.classList.add('gsap-active-no-overflow');
}

function onComplete() {
    document.body.classList.remove('gsap-active-no-overflow');
}

// Headeranimation
const headerAnimation = gsap.timeline({ paused: true });

headerAnimation.from('.gsap-loader', {
    opacity: 0,
})
    .to('.gsap-loader', {
        opacity: 1,
        backgroundColor: 'orange',
        width: '80%',
        onStart,
        onComplete
    });


// $('body').on('click', function(event) {
//     event.preventDefault();
//     headerAnimation.play() ? headerAnimation.reversed() : headerAnimation.reverse();
// });

// $('.gsap-click-trigger').click(() => {

// });

// Example for double click
// $('.special-button').each( function(){
//     this.tl = new TimelineMax({paused:true});
//     this.tl.to( this , .25 , {backgroundColor: 'red', scale: 1.2} );

//     $(this).click( function() {
//       var sameElem = this.isSameNode($(".active")[0]);

//       // Any others in active state should go back to inactive
//       $('.special-button').each( function(){
//         $(this).removeClass('active');
//         this.tl.reverse();
//       });

//       if(!sameElem) {
//         $(this).addClass('active');
//         this.tl.play();
//       }
//     });

//   });
