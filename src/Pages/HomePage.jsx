'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

// script
import { homeMouse } from '@/assets/script/homeMouse';
import { smooth } from '@/assets/script/smooth';
import { homeSlider } from '@/assets/script/homeSlider';
import { splint } from '@/assets/script/splint';
import { homeTransition } from '@/assets/script/homeTransition';
import { homeAbout } from '@/assets/script/homeAbout';
import { background, opacity } from '@/assets/script/animation';

// components
import Nav from '@/components/Layout/Nav/Nav';

const HomePage = () => {
  const [menuActive, setMenuActive] = useState(false);

  // script
  useEffect(() => {
    smooth();
    splint();
    homeMouse();
    homeSlider();
    homeTransition();
    homeAbout();
  }, []);

  return (
    <main id="main">
      <Link href="/about" className="about underline">
        About
      </Link>
      <div className="mouse__cursor">View</div>

      <div className="mainSlider" id="mainSlider">
        <div className="mainSlider__top">
          <h1 className="logo">
            <Link href="/home">Y</Link>
          </h1>
          <div
            className={`burger ${menuActive ? 'menuOpen' : 'menuClose'}`}
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            <span className='menu-line' />
            <span className='menu-line' />
            <span className='menu-line' />
          </div>
        </div>
        <div className="mainSlider__menu">
          <AnimatePresence mode="wait">{menuActive && <Nav />}</AnimatePresence>
          <motion.div
            variants={background}
            initial="initial"
            animate={menuActive ? 'enter' : 'exit'}
            className="menu__background"
          ></motion.div>
        </div>
        <div className="mainSlider__center">
          <div className="center__text">
            <div className="titleSlider">
              <div className="titleWrap">
                <h2 className="title">
                  <a href="#" className="po subLink split">
                    Portfolio
                  </a>
                </h2>
                <h2 className="title">
                  <a href="#" className="mh subLink split">
                    Mhon.kr
                  </a>
                </h2>
                <h2 className="title">
                  <a href="#" className="fc subLink split">
                    Fcon.kr
                  </a>
                </h2>
                <h2 className="title">
                  <a href="#" className="ki subLink split">
                    Kickoff
                  </a>
                </h2>
                <h2 className="title">
                  <a href="#" className="td subLink split">
                    Trend Device
                  </a>
                </h2>
              </div>
            </div>
            <div className="descSlider">
              <div className="descWrap">
                <p className="desc">React를 이용하여 작업한 사이트입니다.</p>
                <p className="desc">Next.js 이용하여 작업한 사이트입니다.</p>
                <p className="desc">Next.js 이용하여 작업한 사이트입니다.</p>
                <p className="desc">React를 이용하여 작업한 사이트입니다.</p>
                <p className="desc">PHP를 이용하여 작업한 사이트입니다.</p>
              </div>
            </div>
          </div>
          <div className="center__img mouse__text">
            <div className="centerSliderWrap">
              <div className="centerSlider s1 main">
                <a to="#" className="po subLink">
                  <img
                    src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="main img 01"
                  />
                </a>
              </div>
              <div className="centerSlider s2 main">
                <a to="#" className="mh subLink">
                  <img
                    src="https://images.unsplash.com/photo-1698191373970-228c25ee6fd0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="main img 02"
                  />
                </a>
              </div>
              <div className="centerSlider s3 main">
                <a to="#" className="fc subLink">
                  <img
                    src="https://images.unsplash.com/photo-1658409009905-00a0f737bdf3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="main img 03"
                  />
                </a>
              </div>
              <div className="centerSlider s4 main">
                <a to="#" className="ki subLink">
                  <img
                    src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="main img 04"
                  />
                </a>
              </div>
              <div className="centerSlider s5 main">
                <a to="#" className="td subLink">
                  <img
                    src="https://images.unsplash.com/photo-1629948618343-0d33f97a3091?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="main img 05"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mainSlider__bottom">
          <div className="page">
            <span className="current">
              <span className="pageIndex 01">01</span>
              <span className="pageIndex 02">02</span>
              <span className="pageIndex 03">03</span>
              <span className="pageIndex 04">04</span>
              <span className="pageIndex 05">05</span>
            </span>
            <span className="pageLine">―</span>
            <span>05</span>
          </div>
          <div className="scroll__text">
            <p>(Scroll)</p>
          </div>
          <div className="scroll__arrow">
            <div className="prevBtn">
              <svg width="32" height="32" viewBox="0 0 24 24" data-v-c5fc2e64="">
                <path
                  fill="currentColor"
                  d="M7.4 15.4L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z"
                  data-v-c5fc2e64=""
                ></path>
              </svg>
            </div>
            <div className="nextBtn">
              <svg width="32" height="32" viewBox="0 0 24 24" data-v-c5fc2e64="">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                  data-v-c5fc2e64=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bgSlider" id="parallax__cont">
        <div className="bgSliderWrap mouse__text">
          <a to="#" className="po parallax__item subLink">
            <div className="slider s1"></div>
          </a>
          <a to="#" className="mh parallax__item subLink">
            <div className="slider s2"></div>
          </a>
          <a to="#" className="fc parallax__item subLink">
            <div className="slider s3"></div>
          </a>
          <a to="#" className="ki parallax__item subLink">
            <div className="slider s4"></div>
          </a>
          <a to="#" className="td parallax__item subLink">
            <div className="slider s5"></div>
          </a>
        </div>
      </div>
      <div className="transitionOverlay main"></div>
    </main>
  );
};

export default HomePage;
