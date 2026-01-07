import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "최권진 포트폴리오",
  description: "프론트엔드 개발자 최권진의 포트폴리오 사이트",
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
