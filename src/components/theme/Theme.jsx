import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

import './Theme.scss';

export default function Theme({ lights, setLights }) {
  /* const [lights, setLights] = useState(false) */

  const { x } = useSpring({ duration: 600, x: lights ? 1 : 0 });
  const themeRef = useRef();

  const toggleLights = () => {
    setLights(!lights);
  };

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          /*  themeRef.current.classList.add('theme'); */
          themeRef.current.classList.remove('hide');
        } else {
          themeRef.current.classList.add('hide');
          /* themeRef.current.classList.remove('theme'); */
        }
        prevScrollpos = currentScrollPos;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return (
    <motion.div className='theme' ref={themeRef}>
      {/*  <button onClick={lightsOnOff}>
              {!lights ? 'Turn off' : 'Turn on'}
            </button> */}
      <div className='lamp_container'>
        <div className='lamp'>
          <svg
            width='585'
            height='553'
            viewBox='0 0 585 553'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse
              cx='292.5'
              cy='285'
              rx='292.5'
              ry='268'
              fill={`url(${!lights ? '#radial' : '#dark'})`}
            />
            <path
              d='M275.283 184.226C275.283 178.626 275.283 175.826 276.373 173.687C277.332 171.805 278.861 170.275 280.743 169.316C282.882 168.226 285.682 168.226 291.283 168.226H291.887C297.487 168.226 300.288 168.226 302.427 169.316C304.308 170.275 305.838 171.805 306.797 173.687C307.887 175.826 307.887 178.626 307.887 184.226V187.585H275.283V184.226Z'
              fill='#D8D8D8'
            />
            <path
              d='M371.057 305.533C371.057 344.493 335.476 376.075 291.585 376.075C247.694 376.075 212.113 344.493 212.113 305.533C212.113 266.574 247.694 234.991 291.585 234.991C335.476 234.991 371.057 266.574 371.057 305.533ZM227.621 305.533C227.621 336.89 256.259 362.31 291.585 362.31C326.911 362.31 355.549 336.89 355.549 305.533C355.549 274.176 326.911 248.756 291.585 248.756C256.259 248.756 227.621 274.176 227.621 305.533Z'
              fill='#D9D9D9'
            />
            <path
              d='M256 223.66C256 208.986 256 201.649 259.664 196.461C260.978 194.601 262.601 192.978 264.461 191.664C269.649 188 276.986 188 291.66 188V188C306.335 188 313.672 188 318.86 191.664C320.72 192.978 322.342 194.601 323.656 196.461C327.321 201.649 327.321 208.986 327.321 223.66V247.094H256V223.66Z'
              fill='#D9D9D9'
            />
            <line
              x1='291.642'
              y1='168.226'
              x2='291.642'
              y2='0.11322'
              stroke='black'
              strokeWidth='6'
            />
            <defs>
              <radialGradient
                id={!lights ? 'radial' : 'dark'}
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(291.712 308.838) rotate(-38.5056) scale(283.105 264.919)'
              >
                <stop offset='0.380208' />
                <stop offset='0.947917' />
              </radialGradient>
            </defs>
          </svg>
          <svg
            onClick={toggleLights}
            className='light'
            fill={!lights ? '#e9c915' : '#121212'}
            xmlns='http://www.w3.org/2000/svg'
          >
            {/*  <path d={lights ? Light_path[0] : Light_path[1]} /> */}
            <animated.path
              d={x.to({
                range: [0, 1],
                output: [
                  'M103.547 48.7736C103.547 75.2207 80.511 96.6604 52.0943 96.6604C23.6777 96.6604 0.64151 75.2207 0.64151 48.7736C0.64151 22.3264 23.6777 0.88678 52.0943 0.88678C80.511 0.88678 103.547 22.3264 103.547 48.7736Z',
                  'M104.547 48.7736C110 57 81.511 35 53.0944 35C24.6777 35 -6 59 1.64152 48.7736C1.64152 22.3264 24.6777 0.88678 53.0944 0.88678C81.511 0.88678 104.547 22.3264 104.547 48.7736Z',
                ],
              })}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* const Light_path= [
      'M104.547 48.7736C110 57 81.511 35 53.0944 35C24.6777 35 -6 59 1.64152 48.7736C1.64152 22.3264 24.6777 0.88678 53.0944 0.88678C81.511 0.88678 104.547 22.3264 104.547 48.7736Z',
    'M103.547 48.7736C103.547 75.2207 80.511 96.6604 52.0943 96.6604C23.6777 96.6604 0.64151 75.2207 0.64151 48.7736C0.64151 22.3264 23.6777 0.88678 52.0943 0.88678C80.511 0.88678 103.547 22.3264 103.547 48.7736Z'
    ] */
