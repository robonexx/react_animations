import { useEffect, useRef, useState, useCallback } from 'react';
import anime from 'animejs';
import './heroLoader.scss';

const HeroLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const introRef = useRef(null);

  useEffect(() => {
    const animateLines = () => {
      const lines = document.querySelectorAll('.line');
      anime({
        targets: lines,
        width: '100%',
        translateX: ['200%', '0%'],
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 200,
        delay: (el, i) => i * 100 + 400,
        direction: 'forwards',
        loop: false,
      });
    };

    const animateImage = () => {
      anime({
        targets: '.dual__img',
        opacity: [0, 1],
        height: ['0%', '100%'],
        duration: 1400,
        delay: 800,
        easing: 'easeOutSine',
      });
    };

    const animateText = () => {
      anime({
        targets: '.dual__content',
        opacity: [0, 1],
        translateX: 0,
        easing: 'easeInOutSine',
        delay: 1600,
        duration: 500,
      });
    };

    const timeout = setTimeout(() => setIsLoading(false), 1500);

    animateLines();
    animateImage();
    animateText();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='intro_loader' ref={introRef}>
    {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className={`line line${index}`} />
      ))}
      <div className='dual'>
        <div className='dual__inner'>
          <div className='dual__img' ></div>
        </div>
        <div className='dual__content' >
          If ya question yer own fancy notions
          <br /> Them doubts befriend
          <br />
          stirrin&apos; strange emotions.
          <br />
          Fail to tread the path of earnest toil
          <br /> Ye court disaster
          <br /> in failure&apos;s coil.{' '}
          <span className='author'>― Anonymous</span>
        </div>
      </div>
    </div>
  );
};

export default HeroLoader;


