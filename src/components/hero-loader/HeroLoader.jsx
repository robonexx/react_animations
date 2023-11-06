import { useEffect, useRef, useState, useCallback } from 'react';
import anime from 'animejs';
import './heroLoader.scss';

const HeroLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const imageRef = useRef(null);
    const introRef = useRef(null);
    const textReveal = useRef(null)

  const Animate = () => {
    const loader = anime.timeline({
      targets: ['line1', 'line2', 'line3'],
        duration: 1000,
      delay: 100,
      easing: 'easeOutSine',
    });
    loader
      .add({
        targets: line1.current,
        width: '100%',
        translateX: ['200%', '0%'],
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 300,
        direction: 'forwards',
        loop: false,
      })
      .add({
        targets: line2.current,
        width: '100%',
        translateX: ['200%', '0%'],
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 300,
        direction: 'forwards',
        loop: false,
      })
      .add({
        targets: line3.current,
        width: '100%',
        translateX: ['200%', '0%'],
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 300,
        loop: false,
      })
      .add({
        targets: [line1.current, line2.current, line3.current],
          width: '50%',
        duration: 300,
      });

    const imageLoad = anime.timeline({
      targets: imageRef.current,
        duration: 700,
      easing: 'easeOutSine',
    });
    imageLoad.add({
      targets: imageRef.current,
      opacity: [0, 0, 1],
      height: ['0%', '80%', '100%'],
      duration: 1400,
      delay: 600,
    });
      
    const text = anime.timeline({
        targets: textReveal.current,
        duration: 1000,
        easing: 'easeOutSine',
      });
      text
        .add({
          targets: textReveal.current,
          opacity: [0, 1],
            easing: 'easeInOutSine',
          delay: 1600,
          duration: 500,
        })
  };

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 1500);
    Animate();
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className='intro_loader' ref={introRef}>
      <div className='line1' ref={line1}></div>
      <div className='line2' ref={line2}></div>
      <div className='line3' ref={line3}></div>
      <div className='dual'>
        <div className='dual__inner'>
          <div className='dual__img' ref={imageRef}></div>
        </div>
        <div className='dual__content' ref={textReveal}>
          If ya question yer own fancy notions<br/> Them doubts befriend<br/>
          stirrin&apos; strange emotions.
          <br />
          Fail to tread the path of earnest toil<br/> Ye court disaster<br/> in
          failure&apos;s coil. <span className='author'>― Anonymous</span>
        </div>
      </div>
    </div>
  );
};

export default HeroLoader;

/* 

    var splitContent = document.querySelector('.dual__content'),
    revealEffect3 = new RevealFx(rfx3, {
        isContentHidden:true,
        layers:4,
        revealSettings : {
            bgColors: ['#2c2c38','#2c2c38','#2c2c38','#2c2c38'],
            direction: 'rl',
            duration: 800,
            easing: 'easeInOutCirc',
            coverArea: 50,
            onStart: function(contentEl)
            {
                contentEl.style.opacity =0;
                splitContent.classList.remove('dual__content--show');
            },
            onHalfway: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                splitContent.classList.add('dual__content--show');
            }
        }
    });
*/
