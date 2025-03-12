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
import { subNext3 } from '@/assets/script/subNext3';

import CommentArea from '@/components/Comment/CommentArea';

const FconPage = () => {
  // hightlight
  const codeSnippet = `useEffect(() => {
  setStat([]);

  if (players) {
    fetchStat({ matchtype, players, position });
  }
  //다른 코드 생략
  fetchAllPlayers();
}, [matchtype, position]);`;
  // script
  useEffect(() => {
    smooth();
    subIntro();
    subSlider();
    navBar();
    subClose();
    subAbout();
    subNext3();
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
          <span className="pageIndex 01">03</span>
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

      <div className="subBgSlider s3">
        <div className="subBgSliderWrap">
          <section className="section s1">
            <div className="sub__center">
              <div className="text">
                <div className="titleWrap">
                  <h5 className="subTitle split">Fcon.kr</h5>
                </div>
                <div className="subDesc split">
                  FC Online 검색 사이트는 Next.js와 Nexon Open API를 기반으로 구축되었습니다.
                  <br />
                  주요 기능은 FC 온라인 이용자를 위한 검색 기능으로, 유저 전적 및 선수 검색을 API를
                  활용하여 제공합니다.
                  <br />
                  또한 MongoDB를 이용하여 공지사항 게시판을 구현하였습니다.
                </div>
              </div>
            </div>
            <div className="transitionOverlay"></div>
          </section>
          <section className="section s2"></section>
          <section className="section s3">
            <div className="pageSection">#3</div>
            <div className="info">
              <div className="info__inner">
                <h2 className="mPageSection">#3</h2>
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
                      href="https://fcon.kr"
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
                    href="https://github.com/yunyoungsik/FC_Online_Public"
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
                <span>회원가입</span>
                <p>
                  Google OAuth 로그인을 설정하고, 환경 변수에서 클라이언트 ID와 시크릿을 가져옵니다.
                  <br />
                  로그인 시 MongoDB에서 사용자를 확인하거나 없으면 새로 생성하며, 세션에 사용자
                  정보를 추가합니다.
                  <br />
                  NextAuth로 인증 관련 GET/POST 요청을 처리합니다.
                </p>
                <span>User</span>
                <p>
                  사용자 정보를 화면에 표시하고, 전적 갱신 버튼을 누르면 handleUpdate 함수를
                  호출하여 사용자 정보를 업데이트합니다.
                  <br />
                  또한, 사용자의 최고 등급에 따라 랭크 이미지를 표시하고, 사용자의 전적과 광고를
                  표시합니다.
                </p>
                <span>Match</span>
                <p>
                  사용자의 경기 정보를 화면에 표시하고, 경기 타입을 선택할 수 있는 탭을 제공합니다.
                  <br />
                  또한, 더 많은 경기 정보를 볼 수 있는 더보기 버튼도 제공됩니다.
                </p>
              </div>
            </div>
            <div className="trouble">
              <div className="trouble__inner">
                <h2>Trouble Shooting</h2>
                <h3>문제</h3>
                <p>
                  이전 플레이어의 데이터가 유지되어 새로운 데이터를 불필요하게 누적하는 문제가 발생
                </p>
                <h3>해결</h3>
                <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
                  {codeSnippet}
                </SyntaxHighlighter>
                <p>
                  fetchStat 함수는 여러 플레이어 데이터를 비동기적으로 병렬 요청합니다.
                  <br />
                  stat 상태가 이전 데이터와 병합되기 때문에, 새로운 요청 시 이전 데이터가 남아있어
                  잘못된 정보가 표시되었습니다.
                  <br />
                  setStat([])로 상태를 초기화한 후, 새로운 데이터를 요청하도록 변경했습니다.
                  <br />
                  이렇게 하면 이전 데이터가 사라지고 항상 최신 데이터만 화면에 표시됩니다.
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
                    href="https://fcon.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    (link)
                  </a>
                </span>
                <h2>
                  <Link href="#" className="nextPage">
                    <span>Kickoff</span>
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
                  <a
                    href="https://github.com/yunyoungsik/FC_Online_Public"
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

export default FconPage;
