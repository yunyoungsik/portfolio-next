import gsap from 'gsap';

export function detailNavBar() {
  gsap.to('progress', {
    value: 100,
    ease: 'Power1.easeInOut',
    scrollTrigger: { scrub: 0.3 },
  });
}
