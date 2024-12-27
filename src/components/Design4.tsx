import './design4.scss';
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

export default function Design4() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const size: number = isHovered ? 400 : 40;

  return (
    <main className='main'>
      <motion.div 
        className='mask'
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - size / 2}px ${(y ?? 0) - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
        A mask effect is a visual technique used to hide or reveal parts of an element based on a defined shape or path, controlling its visibility.
        </p>
      </motion.div>

      <div className='body'>
        <p className=''>
        A mask effect ..<br /> <br /> <br /> <br /><span>.</span>
        </p>
      </div>
    </main>
  );
}
