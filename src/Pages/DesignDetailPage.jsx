'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { aboutClose } from '@/assets/script/aboutClose';
import { aboutSmooth } from '@/assets/script/aboutSmooth';
import { aboutIntro } from '@/assets/script/aboutIntro';
import { splint } from '@/assets/script/splint';

const DesignDetailPage = () => {
  const params = useParams();
  const name = decodeURIComponent(params?.name);
  console.log(name);

  useEffect(() => {
    aboutSmooth();
    splint();
    aboutClose();
    aboutIntro();
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

      <main id="designDetail">
        <div className="aboutSlideWrap">
          <Image src={`/assets/images/detail/${name}.jpg`} alt={name} fill />
        </div>
      </main>
    </div>
  );
};

export default DesignDetailPage;
