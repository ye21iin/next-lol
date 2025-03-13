import { getItemDetail, getLatestVersion } from "@/app/api/fetchData";
import { removeHtmlTags } from "@/utils/dataCleansing";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const ItemDetail = async ({ params }: Props) => {
  const version = await getLatestVersion();

  if (!version) return;

  const item = await getItemDetail({ version, id: params.id });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-7 flex max-h-full max-w-lg flex-col items-center justify-center gap-5 text-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
          alt="image"
          width={100}
          height={100}
          className="inline-block"
        />

        <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-500">No. {params.id}</p>
        <p className="leading-relaxed text-gray-500">
          {removeHtmlTags(item.plaintext || item.description) ||
            "설명이 없습니다."}
        </p>
        <div className="mb-2 w-[80%] rounded-lg border p-2">
          <p className="text-blue-500">
            가격: {item.gold.base !== 0 ? item.gold.base : "-"}
          </p>
          <p className="text-violet-500">
            팔때: {item.gold.sell !== 0 ? item.gold.sell : "-"}
          </p>
          <p className="text-red-500">
            {!item.gold.purchasable && "구매 불가"}
          </p>
        </div>
        <Link href="/items">뒤로 가기</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
