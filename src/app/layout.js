import '@/assets/styles/style.css';

export const metadata = {
  title: "Y - portfolio",
  description: "yunyoungsik portfolio",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
