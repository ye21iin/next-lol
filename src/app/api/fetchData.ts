import { VersionList } from "@/types/Champion";

/** Data Dragon API의 버전 정보 */
export const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
  );
  const versions: VersionList = await res.json();
  return versions[0];
};

/** 챔피언 목록 데이터 */
export const getChampionList = async (version: string) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: { revalidate: 86400 },
    },
  );
  const json = await res.json();
  return json.data;
};

/** 아이템 목록 데이터 */
export const getItemList = async (version: string) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    {
      cache: "force-cache",
    },
  );
  const json = await res.json();
  return json.data;
};

type Props = {
  version: string;
  id: string;
};

/** 챔피언 상세 데이터 */
export const getChampionDetail = async ({ version, id }: Props) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
    { cache: "no-store" },
  );
  const json = await res.json();
  return json.data;
};

/** 아이템 상세 데이터 */
export const getItemDetail = async ({ version, id }: Props) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
  );
  const json = await res.json();
  const data = json.data[id];
  return data;
};
