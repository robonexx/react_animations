import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Power2 } from 'gsap/all'; // Importing 'all' for easier access to plugins

import './image-reveal.scss';

const ImageReveal = ({ title, sub, img }) => {
  const image = useRef(null);
  const container = useRef(null);
  const overlayRef = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const imageReveal = overlayRef.current;
    const tl = gsap.timeline();
    tl.to(container.current, { opacity: 1 });
    tl.to(imageReveal, {
      duration: 1.4,
      width: '0%',
      ease: Power2.easeInOut,
    });
    tl.from(image.current, {
      duration: 1.4,
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });

    tl.from(text.current, {
      duration: 1,
      opacity: 0,
      textShadow: '10px 10px 2px black',
      scale: 10,
      transform: 'translateX(-20%)',
      rotate: 0,
      ease: Power2.easeInOut,
      delay: -1.6,
    });

    // Kill the timeline to prevent memory leaks
    return () => {
      tl.kill();
    };
  }, [title, sub, img]);

  if (!title || !sub || !img) {
    // If data is not available yet, return null or a loading indicator
    return null;
  }

  return (
    <div className='image-reveal'>
      <p ref={text}>{title}</p>
      <div className='container' ref={container}>
        <div className='overlay' ref={overlayRef}>
          <p>{sub}</p>
        </div>
        <div className='image-container'>
          <img ref={image} src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ImageReveal;
