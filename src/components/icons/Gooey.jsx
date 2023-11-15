import { useState, useEffect } from 'react';
import anime from 'animejs';
import './gooey.scss';

<svg width="205" height="90" viewBox="0 0 205 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M205 21.5C205 78.1092 159.109 89.5 102.5 89.5C45.8908 89.5 0 78.1092 0 21.5C49.5 -36 45.8908 53.5 102.5 53.5C159.109 53.5 184 -40.5 205 21.5Z" fill="#D9D9D9"/>
</svg>


const gooey1 =
  'M205 102.5C205 159.109 159.109 205 102.5 205C45.8908 205 0 159.109 0 102.5C0 45.8908 45.8908 0 102.5 0C159.109 0 205 45.8908 205 102.5Z';

const gooey2 =
  'M205 60.5C205 117.109 159.109 163 102.5 163C45.8908 163 0 117.109 0 60.5C0 3.89081 45.8908 0 102.5 0C159.109 0 205 3.89081 205 60.5Z';

const gooey3 =
  'M205 22.5C205 79.1092 159.109 125 102.5 125C45.8908 125 0 79.1092 0 22.5C0 -34.1092 45.8908 36.5 102.5 36.5C159.109 36.5 205 -34.1092 205 22.5Z';
const gooey4 =
  'M205 21.5C205 78.1092 159.109 110.5 102.5 110.5C45.8908 110.5 0 78.1092 0 21.5C0 -35.1092 45.8908 43 102.5 43C159.109 43 205 -35.1092 205 21.5Z';
const gooey5 =
  'M205 21.5C205 78.1092 159.109 89.5 102.5 89.5C45.8908 89.5 0 78.1092 0 21.5C49.5 -36 45.8908 53.5 102.5 53.5C159.109 53.5 184 -40.5 205 21.5Z';

const Gooey = () => {
  /*   const [toggle, setToggle] = useState(false) */

  const Animate = () => {
    const timeline = anime.timeline({
      duration: 1500,
      easing: 'easeOutSine',
    });
    // add animation morph
    timeline.add({
      targets: '.gooey path',
      d: [
        { value: gooey1 },
        { value: gooey2 },
        { value: gooey3 },
        { value: [gooey4, gooey5, gooey4] },
        { value: [gooey4, gooey5] },
        { value: gooey3 },
        { value: gooey2 },
        { value: gooey1 },
      ],

      easing: 'linear',
      duration: 7500,
      loop: true,
    });
  };

  /*  useEffect(() => {
    const timeOut = setTimeout(() => {}, 1500);
    Animate();
    return () => clearTimeout(timeOut);
  }, []); */

  return (
    <div className='gooey_wrapper'>
      <svg
        width='205'
        height='205'
        viewBox='0 0 205 205'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='gooey'
        onClick={() => Animate()}
      >
        <path
          d='M205 102.5C205 159.109 159.109 205 102.5 205C45.8908 205 0 159.109 0 102.5C0 45.8908 45.8908 0 102.5 0C159.109 0 205 45.8908 205 102.5Z'
          fill='#D9D9D9'
        />
      </svg>
    </div>
  );
};

export default Gooey;
