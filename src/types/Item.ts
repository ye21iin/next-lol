import { Image } from "./Champion";

interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}
export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumeOnFull?: boolean;
  specialRecipe?: number;
  image: Image;
  tags: string[];
  gold: ItemGold;
  maps: { [key: string]: boolean };
  stats: { [key: string]: number };
  from?: string[];
  into?: string[];
  effect?: { [key: string]: string };
  depth?: number;
}
