import anime from 'animejs';
import { useState, useRef, useEffect } from 'react';
import './player.css';

const ticks = Array.from(Array(5));

const Player = () => {
  const [playing, setPlaying] = useState(false);

  const animation = useRef(null);

  const handleClick = () => {
    playing ? animation.current.pause() : animation.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    animation.current = anime.timeline({
      direction: 'alternate',
      loop: true,
      autoplay: false,
      easing: 'easeInOutSine',
    });

    for (const tick in ticks) {
      animation.current.add(
        {
          targets: `.dots li:nth-child(${Number(tick) + 1})`,
          scaleY: 1.2 + Math.random() * 5,
          duration: 200 + Math.random() * 200,
        },
        Math.random() * 500
      );
    }
  }, []);

  return (
    <div>
      <div className='player'>
        <ul className='dots'>
          {ticks.map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <button onClick={handleClick}>{playing ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
};

export default Player;
