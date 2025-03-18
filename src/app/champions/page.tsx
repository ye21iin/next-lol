import { TpChampion } from "@/types/Champion";
import { getChampionList } from "../api/fetchData";
import Link from "next/link";
import { VERSION } from "@/lib/constant";
import Card from "@/components/Card";

const Champions = async () => {
  if (!VERSION) return;

  const champions: Record<string, TpChampion> = await getChampionList(VERSION);

  return (
    <div>
      <h1 className="ml-4 text-3xl font-bold">챔피언 목록</h1>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 lg:grid-cols-6">
        {champions &&
          Object.keys(champions).map((e) => (
            <Link href={`/champions/${e}`} key={e}>
              <Card champion={champions[e]} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Champions;
