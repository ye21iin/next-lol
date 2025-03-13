import { Item } from "@/types/Item";
import { getItemList } from "../../lib/api/fetchData";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { removeHtmlTags } from "@/lib/utils/dataCleansing";
import { VERSION } from "@/lib/constant";

const Items = async () => {
  if (!VERSION) return;

  const items: Record<string, Item> = await getItemList(VERSION);

  return (
    <div>
      <h1 className="ml-4 text-3xl font-bold">아이템 목록</h1>
      <div className="grid w-full grid-cols-1 place-items-center gap-4 p-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {items &&
          Object.keys(items).map((e) => (
            <div
              key={e}
              className="flex h-80 w-48 flex-col items-center justify-evenly rounded-lg border p-3 text-center hover:shadow-xl"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/item/${items[e].image.full}`}
                alt="image"
                width={100}
                height={100}
              />
              <h2 className="mt-2 text-xl font-semibold">
                {removeHtmlTags(items[e].name)}
              </h2>
              <p className="w-[80%] text-gray-500">
                {removeHtmlTags(items[e].plaintext).length < 23 &&
                  removeHtmlTags(items[e].plaintext)}
              </p>
              <div className="mb-2 mt-2 w-[80%] rounded-lg border p-2">
                <p className="text-blue-500">
                  가격: {items[e].gold.base !== 0 ? items[e].gold.base : "-"}
                </p>
                <p className="text-violet-500">
                  팔때: {items[e].gold.sell !== 0 ? items[e].gold.sell : "-"}
                </p>
                <p className="text-red-500">
                  {!items[e].gold.purchasable && "구매 불가"}
                </p>
              </div>
              <Link href={`/items/${e}`}>
                <SearchIcon className="cursor-pointer p-1 hover:scale-110" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Items;
