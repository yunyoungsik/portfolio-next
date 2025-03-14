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
import { subNext4 } from '@/assets/script/subNext4';

import CommentArea from '@/components/Comment/CommentArea';

const Kickoff = () => {
  // hightlight
  const codeSnippet = `const SubmitHandler = (e) => {
  //다른 코드 생략
  let body = {
      reple: reple,
      uid: user.uid,
      leagueId: props.leagueId,  // 리그 ID 추가
      matchId: props.matchId      // 매치 ID 추가
  };
  //다른 코드 생략
}`;

  // script
  useEffect(() => {
    smooth();
    subIntro();
    subSlider();
    navBar();
    subClose();
    subAbout();
    subNext4();
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
          <span className="pageIndex 01">04</span>
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

      <div className="subBgSlider s4">
        <div className="subBgSliderWrap">
          <section className="section s1">
            <div className="sub__center">
              <div className="text">
                <div className="titleWrap">
                  <h5 className="subTitle split">Kickoff</h5>
                </div>
                <div className="subDesc split">
                  React와 축구 API를 이용하여 만든 축구 정보와 하이라이트를 제공하는 웹사이트입니다.
                  <br />
                  경기 결과, 일정, 리그 테이블 같은 정보를 API로 받아오며, 하이라이트 비디오도
                  제공합니다.
                </div>
              </div>
            </div>
            <div className="transitionOverlay"></div>
          </section>
          <section className="section s2"></section>
          <section className="section s3">
            <div className="pageSection">#4</div>
            <div className="info">
              <div className="info__inner">
                <h2 className="mPageSection">#4</h2>
                <h2>Website</h2>
                <div className="coding">
                  <h3>(coding)</h3>
                  <p>React, Soccer API</p>
                </div>
                <div className="workTime">
                  <h3>(workTime)</h3>
                  <p>2 Weeks</p>
                </div>
                <div className="link">
                  <div className="link1">
                    <a
                      href="https://kickoffproject.fly.dev/"
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
                    href="https://github.com/yunyoungsik/kickoff"
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
                  Firebase를 이용해 사용자의 이메일과 비밀번호로 회원가입하고, MongoDB를 통해 사용자
                  데이터를 저장합니다.
                  <br />
                  Axios를 사용하여 서버로 데이터를 전송하며, React Router를 이용하여 페이지 간
                  이동을 합니다.
                  <br />
                  또한, 사용자가 입력한 정보의 유효성을 검사하고, 이메일 중복 검사를 수행하여
                  회원가입 과정을 관리합니다.
                </p>
                <span>리그정보</span>
                <p>
                  리그의 정보를 가져와 보여주는 기능을 구현하였습니다.
                  <br />
                  React Router를 통해 경로의 파라미터를 가져와 해당 리그의 정보를 API로 요청하여
                  가져옵니다.
                  <br />
                  리그 정보는 Football Data API에서 받아온 데이터를 사용하여 리그 이름, 팀 정보,
                  리그 로고 등을 화면에 표시합니다.
                </p>
                <span>게시판</span>
                <p>
                  사용자가 제목, 내용, 이미지를 입력해 게시글을 작성할 수 있는 폼을 제공합니다.<br />
                  로그인한 사용자만 작성 가능하며, 유효성 검사 후 MongoDB에 저장하고 작성 완료 시
                  목록 페이지로 리디렉션합니다.
                </p>
              </div>
            </div>
            <div className="trouble">
              <div className="trouble__inner">
                <h2>Trouble Shooting</h2>
                <h3>문제</h3>
                <p>
                  댓글 작성 기능을 구현할 때, 다른 조원이 리그 ID와 매치 ID를 제대로 전달하지 못해
                  특정 경기나 리그에 대한 댓글 기능이 작동하지 않는 문제가 발생했습니다.
                </p>
                <h3>해결</h3>
                <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
                  {codeSnippet}
                </SyntaxHighlighter>
                <p>
                  댓글 작성 시 leagueId와 matchId를 body에 추가해 리그와 경기 정보를 명확히
                  전달하도록 수정했습니다.
                  <br />
                  이로 인해 서버가 각 댓글을 해당 리그와 경기와 정확히 연동할 수 있게 되었으며, 댓글
                  작성 기능이 정상적으로 동작하게 되었습니다.
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
                    href="https://kickoffproject.fly.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    (link)
                  </a>
                </span>
                <h2>
                  <Link href="#" className="nextPage">
                    <span>Trend Device</span>
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
                    href="https://github.com/yunyoungsik/kickoff"
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

export default Kickoff;
