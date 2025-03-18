import Link from "next/link";
import React from "react";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex w-full">
      <div className="flex h-14 w-[95%] items-center justify-evenly">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
      </div>
      <DarkMode />
    </div>
  );
};

export default Header;
