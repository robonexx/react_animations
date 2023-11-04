import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './reveal.scss';

const TextReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // use to contol animation
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  // use to trigger animation when in view
  useEffect(() => {
    console.log('is in view');
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, slideControls, mainControls]);

  return (
    <div className='reveal' ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        className='effect'
        variants={{
          hidden: { left: 0, opacity: 1 },
          visible: { left: '100%', opacity: 0 },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      ></motion.div>
    </div>
  );
};

export default TextReveal
