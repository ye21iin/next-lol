import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Docs App: League of Legends",
  description:
    "리그 오브 레전드(LoL) 챔피언 정보 조회 기능과 매주 무료로 플레이할 수 있는 챔피언들의 목록을 제공합니다. Information of champions on League of Legends (LoL) and a champions list for free every week. Created by YLK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-evenly items-center h-14">
          <Link href="/">홈</Link>
          <Link href="/champions">챔피언 목록</Link>
          <Link href="/items">아이템 목록</Link>
          <Link href="/rotation">챔피언 로테이션</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
