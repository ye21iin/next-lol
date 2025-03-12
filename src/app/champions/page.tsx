import { Champion } from "@/types/Champion";
import Image from "next/image";
import { getChampionList, getLatestVersion } from "../api/fetchData";

const Champions = async () => {
  const version = await getLatestVersion();

  if (!version) return;

  const champions: Record<string, Champion> = await getChampionList(version);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {champions &&
          Object.keys(champions).map((e) => (
            <div
              key={e}
              className="border  flex flex-col justify-center items-center"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions[e].image.full}`}
                alt="image"
                width={48}
                height={48}
              />
              <h2 className="mt-2 text-xl font-semibold">
                {champions[e].name}
              </h2>
              <p className="text-gray-500">{champions[e].title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Champions;
