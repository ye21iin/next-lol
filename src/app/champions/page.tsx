import { Champion } from "@/types/Champion";
import Image from "next/image";
import { getChampionList, getLatestVersion } from "../api/fetchData";
import Link from "next/link";

const Champions = async () => {
  const version = await getLatestVersion();

  if (!version) return;

  const champions: Record<string, Champion> = await getChampionList(version);

  return (
    <div>
      <h1 className="ml-4 text-3xl font-bold">챔피언 목록</h1>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 lg:grid-cols-6">
        {champions &&
          Object.keys(champions).map((e) => (
            <Link href={`/champions/${champions[e].key}`}>
              <div
                key={e}
                className="flex cursor-pointer flex-col items-center justify-center rounded-lg border p-2 hover:shadow-xl"
              >
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions[e].image.full}`}
                  alt="image"
                  width={100}
                  height={100}
                />
                <h2 className="mt-2 text-xl font-semibold">
                  {champions[e].name}
                </h2>
                <p className="text-gray-500">{champions[e].title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Champions;
