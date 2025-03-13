import { VERSION } from "@/lib/constant";
import { Champion } from "@/types/Champion";
import Image from "next/image";

const Card = ({ champion }: Record<string, Champion>) => {
  if (!VERSION) return;

  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border p-2 hover:shadow-xl">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={100}
        height={100}
      />
      <h2 className="mt-2 text-xl font-semibold">{champion.name}</h2>
      <p className="text-gray-500">{champion.title}</p>
    </div>
  );
};

export default Card;
