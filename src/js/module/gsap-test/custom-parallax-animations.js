import { ScrollTrigger, gsap } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function parallaxAnimations() {
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
      }
  });

  gsap.utils.toArray(".parallax").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, {y: movement, ease: "none"}, 0)
  });
}

//Initial execution of scrollanimations when user lands directly on page with scroll animations
parallaxAnimations();

//Execution of scrollanimations when user refreshes the page
window.addEventListener('load', function(){
  ScrollTrigger.refresh();
})