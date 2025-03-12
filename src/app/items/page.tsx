import { Item } from "@/types/Item";
import { getItemList, getLatestVersion } from "../api/fetchData";
import Image from "next/image";

const Items = async () => {
  const version = await getLatestVersion();

  if (!version) return;

  const items: Record<string, Item> = await getItemList(version);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {items &&
          Object.keys(items).map((e) => (
            <div
              key={e}
              className="border flex flex-col justify-center items-center"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${items[e].image.full}`}
                alt="image"
                width={48}
                height={48}
              />
              <h2 className="mt-2 text-xl font-semibold">{items[e].name}</h2>
              <p className="text-gray-500">가격: {items[e].gold.base}</p>
              <p className="text-gray-500">팔때: {items[e].gold.sell}</p>
              <p className="text-red-500">
                {!items[e].gold.purchasable && "구매 불가"}
              </p>
              {items[e].description && (
                <p className="bg-slate-300">아이템 설명</p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Items;
