'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { smooth } from '@/assets/script/smooth';
import { subIntro } from '@/assets/script/subIntro';
import { subSlider } from '@/assets/script/subSlider';
import { navBar } from '@/assets/script/navBar';
import { subClose } from '@/assets/script/subClose';
import { subAbout } from '@/assets/script/subAbout';
import { subNext } from '@/assets/script/subNext';

import CommentArea from '@/components/Comment/CommentArea';

const TrendDevicePage = () => {
  // hightlight
  const codeSnippet = `if (selectedPhone) {
    const link = document.createElement('a');
    link.href = '\u0024{ selectedPhone.pLink }';
    link.className = 'btn__style3';
    link.innerText = '바로가기';
    link.target = '_black';
    const linkContainer = document.querySelector('.pLink1');
    linkContainer.innerHTML = '';
    linkContainer.appendChild(link);
}`;

  // script
  useEffect(() => {
    smooth();
    subIntro();
    subSlider();
    navBar();
    subClose();
    subAbout();
    subNext();
  }, []);

  return (
    <main id="main" className="main sub">
      <Link href="/home" className="close sub goMain">
        <svg width="16" height="16" viewBox="0 0 24 24" data-v-c5fc2e64="">
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
            data-v-c5fc2e64=""
          ></path>
        </svg>
      </Link>
      <Link href="/about" className="about sub underline">
        About
      </Link>
      <div className="subPage">
        <span className="current sub">
          <span className="pageIndex 01">05</span>
        </span>
      </div>
      <div className="scrollBar">
        <progress max="100" value="0"></progress>
      </div>

      <div className="mainSlider" id="subMainSlider">
        <div className="mainSlider__top">
          <h1 className="logo">
            <Link href="/home">Y</Link>
          </h1>
          <div className="burger">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="352"
                height="32"
                x="80"
                y="96"
                fill="var(--ci-primary-color, #000000)"
                className="ci-primary"
              />
              <rect
                width="352"
                height="32"
                x="80"
                y="240"
                fill="var(--ci-primary-color, #000000)"
                className="ci-primary"
              />
              <rect
                width="352"
                height="32"
                x="80"
                y="384"
                fill="var(--ci-primary-color, #000000)"
                className="ci-primary"
              />
            </svg>
          </div>
        </div>
        <div className="mainSlider__center">
          <div className="center__text">
            <div className="titleSlider">
              <div className="titleWrap">
                <h2 className="title">Portfolio</h2>
              </div>
            </div>
            <div className="descSlider">
              <div className="descWrap">
                <p className="desc">React를 이용하여 작업한 사이트입니다.</p>
              </div>
            </div>
          </div>
          <div className="center__img">
            <div className="centerSliderWrap mouse__text">
              <div className="centerSlider s1">
                <Link href="/home">
                  <img
                    src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="main img 01"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mainSlider__bottom sub">
          <div className="page">
            <span className="current">
              <span className="pageIndex 01">01</span>
              <span className="pageIndex 01">01</span>
            </span>
            <span className="pageLine">―</span>
            <span>05</span>
          </div>
          <div className="scroll__text">(Scroll)</div>
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

      <div className="subBgSlider s5">
        <div className="subBgSliderWrap">
          <section className="section s1">
            <div className="sub__center">
              <div className="text">
                <div className="titleWrap">
                  <h5 className="subTitle split">Trend Device</h5>
                </div>
                <div className="subDesc split">
                  Trend Device는 직관적이고 사용하기 편리한 인터페이스를 제공하여
                  <br />
                  사용자가 원하는 휴대폰 모델을 선택하고, 선택한 모델들을 한눈에 비교할 수 있도록
                  합니다.
                  <br />
                  각 휴대폰 모델에는 사진, 기술 사양, 가격 등의 정보가 제공되어
                  <br />
                  사용자가 원하는 정보를 쉽게 찾을 수 있습니다.
                </div>
              </div>
            </div>
            <div className="transitionOverlay"></div>
          </section>
          <section className="section s2"></section>
          <section className="section s3">
            <div className="pageSection">#5</div>
            <div className="info">
              <div className="info__inner">
                <h2 className="mPageSection">#5</h2>
                <h2>Website</h2>
                <div className="coding">
                  <h3>(coding)</h3>
                  <p>PHP, Javascript</p>
                </div>
                <div className="workTime">
                  <h3>(workTime)</h3>
                  <p>2 Weeks</p>
                </div>
                <div className="link">
                  <div className="link1">
                    <a
                      href="http://yunyoungsik92.dothome.co.kr/TDsite/php/main/main.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      <i>Link</i>
                      <svg
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
                    </a>
                  </div>
                  <div className="link2"></div>
                  <a
                    href="https://github.com/yunyoungsik/Trend-Device"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    <i>Github</i>
                    <svg
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
                  </a>
                </div>
              </div>
            </div>
            <div className="desc">
              <div className="desc__inner">
                <h2>Description</h2>
                <span>메인</span>
                <p>
                  자바스크립트와 GSAP, Scroll Trigger를 사용하여 슬라이드 및 각 섹션에 이미지와
                  어울리는 움직임을 구현하고자 했습니다.
                </p>
                <span>상품페이지</span>
                <p>
                  foreach 반복문을 사용하여 $categoryResult 배열에 있는 각 핸드폰 정보를 리스트
                  형태로 생성합니다.
                  <br />
                  각 핸드폰 정보는 링크로 연결되며, 해당 제품의 이미지와 이름이 표시됩니다.
                  <br />각 핸드폰은 제목, 간단한 설명, 그리고 가격을 함께 표시하는 리스트 아이템으로
                  구성됩니다.
                </p>
                <span>비교하기</span>
                <p>
                  드롭다운 메뉴에서 변경 사항이 감지되면 이벤트를 트리거합니다.
                  <br />
                  이벤트는 선택된 옵션의 값(this.value)을 기반으로 데이터를 필터링하고,
                  <br />
                  해당 데이터에서 선택된 값을 기준으로 정보를 가져와 화면에 표시하는 역할을 합니다.
                </p>
              </div>
            </div>
            <div className="trouble">
              <div className="trouble__inner">
                <h2>Trouble Shooting</h2>
                <h3>문제</h3>
                <p>비교 페이지에 접속했을 때 'a'와 'img' 요소에 초기값이 없는 문제</p>
                <h3>해결</h3>
                <p>초기값이 없는 상태의 'a'와 'img' 요소를 조건부 렌더링으로 처리</p>
                <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
                  {codeSnippet}
                </SyntaxHighlighter>
                <p>
                  문제는 데이터 로딩 전에 정보를 사용하려고 했던 것이었습니다.
                  <br />
                  조건부 렌더링을 사용하여 데이터 존재 여부를 확인하고, 데이터가 있는 경우에만
                  코드를 실행하여 에러를 방지했습니다.
                </p>
              </div>
            </div>
            <div className="comment">
              <CommentArea />
            </div>
            <div className="subNext">
              <div className="subNext__inner">
                <span>
                  <a
                    href="http://yunyoungsik92.dothome.co.kr/TDsite/php/main/main.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    (link)
                  </a>
                </span>
                <h2>
                  <Link href="#" className="goMain">
                    <span>Main</span>
                  </Link>
                  <Link href="#" className="goMain">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </Link>
                </h2>
                <span>
                  <a
                    href="https://github.com/yunyoungsik/Trend-Device"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    (github)
                  </a>
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="subTransitionOverlay"></div>
      </div>
    </main>
  );
};

export default TrendDevicePage;
