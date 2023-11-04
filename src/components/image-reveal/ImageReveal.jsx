import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Power2 } from 'gsap/all';
import './image-reveal.scss';
import ScrollIndicator from '../scrolldown/ScrollIndicator';

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

    tl.fromTo(
      text.current,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: -0.5,
      }
    );

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
      <h2 ref={text}>{title}</h2>
      <div className='container' ref={container}>
        <div className='overlay' ref={overlayRef}>
          <p>{sub}</p>
        </div>
        <div className='image-container'>
          <img ref={image} src={img} alt={title} />
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default ImageReveal;
