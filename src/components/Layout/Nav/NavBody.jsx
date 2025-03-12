import React from 'react';
// import Link from 'next/link';
import { motion } from 'framer-motion';
import { blur, translate } from '@/assets/script/animation';

const NavBody = ({ links, selectedLink, setSelectedLink }) => {
  const getChars = (word) => {
    let chars = [];
    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - 1) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  return (
    <div className="body">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <a key={index} href={href} target='_self'>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
            >
              {getChars(title)}
            </motion.p>
          </a>
        );
      })}
    </div>
  );
};

export default NavBody;
