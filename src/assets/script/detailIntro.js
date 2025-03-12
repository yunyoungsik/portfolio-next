import gsap from 'gsap';

export function detailIntro() {
  const aboutIntro = gsap.timeline();

  aboutIntro.to('.detailSlideWrap img', { opacity: 1, duration: 2, ease: 'Power1.easeInOut' }, '<');
  aboutIntro.to('#detail #header .logo', {
    opacity: 1,
    duration: 0.5,
    ease: 'power1.inOut',
    delay: 0.5,
  });
  aboutIntro.to(['#detail #header .logo span', '#detail #header .detailClose'], {
    opacity: 1,
    duration: 0.5,
    ease: 'power1.inOut',
  });

  document.querySelectorAll('.split.detailLogo').forEach((text) => {
    const spanTimeline = gsap.timeline({ paused: true });

    gsap.utils.toArray(text.querySelectorAll('span')).forEach((span, index) => {
      spanTimeline.fromTo(
        span,
        {
          y: 30,
          opacity: 0,
          display: 'inline-block',
        },
        {
          y: 0,
          opacity: 1,
          ease: 'Power1.easeInOut',
        },
        index * 0.03
      );
    });

    aboutIntro.add(() => spanTimeline.play(), '-=0.5'); // subAni 타임라인에 추가
  });
}
