import { Item } from "@/types/Item";
import { getItemList, getLatestVersion } from "../api/fetchData";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { removeHtmlTags } from "@/utils/dataCleansing";

const Items = async () => {
  const version = await getLatestVersion();

  if (!version) return;

  const items: Record<string, Item> = await getItemList(version);

  return (
    <div>
      <h1 className="text-3xl font-bold ml-4">아이템 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 w-full place-items-center">
        {items &&
          Object.keys(items).map((e) => (
            <div
              key={e}
              className="border flex flex-col justify-evenly items-center text-center p-3 w-48 h-80 rounded-lg hover:shadow-xl"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${items[e].image.full}`}
                alt="image"
                width={100}
                height={100}
              />
              <h2 className="mt-2 text-xl font-semibold">
                {removeHtmlTags(items[e].name)}
              </h2>
              <p className="text-gray-500 w-[80%]">
                {removeHtmlTags(items[e].plaintext).length < 23 &&
                  removeHtmlTags(items[e].plaintext)}
              </p>
              <div className="border rounded-lg p-2 w-[80%] mt-2 mb-2">
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
                <SearchIcon className="p-1" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Items;
