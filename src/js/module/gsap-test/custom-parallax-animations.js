import { ScrollTrigger, gsap } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function parallaxAnimations() {
  const parallaxHero = gsap.timeline({
      scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
      }
  });


  const parallaxItems = gsap.utils.toArray(".parallax").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      parallaxHero.to(layer, {y: movement, ease: "none"}, 0)
  });
}



//Initial execution of scrollanimations when user lands directly on page with scroll animations
parallaxAnimations();

//Execution of scrollanimations when user refreshes the page
// window.addEventListener('load', function(){
//   parallaxHero.kill(true);
//   ScrollTrigger.getById("hero").kill(true);
//   gsap.set("#hero", {clearProps: true});
//   ScrollTrigger.refresh();
// })