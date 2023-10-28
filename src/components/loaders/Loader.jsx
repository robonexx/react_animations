import { useCallback, useState, useEffect, useRef } from 'react';
import './loader.scss';
import anime from 'animejs';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loaderRef = useRef(null);

  const Animate = useCallback(() => {
    const timeline = anime.timeline({
      targets: loaderRef.current,
      duration: 1500,
      easing: 'easeOutSine',
    });
    timeline.add({
      targets: loaderRef.current,
      opacity: [0, 1],
      width: ['0', '20vw'],
      duration: 600,
      delay: 100,
      innerHTML: [0, 100 + '%'],
      round: 10,
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {}, 1500);
    Animate();
    return () => clearTimeout(timeout);
  }, [Animate]);

  return (
    <div className='loader' ref={loaderRef}>
      <span>0</span>
    </div>
  );
};

export default Loader;
