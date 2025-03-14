import React from 'react'
import { motion } from 'framer-motion';
import { translate } from '@/assets/script/animation';
import Link from 'next/link';


const NavFooter = () => {
    return (
        <div className='footer'>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Made by:</span>0-Sik
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>E-mail:</span> <a href="mailto:yunyoungsik@kakao.com">yunyoungsik@kakao.com</a>
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Github:</span> <Link href="https://github.com/yunyoungsik" target='_blank'>github.com/yunyoungsik</Link>
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    Privacy Policy
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    Terms & Conditions
                </motion.li>
            </ul>
        </div>
    )
}

export default NavFooter