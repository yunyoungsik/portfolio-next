'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import { aboutClose } from '@/assets/script/aboutClose';
import { aboutSmooth } from '@/assets/script/aboutSmooth';
import { aboutIntro } from '@/assets/script/aboutIntro';
import { splint } from '@/assets/script/splint';
import { aboutHover } from '@/assets/script/aboutHover';

const AboutPage = () => {
  // script
  useEffect(() => {
    window.scrollTo(0, 0);
    
    aboutSmooth();
    splint();
    aboutClose();
    aboutIntro();
    aboutHover();
  }, []);

  return (
    <div id="about">
      <header id="header">
        <h1 className="logo">
          <Link href="/home" className="goMain">
            Y<span className="split aboutLogo">unYoungsik</span>
          </Link>
        </h1>
        <div className="aboutClose goMain">
          <Link href="/home" className="underline">
            Close
          </Link>
        </div>
      </header>

      <main id="main">
        <div className="aboutSlideWrap">
          <div className="aboutSlider"></div>
          <div className="aboutCenter">
            <p>(YunYoungsik)</p>
            <h2>
              <span className="split aboutTitle">About</span>
            </h2>
          </div>
          <div className="aboutDesc">
            <p>
              다양한 기술을 활용하여 창의적이고 사용자 친화적인 솔루션을 제공하는 크리에이티브
              디벨로퍼입니다.
              <br />
              문제 해결에 즐거움을 느끼며 지속적인 성장을 추구합니다.
            </p>
          </div>
          <div className="aboutInfor">
            <div className="aboutInfor__left">
              <h2>Creative Developer</h2>
              <div className="aboutInfor__img">
                {/* <Image src="/assets/images/profile.jpg" fill alt="yunyoungsik" /> */}
              </div>
              <p className="birth">Aug 29, 1991</p>
              <p className="desc">
                디자인과 웹 개발 경험을 바탕으로 창의적인 아이디어를 프론트엔드 기술로 구현하며,
                사용자에게 직관적이고 매력적인 웹 경험을 제공하는 데 열정을 가진 크리에이티브
                디벨로퍼입니다.
              </p>
            </div>
            <div className="aboutInfor__right">
              <ul>
                <li>
                  <p>바니쉬스테레오타입 IT팀 사원</p> <span>2024.05-2024.09</span>
                </li>
                <li>
                  <p>신화공영 관리부 대리</p> <span>2020.12-2023.04</span>
                </li>
                <li>
                  <p>신화공영 온라인사업부 사원</p>
                  <span>2018.05-2020.05</span>
                </li>
                <li>
                  <p>이랜드리테일 농산 사원</p>
                  <span>2015.11-2016.11</span>
                </li>
                <li>
                  <p>안산대학교 디자인과 졸업</p>
                  <span>2010-2014</span>
                </li>
                <li>
                  <p>안산공업고등학교 디자인과 졸업</p>
                  <span>2007-2010</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="aboutText">
            <div className="aboutService">
              <div className="aboutService__inner">
                <div className="aboutTitle">(services)</div>
                <div className="aboutSkill">
                  <div className="markup">
                    <h2>Markup Languae</h2>
                    <p>
                      HTML5, CSS, Javascript,
                      <br />
                      React, Next.js, RESTful API
                    </p>
                  </div>
                  <div className="tool">
                    <h2>Tool</h2>
                    <p>
                      VScode, Figma, Github,
                      <br />
                      Git, Filezila, Photoshop,
                      <br />
                      Illustrator, Slack, Notion
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="aboutContact">
              <div className="aboutContact__social">
                <div className="title">(contact)</div>
                <div className="title2">social</div>
                <div className="social">
                  <span>Github</span>
                  <a href="https://www.github.com/yunyoungsik" target="_blank">
                    github.com/yunyoungsik
                  </a>
                </div>
              </div>
              <div className="aboutContact__email">
                <div className="title"></div>
                <div className="title2">email</div>
                <div className="email">
                  <a href="mailto:yunyoungsik@kakao.com">yunyoungsik@kakao.com</a>
                </div>
              </div>
            </div>
            <div className="aboutContact__bottom">
              <div className="aboutImg"></div>
              <div className="aboutEmail">
                <a href="mailto:yunyoungsik@kakao.com" className="emailLink underline">
                  <div className="text">
                    <div className="textWrap">
                      <p className="split text">Say Hi</p>
                      <p className="split text">Say Hi</p>
                    </div>
                  </div>
                  <div className="svg">
                    <svg
                      className="svg1"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-50e346e1=""
                    >
                      <path
                        d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z"
                        fill="currentColor"
                        data-v-50e346e1=""
                      ></path>
                    </svg>
                    <svg
                      className="svg2"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-50e346e1=""
                    >
                      <path
                        d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z"
                        fill="currentColor"
                        data-v-50e346e1=""
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="transitionOverlay about"></div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
