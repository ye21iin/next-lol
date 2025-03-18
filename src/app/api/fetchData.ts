import { VERSION } from "@/lib/constant";
import { TpChampion } from "@/types/Champion";
import { DetailProps } from "@/types/Common";

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

/** 챔피언 상세 데이터 */
export const getChampionDetail = async ({ version, id }: DetailProps) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
    { cache: "no-store" },
  );
  const json = await res.json();
  return json.data;
};

/** 아이템 상세 데이터 */
export const getItemDetail = async ({ version, id }: DetailProps) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
  );
  const json = await res.json();
  const data = json.data[id];
  return data;
};

// rotation 데이터 fetch 로직
export async function fetchRotationData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/rotation`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  console.log("API Response:", data); // 디버깅용
  if (!data || !data.freeChampionIds) {
    throw new Error("Invalid response data");
  }
  return data;
}

// rotation Champion Card fetch 로직
export async function fetchRotationChampions(freeChampionIds: number[]) {
  if (!VERSION) {
    throw new Error("VERSION is not defined");
  }
  const allChampions = await getChampionList(VERSION);

  const rotationChampions: Record<string, TpChampion> = {};
  freeChampionIds.forEach((id: number) => {
    const champKey = Object.keys(allChampions).find(
      (key) => allChampions[key].key === String(id),
    );
    if (champKey) {
      rotationChampions[champKey] = allChampions[champKey];
    }
  });

  return rotationChampions;
}
