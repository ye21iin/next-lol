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
            <div key={e} className="border">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${items[e].image.full}`}
                alt="image"
                width={48}
                height={48}
              />
              <h2 className="mt-2 text-xl font-semibold">{items[e].name}</h2>
              <p className="text-gray-500">
                {items[e].description.replace(/<[^>]*>/g, "")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Items;
