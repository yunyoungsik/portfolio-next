import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '@/assets/script/animation';
import NavBody from './NavBody';
import NavFooter from './NavFooter';

const Nav = () => {
  const links = [
    {
      title: 'Portfolio',
      href: '/portfolio',
    },
    {
      title: 'Mhon',
      href: '/mhon',
    },
    {
      title: 'Fcon',
      href: '/fcon',
    },
    {
      title: 'Kickoff',
      href: '/kickoff',
    },
    {
      title: 'Trend Device',
      href: '/trend-device',
    },
    {
      title: 'Design',
      href: '/design',
    },
    {
      title: 'About',
      href: '/about',
    },
  ];

  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className="nav">
      <div className="wrapper">
        <div className="container">
          <NavBody links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <NavFooter />
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
