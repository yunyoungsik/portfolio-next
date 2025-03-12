'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

// import Highlight from 'react-highlight'
// import 'highlight.js/styles/atom-one-dark.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { smooth } from '@/assets/script/smooth';
import { subIntro } from '@/assets/script/subIntro';
import { subSlider } from '@/assets/script/subSlider';
import { navBar } from '@/assets/script/navBar';
import { subClose } from '@/assets/script/subClose';
import { subAbout } from '@/assets/script/subAbout';
import { subNext2 } from '@/assets/script/subNext2';

import CommentArea from '../components/Comment/CommentArea';

const MhonPage = () => {
  // hightlight
  const codeSnippet = `<Swiper
  loop={mainSlider.length > 1}
  //다른 코드 생략
>`;
  // script
  useEffect(() => {
    smooth();
    subIntro();
    subSlider();
    navBar();
    subClose();
    subAbout();
    subNext2();
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
          <span className="pageIndex 01">02</span>
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

      <div className="subBgSlider s2">
        <div className="subBgSliderWrap">
          <section className="section s1">
            <div className="sub__center">
              <div className="text">
                <div className="titleWrap">
                  <h5 className="subTitle split">Mhon.kr</h5>
                </div>
                <div className="subDesc split">
                  Next.js 기반의 Nexon Open API를 활용한 사이트입니다.
                  <br />
                  마비노기 영웅전의 캐릭터 정보 검색, 랭킹, 거래소 시세 조회 등 다양한 정보를
                  제공합니다.
                  <br />
                  사용자는 캐릭터 정보와 거래소 시세를 손쉽게 확인할 수 있어 더욱 편리하게 게임
                  정보를 탐색할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="transitionOverlay"></div>
          </section>
          <section className="section s2"></section>
          <section className="section s3">
            <div className="pageSection">#2</div>
            <div className="info">
              <div className="info__inner">
                <h2 className="mPageSection">#2</h2>
                <h2>Website</h2>
                <div className="coding">
                  <h3>(coding)</h3>
                  <p>Next.js, Nexon Open API</p>
                </div>
                <div className="workTime">
                  <h3>(workTime)</h3>
                  <p>2 Weeks</p>
                </div>
                <div className="link">
                  <div className="link1">
                    <a
                      href="https://mhon.kr/"
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
                    href="https://github.com/yunyoungsik/MabinogiHeroes_Public"
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
                <span>Search</span>
                <p>
                  캐릭터 이름을 기반으로 Nexon Open API에서 캐릭터의 기본 정보, 장비, 스탯 등을
                  병렬로 조회하는 API입니다.
                  <br />
                  Zustand를 활용해 클라이언트 컴포넌트에서 API 데이터를 호출하고 상태를 관리합니다.
                </p>
                <span>Ranking</span>
                <p>
                  명예의 전당과 실시간 랭킹을 조회할 수 있습니다. useState로 랭킹 종류(명예의
                  전당/실시간 랭킹), 공격력 유형(공격력/마법공격력), 현재 페이지 상태를 관리합니다.
                  선택한 필터에 따라 HallOfHonor와 LiveRank 컴포넌트를 조건부로 렌더링하며,
                  RankPagenation으로 페이지 이동을 지원합니다.
                </p>
                <span>SEO</span>
                <p>
                  MHON.KR의 SEO 처리를 위해 metadata를 활용해 정적 페이지는 고정 메타데이터를
                  사용하고 있습니다.
                  <br />
                  캐릭터 검색 페이지와 공지사항 상세 페이지에서는 generateMetadata를 사용해 캐릭터
                  이름이나 글 제목을 동적으로 반영합니다.
                  <br />
                  이를 통해 검색 엔진에서 각 페이지의 고유한 정보를 인덱싱하도록 최적화했습니다.
                </p>
              </div>
            </div>
            <div className="trouble">
              <div className="trouble__inner">
                <h2>Trouble Shooting</h2>
                <h3>문제</h3>
                <p>Swiper에서 loop 옵션 사용 시 슬라이드가 하나일 경우 에러 발생.</p>
                <h3>해결</h3>
                <p>
                  loop 기능은 여러 슬라이드를 무한 순환하도록 설계되어 있어 슬라이드가 1개일 경우
                  무한 순환이 불가능해 에러가 발생함.
                </p>
                <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
                  {codeSnippet}
                </SyntaxHighlighter>
                <p>
                  mainSlider.length &gt; 1로 슬라이드 개수를 확인한 후, 2개 이상일 때만 loop를
                  활성화하도록 조건을 추가해 문제를 해결함.
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
                    href="https://mhon.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    (link)
                  </a>
                </span>
                <h2>
                  <Link href="#" className="nextPage">
                    <span>Fcon.kr</span>
                  </Link>
                  <Link href="#" className="nextPage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </Link>
                </h2>
                <span>
                  <Link
                    href="https://github.com/yunyoungsik/MabinogiHeroes_Public"
                    target="_blank"
                    className="underline"
                  >
                    (github)
                  </Link>
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

export default MhonPage;
