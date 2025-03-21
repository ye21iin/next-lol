import { TpImage } from "./Common";

interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface TpChampion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: TpImage;
  tags: string[];
  partype: string;
  stats: ChampionStats;
}

export type TpChampionDetail = TpChampion &
  Partial<{
    skins: object[];
    lore: string;
    allytips: string[];
    enemytips: string[];
    spells: object[];
    vars: [];
    costType: string;
    maxammo: string;
  }>;
