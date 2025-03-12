import { VersionList } from "@/types/Champion";

/** Data Dragon API의 버전 정보 */
export const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions: VersionList = await res.json();
  return versions[0];
};

/** 챔피언 목록 데이터 */
export const getChampionList = async (version: string) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  const json = await res.json();
  return json.data;
};
