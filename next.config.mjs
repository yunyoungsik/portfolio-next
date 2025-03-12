/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // 배포 환경에서 console 제거
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
