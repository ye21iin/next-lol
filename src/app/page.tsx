import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto mt-10 text-center">
      <h1 className="mb-4 text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
      <p className="text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="mb-[40px] mt-[40px] flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center gap-10">
          <Link
            href={"/champions"}
            className="flex flex-col items-center justify-center gap-5 text-amber-400"
          >
            {/* <Image
              src=""
              alt="image"
              width={400}
              height={300}
              className="relative"
            /> */}
            챔피언 목록 보기
          </Link>
          <Link
            href={"/rotation"}
            className="flex flex-col items-center justify-center gap-5 text-amber-400"
          >
            {/* <Image
              src=""
              alt="image"
              width={400}
              height={300}
              className="relative"
            /> */}
            금주 로테이션 확인
          </Link>
          <Link
            href={"/items"}
            className="flex flex-col items-center justify-center gap-5 text-amber-400"
          >
            {/* <Image
              src=""
              alt="image"
              width={400}
              height={300}
              className="relative"
            /> */}
            아이템 목록 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
