'use client';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { detailClose } from '@/assets/script/detailClose';
import { aboutSmooth } from '@/assets/script/aboutSmooth';
import { detailIntro } from '@/assets/script/detailIntro';
import { splint } from '@/assets/script/splint';
import { detailNavBar } from '@/assets/script/detailNavBar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DesignDetailPage = () => {
  const params = useParams();
  const name = decodeURIComponent(params?.name);
  const imgRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger 등록 (중복 방지)
    if (!gsap.core.globals().ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 페이지 진입 시 최상단으로 스크롤 이동
    window.scrollTo(0, 0);

    // 애니메이션 및 기능 초기화
    aboutSmooth();
    splint();
    detailClose();
    detailIntro();
    detailNavBar();

    /// 이미지 로드 후 ScrollTrigger 새로고침
    const handleImageLoad = () => ScrollTrigger.refresh();

    if (imgRef.current?.complete) {
      handleImageLoad();
    } else {
      imgRef.current?.addEventListener('load', handleImageLoad);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      imgRef.current?.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <div id="detail">
      <header id="header">
        <h1 className="logo">
          <Link href="/home" className="goDesign">
            Y<span className="split detailLogo">unYoungsik</span>
          </Link>
        </h1>
        <div className="detailClose goDesign">
          <Link href="/home" className="underline-dark">
            Close
          </Link>
        </div>
      </header>

      <main id="designDetail">
        <div className="detailSlideWrap">
          <div className="scrollBar-dark">
            <progress max="100" value="0"></progress>
          </div>

          <Image  ref={imgRef} src={`/assets/images/detail/${name}.jpg`} alt={name} fill />
        </div>
      </main>
    </div>
  );
};

export default DesignDetailPage;
