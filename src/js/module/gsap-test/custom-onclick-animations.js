import $ from 'jquery';

window.$ = $;
window.jQuery = $;

import { ScrollTrigger, gsap } from 'gsap/all';

//Headeranimation
const headerAnimation = gsap.timeline({paused:true});

headerAnimation.from(".gsap-loader", {
    opacity: 0, 
    height: "20%", 
    width: "20%", 
    scale: 0,
    transformOrigin: "center center",
})
.to(".gsap-loader", {
    opacity: 1, 
    backgroundColor: "orange", 
    height: "20%", 
    width: "20%", 
    scale: 1,
    transformOrigin: "center center"
});


$('.gsap-click-trigger').on('click', function(event) {
    event.preventDefault();
    headerAnimation.play() ? headerAnimation.reversed() : headerAnimation.reverse();
});

// $('.gsap-click-trigger').click(() => {

// });





//Example for double click
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