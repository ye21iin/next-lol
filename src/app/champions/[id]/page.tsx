import { getChampionDetail, getLatestVersion } from "@/app/api/fetchData";
import { Champion } from "@/types/Champion";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const ChampionDetail = async ({ params }: Props) => {
  const version = await getLatestVersion();

  if (!version) return;

  const champion: Record<string, Champion> = await getChampionDetail({
    version,
    id: params.id,
  });

  return (
    <div className="flex items-center justify-center">
      <div className="flex max-h-full max-w-4xl flex-col p-10">
        <h1 className="mb-4 text-4xl font-bold">{champion[params.id].name}</h1>
        <p className="mb-4 text-2xl text-gray-600">
          {champion[params.id].title}
        </p>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion[params.id].image.full}`}
          alt={champion[params.id].name}
          width={200}
          height={200}
          className="mx-auto"
        />
        <p className="mt-6 text-gray-500">{champion[params.id].lore}</p>
        <p className="mt-6 text-gray-500">스탯</p>
        <p className="text-gray-500">
          공격력: {champion[params.id].info.attack}
        </p>
        <p className="text-gray-500">
          방어력: {champion[params.id].info.defense}
        </p>
        <p className="text-gray-500">
          마법력: {champion[params.id].info.magic}
        </p>
        <p className="text-gray-500">
          난이도: {champion[params.id].info.difficulty}
        </p>
      </div>
    </div>
  );
};

export default ChampionDetail;
